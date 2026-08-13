import LocalizedShell from '../../Components/LocalizedShell/LocalizedShell';
import JsonLd from '../../Components/Seo/JsonLd';
import { isValidLocale, DEFAULT_LOCALE, LOCALES } from '../../i18n/config';
import { buildPageMetadata } from '../../lib/seo';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/' });
}

export default function LocalizedLayout({ children, params }) {
  return (
    <>
      <JsonLd />
      <LocalizedShell locale={params?.locale}>{children}</LocalizedShell>
    </>
  );
}
