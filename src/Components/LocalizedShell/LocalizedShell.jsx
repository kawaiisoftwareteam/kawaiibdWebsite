'use client';

import React, { Suspense } from 'react';
import { LocaleProvider } from '../../i18n/LocaleContext';
import { isValidLocale } from '../../i18n/config';
import LocaleRedirect from '../LocaleRedirect/LocaleRedirect';
import GeoAutoSync from '../GeoAutoSync/GeoAutoSync';
import GeoLanguageBanner from '../GeoLanguageBanner/GeoLanguageBanner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollOnLoad from '../ScrollOnLoad/ScrollOnLoad';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const LocalizedShellInner = ({ children }) => {
  return (
    <>
      <Suspense fallback={null}>
        <GeoAutoSync />
      </Suspense>
      <GeoLanguageBanner />
      <Navbar />
      <ScrollOnLoad />
      <ScrollToTop />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default function LocalizedShell({ children, locale }) {
  if (!isValidLocale(locale)) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <LocaleRedirect />
      </Suspense>
    );
  }

  return (
    <LocaleProvider>
      <LocalizedShellInner>{children}</LocalizedShellInner>
    </LocaleProvider>
  );
}
