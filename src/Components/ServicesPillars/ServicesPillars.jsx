'use client';

import React from 'react';
import Link from 'next/link';
import './ServicesPillars.css';
import { useLocale } from '../../i18n/LocaleContext';
import { resolveImage } from '../../lib/image';

import fdiImg from '../../Assets/services/global-business.webp';
import hrImg from '../../Assets/services/Overseas recruitment.webp';
import educationImg from '../../Assets/services/Japanese Language Education.webp';
import techImg from '../../Assets/services/Technology Solutions.webp';
import manufacturingImg from '../../Assets/services/Apparel Manufacturing.webp';
import travelImg from '../../Assets/services/Travel and Tourism Services.webp';
import partnershipsImg from '../../Assets/services/Strategic Business Partnerships.webp';

import {
  FaChartLine,
  FaUsers,
  FaGraduationCap,
  FaLaptopCode,
  FaIndustry,
  FaPlaneDeparture,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
  FaHistory,
  FaBuilding,
  FaShieldAlt,
  FaNetworkWired,
} from 'react-icons/fa';

const PILLARS_CONFIG = [
  {
    key: 'fdi',
    icon: FaChartLine,
    image: fdiImg,
    id: 'fdi-consulting',
  },
  {
    key: 'hr',
    icon: FaUsers,
    image: hrImg,
    id: 'human-resources-recruitment',
  },
  {
    key: 'education',
    icon: FaGraduationCap,
    image: educationImg,
    id: 'japanese-language-education',
  },
  {
    key: 'tech',
    icon: FaLaptopCode,
    image: techImg,
    id: 'technology-solutions',
  },
  {
    key: 'manufacturing',
    icon: FaIndustry,
    image: manufacturingImg,
    id: 'manufacturing-trade',
  },
  {
    key: 'travel',
    icon: FaPlaneDeparture,
    image: travelImg,
    id: 'travel-visa-services',
  },
  {
    key: 'partnerships',
    icon: FaHandshake,
    image: partnershipsImg,
    id: 'business-partnerships',
  },
];

const WHY_ICONS = [FaHistory, FaBuilding, FaShieldAlt, FaNetworkWired];

export default function ServicesPillars() {
  const { t, localizedPath } = useLocale();

  const getTranslationArray = (key) => {
    const data = t(key);
    return Array.isArray(data) ? data : [];
  };

  const whyCards = getTranslationArray('services.whyCards');

  return (
    <section className="svcPillars" id="services-pillars" aria-labelledby="svc-pillars-title">
      <div className="svcPillars__container">
        {/* Section Header */}
        <header className="svcPillars__header">
          <span className="svcPillars__eyebrow">{t('services.eyebrow')}</span>
          <h2 id="svc-pillars-title" className="svcPillars__title">
            {t('services.title')}
          </h2>
          <div className="svcPillars__divider" aria-hidden="true" />
          <p className="svcPillars__subtitle">{t('services.subtitle')}</p>
        </header>

        {/* 7 Core Service Cards Grid */}
        <div className="svcPillars__grid">
          {PILLARS_CONFIG.map(({ key, icon: Icon, image, id }, index) => {
            const badge = t(`services.pillars.${key}.badge`);
            const title = t(`services.pillars.${key}.title`);
            const desc = t(`services.pillars.${key}.desc`);
            const items = getTranslationArray(`services.pillars.${key}.items`);
            const isReversed = index % 2 === 1;

            return (
              <article
                key={key}
                id={id}
                className={`svcCard ${isReversed ? 'svcCard--reversed' : ''}`}
              >
                <div className="svcCard__media">
                  <img
                    {...resolveImage(image)}
                    alt={`${title} - Kawaii Group Japan-Bangladesh Service`}
                    loading="lazy"
                    decoding="async"
                    className="svcCard__img"
                  />
                  <div className="svcCard__mediaOverlay" />
                  <div className="svcCard__badgeRow">
                    <span className="svcCard__badge">
                      <Icon className="svcCard__badgeIcon" />
                      {badge}
                    </span>
                  </div>
                </div>

                <div className="svcCard__content">
                  <div className="svcCard__header">
                    <div className="svcCard__numBadge" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <span className="svcCard__cat">{badge}</span>
                      <h3 className="svcCard__title">{title}</h3>
                    </div>
                  </div>

                  <p className="svcCard__desc">{desc}</p>

                  <ul className="svcCard__list" aria-label={`Key deliverables for ${title}`}>
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx} className="svcCard__listItem">
                        <FaCheckCircle className="svcCard__checkIcon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="svcCard__action">
                    <Link href={localizedPath('/contact')} className="svcCard__btn">
                      <span>{t('services.inquireBtn') || 'Inquire About This Service'}</span>
                      <FaArrowRight className="svcCard__btnArrow" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <section className="svcWhy" aria-labelledby="svc-why-title">
          <div className="svcWhy__header">
            <h3 id="svc-why-title" className="svcWhy__title">
              {t('services.whyTitle')}
            </h3>
            <p className="svcWhy__subtitle">{t('services.whySubtitle')}</p>
          </div>

          <div className="svcWhy__grid">
            {whyCards.map((card, idx) => {
              const WhyIcon = WHY_ICONS[idx % WHY_ICONS.length];
              return (
                <div key={idx} className="svcWhy__card">
                  <div className="svcWhy__iconBox">
                    <WhyIcon className="svcWhy__icon" />
                  </div>
                  <h4 className="svcWhy__cardTitle">{card.title}</h4>
                  <p className="svcWhy__cardDesc">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
