'use client';

import React, { Suspense } from 'react';
import Script from 'next/script';
import LocaleRedirect from '../Components/LocaleRedirect/LocaleRedirect';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

/**
 * Runs before React hydrates so kawaiibd.com enters a locale instantly
 * (no geo API wait). Stored language wins; otherwise English.
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
    location.replace('/' + loc + '/' + location.search + location.hash);
  } catch (e) {}
})();
`;

export default function RootPage() {
  return (
    <>
      <Script id="kg-instant-locale" strategy="beforeInteractive">
        {instantLocaleRedirect}
      </Script>
      <Suspense fallback={<LoadingSpinner />}>
        <LocaleRedirect />
      </Suspense>
    </>
  );
}
