'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { usePathname, useRouter, useParams } from 'next/navigation';
import {
  BANNER_DISMISSED_KEY,
  DEFAULT_LOCALE,
  LOCALES,
  META,
  isValidLocale,
} from './config';
import en from './locales/en.json';
import bn from './locales/bn.json';
import ja from './locales/ja.json';
import {
  getStoredSource,
  persistLocale,
} from '../Hooks/useGeoLanguage/useGeoLanguage';

const messages = { en, bn, ja };

const LocaleContext = createContext(null);

const getNested = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc && acc[key] != null ? acc[key] : null), obj);

/** Look up a key without needing the React context (e.g. before the provider mounts) */
export const translate = (locale, key, fallback = '') => {
  const value = getNested(messages[locale] || messages.en, key);
  if (value != null) return value;
  const enValue = getNested(messages.en, key);
  return enValue != null ? enValue : fallback || key;
};

export const stripLocalePrefix = (pathname) => {
  if (!pathname) return '/';
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isValidLocale(parts[0])) {
    const rest = parts.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
};

/** Keep paths compatible with next.config trailingSlash: true */
const withTrailingSlash = (path) => {
  if (!path || path === '/') return '/';
  const [pathnameOnly, search = ''] = path.split('?');
  const normalized = pathnameOnly.endsWith('/') ? pathnameOnly : `${pathnameOnly}/`;
  return search ? `${normalized}?${search}` : normalized;
};

const localeFromPathname = (pathname) => {
  if (!pathname || typeof pathname !== 'string') return null;
  const part = pathname.split('/').filter(Boolean)[0];
  return isValidLocale(part) ? part : null;
};

/** Normalize Next params.locale (string | string[]) */
const normalizeParamLocale = (paramLocale) => {
  if (Array.isArray(paramLocale)) return paramLocale[0] || null;
  return paramLocale || null;
};

/**
 * URL is the only source of truth for which language to show.
 * Order: useParams → window.location (reload-safe) → pathname → layout prop
 */
const resolveActiveLocale = (paramLocale, initialLocale, pathname) => {
  const fromParams = normalizeParamLocale(paramLocale);
  if (isValidLocale(fromParams)) return fromParams;

  if (typeof window !== 'undefined') {
    const fromWindow = localeFromPathname(window.location.pathname);
    if (fromWindow) return fromWindow;
  }

  const fromPath = localeFromPathname(pathname);
  if (fromPath) return fromPath;

  if (isValidLocale(initialLocale)) return initialLocale;

  return DEFAULT_LOCALE;
};

export const LocaleProvider = ({ children, initialLocale }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Derived every render — never trust stale useState after reload/hydration
  const locale = resolveActiveLocale(params?.locale, initialLocale, pathname);

  const [source, setSource] = useState(() => getStoredSource() || 'url');
  const [bannerDismissed, setBannerDismissed] = useState(() => {
    try {
      return typeof window !== 'undefined' && localStorage.getItem(BANNER_DISMISSED_KEY) === '1';
    } catch (_) {
      return false;
    }
  });

  const applyDocumentMeta = useCallback(
    (nextLocale) => {
      if (typeof document === 'undefined') return;
      document.documentElement.lang = nextLocale;
      const meta = META[nextLocale] || META.en;
      document.title = meta.title;

      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
        desc = document.createElement('meta');
        desc.setAttribute('name', 'description');
        document.head.appendChild(desc);
      }
      desc.setAttribute('content', meta.description);

      document
        .querySelectorAll('link[data-kg-hreflang]')
        .forEach((node) => node.remove());

      const pathWithoutLocale = stripLocalePrefix(pathname);
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const suffix = pathWithoutLocale === '/' ? '' : pathWithoutLocale;

      [...LOCALES, 'x-default'].forEach((hreflang) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('data-kg-hreflang', '1');
        link.setAttribute('hreflang', hreflang);
        const targetLocale = hreflang === 'x-default' ? DEFAULT_LOCALE : hreflang;
        link.setAttribute('href', `${origin}/${targetLocale}${suffix}/`);
        document.head.appendChild(link);
      });
    },
    [pathname]
  );

  const navigateToLocale = useCallback(
    (nextLocale, { replace = false } = {}) => {
      const rest = stripLocalePrefix(pathname);
      const nextPath = withTrailingSlash(
        rest === '/' ? `/${nextLocale}` : `/${nextLocale}${rest}`
      );
      const currentSearch =
        typeof window !== 'undefined' ? window.location.search : '';
      const href = nextPath + currentSearch;
      if (replace) {
        router.replace(href);
      } else {
        router.push(href);
      }
    },
    [pathname, router]
  );

  const setLocale = useCallback(
    (nextLocale, nextSource = 'manual') => {
      if (!isValidLocale(nextLocale)) return;
      setSource(nextSource);
      persistLocale(nextLocale, nextSource);

      if (nextSource === 'manual') {
        try {
          if (typeof window !== 'undefined') {
            localStorage.removeItem(BANNER_DISMISSED_KEY);
          }
        } catch (_) {
          /* ignore */
        }
        setBannerDismissed(false);
      }

      applyDocumentMeta(nextLocale);
      navigateToLocale(nextLocale);
    },
    [applyDocumentMeta, navigateToLocale]
  );

  /**
   * Geo detection helper — never overrides a locale already in the URL.
   */
  const applyDetectedLocale = useCallback(
    (nextLocale, nextSource = 'auto', { search = '' } = {}) => {
      if (!isValidLocale(nextLocale)) return;

      const locked =
        localeFromPathname(
          typeof window !== 'undefined' ? window.location.pathname : ''
        ) || localeFromPathname(pathname);

      // URL already has /ja or /bn or /en — keep it (do not switch to geo English)
      if (locked) {
        setSource(nextSource === 'auto' ? 'url' : nextSource);
        persistLocale(locked, nextSource === 'auto' ? 'url' : nextSource);
        applyDocumentMeta(locked);
        return;
      }

      setSource(nextSource);
      persistLocale(nextLocale, nextSource);
      applyDocumentMeta(nextLocale);

      const rest = stripLocalePrefix(pathname);
      const nextPath = withTrailingSlash(
        rest === '/' ? `/${nextLocale}` : `/${nextLocale}${rest}`
      );
      const currentPath =
        typeof window !== 'undefined'
          ? withTrailingSlash(window.location.pathname)
          : withTrailingSlash(pathname);
      const currentSearch =
        typeof window !== 'undefined' ? window.location.search : '';

      if (nextPath !== currentPath || search !== currentSearch) {
        router.replace(nextPath + search);
      }
    },
    [applyDocumentMeta, pathname, router]
  );

  const dismissBanner = useCallback(() => {
    setBannerDismissed(true);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(BANNER_DISMISSED_KEY, '1');
      }
    } catch (_) {
      /* ignore */
    }
  }, []);

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    applyDocumentMeta(locale);
    persistLocale(locale, getStoredSource() === 'manual' ? 'manual' : 'url');
  }, [locale, applyDocumentMeta]);

  useEffect(() => {
    const existingSource = getStoredSource();
    if (existingSource === 'manual') {
      setSource('manual');
      persistLocale(locale, 'manual');
    } else {
      setSource(existingSource === 'auto' ? 'auto' : 'url');
      persistLocale(locale, existingSource === 'auto' ? 'auto' : 'url');
    }
  }, [locale]);

  const t = useCallback(
    (key, fallback = '') => {
      const value = getNested(messages[locale] || messages.en, key);
      if (value != null) return value;
      const enValue = getNested(messages.en, key);
      return enValue != null ? enValue : fallback || key;
    },
    [locale]
  );

  const showBanner =
    source === 'auto' && locale !== DEFAULT_LOCALE && !bannerDismissed;

  const value = useMemo(
    () => ({
      locale,
      source,
      showBanner,
      setLocale,
      applyDetectedLocale,
      dismissBanner,
      t,
      localizedPath: (path = '/') => {
        const clean =
          !path || path === '/' || path === '/home'
            ? '/'
            : path.startsWith('/')
              ? path
              : `/${path}`;
        if (clean === '/') return withTrailingSlash(`/${locale}`);
        return withTrailingSlash(`/${locale}${clean}`);
      },
    }),
    [locale, source, showBanner, setLocale, applyDetectedLocale, dismissBanner, t]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
};

/** Returns null instead of throwing when rendered outside the provider */
export const useOptionalLocale = () => useContext(LocaleContext);

export default LocaleContext;
