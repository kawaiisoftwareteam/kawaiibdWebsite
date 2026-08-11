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
      'Kawaii Group Bangladesh is a Japan-Bangladesh joint venture creating opportunities through innovation, education, human resources, and strategic partnerships. Bridging cultures and empowering businesses and careers across both nations.',
  },
  bn: {
    title: 'কাওয়াই গ্রুপ | জাপান-বাংলাদেশ যৌথ উদ্যোগ',
    description:
      'কাওয়াই গ্রুপ বাংলাদেশ একটি জাপান-বাংলাদেশ যৌথ উদ্যোগ যা উদ্ভাবন, শিক্ষা, মানব সম্পদ ও কৌশলগত অংশীদারিত্বের মাধ্যমে সুযোগ সৃষ্টি করে। দুই দেশের সংস্কৃতি সেতুবন্ধন করে ব্যবসা ও ক্যারিয়ারকে এগিয়ে নিয়ে যাই।',
  },
  ja: {
    title: 'カワイグループ | 日本・バングラデシュ合弁企業',
    description:
      'カワイグループバングラデシュは、イノベーション・教育・人材・戦略的パートナーシップを通じて機会を創出する日本・バングラデシュ合弁企業です。両国の文化をつなぎ、ビジネスとキャリアの成長を支援します。',
  },
};

export const isValidLocale = (locale) => LOCALES.includes(locale);

export const getLanguage = (code) =>
  LANGUAGES.find((lang) => lang.code === code) || LANGUAGES[0];
