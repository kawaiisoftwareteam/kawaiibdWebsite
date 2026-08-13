import { Suspense } from 'react';
import Script from 'next/script';
import GoogleAnalytics from '../Components/GoogleAnalytics/GoogleAnalytics';
import { META, DEFAULT_LOCALE } from '../i18n/config';
import { SITE_URL, SITE_NAME, SITE_OG_IMAGE, buildPageMetadata } from '../lib/seo';
import { fontVariables } from '../lib/fonts';
import '../index.css';
import '../App.css';

const defaultSeo = buildPageMetadata({ locale: DEFAULT_LOCALE, path: '/' });

export const metadata = {
  ...defaultSeo,
  title: {
    default: META[DEFAULT_LOCALE].title,
    template: `%s | ${SITE_NAME}`,
  },
  description: META[DEFAULT_LOCALE].description,
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    'Kawaii Group',
    'Japan Bangladesh',
    'joint venture',
    'human resources',
    'education',
    'Japanese language training',
    'business consultancy',
    'Dhaka',
  ],
  openGraph: {
    ...defaultSeo.openGraph,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: defaultSeo.twitter,
  robots: {
    index: true,
    follow: true,
  },
};

/** Sets <html lang> from the URL locale before paint so Anek Bangla / JP fonts apply. */
const localeLangScript = `
(function () {
  try {
    var m = location.pathname.match(/^\\/(en|bn|ja)(?=\\/|$)/);
    if (m) document.documentElement.lang = m[1];
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        <Script id="kg-locale-lang" strategy="beforeInteractive">
          {localeLangScript}
        </Script>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
