import {
  getBreadcrumbJsonLd,
  getContactPageJsonLd,
  getServicesPageJsonLd,
  getEventJsonLd,
  getPageSeo,
} from '../../lib/seo';
import { LdScript } from './JsonLd';

export default function PageJsonLd({
  locale = 'en',
  path = '/',
  pageType = 'default',
  extraData = null,
}) {
  const seo = getPageSeo(locale, path);
  const breadcrumb = getBreadcrumbJsonLd(locale, path, seo?.title);

  let specificSchema = null;
  if (pageType === 'contact') {
    specificSchema = getContactPageJsonLd(locale);
  } else if (pageType === 'service') {
    specificSchema = getServicesPageJsonLd(locale, path);
  } else if (pageType === 'seminar' || pageType === 'masterclass') {
    specificSchema = getEventJsonLd(locale, pageType);
  }

  return (
    <>
      <LdScript id={`ld-breadcrumb-${path.replace(/[/]/g, '-') || 'root'}`} data={breadcrumb} />
      {specificSchema && (
        <LdScript id={`ld-specific-${path.replace(/[/]/g, '-')}`} data={specificSchema} />
      )}
      {extraData && (
        <LdScript id={`ld-extra-${path.replace(/[/]/g, '-')}`} data={extraData} />
      )}
    </>
  );
}
