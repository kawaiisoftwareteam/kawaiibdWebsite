'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '../../i18n/LocaleContext';
import './HomeBridge.css';

const HomeBridge = () => {
  const { t, localizedPath } = useLocale();

  return (
    <section className="homeBridge" aria-labelledby="home-bridge-title">
      <div className="homeBridge__inner">
        <p className="homeBridge__eyebrow">{t('home.bridge.eyebrow')}</p>
        <h3 id="home-bridge-title" className="homeBridge__title">
          {t('home.bridge.title')}
        </h3>
        <div className="homeBridge__copy">
          <p>{t('home.bridge.p1')}</p>
          <p>{t('home.bridge.p2')}</p>
          <p>{t('home.bridge.p3')}</p>
          <p>{t('home.bridge.p4')}</p>
        </div>
        <div className="homeBridge__actions">
          <Link href={localizedPath('/about')} className="homeBridge__link">
            {t('home.bridge.ctaAbout')}
          </Link>
          <Link href={localizedPath('/contact')} className="homeBridge__link homeBridge__link--solid">
            {t('home.bridge.ctaContact')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBridge;
