'use client';

import React from 'react';
import Link from 'next/link';
import './SpiderSisterConcerns.css';
import { useLocale } from '../../i18n/LocaleContext';

const sisterConcernsData = [
  {
    id: 'aj',
    name: 'Achieve Japan',
    externalLink: 'https://achievejapanssw.com/',
  },
  {
    id: 'sanjanaHr',
    name: 'M/S Sanjana International',
    externalLink: 'https://sanjanahr.com/',
  },
  {
    id: 'bh',
    name: 'Biman Holidays',
    externalLink: 'https://bimanholidays.com/',
  },
  {
    id: 'tredmig',
    name: 'Tredmig',
    externalLink: 'https://tredmig.com/',
  },
  {
    id: 'katsl',
    name: 'KATSL',
    externalLink: 'https://katsl.vercel.app/',
  },
  {
    id: 'kgj',
    name: 'Kawaii Group Japan',
    externalLink: 'https://kawaiigroupjapan.jp/',
    link: '/concerns',
  },
  {
    id: 'kiec',
    name: 'Kawaii Int. Education Center',
    externalLink: 'https://kawaiieducationbd.com/',
  },
  {
    id: 'kgvl',
    name: 'Kawaii Global Ventures',
    link: '/kawaii-global-ventures',
  },
  {
    id: 'kjchs',
    name: 'Kawaii Japan Career & HR',
    link: '/kawaii-japan-career-hr',
  },
];

const SpiderSisterConcerns = () => {
  const { t, localizedPath } = useLocale();

  return (
    <section className="scSection">
      <div className="scSection__inner">
        <header className="scIntro">
          <p className="scIntro__eyebrow">
            {t('nav.sisterConcerns') || 'Sister Concerns'}
          </p>
          <div className="scIntro__row">
            <h2 className="scIntro__title">
              Reliable Companies
              <br />
              Stronger <span>Together</span>
            </h2>
            <div className="scIntro__aside">
              <p className="scIntro__subtitle">
                {t('home.spiderConcerns.subtitle') ||
                  'Discover our diverse companies driving innovation and excellence across industries'}
              </p>
              <Link href={localizedPath('/concerns')} className="scIntro__cta">
                {t('home.spiderConcerns.allCompanies') &&
                t('home.spiderConcerns.allCompanies') !== 'home.spiderConcerns.allCompanies'
                  ? t('home.spiderConcerns.allCompanies')
                  : 'All Companies'}
              </Link>
            </div>
          </div>
        </header>

        <div className="scGrid">
          {sisterConcernsData.map((item) => {
            const href = item.externalLink || localizedPath(item.link || '/concerns');
            const isExternal = Boolean(item.externalLink);
            const business =
              t(`concernsPage.cards.${item.id}.desc`) ||
              t(`concernsPage.cards.${item.id}.type`) ||
              '';

            return (
              <a
                key={item.id}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="scCard"
              >
                <div className="scCard__content">
                  <h3 className="scCard__name">{item.name}</h3>
                  <p className="scCard__business">{business}</p>
                  <span className="scCard__link">
                    Visit Website
                    <svg
                      className="scCard__linkArrow"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpiderSisterConcerns;
