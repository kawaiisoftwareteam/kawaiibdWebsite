import Script from 'next/script';
import Home from '../views/Home/Home';
import LocalizedShell from '../Components/LocalizedShell/LocalizedShell';
import JsonLd from '../Components/Seo/JsonLd';
import { DEFAULT_LOCALE } from '../i18n/config';
import { buildPageMetadata } from '../lib/seo';

export async function generateMetadata() {
  // Apex `/` is rewritten to `/en/` in .htaccess; keep noindex if this HTML is ever served directly.
  return {
    ...buildPageMetadata({ locale: DEFAULT_LOCALE, path: '/' }),
    robots: { index: false, follow: true },
  };
}

/**
 * Runs before React hydrates so kawaiibd.com enters a locale instantly if user has a non-English saved preference.
 */
const instantLocaleRedirect = `
(function () {
  try {
    if (/^\\/(en|bn|ja)(?=\\/|$)/.test(location.pathname)) return;
    var loc = 'en';
    try {
      var s = localStorage.getItem('kg_locale');
      if (s === 'en' || s === 'bn' || s === 'ja') loc = s;
      else {
        var c = document.cookie.match(/(?:^|; )kg_locale=(en|bn|ja)/);
        if (c) loc = c[1];
      }
    } catch (e) {}
    if (loc && loc !== 'en') {
      location.replace('/' + loc + '/' + location.search + location.hash);
    }
  } catch (e) {}
})();
`;

export default function RootPage() {
  return (
    <>
      <Script id="kg-instant-locale" strategy="beforeInteractive">
        {instantLocaleRedirect}
      </Script>
      <JsonLd />
      <LocalizedShell locale={DEFAULT_LOCALE}>
        <Home />
      </LocalizedShell>
    </>
  );
}

