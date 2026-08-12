'use client';

import React from 'react';
import Link from 'next/link';
import './HomeAboutUs.css';
import { useLocale } from '../../i18n/LocaleContext';
import aboutUs1 from '../../Assets/aboutUs1.webp';
import aboutUs2 from '../../Assets/aboutUs2.webp';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const HomeAboutUs = () => {
  const { t, localizedPath } = useLocale();

  return (
    <section className="homeAboutUsSection">
      {/* Background Vertical Watermark */}
      <div className="homeAboutUsWatermark" aria-hidden="true">
        {t('home.aboutUs.watermark')}
      </div>

      <div className="homeAboutUsContainer">
        {/* Left Side: Overlapping Images */}
        <div className="homeAboutUsImages">
          <div className="homeAboutUsMainImgWrapper">
            <img
              src={getSrc(aboutUs1)}
              alt="Kawaii Group Team at Work"
              className="homeAboutUsMainImg"
            />
          </div>
          <div className="homeAboutUsSubImgWrapper">
            <img
              src={getSrc(aboutUs2)}
              alt="Visionary Future"
              className="homeAboutUsSubImg"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="homeAboutUsContent">
          <h2 className="homeAboutUsTitle">
            {t('home.aboutUs.title')}
          </h2>

          <h3 className="homeAboutUsSubtitle">
            {t('home.aboutUs.subtitle')}
          </h3>

          <p className="homeAboutUsDescription">
            {t('home.aboutUs.description')}
          </p>
          <p className="homeAboutUsDescription homeAboutUsDescription--extra">
            {t('home.aboutUs.description2')}
          </p>
          <p className="homeAboutUsDescription homeAboutUsDescription--extra">
            {t('home.aboutUs.description3')}
          </p>

          <div className="homeAboutUsCtaRow">
            <Link href={localizedPath('/about')} className="homeAboutUsCtaGroup">
              <span className="homeAboutUsCtaLabel">
                {t('home.aboutUs.cta')}
              </span>
              <span className="homeAboutUsCtaLine"></span>
              <div className="homeAboutUsCtaButton">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="homeAboutUsArrowIcon"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
