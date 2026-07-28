'use client';

import React, { Suspense } from 'react';
import LocaleRedirect from '../Components/LocaleRedirect/LocaleRedirect';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

export default function RootPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LocaleRedirect />
    </Suspense>
  );
}
