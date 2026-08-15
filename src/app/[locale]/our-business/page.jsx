import OurBusinessPage from '../../../views/OurBusiness/OurBusinessPage';
import { isValidLocale, DEFAULT_LOCALE } from '../../../i18n/config';
import { buildPageMetadata } from '../../../lib/seo';

import PageJsonLd from '../../../Components/Seo/PageJsonLd';

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/our-business' });
}

export default function OurBusinessRoute({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return (
    <>
      <PageJsonLd locale={locale} path="/our-business" pageType="service" />
      <OurBusinessPage />
    </>
  );
}

