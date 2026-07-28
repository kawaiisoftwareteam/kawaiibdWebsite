'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import {
  clearStoredLocale,
  getStoredSource,
  persistLocale,
  resolveVisitorLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import { stripLocalePrefix, useLocale } from '../../i18n/LocaleContext';

let sessionGeoChecked = false;

const GeoAutoSync = () => {
  const { locale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
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

        persistLocale(resolved.locale, resolved.source);
        if (!forced) {
          sessionGeoChecked = true;
        }

        const params = new URLSearchParams(searchParams?.toString() || '');
        params.delete('forceCountry');
        params.delete('redetect');
        const cleanSearch = params.toString() ? `?${params.toString()}` : '';
        const rest = stripLocalePrefix(pathname);
        const nextPath =
          rest === '/' ? `/${resolved.locale}` : `/${resolved.locale}${rest}`;

        if (resolved.locale !== locale || (searchParams?.toString() ? `?${searchParams.toString()}` : '') !== cleanSearch) {
          router.replace(nextPath + cleanSearch);
        }
      } finally {
        inFlight.current = false;
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [
    locale,
    pathname,
    searchParams,
    router,
  ]);

  return null;
};

export default GeoAutoSync;
