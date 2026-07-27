import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DEFAULT_LOCALE, isValidLocale } from '../../i18n/config';
import {
  clearStoredLocale,
  persistLocale,
  resolveVisitorLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

/**
 * Catches bare paths like /about and redirects to /{locale}/about
 * after resolving saved preference or geo-detected language.
 *
 * Testing helpers:
 *   /?redetect=1          → clear saved preference and re-run geo
 *   /?forceCountry=JP     → pretend visitor is from Japan
 *   /?forceCountry=BD     → pretend visitor is from Bangladesh
 */
const LocaleRedirect = () => {
  const location = useLocation();
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const params = new URLSearchParams(location.search);
      const forceRedetect = params.get('redetect') === '1';
      const forceCountry = params.get('forceCountry');

      if (forceRedetect) {
        clearStoredLocale();
      }

      const parts = location.pathname.split('/').filter(Boolean);

      // Safety: if somehow a locale slipped through, normalize
      // (unless we are forcing a redetect / country override)
      if (parts[0] && isValidLocale(parts[0]) && !forceRedetect && !forceCountry) {
        setTarget(location.pathname + location.search + location.hash);
        return;
      }

      const resolved = await resolveVisitorLocale({
        forceCountry,
        forceRedetect,
      });
      if (cancelled) return;

      persistLocale(resolved.locale, resolved.source);

      // Drop testing query params from the final URL
      params.delete('redetect');
      params.delete('forceCountry');
      const cleanSearch = params.toString() ? `?${params.toString()}` : '';

      const restParts =
        parts[0] && isValidLocale(parts[0]) ? parts.slice(1) : parts;
      const rest = restParts.join('/');
      const nextPath = rest
        ? `/${resolved.locale}/${rest}`
        : `/${resolved.locale}`;
      setTarget(nextPath + cleanSearch + location.hash);
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
