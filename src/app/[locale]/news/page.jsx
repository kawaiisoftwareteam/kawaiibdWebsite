import NewsMedia from '../../../views/NewsMedia/NewsMedia';
import { isValidLocale, DEFAULT_LOCALE } from '../../../i18n/config';
import { buildPageMetadata } from '../../../lib/seo';
import PageJsonLd from '../../../Components/Seo/PageJsonLd';

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/news' });
}

export default function NewsPage({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return (
    <>
      <PageJsonLd locale={locale} path="/news" />
      <NewsMedia />
    </>
  );
}
