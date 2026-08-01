'use client';

import React from 'react';
import Link from 'next/link';
import './SpiderSisterConcerns.css';
import { useLocale } from '../../i18n/LocaleContext';

import sanjanaLogo from '../../Assets/Sister_Concerns/sanjana_logo.png';
import ajLogo from '../../Assets/Sister_Concerns/aj_logo.png';
import tredmigLogo from '../../Assets/Sister_Concerns/tredmig.svg';
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.png';
import kgjLogo from '../../Assets/Sister_Concerns/3_logo.png';
import bhLogo from '../../Assets/Sister_Concerns/bimanholidays.webp';
import kiecLogo from '../../Assets/Sister_Concerns/5_logo.png';
import kgvlLogo from '../../Assets/Sister_Concerns/kgvl_logo.svg';
import kjchsLogo from '../../Assets/Sister_Concerns/Asset_2_2x-removebg-preview.png';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const sisterConcernsData = [
  {
    id: 'aj',
    name: 'Achieve Japan',
    logo: ajLogo,
    anim: 'float',
    externalLink: 'https://achievejapanssw.com/',
  },
  {
    id: 'sanjanaHr',
    name: 'M/S Sanjana International',
    logo: sanjanaLogo,
    anim: 'pulse',
    externalLink: 'https://sanjanahr.com/',
  },
  {
    id: 'bh',
    name: 'Biman Holidays',
    logo: bhLogo,
    anim: 'sway',
    externalLink: 'https://bimanholidays.com/',
  },
  {
    id: 'tredmig',
    name: 'Tredmig',
    logo: tredmigLogo,
    anim: 'bounce',
    externalLink: 'https://tredmig.com/',
  },
  {
    id: 'katsl',
    name: 'KATSL',
    logo: katslLogo,
    anim: 'breathe',
    externalLink: 'https://katsl.vercel.app/',
  },
  {
    id: 'kgj',
    name: 'Kawaii Group Japan',
    logo: kgjLogo,
    anim: 'tilt',
    externalLink: 'https://kawaiigroupjapan.jp/',
    link: '/concerns',
  },
  {
    id: 'kiec',
    name: 'Kawaii Int. Education Center',
    logo: kiecLogo,
    anim: 'wiggle',
    externalLink: 'https://kawaiieducationbd.com/',
  },
  {
    id: 'kgvl',
    name: 'Kawaii Global Ventures',
    logo: kgvlLogo,
    anim: 'heartbeat',
    link: '/kawaii-global-ventures',
  },
  {
    id: 'kjchs',
    name: 'Kawaii Japan Career & HR',
    logo: kjchsLogo,
    anim: 'pan',
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

            return (
              <a
                key={item.id}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="scCard"
              >
                <div className="scCard__logoWrap">
                  <img
                    src={getSrc(item.logo)}
                    alt=""
                    aria-hidden="true"
                    className={`scCard__logo scCard__logo--${item.anim}`}
                  />
                </div>
                <h3 className="scCard__name">{item.name}</h3>
                <span className="scCard__link">
                  <svg
                    className="scCard__linkIcon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Visit Website
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpiderSisterConcerns;
