'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  clearStoredLocale,
  getStoredSource,
  resolveVisitorLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import { isValidLocale } from '../../i18n/config';
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
    const pathLocale = localeFromPath(pathname);

    // URL is source of truth — do not replace /ja with geo English/Bangla on reload
    if (pathLocale && !forced) {
      sessionGeoChecked = true;
      return;
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

        // Still on a locale URL (race) — keep URL locale
        const latestPathLocale = localeFromPath(window.location.pathname);
        if (latestPathLocale && !forced) {
          return;
        }

        // Don't thrash if already matching
        if (resolved.locale === locale && !forced) {
          return;
        }

        const params = new URLSearchParams(searchParams?.toString() || '');
        params.delete('forceCountry');
        params.delete('redetect');
        const cleanSearch = params.toString() ? `?${params.toString()}` : '';

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
