import About from '../../../views/About/About';
import AboutPageJsonLd from '../../../Components/Seo/AboutPageJsonLd';
import { isValidLocale, DEFAULT_LOCALE } from '../../../i18n/config';
import { buildPageMetadata } from '../../../lib/seo';

export async function generateMetadata({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  return buildPageMetadata({ locale, path: '/about' });
}

export default function AboutPage({ params }) {
  const locale = isValidLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;

  return (
    <>
      <AboutPageJsonLd locale={locale} />
      <About />
    </>
  );
}
