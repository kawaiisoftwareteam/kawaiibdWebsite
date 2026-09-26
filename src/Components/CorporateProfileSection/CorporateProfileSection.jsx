'use client';

import React from 'react';
import './CorporateProfileSection.css';
import CorporateProfileInfo from '../CorporateProfileInfo/CorporateProfileInfo';
import { useLocale } from '../../i18n/LocaleContext';

const FIELD_KEYS = [
  'companyName',
  'corporateNumber',
  'listingMarket',
  'representative',
  'headOffice',
  'corporateOffice',
  'established',
  'capital',
  'employees',
  'majorBanks',
  'affiliation',
  'website',
];

const STAT_KEYS = ['listingMarket', 'capital', 'employees'];

const CorporateProfileSection = () => {
  const { t } = useLocale();

  return (
    <section className="cp_main">
      <div className="cp_intro">
        <p className="cp_intro__eyebrow">{t('corporate.companyHeader')}</p>
        <h2 className="cp_intro__title">{t('corporate.heroTitle')}</h2>
        <p className="cp_intro__text">{t('corporate.heroText')}</p>
      </div>

      <div className="cp_stats" aria-label={t('corporate.sectionTitle')}>
        {STAT_KEYS.map((key) => (
          <div className="cp_stat" key={key}>
            <span className="cp_stat__label">{t(`corporate.fields.${key}`)}</span>
            <span className="cp_stat__value">{t(`corporate.values.${key}`)}</span>
          </div>
        ))}
      </div>

      <CorporateProfileInfo fieldKeys={FIELD_KEYS} />
    </section>
  );
};

export default CorporateProfileSection;
