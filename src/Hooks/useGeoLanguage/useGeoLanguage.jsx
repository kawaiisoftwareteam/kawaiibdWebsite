import {
  COUNTRY_TO_LOCALE,
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_SOURCE_KEY,
  LOCALE_STORAGE_KEY,
  BANNER_DISMISSED_KEY,
  isValidLocale,
} from '../../i18n/config';

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export const getStoredLocale = () => {
  if (typeof window !== 'undefined') {
    try {
      const fromStorage = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isValidLocale(fromStorage)) return fromStorage;
    } catch (_) {
      /* ignore */
    }

    if (typeof document !== 'undefined' && document.cookie) {
      const cookieMatch = document.cookie
        .split('; ')
        .find((row) => row.startsWith(`${LOCALE_COOKIE}=`));
      if (cookieMatch) {
        const value = cookieMatch.split('=')[1];
        if (isValidLocale(value)) return value;
      }
    }
  }

  return null;
};

export const getStoredSource = () => {
  if (typeof window !== 'undefined') {
    try {
      return localStorage.getItem(LOCALE_SOURCE_KEY) || null;
    } catch (_) {
      return null;
    }
  }
  return null;
};

export const persistLocale = (locale, source) => {
  if (!isValidLocale(locale)) return;

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      localStorage.setItem(LOCALE_SOURCE_KEY, source);
    } catch (_) {
      /* ignore */
    }
  }

  if (typeof document !== 'undefined') {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR_SECONDS}; SameSite=Lax`;
  }
};

/** Clear saved preference so geo detection can run again (useful for VPN testing). */
export const clearStoredLocale = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(LOCALE_STORAGE_KEY);
      localStorage.removeItem(LOCALE_SOURCE_KEY);
      localStorage.removeItem(BANNER_DISMISSED_KEY);
    } catch (_) {
      /* ignore */
    }
  }
  if (typeof document !== 'undefined') {
    document.cookie = `${LOCALE_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
  }
};

/** Map browser language tags like bn-BD / ja-JP to app locales */
export const localeFromBrowser = () => {
  if (typeof navigator === 'undefined') return null;
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

const fetchWithTimeout = async (url, ms = 3000) => {
  if (typeof window === 'undefined') return { ok: false };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      cache: 'no-store',
    });
    return res;
  } finally {
    clearTimeout(timeout);
  }
};

/** Cloudflare Pages / proxied sites expose /cdn-cgi/trace with loc=XX */
const isLocalDevHost = () => {
  if (typeof window === 'undefined') return true;
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1' || host === '::1') return true;
  // Private LAN IPs used by `next dev -H 0.0.0.0`
  if (/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host)) return true;
  return false;
};

export const detectCountryFromCloudflare = async () => {
  // Avoid noisy 404s on local Next (endpoint only exists behind Cloudflare)
  if (isLocalDevHost()) return null;

  try {
    const res = await fetchWithTimeout('/cdn-cgi/trace', 2500);
    if (!res.ok) return null;
    const text = await res.text();
    if (!text.includes('loc=') || text.includes('<!DOCTYPE') || text.includes('<html')) {
      return null;
    }
    const match = text.match(/(?:^|\n)loc=([A-Z]{2})/i);
    return match ? match[1].toUpperCase() : null;
  } catch (_) {
    return null;
  }
};

const parseCountryCode = (value) => {
  if (!value || typeof value !== 'string') return null;
  const country = value.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(country) ? country : null;
};

/** Host-agnostic IP geolocation fallbacks (no API key) */
export const detectCountryFromIpApi = async () => {
  const providers = [
    async () => {
      const res = await fetchWithTimeout('https://api.country.is/', 3000);
      if (!res.ok) return null;
      const data = await res.json();
      return parseCountryCode(data?.country);
    },
    async () => {
      const res = await fetchWithTimeout('https://get.geojs.io/v1/ip/country.json', 3000);
      if (!res.ok) return null;
      const data = await res.json();
      return parseCountryCode(data?.country);
    },
    async () => {
      const res = await fetchWithTimeout('https://ipapi.co/country/', 3000);
      if (!res.ok) return null;
      const text = await res.text();
      if (text.includes('<') || text.length > 8) return null;
      return parseCountryCode(text);
    },
  ];

  for (const provider of providers) {
    try {
      const country = await provider();
      if (country) return country;
    } catch (_) {
      /* try next */
    }
  }

  return null;
};

export const localeFromCountry = (countryCode) => {
  if (!countryCode) return null;
  return COUNTRY_TO_LOCALE[countryCode.toUpperCase()] || null;
};

export const resolveVisitorLocale = async ({ forceCountry = null, forceRedetect = false } = {}) => {
  if (forceRedetect) {
    clearStoredLocale();
  }

  const forced = parseCountryCode(forceCountry);
  if (forced) {
    const locale = localeFromCountry(forced) || DEFAULT_LOCALE;
    return { locale, source: 'auto', country: forced };
  }

  const stored = getStoredLocale();
  const source = getStoredSource();

  if (!forceRedetect && stored && source === 'manual') {
    return { locale: stored, source: 'manual', country: null };
  }

  const country =
    (await detectCountryFromCloudflare()) ||
    (await detectCountryFromIpApi());

  if (country) {
    const locale = localeFromCountry(country);
    if (locale) {
      return { locale, source: 'auto', country };
    }
  }

  const browserLocale = localeFromBrowser();
  if (browserLocale && browserLocale !== DEFAULT_LOCALE) {
    return { locale: browserLocale, source: 'auto', country: country || null };
  }

  return { locale: DEFAULT_LOCALE, source: 'auto', country: country || null };
};
