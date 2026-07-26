import {
  COUNTRY_TO_LOCALE,
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_SOURCE_KEY,
  LOCALE_STORAGE_KEY,
  isValidLocale,
} from '../../i18n/config';

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export const getStoredLocale = () => {
  try {
    const fromStorage = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isValidLocale(fromStorage)) return fromStorage;
  } catch (_) {
    /* ignore */
  }

  const cookieMatch = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${LOCALE_COOKIE}=`));
  if (cookieMatch) {
    const value = cookieMatch.split('=')[1];
    if (isValidLocale(value)) return value;
  }

  return null;
};

export const getStoredSource = () => {
  try {
    return localStorage.getItem(LOCALE_SOURCE_KEY) || null;
  } catch (_) {
    return null;
  }
};

export const persistLocale = (locale, source) => {
  if (!isValidLocale(locale)) return;

  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    localStorage.setItem(LOCALE_SOURCE_KEY, source);
  } catch (_) {
    /* ignore */
  }

  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
};

/** Map browser language tags like bn-BD / ja-JP to app locales */
export const localeFromBrowser = () => {
  const candidates = [
    ...(navigator.languages || []),
    navigator.language,
  ].filter(Boolean);

  for (const tag of candidates) {
    const lower = tag.toLowerCase();
    if (lower.startsWith('bn')) return 'bn';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('en')) return 'en';
  }
  return null;
};

/** Cloudflare Pages / proxied sites expose /cdn-cgi/trace with loc=XX */
export const detectCountryFromCloudflare = async () => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch('/cdn-cgi/trace', {
      signal: controller.signal,
      cache: 'no-store',
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const text = await res.text();
    const match = text.match(/loc=([A-Z]{2})/i);
    return match ? match[1].toUpperCase() : null;
  } catch (_) {
    return null;
  }
};

/** Host-agnostic IP geolocation fallback (no API key) */
export const detectCountryFromIpApi = async () => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch('https://ipapi.co/country/', {
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const country = (await res.text()).trim().toUpperCase();
    return /^[A-Z]{2}$/.test(country) ? country : null;
  } catch (_) {
    return null;
  }
};

export const localeFromCountry = (countryCode) => {
  if (!countryCode) return null;
  return COUNTRY_TO_LOCALE[countryCode.toUpperCase()] || null;
};

/**
 * Resolve the initial locale for a visitor.
 * Priority: saved preference → geo → browser → English
 */
export const resolveVisitorLocale = async () => {
  const stored = getStoredLocale();
  const source = getStoredSource();

  if (stored && source === 'manual') {
    return { locale: stored, source: 'manual', country: null };
  }

  if (stored && source === 'auto') {
    return { locale: stored, source: 'auto', country: null };
  }

  let country =
    (await detectCountryFromCloudflare()) ||
    (await detectCountryFromIpApi());

  if (country) {
    const locale = localeFromCountry(country);
    if (locale) {
      return { locale, source: 'auto', country };
    }
  }

  // For countries without an explicit mapping, respect the browser language.
  const browserLocale = localeFromBrowser();
  if (browserLocale && browserLocale !== DEFAULT_LOCALE) {
    return { locale: browserLocale, source: 'auto', country: null };
  }

  return { locale: DEFAULT_LOCALE, source: 'auto', country: null };
};
