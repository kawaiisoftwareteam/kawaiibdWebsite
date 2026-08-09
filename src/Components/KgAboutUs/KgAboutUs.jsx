'use client';

import React, { useEffect, useRef, useState } from 'react';
import './KgAboutUs.css';
import kawaiiJpeg from '../../Assets/kawaii.jpeg';
import heroBg from '../../Assets/kawaii_hero_bg.png';
import { useLocale } from '../../i18n/LocaleContext';
import ServicesShowcase from '../ServicesShowcase/ServicesShowcase';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

/* ─── Intersection Observer hook ─── */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, isVisible];
};

/* ─── Animated Counter ─── */
const CountUp = ({ end, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const [ref, visible] = useScrollReveal();

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.max(1, Math.ceil(end / (duration / 30)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ─── Sakura Petals ─── */
const SakuraPetals = () => {
  const petals = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${(i * 7.3) % 100}%`,
    delay: `${(i * 0.6) % 8}s`,
    duration: `${6 + (i % 4) * 2}s`,
    size: `${16 + (i % 3) * 6}px`,
  }));

  return (
    <div className="kg-sakura-container">
      {petals.map((p) => (
        <div
          key={p.id}
          className="kg-petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════
   1. HERO SECTION
═══════════════════════════════════════ */
const HeroSection = ({ t }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.01 });

  return (
    <section className="kg-hero">
      <div
        className="kg-hero-bg"
        style={{ backgroundImage: `url(${getSrc(heroBg)})` }}
      />
      <div className="kg-hero-overlay" />
      <SakuraPetals />
      <div
        ref={ref}
        className={`kg-hero-content kg-fade-up ${visible ? 'kg-visible' : ''}`}
      >
        <div className="kg-hero-eyebrow">{t('aboutUs.hero.eyebrow')}</div>
        <h1 className="kg-hero-title">
          {t('aboutUs.hero.title1')} <span>{t('aboutUs.hero.title2')}</span>
        </h1>
        <p className="kg-hero-subtitle">{t('aboutUs.hero.subtitle')}</p>
        <div className="kg-hero-badge-row">
          <span className="kg-hero-badge">{t('aboutUs.hero.badge1')}</span>
          <span className="kg-hero-badge">{t('aboutUs.hero.badge2')}</span>
          <span className="kg-hero-badge">{t('aboutUs.hero.badge3')}</span>
          <span className="kg-hero-badge">{t('aboutUs.hero.badge4')}</span>
        </div>
      </div>
      <div className="kg-hero-wave">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#FFFBF7"
          />
        </svg>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   2. INTRO / OUR STORY — image-led editorial split
═══════════════════════════════════════ */
const IntroSection = ({ t }) => {
  const [mediaRef, mediaVisible] = useScrollReveal();
  const [copyRef, copyVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();

  const stats = [
    { num: 10, suffix: '+', labelKey: 'aboutUs.intro.stats.companies' },
    { num: 6, suffix: '', labelKey: 'aboutUs.intro.stats.countries' },
    { num: 37, suffix: '+', labelKey: 'aboutUs.intro.stats.years' },
    { num: 500, suffix: '+', labelKey: 'aboutUs.intro.stats.partners' },
  ];

  return (
    <section className="kg-story">
      <div className="kg-story__grid">
        <div
          ref={mediaRef}
          className={`kg-story__media kg-fade-left ${mediaVisible ? 'kg-visible' : ''}`}
        >
          <img
            src={getSrc(kawaiiJpeg)}
            alt="Kawaii Group Japan Bangladesh office"
            className="kg-story__img"
          />
        </div>

        <div
          ref={copyRef}
          className={`kg-story__copy kg-fade-right ${copyVisible ? 'kg-visible' : ''}`}
        >
          <div className="kg-section-label">{t('aboutUs.intro.sectionLabel')}</div>
          <h2 className="kg-story__title">
            {t('aboutUs.intro.title1')}{' '}
            <span>{t('aboutUs.intro.title2')}</span>
          </h2>
          <p className="kg-story__lead">{t('aboutUs.intro.p1')}</p>
          <div className="kg-story__body">
            <p>{t('aboutUs.intro.p2')}</p>
            <p>{t('aboutUs.intro.p4')}</p>
            <p>{t('aboutUs.intro.p5')}</p>
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className={`kg-story__metrics kg-stagger ${statsVisible ? 'kg-story__metrics--visible' : ''}`}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className={`kg-story__metric kg-scale-in ${statsVisible ? 'kg-visible' : ''}`}
            style={{ transitionDelay: `${0.08 + i * 0.08}s` }}
          >
            <div className="kg-story__metric-num">
              <CountUp end={s.num} suffix={s.suffix} />
            </div>
            <div className="kg-story__metric-label">{t(s.labelKey)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   3. MISSION & VISION
═══════════════════════════════════════ */
const MissionVisionSection = ({ t }) => {
  const [ref, v] = useScrollReveal();
  return (
    <section className="kg-section-alt">
      <div
        ref={ref}
        className={`kg-fade-up ${v ? 'kg-visible' : ''}`}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <div className="kg-section-label" style={{ justifyContent: 'center' }}>
          {t('aboutUs.mv.sectionLabel')}
        </div>
        <h2 className="kg-section-title" style={{ textAlign: 'center' }}>
          {t('aboutUs.mv.title1')} <span>{t('aboutUs.mv.title2')}</span> &amp;{' '}
          <span>{t('aboutUs.mv.title3')}</span>
        </h2>
      </div>

      <div className="kg-mv-grid kg-stagger">
        <div
          className={`kg-mv-card kg-mv-card--mission kg-fade-left ${
            v ? 'kg-visible' : ''
          }`}
        >
          <div className="kg-mv-icon">🎯</div>
          <div className="kg-mv-title">{t('aboutUs.mv.missionTitle')}</div>
          <div className="kg-mv-body">{t('aboutUs.mv.missionBody')}</div>
          <div className="kg-mv-corner" />
        </div>
        <div
          className={`kg-mv-card kg-mv-card--vision kg-fade-right ${
            v ? 'kg-visible' : ''
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="kg-mv-icon">🌐</div>
          <div className="kg-mv-title">{t('aboutUs.mv.visionTitle')}</div>
          <div className="kg-mv-body">{t('aboutUs.mv.visionBody')}</div>
          <div className="kg-mv-corner" />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   4. CORE VALUES
═══════════════════════════════════════ */
const CoreValuesSection = ({ t }) => {
  const [ref, v] = useScrollReveal();
  const rawItems = t('aboutUs.values.items');
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section className="kg-section-blue">
      <div
        ref={ref}
        className={`kg-fade-up ${v ? 'kg-visible' : ''}`}
        style={{ textAlign: 'center' }}
      >
        <div className="kg-section-label" style={{ justifyContent: 'center' }}>
          {t('aboutUs.values.sectionLabel')}
        </div>
        <h2 className="kg-section-title" style={{ textAlign: 'center' }}>
          {t('aboutUs.values.title1')} <span>{t('aboutUs.values.title2')}</span>
        </h2>
        <p
          className="kg-section-body"
          style={{ textAlign: 'center', margin: '0 auto 0' }}
        >
          {t('aboutUs.values.subtitle')}
        </p>
      </div>

      <div className="kg-values-grid kg-stagger">
        {items.map((val, i) => (
          <div
            key={i}
            className={`kg-value-card kg-fade-up ${v ? 'kg-visible' : ''}`}
            style={{ transitionDelay: `${i * 0.09}s` }}
          >
            <div className="kg-value-icon-wrap">{val.icon}</div>
            <div className="kg-value-name">{val.name}</div>
            <div className="kg-value-desc">{val.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════ */
const KgAboutUs = () => {
  const { t } = useLocale();

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>
      <HeroSection t={t} />
      <IntroSection t={t} />
      <ServicesShowcase />
      <MissionVisionSection t={t} />
      <CoreValuesSection t={t} />
    </div>
  );
};

export default KgAboutUs;
