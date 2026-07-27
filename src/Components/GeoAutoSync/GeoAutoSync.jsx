import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  clearStoredLocale,
  getStoredSource,
  persistLocale,
  resolveVisitorLocale,
} from '../../Hooks/useGeoLanguage/useGeoLanguage';
import { stripLocalePrefix, useLocale } from '../../i18n/LocaleContext';

// One geo check per browser tab session (unless testing query params are used).
let sessionGeoChecked = false;

/**
 * Re-runs geo detection when:
 * - ?forceCountry=JP|BD is present, or
 * - ?redetect=1 is present, or
 * - once per session when preference is NOT manual (so a Japan VPN can win)
 *
 * Manual language choices are never overridden.
 */
const GeoAutoSync = () => {
  const { locale } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const inFlight = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const forceCountry = params.get('forceCountry');
    const forceRedetect = params.get('redetect') === '1';
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

        params.delete('forceCountry');
        params.delete('redetect');
        const cleanSearch = params.toString() ? `?${params.toString()}` : '';
        const rest = stripLocalePrefix(location.pathname);
        const nextPath =
          rest === '/' ? `/${resolved.locale}` : `/${resolved.locale}${rest}`;

        if (resolved.locale !== locale || location.search !== cleanSearch) {
          navigate(
            { pathname: nextPath, search: cleanSearch, hash: location.hash },
            { replace: true }
          );
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
    location.hash,
    location.pathname,
    location.search,
    navigate,
  ]);

  return null;
};

export default GeoAutoSync;
