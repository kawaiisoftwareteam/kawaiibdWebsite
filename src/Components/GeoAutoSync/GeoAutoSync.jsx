'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  clearStoredLocale,
  getStoredSource,
  resolveVisitorLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import { BANNER_DISMISSED_KEY, DEFAULT_LOCALE, isValidLocale } from '../../i18n/config';
import { useLocale } from '../../i18n/LocaleContext';

// One geo check per browser tab session (unless testing query params are used).
let sessionGeoChecked = false;

const localeFromPath = (pathname) => {
  const part = pathname?.split('/').filter(Boolean)[0];
  return isValidLocale(part) ? part : null;
};

/**
 * Geo detection for suggestion / first visit only.
 * Never overrides an explicit locale already in the URL (/ja/..., /bn/...).
 * Manual language choices are never overridden.
 */
const GeoAutoSync = () => {
  const { applyDetectedLocale, locale } = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inFlight = useRef(false);

  useEffect(() => {
    const forceCountry = searchParams?.get('forceCountry');
    const forceRedetect = searchParams?.get('redetect') === '1';
    const source = getStoredSource();
    const forced = Boolean(forceCountry || forceRedetect);
    let bannerDismissed = false;
    try {
      bannerDismissed =
        typeof window !== 'undefined' &&
        localStorage.getItem(BANNER_DISMISSED_KEY) === '1';
    } catch (_) {
      bannerDismissed = false;
    }

    if (!forced && source === 'manual') {
      return;
    }

    if (!forced && sessionGeoChecked) {
      return;
    }

    if (inFlight.current) {
      return;
    }
    inFlight.current = true;

    let cancelled = false;

    const run = async () => {
      try {
        if (forceRedetect) {
          clearStoredLocale();
        }

        const resolved = await resolveVisitorLocale({
          forceCountry,
          forceRedetect,
        });
        if (cancelled) return;

        if (!forced) {
          sessionGeoChecked = true;
        }

        const params = new URLSearchParams(searchParams?.toString() || '');
        params.delete('forceCountry');
        params.delete('redetect');
        const cleanSearch = params.toString() ? `?${params.toString()}` : '';

        // URL already has a locale — never replace it, but mark auto so the
        // first-visit English Yes/No banner can show on bn/ja.
        const latestPathLocale = localeFromPath(window.location.pathname);
        if (latestPathLocale && !forced) {
          if (
            !bannerDismissed &&
            resolved.source === 'auto' &&
            resolved.locale === latestPathLocale &&
            latestPathLocale !== DEFAULT_LOCALE
          ) {
            applyDetectedLocale(resolved.locale, 'auto', { search: cleanSearch });
          }
          return;
        }

        // Don't thrash if already matching
        if (resolved.locale === locale && !forced) {
          if (
            !bannerDismissed &&
            resolved.source === 'auto' &&
            locale !== DEFAULT_LOCALE
          ) {
            applyDetectedLocale(resolved.locale, 'auto', { search: cleanSearch });
          }
          return;
        }

        applyDetectedLocale(resolved.locale, resolved.source, {
          search: cleanSearch,
        });
      } finally {
        inFlight.current = false;
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [pathname, searchParams, applyDetectedLocale, locale]);

  return null;
};

export default GeoAutoSync;
