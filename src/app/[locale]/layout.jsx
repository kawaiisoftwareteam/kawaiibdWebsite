'use client';

import React, { Suspense } from 'react';
import { LocaleProvider } from '../../i18n/LocaleContext';
import { isValidLocale } from '../../i18n/config';
import LocaleRedirect from '../../Components/LocaleRedirect/LocaleRedirect';
import GeoAutoSync from '../../Components/GeoAutoSync/GeoAutoSync';
import GeoLanguageBanner from '../../Components/GeoLanguageBanner/GeoLanguageBanner';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ScrollOnLoad from '../../Components/ScrollOnLoad/ScrollOnLoad';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { useRouteLoading } from '../../Hooks/useRouteLoading/useRouteLoading';

const LocalizedShellInner = ({ children }) => {
  const isLoading = useRouteLoading();

  return (
    <>
      <Suspense fallback={null}>
        <GeoAutoSync />
      </Suspense>
      <GeoLanguageBanner />
      <Navbar />
      <ScrollOnLoad />
      <ScrollToTop />
      {isLoading && <LoadingSpinner />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default function LocalizedLayout({ children, params }) {
  const locale = params?.locale;

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
