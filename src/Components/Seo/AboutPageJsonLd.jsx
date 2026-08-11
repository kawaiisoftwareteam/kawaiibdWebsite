import { getAboutPageJsonLd } from '../../lib/seo';

export default function AboutPageJsonLd({ locale }) {
  return (
    <script
      id="ld-about-page"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getAboutPageJsonLd(locale)),
      }}
    />
  );
}
