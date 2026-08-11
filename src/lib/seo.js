import { LOCALES, DEFAULT_LOCALE, META } from '../i18n/config';

export const SITE_URL = 'https://kawaiibd.com';
export const SITE_NAME = 'Kawaii Group';
export const SITE_OG_IMAGE = `${SITE_URL}/KG_logo_bg.png`;

export const ORGANIZATION = {
  name: 'Kawaii Group Bangladesh',
  legalName: 'Kawaii Group',
  url: SITE_URL,
  logo: `${SITE_URL}/kawaiigroup.png`,
  email: 'info@kawaiibd.com',
  telephone: '+8801901850570',
  sameAs: [
    'https://www.linkedin.com/company/kawaii-group-bd',
    'https://www.facebook.com/profile.php?id=61563359894758',
  ],
  address: {
    streetAddress: 'Suite-2A, House # 11, Block-B, Main Road, Banasree, Rampura',
    addressLocality: 'Dhaka',
    postalCode: '1219',
    addressCountry: 'BD',
  },
};

/** Per-route SEO copy keyed by path (no locale prefix). */
export const PAGE_SEO = {
  '/': {
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
  },
  '/about': {
    en: {
      title: 'About Us | Kawaii Group',
      description:
        'Learn about Kawaii Group’s 35+ year journey as a Japan-Bangladesh joint venture. Discover our mission, vision, values, and how we connect people, businesses, and cultures through innovation and partnership.',
    },
    bn: {
      title: 'আমাদের সম্পর্কে | কাওয়াই গ্রুপ',
      description:
        'জাপান-বাংলাদেশ যৌথ উদ্যোগ হিসেবে কাওয়াই গ্রুপের ৩৫+ বছরের যাত্রা জানুন। আমাদের মিশন, ভিশন, মূল্যবোধ এবং উদ্ভাবন ও অংশীদারিত্বের মাধ্যমে মানুষ, ব্যবসা ও সংস্কৃতিকে কীভাবে সংযুক্ত করি তা আবিষ্কার করুন।',
    },
    ja: {
      title: '会社概要 | カワイグループ',
      description:
        '日本・バングラデシュ合弁企業としてのカワイグループの35年以上の歩みをご紹介。ミッション・ビジョン・価値観、そしてイノベーションとパートナーシップで人とビジネス、文化をつなぐ取り組みをぜひご覧ください。',
    },
  },
  '/services': {
    en: {
      title: 'Our Services | Kawaii Group',
      description:
        'Explore Kawaii Group services including business consultancy, human resource development, education and Japanese language training, recruitment, and digital transformation solutions for companies and individuals.',
    },
    bn: {
      title: 'আমাদের সেবা | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপের সেবাসমূহ অন্বেষণ করুন—ব্যবসায়িক পরামর্শ, মানব সম্পদ উন্নয়ন, শিক্ষা ও জাপানি ভাষা প্রশিক্ষণ, নিয়োগ এবং ডিজিটাল রূপান্তর সমাধান কোম্পানি ও ব্যক্তিদের জন্য।',
    },
    ja: {
      title: 'サービス | カワイグループ',
      description:
        'ビジネスコンサルティング、人材開発、教育・日本語研修、採用支援、デジタルトランスフォーメーションなど、企業と個人向けのカワイグループのサービスをご覧ください。',
    },
  },
  '/concerns': {
    en: {
      title: 'Sister Concerns | Kawaii Group',
      description:
        'Discover the sister companies under Kawaii Group spanning education, human resources, trade, fashion, technology, and Japan-focused ventures driving excellence across global industries.',
    },
    bn: {
      title: 'সহযোগী প্রতিষ্ঠান | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপের অধীনে শিক্ষা, মানব সম্পদ, বাণিজ্য, ফ্যাশন, প্রযুক্তি ও জাপান-কেন্দ্রিক উদ্যোগসহ সহযোগী প্রতিষ্ঠানগুলো আবিষ্কার করুন—বিশ্বব্যাপী শিল্পে শ্রেষ্ঠত্ব চালিত করছে।',
    },
    ja: {
      title: 'グループ企業 | カワイグループ',
      description:
        '教育・人材・貿易・ファッション・テクノロジー・日本関連事業など、カワイグループ傘下の関連企業がグローバル産業でどのように価値を創出しているかをご紹介します。',
    },
  },
  '/contact': {
    en: {
      title: 'Contact Us | Kawaii Group',
      description:
        'Get in touch with Kawaii Group Bangladesh. Contact our Dhaka office for business partnerships, career support, education programs, and Japan-Bangladesh collaboration inquiries.',
    },
    bn: {
      title: 'যোগাযোগ | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপ বাংলাদেশের সাথে যোগাযোগ করুন। ব্যবসায়িক অংশীদারিত্ব, ক্যারিয়ার সহায়তা, শিক্ষা কর্মসূচি এবং জাপান-বাংলাদেশ সহযোগিতার জন্য আমাদের ঢাকা অফিসে যোগাযোগ করুন।',
    },
    ja: {
      title: 'お問い合わせ | カワイグループ',
      description:
        'カワイグループバングラデシュへのお問い合わせはこちら。ビジネス提携、キャリア支援、教育プログラム、日バングラデシュ協力に関するご相談をダッカ事務所で受け付けています。',
    },
  },
  '/corporateprofile': {
    en: {
      title: 'Corporate Profile | Kawaii Group',
      description:
        'View the corporate profile of Kawaii Group Bangladesh — company overview, leadership, business pillars, and our commitment to Japan-Bangladesh partnership and community growth.',
    },
    bn: {
      title: 'কর্পোরেট প্রোফাইল | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপ বাংলাদেশের কর্পোরেট প্রোফাইল দেখুন—কোম্পানি ওভারভিউ, নেতৃত্ব, ব্যবসায়িক স্তম্ভ এবং জাপান-বাংলাদেশ অংশীদারিত্ব ও সম্প্রদায় উন্নয়নে আমাদের অঙ্গীকার।',
    },
    ja: {
      title: 'コーポレートプロフィール | カワイグループ',
      description:
        'カワイグループバングラデシュのコーポレートプロフィール。会社概要、リーダーシップ、事業の柱、日バングラデシュパートナーシップへの取り組みをご覧ください。',
    },
  },
  '/our-business': {
    en: {
      title: 'Our Business | Kawaii Group',
      description:
        'Explore Kawaii Group’s business portfolio across consultancy, HR, education, recruitment, and cross-border ventures that connect Bangladesh and Japan for sustainable growth.',
    },
    bn: {
      title: 'আমাদের ব্যবসা | কাওয়াই গ্রুপ',
      description:
        'পরামর্শ, এইচআর, শিক্ষা, নিয়োগ এবং আন্তঃসীমান্ত উদ্যোগসহ কাওয়াই গ্রুপের ব্যবসায়িক পোর্টফোলিও অন্বেষণ করুন—টেকসই প্রবৃদ্ধির জন্য বাংলাদেশ ও জাপানকে সংযুক্ত করে।',
    },
    ja: {
      title: '事業紹介 | カワイグループ',
      description:
        'コンサルティング、人材、教育、採用、クロスボーダー事業など、バングラデシュと日本をつなぐカワイグループの事業ポートフォリオをご覧ください。',
    },
  },
  '/masterclass': {
    en: {
      title: 'BIM Masterclass | Kawaii Group',
      description:
        'Register for the Kawaii Group BIM Masterclass — practical training, expert speakers, and career-focused learning for professionals and students seeking industry-ready skills.',
    },
    bn: {
      title: 'BIM মাস্টারক্লাস | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপ BIM মাস্টারক্লাসে নিবন্ধন করুন—বিশেষজ্ঞ স্পিকার, ব্যবহারিক প্রশিক্ষণ এবং শিল্প-প্রস্তুত দক্ষতা অর্জনে আগ্রহী পেশাজীবী ও শিক্ষার্থীদের জন্য ক্যারিয়ারমুখী শিক্ষা।',
    },
    ja: {
      title: 'BIMマスタークラス | カワイグループ',
      description:
        'カワイグループのBIMマスタークラスに登録。専門家による実践的な研修と、業界で活躍できるスキルを身につけたいプロフェッショナル・学生向けのキャリア重視の学びを提供します。',
    },
  },
  '/privacypolicy': {
    en: {
      title: 'Privacy Policy | Kawaii Group',
      description:
        'Read the Kawaii Group privacy policy to understand how we collect, use, store, share, and protect personal information when you visit kawaiibd.com, contact our team, register for events, or use our education, recruitment, and business services across Bangladesh and Japan.',
    },
    bn: {
      title: 'গোপনীয়তা নীতি | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপের গোপনীয়তা নীতি পড়ুন—kawaiibd.com ভিজিট, যোগাযোগ, ইভেন্ট নিবন্ধন বা শিক্ষা, নিয়োগ ও ব্যবসায়িক সেবা ব্যবহারের সময় আমরা কীভাবে ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ, শেয়ার ও সুরক্ষা করি তা জানুন।',
    },
    ja: {
      title: 'プライバシーポリシー | カワイグループ',
      description:
        'カワイグループのプライバシーポリシー。kawaiibd.comの利用、お問い合わせ、イベント登録、教育・採用・ビジネスサービスのご利用時に、個人情報をどのように収集・利用・保管・共有・保護するかをご確認ください。',
    },
  },
  '/kawaii-japan-career-hr': {
    en: {
      title: 'Kawaii Japan Career & HR Solutions | Kawaii Group',
      description:
        'Kawaii Japan Career & HR Solutions connects employers and job seekers in Bangladesh with Japan-focused recruitment, training, and career support for lasting professional success.',
    },
    bn: {
      title: 'কাওয়াই জাপান ক্যারিয়ার ও এইচআর সলিউশনস | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই জাপান ক্যারিয়ার ও এইচআর সলিউশনস বাংলাদেশের নিয়োগকর্তা ও চাকরিপ্রার্থীদের জাপান-কেন্দ্রিক নিয়োগ, প্রশিক্ষণ ও ক্যারিয়ার সহায়তার মাধ্যমে সংযুক্ত করে।',
    },
    ja: {
      title: 'カワイ Japan Career & HR Solutions | カワイグループ',
      description:
        'カワイ Japan Career & HR Solutionsは、バングラデシュの企業と求職者を日本関連の採用・研修・キャリア支援でつなぎ、持続的なキャリア成功をサポートします。',
    },
  },
  '/kawaii-global-ventures': {
    en: {
      title: 'Kawaii Global Ventures | Kawaii Group',
      description:
        'Discover Kawaii Global Ventures — investment, business development, and cross-border opportunities designed to accelerate growth between Bangladesh, Japan, and international markets.',
    },
    bn: {
      title: 'কাওয়াই গ্লোবাল ভেঞ্চারস | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্লোবাল ভেঞ্চারস আবিষ্কার করুন—বিনিয়োগ, ব্যবসা উন্নয়ন এবং আন্তঃসীমান্ত সুযোগ যা বাংলাদেশ, জাপান ও আন্তর্জাতিক বাজারের মধ্যে প্রবৃদ্ধি ত্বরান্বিত করে।',
    },
    ja: {
      title: 'カワイ Global Ventures | カワイグループ',
      description:
        'カワイ Global Venturesの投資・事業開発・クロスボーダー機会をご紹介。バングラデシュ、日本、そして国際市場での成長加速を支援します。',
    },
  },
};

export function normalizePath(path = '/') {
  if (!path || path === '') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  if (withSlash.length > 1 && withSlash.endsWith('/')) {
    return withSlash.slice(0, -1);
  }
  return withSlash;
}

export function getPageSeo(locale, path = '/') {
  const normalized = normalizePath(path);
  const entry = PAGE_SEO[normalized] || PAGE_SEO['/'];
  const localeKey = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  return entry[localeKey] || entry[DEFAULT_LOCALE] || META[localeKey] || META[DEFAULT_LOCALE];
}

export function buildPageMetadata({ locale, path = '/', title, description } = {}) {
  const localeKey = LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const seo = getPageSeo(localeKey, path);
  const pageTitle = title || seo.title;
  const pageDescription = description || seo.description;
  const normalized = normalizePath(path);
  const pathSuffix = normalized === '/' ? '' : normalized;
  const canonical = `${SITE_URL}/${localeKey}${pathSuffix}`;

  const languages = {};
  LOCALES.forEach((loc) => {
    languages[loc] = `${SITE_URL}/${loc}${pathSuffix}`;
  });
  languages['x-default'] = `${SITE_URL}/${DEFAULT_LOCALE}${pathSuffix}`;

  return {
    title: {
      absolute: pageTitle,
    },
    description: pageDescription,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: localeKey === 'bn' ? 'bn_BD' : localeKey === 'ja' ? 'ja_JP' : 'en_US',
      url: canonical,
      siteName: SITE_NAME,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: SITE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [SITE_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    alternateName: SITE_NAME,
    url: ORGANIZATION.url,
    logo: {
      '@type': 'ImageObject',
      url: ORGANIZATION.logo,
    },
    image: SITE_OG_IMAGE,
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.telephone,
    foundingDate: '1987',
    description:
      'Kawaii Group Bangladesh is a Japan-Bangladesh joint venture creating opportunities through innovation, education, human resources, and strategic partnerships.',
    sameAs: ORGANIZATION.sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION.address.streetAddress,
      addressLocality: ORGANIZATION.address.addressLocality,
      postalCode: ORGANIZATION.address.postalCode,
      addressCountry: ORGANIZATION.address.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: ORGANIZATION.telephone,
      contactType: 'customer service',
      email: ORGANIZATION.email,
      areaServed: ['BD', 'JP'],
      availableLanguage: ['en', 'bn', 'ja'],
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ['en', 'bn', 'ja'],
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function getAboutPageJsonLd(locale = 'en') {
  const seo = getPageSeo(locale, '/about');
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/${locale}/about#webpage`,
    url: `${SITE_URL}/${locale}/about`,
    name: seo.title,
    description: seo.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: locale,
  };
}
