'use client';

import React from 'react';
import Link from 'next/link';
import './OurBusinessPage.css';
import { useLocale } from '../../i18n/LocaleContext';
import { businessServices } from '../../data/businessServices';

import ourBusinessBanner from '../../Assets/ourBusinessBanner.png';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const OurBusinessPage = () => {
  const { t, localizedPath } = useLocale();

  const getText = (key, fallback) => {
    const val = t(key);
    if (!val || typeof val !== 'string' || val === key) return fallback;
    return val;
  };

  const title1 = getText('ourBusiness.titleLine1', 'OUR');
  const title2 = getText('ourBusiness.titleLine2', 'BUSINESS');
  const subtitle = getText(
    'ourBusiness.subtitle',
    'A complete view of the sectors where Kawaii Group delivers manufacturing, trade, technology, education, and workforce solutions across Japan, Bangladesh, and global markets.'
  );
  const contactCta = getText('ourBusiness.contactCta', 'Get in Touch');

  return (
    <main className="obPage">
      <div className="obPage__hero">
        <div className="obPage__heroInner">
          <div className="obPage__heroContent">
            <p className="obPage__eyebrow">
              {getText('ourBusiness.eyebrow', 'KAWAII GROUP PORTFOLIO')}
            </p>
            <h1 className="obPage__title">
              <span>{title1}</span>
              <span>{title2}</span>
            </h1>
            <p className="obPage__subtitle">{subtitle}</p>
          </div>
          <div className="obPage__heroMedia">
            <img src={getSrc(ourBusinessBanner)} alt="Kawaii Group Business Portfolio" />
          </div>
        </div>
      </div>

      <div className="obPage__body">
        <ol className="obPage__list">
          {businessServices.map((item, idx) => (
            <li className="obPage__item" key={item.id} id={item.id}>
              <div className="obPage__itemIndex" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="obPage__itemMedia">
                <img src={getSrc(item.image)} alt={item.title} />
              </div>

              <div className="obPage__itemCopy">
                <span className="obPage__itemCat">{item.category}</span>
                <h2 className="obPage__itemTitle">{item.title}</h2>
                <p className="obPage__itemDesc">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="obPage__ctaRow">
          <Link href={localizedPath('/contact')} className="obPage__cta">
            {contactCta}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OurBusinessPage;
