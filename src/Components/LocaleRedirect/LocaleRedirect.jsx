'use client';

import React, { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { DEFAULT_LOCALE, isValidLocale } from '../../i18n/config';
import {
  clearStoredLocale,
  getStoredLocale,
  getStoredSource,
  persistLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const go = (locale, search = '') => {
  const next = search ? `/${locale}/${search}` : `/${locale}/`;
  if (typeof window !== 'undefined') {
    window.location.replace(next);
  }
};

const LocaleRedirect = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const forceRedetect = searchParams?.get('redetect') === '1';
    const forceCountry = searchParams?.get('forceCountry');
    const parts = pathname.split('/').filter(Boolean);

    if (parts[0] && isValidLocale(parts[0]) && !forceRedetect && !forceCountry) {
      return;
    }

    if (forceRedetect) {
      clearStoredLocale();
    }

    const params = new URLSearchParams(searchParams?.toString() || '');
    params.delete('redetect');
    params.delete('forceCountry');
    const cleanSearch = params.toString() ? `?${params.toString()}` : '';

    // Instant — never wait on geo IP before entering the site
    const stored = getStoredLocale();
    const locale = isValidLocale(stored) ? stored : DEFAULT_LOCALE;
    persistLocale(locale, getStoredSource() || (stored ? 'url' : 'auto'));
    go(locale, cleanSearch);
  }, [pathname, searchParams]);

  return <LoadingSpinner />;
};

export default LocaleRedirect;
