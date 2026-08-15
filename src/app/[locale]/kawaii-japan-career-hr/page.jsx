import KawaiiJapanCareerHr from '../../../views/KawaiiJapanCareerHr/KawaiiJapanCareerHr';
import { isValidLocale, DEFAULT_LOCALE } from '../../../i18n/config';
import { buildPageMetadata } from '../../../lib/seo';

import PageJsonLd from '../../../Components/Seo/PageJsonLd';

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/kawaii-japan-career-hr' });
}

export default function KawaiiJapanCareerHrPage({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return (
    <>
      <PageJsonLd locale={locale} path="/kawaii-japan-career-hr" pageType="service" />
      <KawaiiJapanCareerHr />
    </>
  );
}

