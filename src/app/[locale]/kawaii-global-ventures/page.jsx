import KawaiiGlobalVentures from '../../../views/KawaiiGlobalVentures/KawaiiGlobalVentures';
import { isValidLocale, DEFAULT_LOCALE } from '../../../i18n/config';
import { buildPageMetadata } from '../../../lib/seo';

import PageJsonLd from '../../../Components/Seo/PageJsonLd';

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/kawaii-global-ventures' });
}

export default function KawaiiGlobalVenturesPage({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return (
    <>
      <PageJsonLd locale={locale} path="/kawaii-global-ventures" pageType="service" />
      <KawaiiGlobalVentures />
    </>
  );
}

