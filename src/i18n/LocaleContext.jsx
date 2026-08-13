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
  const [pathname, search = ''] = path.split('?');
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return search ? `${normalized}?${search}` : normalized;
};

export const LocaleProvider = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const urlLocale = params?.locale;

  const initialLocale = isValidLocale(urlLocale) ? urlLocale : DEFAULT_LOCALE;
  const [locale, setLocaleState] = useState(initialLocale);
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
      setLocaleState(nextLocale);
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
   * Used by GeoAutoSync after IP/browser detection.
   * Updates React state (so the suggestion banner can show) and
   * replaces the URL when the detected locale differs.
   */
  const applyDetectedLocale = useCallback(
    (nextLocale, nextSource = 'auto', { search = '' } = {}) => {
      if (!isValidLocale(nextLocale)) return;

      setLocaleState(nextLocale);
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

      // Only navigate when locale/path/search actually change (avoids reload loops)
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

  // Set lang as early as possible so Anek Bangla / Noto Sans JP CSS apply
  useLayoutEffect(() => {
    if (isValidLocale(urlLocale)) {
      document.documentElement.lang = urlLocale;
    }
  }, [urlLocale]);

  // Sync when URL locale changes
  useEffect(() => {
    if (!isValidLocale(urlLocale)) return;
    setLocaleState(urlLocale);
    applyDocumentMeta(urlLocale);

    const existingSource = getStoredSource();
    if (existingSource === 'manual') {
      setSource('manual');
      persistLocale(urlLocale, 'manual');
    } else if (existingSource === 'auto') {
      setSource('auto');
    } else {
      setSource('url');
    }
  }, [urlLocale, applyDocumentMeta]);

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
        const clean = !path || path === '/' || path === '/home' ? '/' : path.startsWith('/') ? path : `/${path}`;
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
