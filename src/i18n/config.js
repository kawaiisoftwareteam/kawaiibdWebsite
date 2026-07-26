export const LOCALES = ['en', 'bn', 'ja'];
export const DEFAULT_LOCALE = 'en';

export const LOCALE_STORAGE_KEY = 'kg_locale';
export const LOCALE_SOURCE_KEY = 'kg_locale_source';
export const BANNER_DISMISSED_KEY = 'kg_banner_dismissed';
export const LOCALE_COOKIE = 'kg_locale';

/** ISO country code → app locale */
export const COUNTRY_TO_LOCALE = {
  BD: 'bn',
  JP: 'ja',
};

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
];

export const META = {
  en: {
    title: 'Kawaii Group | Japan-Bangladesh Joint Venture',
    description:
      'Kawaii Group Bangladesh — creating opportunities through innovation, education, and strategic partnerships between Japan and Bangladesh.',
  },
  bn: {
    title: 'কাওয়াই গ্রুপ | জাপান-বাংলাদেশ যৌথ উদ্যোগ',
    description:
      'কাওয়াই গ্রুপ বাংলাদেশ — জাপান ও বাংলাদেশের মধ্যে উদ্ভাবন, শিক্ষা এবং কৌশলগত অংশীদারিত্বের মাধ্যমে সুযোগ সৃষ্টি।',
  },
  ja: {
    title: 'カワイグループ | 日本・バングラデシュ合弁企業',
    description:
      'カワイグループバングラデシュ — 日本とバングラデシュのイノベーション、教育、戦略的パートナーシップを通じて機会を創出します。',
  },
};

export const isValidLocale = (locale) => LOCALES.includes(locale);

export const getLanguage = (code) =>
  LANGUAGES.find((lang) => lang.code === code) || LANGUAGES[0];
