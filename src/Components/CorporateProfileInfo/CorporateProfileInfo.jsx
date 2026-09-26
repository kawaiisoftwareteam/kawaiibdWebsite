'use client';

import React from 'react';
import './CorporateProfileInfo.css';
import { useLocale } from '../../i18n/LocaleContext';

const PENDING_KEYS = new Set(['corporateNumber', 'representative', 'established']);

const CorporateProfileInfo = ({ fieldKeys }) => {
  const { t } = useLocale();

  return (
    <div className="cp_info">
      <div className="cp_info__head">
        <p className="cp_info__eyebrow">{t('corporate.sectionEyebrow')}</p>
        <h2 className="cp_info__title">{t('corporate.sectionTitle')}</h2>
        <p className="cp_info__asOf">{t('corporate.asOf')}</p>
      </div>

      <dl className="cp_info__table">
        {fieldKeys.map((key) => {
          const value = t(`corporate.values.${key}`);
          const isPending = PENDING_KEYS.has(key) || value.startsWith('[');

          return (
            <div className="cp_info__row" key={key}>
              <dt className="cp_info__label">{t(`corporate.fields.${key}`)}</dt>
              <dd className={`cp_info__value${isPending ? ' cp_info__value--pending' : ''}`}>
                {key === 'website' ? (
                  <a href="https://kawaiibd.com" target="_blank" rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default CorporateProfileInfo;
