import {
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from '../../lib/seo';

function LdScript({ id, data }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function JsonLd() {
  return (
    <>
      <LdScript id="ld-organization" data={getOrganizationJsonLd()} />
      <LdScript id="ld-website" data={getWebsiteJsonLd()} />
    </>
  );
}
