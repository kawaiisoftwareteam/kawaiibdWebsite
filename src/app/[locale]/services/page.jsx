import Services from '../../../views/Services/Services';
import { isValidLocale, DEFAULT_LOCALE } from '../../../i18n/config';
import { buildPageMetadata } from '../../../lib/seo';

import PageJsonLd from '../../../Components/Seo/PageJsonLd';

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/services' });
}

export default function ServicesPage({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return (
    <>
      <PageJsonLd locale={locale} path="/services" pageType="service" />
      <Services />
    </>
  );
}

