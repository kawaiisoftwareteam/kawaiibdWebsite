import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DEFAULT_LOCALE, isValidLocale } from '../../i18n/config';
import {
  persistLocale,
  resolveVisitorLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

/**
 * Catches bare paths like /about and redirects to /{locale}/about
 * after resolving saved preference or geo-detected language.
 */
const LocaleRedirect = () => {
  const location = useLocation();
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const parts = location.pathname.split('/').filter(Boolean);

      // Safety: if somehow a locale slipped through, normalize
      if (parts[0] && isValidLocale(parts[0])) {
        setTarget(location.pathname + location.search + location.hash);
        return;
      }

      const resolved = await resolveVisitorLocale();
      if (cancelled) return;

      persistLocale(resolved.locale, resolved.source);

      const rest = parts.join('/');
      const nextPath = rest ? `/${resolved.locale}/${rest}` : `/${resolved.locale}`;
      setTarget(nextPath + location.search + location.hash);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [location.hash, location.pathname, location.search]);

  if (!target) {
    return <LoadingSpinner />;
  }

  return <Navigate to={target || `/${DEFAULT_LOCALE}`} replace />;
};

export default LocaleRedirect;
