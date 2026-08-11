import Contact from '../../../views/Contact/Contact';
import { isValidLocale, DEFAULT_LOCALE } from '../../../i18n/config';
import { buildPageMetadata } from '../../../lib/seo';

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/contact' });
}

export default function ContactPage() {
  return <Contact />;
}
