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
      title: 'Kawaii Group | Japan-Bangladesh Partnerships, FDI Consulting & HR',
      description:
        'Kawaii Group is a leading Japan-Bangladesh joint venture specializing in FDI consulting, human resources and recruitment, Japanese language and international education, technology solutions, manufacturing and trade, and bilateral business partnerships.',
    },
    bn: {
      title: 'কাওয়াই গ্রুপ | জাপান-বাংলাদেশ পার্টনারশিপ, FDI কনসাল্টিং ও এইচআর',
      description:
        'কাওয়াই গ্রুপ একটি শীর্ষস্থানীয় জাপান-বাংলাদেশ যৌথ উদ্যোগ—FDI কনসাল্টিং, আন্তর্জাতিক নিয়োগ, জাপানি ভাষা ও আন্তর্জাতিক শিক্ষা, প্রযুক্তি সমাধান, উৎপাদন ও বাণিজ্য এবং দ্বিপাক্ষিক ব্যবসায়িক অংশীদারিত্বের বিশ্বস্ত প্ল্যাটফর্ম।',
    },
    ja: {
      title: 'カワイグループ | 日本・バングラデシュ合弁企業・FDI進出支援・人材採用',
      description:
        'カワイグループは日本とバングラデシュを結ぶ総合合弁企業。FDI進出コンサルティング、人材紹介・特定技能採用、実践的日本語・国際教育、IT・DX技術ソリューション、アパレル製造・貿易、ビジネス提携を提供します。',
    },
  },
  '/about': {
    en: {
      title: 'About Kawaii Group | Japan-Bangladesh Venture',
      description:
        'Learn about Kawaii Group’s 35+ year journey as a Japan-Bangladesh joint venture. Discover our mission, vision, values, and how we connect people, businesses, and cultures through innovation and partnership.',
    },
    bn: {
      title: 'কাওয়াই গ্রুপ সম্পর্কে | জাপান-বাংলাদেশ যৌথ উদ্যোগ',
      description:
        'জাপান-বাংলাদেশ যৌথ উদ্যোগ হিসেবে কাওয়াই গ্রুপের ৩৫+ বছরের যাত্রা জানুন। আমাদের মিশন, ভিশন, মূল্যবোধ এবং উদ্ভাবন ও অংশীদারিত্বের মাধ্যমে মানুষ, ব্যবসা ও সংস্কৃতিকে কীভাবে সংযুক্ত করি তা আবিষ্কার করুন।',
    },
    ja: {
      title: 'カワイグループについて | 日バングラデシュ合弁',
      description:
        '日本・バングラデシュ合弁企業としてのカワイグループの35年以上の歩みをご紹介。ミッション・ビジョン・価値観、そしてイノベーションとパートナーシップで人とビジネス、文化をつなぐ取り組みをぜひご覧ください。',
    },
  },
  '/services': {
    en: {
      title: 'Our Services | FDI Consulting, HR Recruitment, IT, Trade & Travel | Kawaii Group',
      description:
        'Comprehensive Japan-Bangladesh services by Kawaii Group: FDI consulting, human resources and recruitment for Japan, Japanese language and international education, technology solutions, manufacturing and trade, travel services, and bilateral business partnerships.',
    },
    bn: {
      title: 'আমাদের সেবা | FDI কনসাল্টিং, এইচআর নিয়োগ, প্রযুক্তি, বাণিজ্য ও ভ্রমণ | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপের সেবা: FDI কনসাল্টিং, জাপানে এইচআর নিয়োগ, জাপানি ভাষা ও আন্তর্জাতিক শিক্ষা, সফটওয়্যার ও BIM DX প্রযুক্তি সমাধান, গার্মেন্টস উৎপাদন ও বাণিজ্য, ভ্রমণ ও ভিসা এবং দ্বিপাক্ষিক ব্যবসায়িক অংশীদারিত্ব।',
    },
    ja: {
      title: 'サービス一覧 | FDI進出支援・人材採用・ITソリューション・製造貿易 | カワイグループ',
      description:
        'カワイグループの事業一覧：FDI進出支援コンサルティング、日本向け人材紹介・特定技能、日本語・国際教育、IT開発・BIM DX、衣料製造・貿易、海外渡航支援、日バングラデシュ企業提携。',
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
      title: 'Contact Kawaii Group Bangladesh Office',
      description:
        'Get in touch with Kawaii Group Bangladesh. Contact our Dhaka office for business partnerships, career support, education programs, and Japan-Bangladesh collaboration inquiries.',
    },
    bn: {
      title: 'কাওয়াই গ্রুপ বাংলাদেশ অফিসে যোগাযোগ',
      description:
        'কাওয়াই গ্রুপ বাংলাদেশের সাথে যোগাযোগ করুন। ব্যবসায়িক অংশীদারিত্ব, ক্যারিয়ার সহায়তা, শিক্ষা কর্মসূচি এবং জাপান-বাংলাদেশ সহযোগিতার জন্য আমাদের ঢাকা অফিসে যোগাযোগ করুন।',
    },
    ja: {
      title: 'お問い合わせ | カワイグループ・バングラデシュ',
      description:
        'カワイグループバングラデシュへのお問い合わせはこちら。ビジネス提携、キャリア支援、教育プログラム、日バングラデシュ協力に関するご相談をダッカ事務所で受け付けています。',
    },
  },
  '/corporateprofile': {
    en: {
      title: 'Company Profile | Kawaii Group',
      description:
        'Company profile of Kawaii Group Bangladesh — listing status, head and corporate offices, capital, banking partners, and group affiliation.',
    },
    bn: {
      title: 'কোম্পানি প্রোফাইল | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপ বাংলাদেশের কোম্পানি প্রোফাইল—তালিকাভুক্তি অবস্থা, প্রধান ও কর্পোরেট অফিস, মূলধন, ব্যাংকিং অংশীদার এবং গ্রুপ অধিভুক্তি।',
    },
    ja: {
      title: '会社概要 | カワイグループ',
      description:
        'カワイグループ・バングラデシュの会社概要。上場状況、本社・コーポレートオフィス、資本金、取引銀行、グループ所属をご確認ください。',
    },
  },
  '/our-business': {
    en: {
      title: 'Business Portfolio | FDI, HR, Technology, Manufacturing & Trade | Kawaii Group',
      description:
        'Discover Kawaii Group’s diverse business portfolio: Foreign Direct Investment (FDI) consulting, Japan HR recruitment, Japanese language education, technology solutions, apparel manufacturing, and international trade.',
    },
    bn: {
      title: 'আমাদের ব্যবসায়িক পোর্টফোলিও | FDI, এইচআর, প্রযুক্তি, উৎপাদন ও বাণিজ্য | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপের ব্যবসায়িক পোর্টফোলিও: FDI কনসাল্টিং, জাপানে নিয়োগ, জাপানি ভাষা শিক্ষা, সফটওয়্যার ও BIM প্রযুক্তি, গার্মেন্টস উৎপাদন, আন্তর্জাতিক বাণিজ্য এবং আন্তঃসীমান্ত ব্যবসায়িক উদ্যোগ।',
    },
    ja: {
      title: '事業ポートフォリオ | FDI・人材・IT・製造・貿易 | カワイグループ',
      description:
        'カワイグループの事業ポートフォリオ：FDI進出支援、日本就職・人材紹介、日本語教育、IT技術開発、アパレル製造、国際貿易、そして日本・バングラデシュ合弁事業。',
    },
  },
  '/career': {
    en: {
      title: 'Careers in Japan | Apply with Kawaii Group',
      description:
        'Apply for Japan career pathways with Kawaii Group Bangladesh — SSW, TITP, and skilled worker support including training, documentation guidance, and placement assistance.',
    },
    bn: {
      title: 'জাপানে ক্যারিয়ার | কাওয়াই গ্রুপে আবেদন করুন',
      description:
        'কাওয়াই গ্রুপ বাংলাদেশের সাথে জাপান ক্যারিয়ার পথে আবেদন করুন—SSW, TITP ও দক্ষ কর্মী সহায়তাসহ প্রশিক্ষণ, ডকুমেন্টেশন ও প্লেসমেন্ট সহায়তা।',
    },
    ja: {
      title: '日本でのキャリア応募 | カワイグループ',
      description:
        'カワイグループバングラデシュで日本へのキャリア応募。特定技能・技能実習などの研修、書類案内、就職支援をご提供します。',
    },
  },
  '/mock-interview': {
    en: {
      title: 'Japanese Practical Interview | Kawaii Group',
      description:
        'Free Japanese practical interview for JLPT N5 & N4 graduates — practice with a native Japanese interviewer and prepare for upcoming real recruitment opportunities with Kawaii Group.',
    },
    bn: {
      title: 'জাপানিজ প্র্যাকটিক্যাল ইন্টারভিউ | কাওয়াই গ্রুপ',
      description:
        'JLPT N5 ও N4 সম্পন্ন শিক্ষার্থীদের জন্য ফ্রি জাপানিজ প্র্যাকটিক্যাল ইন্টারভিউ—নেটিভ জাপানিজ ইন্টারভিউয়ারের সাথে অনুশীলন করুন এবং আসন্ন রিয়েল রিক্রুটমেন্ট সুযোগের জন্য প্রস্তুত হোন।',
    },
    ja: {
      title: '日本語実践面接 | カワイグループ',
      description:
        'JLPT N5・N4修了者向け無料の日本語実践面接。ネイティブ日本人面接官との練習で、今後の本採用面接に備えましょう。',
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
  '/seminar': {
    en: {
      title: 'BIM & Construction DX Seminar | Kawaii Group',
      description:
        'Register for the Kawaii Group BIM & Construction DX Seminar with Dr. Shunsuke Someya — in-person learning on digital construction, Japanese standards, and career-ready BIM skills.',
    },
    bn: {
      title: 'BIM ও Construction DX সেমিনার | কাওয়াই গ্রুপ',
      description:
        'ড. শুনসুকে সোমেয়ার সাথে কাওয়াই গ্রুপের BIM ও Construction DX সেমিনারে নিবন্ধন করুন—ডিজিটাল নির্মাণ, জাপানি মান ও ক্যারিয়ার-প্রস্তুত BIM দক্ষতা নিয়ে ইন-পারসন শিক্ষা।',
    },
    ja: {
      title: 'BIM・建設DXセミナー | カワイグループ',
      description:
        '染谷俊介博士によるカワイグループのBIM・Construction DXセミナーに登録。デジタル建設、日本の基準、キャリアにつながるBIMスキルを対面で学べます。',
    },
  },
  '/news': {
    en: {
      title: 'News & Media | Kawaii Group',
      description:
        'Explore Kawaii Group news and media — BIM Technology & Construction DX seminar highlights, MoU signing moments, leadership addresses, and partnership updates from Bangladesh and Japan.',
    },
    bn: {
      title: 'নিউজ ও মিডিয়া | কাওয়াই গ্রুপ',
      description:
        'কাওয়াই গ্রুপের নিউজ ও মিডিয়া দেখুন—BIM Technology & Construction DX সেমিনার, MoU স্বাক্ষর, নেতৃত্বের বক্তব্য এবং বাংলাদেশ-জাপান অংশীদারিত্বের আপডেট।',
    },
    ja: {
      title: 'ニュース＆メディア | カワイグループ',
      description:
        'カワイグループのニュース＆メディア。BIMテクノロジー＆建設DXセミナー、MoU調印、リーダーシップの講演、バングラデシュと日本のパートナーシップ最新情報をご覧ください。',
    },
  },
  '/privacypolicy': {
    en: {
      title: 'Privacy Policy | Kawaii Group Bangladesh',
      description:
        'Read the Kawaii Group privacy policy to understand how we collect, use, store, share, and protect personal information when you visit kawaiibd.com, contact our team, register for events, or use our education, recruitment, and business services across Bangladesh and Japan.',
    },
    bn: {
      title: 'গোপনীয়তা নীতি | কাওয়াই গ্রুপ বাংলাদেশ',
      description:
        'কাওয়াই গ্রুপের গোপনীয়তা নীতি পড়ুন—kawaiibd.com ভিজিট, যোগাযোগ, ইভেন্ট নিবন্ধন বা শিক্ষা, নিয়োগ ও ব্যবসায়িক সেবা ব্যবহারের সময় আমরা কীভাবে ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার, সংরক্ষণ, শেয়ার ও সুরক্ষা করি তা জানুন।',
    },
    ja: {
      title: 'プライバシーポリシー | カワイグループBD',
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
  const pathSuffix = normalized === '/' ? '/' : `${normalized}/`;
  // Always locale-prefixed with trailing slash (matches trailingSlash: true).
  // Root `/` and `/en/` both canonicalize to `/en/` so English has one preferred URL.
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

export function getLocalBusinessJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#localbusiness-dhaka`,
      name: 'Kawaii Group Bangladesh (Headquarters)',
      image: SITE_OG_IMAGE,
      url: SITE_URL,
      telephone: '+8801901850570',
      email: 'info@kawaiibd.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite-2A, House # 11, Block-B, Main Road, Banasree, Rampura',
        addressLocality: 'Dhaka',
        postalCode: '1219',
        addressCountry: 'BD',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.7656,
        longitude: 90.4285,
      },
      hasMap: 'https://maps.app.goo.gl/sfL5dbZTL65kB2W19',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'Bangladesh' },
        { '@type': 'Country', name: 'Japan' },
      ],
      sameAs: ORGANIZATION.sameAs,
    },
    {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${SITE_URL}/#localbusiness-tokyo`,
      name: 'Kawaii Group Japan Branch',
      image: SITE_OG_IMAGE,
      url: SITE_URL,
      telephone: '+81369105465',
      email: 'info@kawaiigroupjapan.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'ITO Daikanyama 1F, 2-17-8 Ebisu-Nishi',
        addressLocality: 'Shibuya-ku, Tokyo',
        postalCode: '150-0021',
        addressCountry: 'JP',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.6483,
        longitude: 139.7042,
      },
      hasMap:
        'https://www.google.com/maps/search/?api=1&query=ITO+Daikanyama,+2-17-8+Ebisu-Nishi,+Shibuya-ku,+Tokyo+150-0021,+Japan',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:30',
          closes: '18:30',
        },
      ],
      areaServed: [{ '@type': 'Country', name: 'Japan' }],
    },
  ];
}

export function getBreadcrumbJsonLd(locale = 'en', path = '/', pageTitle = '') {
  const normalized = normalizePath(path);
  const segments = normalized.split('/').filter(Boolean);

  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_URL}/${locale}/`,
    },
  ];

  if (segments.length > 0) {
    const currentPath = `${SITE_URL}/${locale}/${segments.join('/')}/`;
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: pageTitle || segments[segments.length - 1].replace(/-/g, ' '),
      item: currentPath,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}

export function getFaqJsonLd(faqItems = []) {
  if (!faqItems || faqItems.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getContactPageJsonLd(locale = 'en') {
  const seo = getPageSeo(locale, '/contact');
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/${locale}/contact#webpage`,
    url: `${SITE_URL}/${locale}/contact`,
    name: seo.title,
    description: seo.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    mainEntity: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: locale,
  };
}

export function getServicesPageJsonLd(locale = 'en', path = '/services') {
  const seo = getPageSeo(locale, path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/${locale}${path}#service`,
    name: seo.title,
    description: seo.description,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: [
      { '@type': 'Country', name: 'Bangladesh' },
      { '@type': 'Country', name: 'Japan' },
    ],
    serviceType: 'Japan-Bangladesh Business & HR Solutions',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Kawaii Group Core Business Pillars',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'FDI Consulting & Market Entry',
          itemListElement: [
            {
              '@type': 'Service',
              name: 'Foreign Direct Investment (FDI) Consulting Japan–Bangladesh',
              description:
                'End-to-end FDI consulting, BIDA registration, special economic zones entry (BSEZ), joint ventures, and regulatory setup for Japanese businesses in Bangladesh.',
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Human Resources & Recruitment',
          itemListElement: [
            {
              '@type': 'Service',
              name: 'Human Resources & Japan Recruitment Solutions',
              description:
                'Recruiting and placing skilled Bangladeshi engineers, IT professionals, and Specified Skilled Workers (SSW/TITP) in Japan.',
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Japanese Language & International Education',
          itemListElement: [
            {
              '@type': 'Service',
              name: 'Japanese Language Education & Study in Japan',
              description:
                'JLPT N5-N1 preparation, NAT-TEST training, corporate Japanese business etiquette, and university admissions guidance for Japan.',
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Technology Solutions & Construction DX',
          itemListElement: [
            {
              '@type': 'Service',
              name: 'Technology Solutions & BIM DX Outsourcing',
              description:
                'Offshore software development, enterprise cloud systems, and BIM (Building Information Modeling) engineering outsourcing conforming to Japanese architectural standards.',
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Manufacturing & International Trade',
          itemListElement: [
            {
              '@type': 'Service',
              name: 'Apparel Manufacturing & Global International Trade',
              description:
                'OEM/ODM garment manufacturing, sustainable textile sourcing, strict Japanese quality inspection (Kenpin), and cross-border trade logistics.',
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Corporate Travel & Japan Visa Assistance',
          itemListElement: [
            {
              '@type': 'Service',
              name: 'Travel Services & Japan Visa Assistance',
              description:
                'Corporate business delegation travel management, itinerary planning, executive logistics, and official Japan visa documentation assistance.',
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Japan–Bangladesh Business Partnerships',
          itemListElement: [
            {
              '@type': 'Service',
              name: 'Bilateral Joint Ventures & Strategic Business Partnerships',
              description:
                'Cross-border joint ventures, B2B matchmaking, MoU signing, and strategic corporate alliances between Japan and Bangladesh.',
            },
          ],
        },
      ],
    },
  };
}

export function getEventJsonLd(locale = 'en', eventType = 'seminar') {
  const isMasterclass = eventType === 'masterclass';
  const path = isMasterclass ? '/masterclass' : '/seminar';
  const seo = getPageSeo(locale, path);

  return {
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    '@id': `${SITE_URL}/${locale}${path}#event`,
    name: seo.title,
    description: seo.description,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: {
      '@id': `${SITE_URL}/#organization`,
    },
    location: {
      '@type': 'Place',
      name: 'Kawaii Group Dhaka Office / Seminar Hall',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Suite-2A, House # 11, Block-B, Main Road, Banasree, Rampura',
        addressLocality: 'Dhaka',
        postalCode: '1219',
        addressCountry: 'BD',
      },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BDT',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/${locale}${path}`,
    },
    inLanguage: locale,
  };
}


