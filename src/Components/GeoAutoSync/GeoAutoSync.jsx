'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  clearStoredLocale,
  getStoredSource,
  resolveVisitorLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import { useLocale } from '../../i18n/LocaleContext';

// One geo check per browser tab session (unless testing query params are used).
let sessionGeoChecked = false;

/**
 * Re-runs geo detection when:
 * - ?forceCountry=JP|BD is present, or
 * - ?redetect=1 is present, or
 * - once per session when preference is NOT manual (so a Japan VPN can win)
 *
 * Manual language choices are never overridden.
 *
 * BD → Bangla, JP → Japanese, others → English.
 * Auto-detected locales also show the language suggestion banner.
 */
const GeoAutoSync = () => {
  const { applyDetectedLocale } = useLocale();
  const searchParams = useSearchParams();
  const inFlight = useRef(false);

  useEffect(() => {
    const forceCountry = searchParams?.get('forceCountry');
    const forceRedetect = searchParams?.get('redetect') === '1';
    const source = getStoredSource();
    const forced = Boolean(forceCountry || forceRedetect);

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

        // Updates locale + source (auto) so the suggestion banner can appear
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
  }, [searchParams, applyDetectedLocale]);

  return null;
};

export default GeoAutoSync;
