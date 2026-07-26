import React from 'react';
import { translate, useOptionalLocale } from '../../i18n/LocaleContext';
import { DEFAULT_LOCALE } from '../../i18n/config';
import { getStoredLocale } from '../../Hooks/useGeoLanguage/useGeoLanguage';

const LoadingSpinner = () => {
  // Rendered both inside the app shell and during pre-provider locale redirects
  const locale = useOptionalLocale();
  const label = locale
    ? locale.t('common.loading')
    : translate(getStoredLocale() || DEFAULT_LOCALE, 'common.loading');

  return (
    <div 
      className="fixed z-50 flex items-center justify-center" 
      style={{ 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%) scale(1.25)',
        width: '100vw',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.8)'
      }}
    >
      <div className="flex flex-col items-center">
        <div 
          className="w-16 h-16 border-4 border-l-transparent rounded-full animate-spin"
          style={{ 
            borderTopColor: '#BE1E2D',
            borderRightColor: '#BE1E2D',
            borderBottomColor: '#BE1E2D'
          }}
        ></div>
        <p className="mt-4 text-lg font-medium" style={{ color: '#BE1E2D' }}>
          {label}
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
