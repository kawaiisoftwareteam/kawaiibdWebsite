'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './SpiderSisterConcerns.css';
import { useLocale } from '../../i18n/LocaleContext';

// Sister Concern Logos
import sanjanaLogo from '../../Assets/Sister_Concerns/sanjana_logo.png';
import ajLogo from '../../Assets/Sister_Concerns/aj_logo.png';
import tredmigLogo from '../../Assets/Sister_Concerns/tredmig.svg';
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.png';
import kgjLogo from '../../Assets/Sister_Concerns/3_logo.png';
import bhLogo from '../../Assets/Sister_Concerns/bimanholidays.webp';
import kddlLogo from '../../Assets/Sister_Concerns/4_logo.png';
import kiecLogo from '../../Assets/Sister_Concerns/5_logo.png';
import kgvlLogo from '../../Assets/Sister_Concerns/kgvl_logo.svg';
import kjchsLogo from '../../Assets/Sister_Concerns/Asset_2_2x-removebg-preview.png';

// Cover Images
import ajCover from '../../Assets/achieve_japan_pagoda_fuji.png';
import sanjanaCover from '../../Assets/BMET27.jpg';
import tredmigCover from '../../Assets/tredmigcover.jpg';
import katslCover from '../../Assets/SaaSKats.png';
import kgjCover from '../../Assets/jpBusinessCenter.png';
import bhCover from '../../Assets/bimanh.jpg';
import kddlCover from '../../Assets/jpPachdonaTower.png';
import kiecCover from '../../Assets/aboutCover.png';
import kgvlCover from '../../Assets/kgvl_cover.png';
import kjchsCover from '../../Assets/career_support.png';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const sisterConcernsData = [
  {
    id: 'aj',
    name: 'Achieve Japan',
    category: 'SSW & Japanese Training',
    logo: ajLogo,
    cover: ajCover,
    externalLink: 'https://achievejapanssw.com/',
  },
  {
    id: 'sanjanaHr',
    name: 'M/S Sanjana International',
    category: 'Manpower & HR Recruiting',
    logo: sanjanaLogo,
    cover: sanjanaCover,
    externalLink: 'https://sanjanahr.com/',
  },
  {
    id: 'bh',
    name: 'Biman Holidays',
    category: 'Travel & Tourism',
    logo: bhLogo,
    cover: bhCover,
    externalLink: 'https://bimanholidays.com/',
  },
  {
    id: 'tredmig',
    name: 'Tredmig',
    category: 'E-Commerce & Digital',
    logo: tredmigLogo,
    cover: tredmigCover,
    externalLink: 'https://tredmig.com/',
  },
  {
    id: 'katsl',
    name: 'KATSL',
    fullName: 'Kawaii Advanced Tech & Solution',
    category: 'Software & Technology',
    logo: katslLogo,
    cover: katslCover,
    externalLink: 'https://katsl.vercel.app/',
  },
  {
    id: 'kgj',
    name: 'Kawaii Group Japan',
    category: 'Japan Headquarters',
    logo: kgjLogo,
    cover: kgjCover,
    externalLink: 'https://kawaiigroupjapan.jp/',
    link: '/concerns',
  },
  {
    id: 'kddl',
    name: 'Japan Kawaii Design & Dev',
    category: 'Architecture & Design',
    logo: kddlLogo,
    cover: kddlCover,
    link: '/concerns',
  },
  {
    id: 'kiec',
    name: 'Kawaii Int. Education Center',
    category: 'Global Education',
    logo: kiecLogo,
    cover: kiecCover,
    externalLink: 'https://kawaiieducationbd.com/',
  },
  {
    id: 'kgvl',
    name: 'Kawaii Global Ventures',
    category: 'Investments & Business',
    logo: kgvlLogo,
    cover: kgvlCover,
    link: '/kawaii-global-ventures',
  },
  {
    id: 'kjchs',
    name: 'Kawaii Japan Career & HR',
    category: 'Career & Talent Placement',
    logo: kjchsLogo,
    cover: kjchsCover,
    link: '/kawaii-japan-career-hr',
  },
];

const SpiderSisterConcerns = () => {
  const { t, localizedPath } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const total = sisterConcernsData.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, total]);

  const getItemAtOffset = (offset) => {
    const idx = (activeIndex + offset + total * 10) % total;
    return { ...sisterConcernsData[idx], realIndex: idx };
  };

  const farLeft = getItemAtOffset(-2);
  const innerLeft = getItemAtOffset(-1);
  const activeItem = getItemAtOffset(0);
  const innerRight = getItemAtOffset(1);
  const farRight = getItemAtOffset(2);

  const visibleItems = [
    { item: farLeft, posClass: 'posFarLeft' },
    { item: innerLeft, posClass: 'posInnerLeft' },
    { item: activeItem, posClass: 'posCenter' },
    { item: innerRight, posClass: 'posInnerRight' },
    { item: farRight, posClass: 'posFarRight' },
  ];

  const activeConcern = sisterConcernsData[activeIndex];
  const targetLink = activeConcern.externalLink || localizedPath(activeConcern.link || '/concerns');

  return (
    <section className="scSectionMain">
      <div className="scContainer">
        {/* Header Section */}
        <div className="scHeaderGrid">
          <div className="scHeaderLeft">
            <div className="scGroupBadge">
              <span className="scBadgeDot"></span>
              <span className="scBadgeText">{t('nav.sisterConcerns') || 'OUR GROUP'}</span>
            </div>
            <h2 className="scHeaderTitle">
              Reliable Companies
              <br />
              Stronger <em className="scSerifItalic">Together</em>
            </h2>
          </div>

          <div className="scHeaderRight">
            <p className="scHeaderSubtitle">
              {t('home.spiderConcerns.subtitle') ||
                'Discover our diverse companies driving innovation and excellence across industries'}
            </p>
            <Link href={localizedPath('/concerns')}>
              <div className="scAllCompaniesBtn">
                <span>
                  {t('home.spiderConcerns.allCompanies') &&
                  t('home.spiderConcerns.allCompanies') !== 'home.spiderConcerns.allCompanies'
                    ? t('home.spiderConcerns.allCompanies')
                    : t('home.spiderConcerns.explore') || 'All Companies'}
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Desktop Showcase Layout (>992px) */}
        <div
          className="scGalleryShowcase scDesktopGallery"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="scGalleryFlex">
            {visibleItems.map(({ item, posClass }) => {
              const isCenter = posClass === 'posCenter';
              const itemLink = item.externalLink || localizedPath(item.link || '/concerns');

              if (isCenter) {
                return (
                  <div key={item.id} className="scMainFeaturedCard">
                    <img
                      src={getSrc(item.cover)}
                      alt={item.name}
                      className="scMainFeaturedImg"
                    />
                    <div className="scMainGradientOverlay"></div>

                    {/* Floating Bottom-Right Glassmorphism Badge */}
                    <a
                      href={itemLink}
                      target={item.externalLink ? '_blank' : '_self'}
                      rel={item.externalLink ? 'noopener noreferrer' : ''}
                      className="scGlassBadge"
                    >
                      <span className="scGlassBadgeName">{item.name}</span>
                      <svg
                        className="scGlassBadgeIcon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className={`scPillCard ${posClass}`}
                  onClick={() => setActiveIndex(item.realIndex)}
                >
                  <img
                    src={getSrc(item.cover)}
                    alt={item.name}
                    className="scPillImg"
                  />
                  <div className="scPillHoverOverlay">
                    <span className="scPillCategory">{item.category}</span>
                    <span className="scPillTitle">{item.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Showcase Layout (<=992px) */}
        <div
          className="scMobileShowcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Featured Card on Mobile */}
          <div className="scMainFeaturedCard scMobileFeaturedCard">
            <img
              src={getSrc(activeConcern.cover)}
              alt={activeConcern.name}
              className="scMainFeaturedImg"
            />
            <div className="scMainGradientOverlay"></div>

            <a
              href={targetLink}
              target={activeConcern.externalLink ? '_blank' : '_self'}
              rel={activeConcern.externalLink ? 'noopener noreferrer' : ''}
              className="scGlassBadge"
            >
              <span className="scGlassBadgeName">{activeConcern.name}</span>
              <svg
                className="scGlassBadgeIcon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Horizontal Scrollable Pill Strip */}
          <div className="scMobilePillsScroll">
            {sisterConcernsData.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  className={`scMobilePillItem ${isActive ? 'scMobilePillActive' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img src={getSrc(item.cover)} alt={item.name} className="scMobilePillImg" />
                  <div className="scMobilePillOverlay">
                    <span className="scMobilePillTitle">{item.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Shared Controls (Dots + Arrows) */}
        <div className="scNavControls">
          <button className="scNavArrow scNavPrev" onClick={handlePrev} aria-label="Previous Concern">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="scDotsWrapper">
            {sisterConcernsData.map((concern, idx) => (
              <button
                key={concern.id}
                className={`scDot ${idx === activeIndex ? 'activeDot' : ''}`}
                onClick={() => setActiveIndex(idx)}
                title={concern.name}
                aria-label={concern.name}
              />
            ))}
          </div>

          <button className="scNavArrow scNavNext" onClick={handleNext} aria-label="Next Concern">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpiderSisterConcerns;
