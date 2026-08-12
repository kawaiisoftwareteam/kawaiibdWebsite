'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './SpiderSisterConcerns.css';
import { useLocale } from '../../i18n/LocaleContext';

import kgvlImg from '../../Assets/jpBusinessCenter.webp';
import kjchsImg from '../../Assets/ssw2.webp';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const sisterConcernsData = [
  {
    id: 'aj',
    name: 'Achieve Japan',
    image: '/sister-slider/achieve_japan.webp',
    externalLink: 'https://achievejapanssw.com/',
  },
  {
    id: 'sanjanaHr',
    name: 'M/S Sanjana International',
    image: '/sister-slider/sanjana_hr.webp',
    externalLink: 'https://sanjanahr.com/',
  },
  {
    id: 'bh',
    name: 'Biman Holidays',
    image: '/sister-slider/biman_holidays.webp',
    externalLink: 'https://bimanholidays.com/',
  },
  {
    id: 'tredmig',
    name: 'Tredmig',
    image: '/sister-slider/tredmig_trade.webp',
    externalLink: 'https://tredmig.com/',
  },
  {
    id: 'katsl',
    name: 'Kawaii Advanced Technology & Solution',
    image: '/sister-slider/katsl_tech.webp',
    externalLink: 'https://katsl.vercel.app/',
  },
  {
    id: 'kgj',
    name: 'Kawaii Group Japan',
    image: '/sister-slider/kgj_japan.webp',
    externalLink: 'https://kawaiigroupjapan.jp/',
    link: '/concerns',
  },
  {
    id: 'kddl',
    name: 'Japan Kawaii Design & Development',
    image: '/sister-slider/kddl_design.webp',
    link: '/concerns',
  },
  {
    id: 'kiec',
    name: 'Kawaii International Education Center',
    image: '/sister-slider/kiec_edu.webp',
    externalLink: 'https://kawaiieducationbd.com/',
  },
  {
    id: 'kgvl',
    name: 'Kawaii Global Ventures Limited',
    image: kgvlImg,
    link: '/kawaii-global-ventures',
  },
  {
    id: 'kjchs',
    name: 'Kawaii Japan Career & HR Solutions',
    image: kjchsImg,
    link: '/kawaii-japan-career-hr',
  },
];

const TOTAL = sisterConcernsData.length;

const wrapIndex = (index) => ((index % TOTAL) + TOTAL) % TOTAL;

const SpiderSisterConcerns = () => {
  const { t, localizedPath } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const visibleSlots = [-2, -1, 0, 1, 2].map((offset) => {
    const index = wrapIndex(activeIndex + offset);
    return {
      offset,
      index,
      item: sisterConcernsData[index],
      isCenter: offset === 0,
    };
  });

  const activeItem = sisterConcernsData[activeIndex];
  const activeHref = activeItem.externalLink || localizedPath(activeItem.link || '/concerns');
  const activeIsExternal = Boolean(activeItem.externalLink);

  return (
    <section className="scSection">
      <div className="scSection__inner">
        <header className="scIntro">
          <p className="scIntro__eyebrow">
            {t('nav.sisterConcerns')}
          </p>
          <div className="scIntro__row">
            <h2 className="scIntro__title">
              {t('home.spiderConcerns.headline1')}
              <br />
              {t('home.spiderConcerns.headline2')}{' '}
              <span>{t('home.spiderConcerns.headlineAccent')}</span>
            </h2>
            <div className="scIntro__aside">
              <p className="scIntro__subtitle">
                {t('home.spiderConcerns.subtitle')}
              </p>
              <Link href={localizedPath('/concerns')} className="scIntro__cta">
                {t('home.spiderConcerns.allCompanies')}
              </Link>
            </div>
          </div>
        </header>

        <div className="scGallery">
          <div className="scGallery__track" key={activeIndex}>
            {visibleSlots.map(({ offset, index, item, isCenter }) => {
              if (isCenter) {
                return (
                  <a
                    key={`${item.id}-center`}
                    href={activeHref}
                    target={activeIsExternal ? '_blank' : undefined}
                    rel={activeIsExternal ? 'noopener noreferrer' : undefined}
                    className="scGallery__center"
                  >
                    <img
                      src={getSrc(item.image)}
                      alt={item.name}
                      className="scGallery__img"
                    />
                    <span className="scGallery__badge">{item.name}</span>
                  </a>
                );
              }

              return (
                <button
                  key={`${item.id}-${offset}`}
                  type="button"
                  className={`scGallery__pill scGallery__pill--${offset < 0 ? 'left' : 'right'}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${item.name}`}
                >
                  <img
                    src={getSrc(item.image)}
                    alt={item.name}
                    className="scGallery__img"
                  />
                </button>
              );
            })}
          </div>

          <div className="scDots">
            {sisterConcernsData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`scDot ${idx === activeIndex ? 'scDot--active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                title={item.name}
                aria-label={`Slide to ${item.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiderSisterConcerns;
