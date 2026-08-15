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
      'Kawaii Group is a premier Japan-Bangladesh joint venture empowering businesses and careers through global HR recruitment, Japanese language training, and BIM education.',
  },
  bn: {
    title: 'কাওয়াই গ্রুপ | জাপান-বাংলাদেশ যৌথ উদ্যোগ',
    description:
      'কাওয়াই গ্রুপ একটি বিশ্বস্ত জাপান-বাংলাদেশ যৌথ উদ্যোগ—আন্তর্জাতিক নিয়োগ, জাপানি ভাষা শিক্ষা, BIM ট্রেনিং ও ক্রস-বর্ডার ব্যবসায়িক পরামর্শের নির্ভরযোগ্য প্ল্যাটফর্ম।',
  },
  ja: {
    title: 'カワイグループ | 日本・バングラデシュ合弁企業',
    description:
      'カワイグループは日本とバングラデシュをつなぐ総合ビジネス合弁企業。特定技能や技術者の人材紹介・採用、実践的日本語教育、BIM研修、進出支援を提供します。',
  },
};

export const isValidLocale = (locale) => LOCALES.includes(locale);

export const getLanguage = (code) =>
  LANGUAGES.find((lang) => lang.code === code) || LANGUAGES[0];
