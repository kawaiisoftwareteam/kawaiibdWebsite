'use client';

import React from 'react';
import { useLocale } from '../../i18n/LocaleContext';
import './GeoLanguageBanner.css';

const GeoLanguageBanner = () => {
  const { locale, showBanner, setLocale, dismissBanner, t } = useLocale();

  if (!showBanner) return null;

  const message =
    locale === 'bn' ? t('banner.bn') : locale === 'ja' ? t('banner.ja') : null;

  if (!message) return null;

  return (
    <div className="geo-lang-banner" role="region" aria-label="Language suggestion">
      <div className="geo-lang-banner__inner">
        <p className="geo-lang-banner__text">{message}</p>
        <div className="geo-lang-banner__actions">
          <button
            type="button"
            className="geo-lang-banner__yes"
            onClick={() => setLocale('en', 'manual')}
          >
            {t('banner.yes')}
          </button>
          <button
            type="button"
            className="geo-lang-banner__no"
            onClick={dismissBanner}
          >
            {t('banner.no')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeoLanguageBanner;
