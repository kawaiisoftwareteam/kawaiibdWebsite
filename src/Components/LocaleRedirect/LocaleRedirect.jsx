'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { DEFAULT_LOCALE, isValidLocale } from '../../i18n/config';
import {
  clearStoredLocale,
  persistLocale,
  resolveVisitorLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const LocaleRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const forceRedetect = searchParams?.get('redetect') === '1';
      const forceCountry = searchParams?.get('forceCountry');

      if (forceRedetect) {
        clearStoredLocale();
      }

      const parts = pathname.split('/').filter(Boolean);

      if (parts[0] && isValidLocale(parts[0]) && !forceRedetect && !forceCountry) {
        return;
      }

      const resolved = await resolveVisitorLocale({
        forceCountry,
        forceRedetect,
      });
      if (cancelled) return;

      persistLocale(resolved.locale, resolved.source);

      const params = new URLSearchParams(searchParams?.toString() || '');
      params.delete('redetect');
      params.delete('forceCountry');
      const cleanSearch = params.toString() ? `?${params.toString()}` : '';

      const restParts =
        parts[0] && isValidLocale(parts[0]) ? parts.slice(1) : parts;
      const rest = restParts.join('/');
      const base = rest
        ? `/${resolved.locale}/${rest}`
        : `/${resolved.locale}`;
      const nextPath = base.endsWith('/') ? base : `${base}/`;

      router.replace(nextPath + cleanSearch);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [pathname, searchParams, router]);

  return <LoadingSpinner />;
};

export default LocaleRedirect;
