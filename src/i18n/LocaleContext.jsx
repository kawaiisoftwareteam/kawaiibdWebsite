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

/** Ensure URLs have trailing slashes for static export compatibility */
const ensureTrailingSlash = (path) => {
  if (!path) return '/';
  const hashIdx = path.indexOf('#');
  const hash = hashIdx >= 0 ? path.slice(hashIdx) : '';
  const withoutHash = hashIdx >= 0 ? path.slice(0, hashIdx) : path;
  const [pathnameOnly, search = ''] = withoutHash.split('?');
  const normalized =
    !pathnameOnly || pathnameOnly === '/'
      ? '/'
      : pathnameOnly.endsWith('/')
        ? pathnameOnly
        : `${pathnameOnly}/`;
  return `${normalized}${search ? `?${search}` : ''}${hash}`;
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

  const [source, setSource] = useState('url');
  const [bannerDismissed, setBannerDismissed] = useState(false);

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

      // Keep client-injected hreflang aligned with buildPageMetadata (trailing slashes).
      let pathWithoutLocale = stripLocalePrefix(pathname);
      if (pathWithoutLocale === '/home') pathWithoutLocale = '/';
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const pathSuffix =
        !pathWithoutLocale || pathWithoutLocale === '/'
          ? '/'
          : `${pathWithoutLocale.endsWith('/') ? pathWithoutLocale.slice(0, -1) : pathWithoutLocale}/`;

      [...LOCALES, 'x-default'].forEach((hreflang) => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('data-kg-hreflang', '1');
        link.setAttribute('hreflang', hreflang);
        const targetLocale = hreflang === 'x-default' ? DEFAULT_LOCALE : hreflang;
        link.setAttribute('href', `${origin}/${targetLocale}${pathSuffix}`);
        document.head.appendChild(link);
      });
    },
    [pathname]
  );

  const navigateToLocale = useCallback(
    (nextLocale, { replace = false } = {}) => {
      const rest = stripLocalePrefix(pathname);
      const nextPath = ensureTrailingSlash(
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

      // URL already has /ja or /bn or /en — keep the path, but preserve auto
      // so first-visit "Switch to English?" can still appear.
      if (locked) {
        setSource(nextSource);
        persistLocale(locked, nextSource);
        applyDocumentMeta(locked);
        return;
      }

      setSource(nextSource);
      persistLocale(nextLocale, nextSource);
      applyDocumentMeta(nextLocale);

      const rest = stripLocalePrefix(pathname);
      const nextPath = ensureTrailingSlash(
        rest === '/' ? `/${nextLocale}` : `/${nextLocale}${rest}`
      );
      const currentPath =
        typeof window !== 'undefined'
          ? ensureTrailingSlash(window.location.pathname)
          : ensureTrailingSlash(pathname);
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
    const existingSource = getStoredSource();
    persistLocale(
      locale,
      existingSource === 'manual' || existingSource === 'auto' ? existingSource : 'url'
    );
  }, [locale, applyDocumentMeta]);

  useEffect(() => {
    try {
      setBannerDismissed(localStorage.getItem(BANNER_DISMISSED_KEY) === '1');
    } catch (_) {
      /* ignore */
    }

    const existingSource = getStoredSource();
    if (existingSource === 'manual') {
      setSource('manual');
      persistLocale(locale, 'manual');
    } else if (existingSource === 'auto') {
      setSource('auto');
      persistLocale(locale, 'auto');
    } else {
      setSource(existingSource || 'url');
      persistLocale(locale, existingSource || 'url');
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
    locale !== DEFAULT_LOCALE && source !== 'manual' && !bannerDismissed;

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
        let hash = '';
        let pathname = path || '/';
        const hashIdx = pathname.indexOf('#');
        if (hashIdx >= 0) {
          hash = pathname.slice(hashIdx);
          pathname = pathname.slice(0, hashIdx) || '/';
        }
        let search = '';
        const qIdx = pathname.indexOf('?');
        if (qIdx >= 0) {
          search = pathname.slice(qIdx);
          pathname = pathname.slice(0, qIdx) || '/';
        }
        const clean =
          !pathname || pathname === '/' || pathname === '/home'
            ? '/'
            : pathname.startsWith('/')
              ? pathname
              : `/${pathname}`;
        const base =
          clean === '/'
            ? `/${locale}/`
            : ensureTrailingSlash(`/${locale}${clean}`);
        return `${base}${search}${hash}`;
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
