'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import './ServicesShowcase.css';
import { useLocale } from '../../i18n/LocaleContext';
import { businessServices } from '../../data/businessServices';
import apparelImg from '../../Assets/services/Apparel Manufacturing.jpg';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const AUTO_MS = 4500;

const ArrowIcon = ({ direction = 'right' }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {direction === 'left' ? (
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ServicesShowcase = ({ showSeeMore = false }) => {
  const { t, localizedPath, locale } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const services = useMemo(
    () =>
      businessServices.map((item) => {
        const category = t(`ourBusiness.cards.${item.id}.category`);
        const title = t(`ourBusiness.cards.${item.id}.title`);
        const desc = t(`ourBusiness.cards.${item.id}.desc`);
        return {
          ...item,
          category:
            category && category !== `ourBusiness.cards.${item.id}.category`
              ? category
              : item.category,
          title:
            title && title !== `ourBusiness.cards.${item.id}.title`
              ? title
              : item.title,
          desc:
            desc && desc !== `ourBusiness.cards.${item.id}.desc`
              ? desc
              : item.desc,
        };
      }),
    [t, locale]
  );

  const seeMoreText = (() => {
    const val = t('ourBusiness.seeMore');
    if (!val || val === 'ourBusiness.seeMore') return 'See More';
    return val;
  })();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, services.length - cardsToShow);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    if (paused || maxIndex === 0) return undefined;
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, AUTO_MS);
    return () => window.clearInterval(timerRef.current);
  }, [paused, maxIndex]);

  const activeBg = services[currentIndex]?.image || apparelImg;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="bizIntro">
      <div className="bizIntro__curve" key={services[currentIndex]?.id}>
        <img src={getSrc(activeBg)} alt="" className="bizIntro__curveImg" />
      </div>

      <div className="bizIntro__inner">
        <header className="bizIntro__header">
          <h2 className="bizIntro__title">
            <span>{t('ourBusiness.titleLine1')}</span>
            <span>{t('ourBusiness.titleLine2')}</span>
          </h2>
        </header>

        <div
          className="bizIntro__panel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="bizIntro__nav bizIntro__nav--prev"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="bizIntro__viewport">
            <div
              className="bizIntro__track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {services.map((item) => (
                <article
                  key={item.id}
                  className="bizIntro__card"
                  style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                >
                  <div className="bizIntro__cardBody">
                    <div className="bizIntro__media">
                      <img src={getSrc(item.image)} alt={item.title} />
                    </div>

                    <div className="bizIntro__meta">
                      <p className="bizIntro__category">{item.category}</p>
                      <div className="bizIntro__titleRow">
                        <h3 className="bizIntro__cardTitle">{item.title}</h3>
                        <div className="bizIntro__action">
                          <span className="bizIntro__line" />
                          <Link
                            href={localizedPath('/our-business')}
                            className="bizIntro__arrow"
                            aria-label={`Explore ${item.title}`}
                          >
                            <ArrowIcon direction="right" />
                          </Link>
                        </div>
                      </div>
                      <p className="bizIntro__desc">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="bizIntro__nav bizIntro__nav--next"
            onClick={nextSlide}
            aria-label="Next"
          >
            <ArrowIcon direction="right" />
          </button>

          {showSeeMore && (
            <div className="bizIntro__footerCta">
              <Link
                href={localizedPath('/our-business')}
                className="bizIntro__seeMore"
                aria-label="See more about our business"
              >
                <span>{seeMoreText}</span>
                <span className="bizIntro__seeMoreIcon">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
