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

/** Clear saved preference so geo detection can run again (useful for VPN testing). */
export const clearStoredLocale = () => {
  try {
    localStorage.removeItem(LOCALE_STORAGE_KEY);
    localStorage.removeItem(LOCALE_SOURCE_KEY);
    localStorage.removeItem(BANNER_DISMISSED_KEY);
  } catch (_) {
    /* ignore */
  }
  document.cookie = `${LOCALE_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
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

const fetchWithTimeout = async (url, ms = 3000) => {
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
export const detectCountryFromCloudflare = async () => {
  try {
    const res = await fetchWithTimeout('/cdn-cgi/trace', 2500);
    if (!res.ok) return null;
    const text = await res.text();
    // SPA hosts often return index.html for unknown paths — reject those.
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
  // Prefer APIs that work from the browser without Cloudflare challenge pages.
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
      // ipapi often returns a Cloudflare challenge HTML page
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

/**
 * Resolve the initial locale for a visitor.
 * Priority:
 * 1. ?forceCountry=JP|BD (testing)
 * 2. Manual saved preference (user clicked language switcher)
 * 3. IP / Cloudflare geo
 * 4. Browser language
 * 5. English
 *
 * Auto-detected preferences are NOT locked forever — each fresh visit
 * re-checks geo so a Japan VPN can switch to Japanese.
 */
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

  // Only a manual choice permanently overrides geo detection.
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

  // Outside BD/JP — respect browser language when it's Bangla/Japanese.
  const browserLocale = localeFromBrowser();
  if (browserLocale && browserLocale !== DEFAULT_LOCALE) {
    return { locale: browserLocale, source: 'auto', country: country || null };
  }

  return { locale: DEFAULT_LOCALE, source: 'auto', country: country || null };
};
