import Home from '../../views/Home/Home';
import { isValidLocale, DEFAULT_LOCALE } from '../../i18n/config';
import { buildPageMetadata } from '../../lib/seo';

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/' });
}

export default function HomePage() {
  return <Home />;
}
