import {
  getOrganizationJsonLd,
  getWebsiteJsonLd,
  getLocalBusinessJsonLd,
} from '../../lib/seo';

export function LdScript({ id, data }) {
  if (!data) return null;
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function JsonLd({ extraSchemas = [] }) {
  const localBusinesses = getLocalBusinessJsonLd();

  return (
    <>
      <LdScript id="ld-organization" data={getOrganizationJsonLd()} />
      <LdScript id="ld-website" data={getWebsiteJsonLd()} />
      {localBusinesses.map((biz, idx) => (
        <LdScript key={biz['@id']} id={`ld-localbusiness-${idx}`} data={biz} />
      ))}
      {extraSchemas.map((schema, idx) => (
        <LdScript key={schema['@id'] || `extra-schema-${idx}`} id={`ld-extra-${idx}`} data={schema} />
      ))}
    </>
  );
}

