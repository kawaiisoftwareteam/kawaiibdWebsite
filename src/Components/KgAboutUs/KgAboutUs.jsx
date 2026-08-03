import React, { useEffect, useRef, useState } from 'react';
import './KgAboutUs.css';
import kawaiiJpeg from '../../Assets/kawaii.jpeg';
import heroBg from '../../Assets/kawaii_hero_bg.png';
import { useLocale } from '../../i18n/LocaleContext';

/* ─── Intersection Observer hook ─── */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.10, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, isVisible];
};

/* ─── Animated Counter ─── */
const CountUp = ({ end, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const [ref, visible] = useScrollReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
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
      {petals.map(p => (
        <div key={p.id} className="kg-petal" style={{
          left: p.left,
          animationDelay: p.delay,
          animationDuration: p.duration,
          fontSize: p.size,
        }}>🌸</div>
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
      <div className="kg-hero-bg" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="kg-hero-overlay" />
      <SakuraPetals />
      <div ref={ref} className={`kg-hero-content kg-fade-up ${visible ? 'kg-visible' : ''}`}>
        <div className="kg-hero-eyebrow">{t('aboutUs.hero.eyebrow')}</div>
        <h1 className="kg-hero-title">
          {t('aboutUs.hero.title1')}<br />
          <span>{t('aboutUs.hero.title2')}</span>
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
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFFBF7"/>
        </svg>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   2. INTRO / STATS SECTION
═══════════════════════════════════════ */
const IntroSection = ({ t }) => {
  const [ref1, v1] = useScrollReveal();
  const [ref2, v2] = useScrollReveal();

  const stats = [
    { icon: '🏢', num: 10, suffix: '+', labelKey: 'aboutUs.intro.stats.companies' },
    { icon: '🌏', num: 6, suffix: '',   labelKey: 'aboutUs.intro.stats.countries' },
    { icon: '📅', num: 37, suffix: '+', labelKey: 'aboutUs.intro.stats.years' },
    { icon: '🤝', num: 500, suffix: '+', labelKey: 'aboutUs.intro.stats.partners' },
  ];

  return (
    <section className="kg-section">
      <div ref={ref1} className={`kg-fade-left ${v1 ? 'kg-visible' : ''}`}>
        <div className="kg-section-label">{t('aboutUs.intro.sectionLabel')}</div>
        <h2 className="kg-section-title">
          {t('aboutUs.intro.title1')}<br />
          <span>{t('aboutUs.intro.title2')}</span>
        </h2>
        <div className="kg-section-divider" />
      </div>

      <div className="kg-intro-grid">
        <div ref={ref1} className={`kg-fade-left ${v1 ? 'kg-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <p className="kg-intro-para">{t('aboutUs.intro.p1')}</p>
          <p className="kg-intro-para">{t('aboutUs.intro.p2')}</p>
          <p className="kg-intro-para">{t('aboutUs.intro.p3')}</p>
        </div>
        <div ref={ref2} className={`kg-fade-right ${v2 ? 'kg-visible' : ''}`}>
          <p className="kg-intro-para">{t('aboutUs.intro.p4')}</p>
          <p className="kg-intro-para">{t('aboutUs.intro.p5')}</p>
        </div>
      </div>

      <div className="kg-stats-grid kg-stagger" style={{ marginTop: '60px' }}>
        {stats.map((s, i) => (
          <div
            key={i}
            className={`kg-stat-card kg-scale-in ${v2 ? 'kg-visible' : ''}`}
            style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
          >
            <div className="kg-stat-icon">{s.icon}</div>
            <div className="kg-stat-num"><CountUp end={s.num} suffix={s.suffix} /></div>
            <div className="kg-stat-label">{t(s.labelKey)}</div>
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
      <div ref={ref} className={`kg-fade-up ${v ? 'kg-visible' : ''}`} style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="kg-section-label" style={{ justifyContent: 'center' }}>{t('aboutUs.mv.sectionLabel')}</div>
        <h2 className="kg-section-title" style={{ textAlign: 'center' }}>
          {t('aboutUs.mv.title1')} <span>{t('aboutUs.mv.title2')}</span> & <span>{t('aboutUs.mv.title3')}</span>
        </h2>
      </div>

      <div className="kg-mv-grid kg-stagger">
        <div className={`kg-mv-card kg-mv-card--mission kg-fade-left ${v ? 'kg-visible' : ''}`}>
          <div className="kg-mv-icon">🎯</div>
          <div className="kg-mv-title">{t('aboutUs.mv.missionTitle')}</div>
          <div className="kg-mv-body">{t('aboutUs.mv.missionBody')}</div>
          <div className="kg-mv-corner" />
        </div>
        <div className={`kg-mv-card kg-mv-card--vision kg-fade-right ${v ? 'kg-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
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
  const items = t('aboutUs.values.items') || [];

  return (
    <section className="kg-section-blue">
      <div ref={ref} className={`kg-fade-up ${v ? 'kg-visible' : ''}`} style={{ textAlign: 'center' }}>
        <div className="kg-section-label" style={{ justifyContent: 'center' }}>{t('aboutUs.values.sectionLabel')}</div>
        <h2 className="kg-section-title" style={{ textAlign: 'center' }}>
          {t('aboutUs.values.title1')} <span>{t('aboutUs.values.title2')}</span>
        </h2>
        <p className="kg-section-body" style={{ textAlign: 'center', margin: '0 auto 0' }}>
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
   5. SERVICES
═══════════════════════════════════════ */
const ServicesSection = ({ t }) => {
  const [ref, v] = useScrollReveal();
  const items = t('aboutUs.services.items') || [];

  return (
    <section className="kg-section">
      <div ref={ref}>
        <div className={`kg-fade-up ${v ? 'kg-visible' : ''}`} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div className="kg-section-label" style={{ justifyContent: 'center' }}>{t('aboutUs.services.sectionLabel')}</div>
          <h2 className="kg-section-title" style={{ textAlign: 'center' }}>
            {t('aboutUs.services.title1')} <span>{t('aboutUs.services.title2')}</span>
          </h2>
          <p className="kg-section-body" style={{ textAlign: 'center', margin: '0 auto' }}>
            {t('aboutUs.services.subtitle')}
          </p>
        </div>

        <div className="kg-services-grid kg-stagger">
          {items.map((s, i) => (
            <div
              key={i}
              className={`kg-service-chip kg-fade-up ${v ? 'kg-visible' : ''}`}
              style={{ transitionDelay: `${0.05 + i * 0.05}s` }}
            >
              <span className="kg-service-chip-icon">{s.icon}</span>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   6. SISTER CONCERNS
═══════════════════════════════════════ */
const SisterConcernsSection = ({ t }) => {
  const [ref, v] = useScrollReveal();
  const items = t('aboutUs.concerns.items') || [];

  return (
    <section className="kg-concerns-section">
      <div ref={ref} className={`kg-fade-up ${v ? 'kg-visible' : ''}`} style={{ textAlign: 'center', marginBottom: '10px' }}>
        <div className="kg-section-label" style={{ justifyContent: 'center' }}>{t('aboutUs.concerns.sectionLabel')}</div>
        <h2 className="kg-section-title" style={{ textAlign: 'center' }}>
          {t('aboutUs.concerns.title1')} <span>{t('aboutUs.concerns.title2')}</span>
        </h2>
        <p className="kg-section-body" style={{ textAlign: 'center', margin: '0 auto' }}>
          {t('aboutUs.concerns.subtitle')}
        </p>
      </div>

      <div className="kg-concerns-grid kg-stagger">
        {items.map((c, i) => (
          <div
            key={i}
            className={`kg-concern-card kg-fade-up ${v ? 'kg-visible' : ''}`}
            style={{ transitionDelay: `${0.06 + i * 0.07}s` }}
          >
            <div className="kg-concern-bar" />
            <div className="kg-concern-header">
              <div className="kg-concern-num">{i + 1}</div>
              <div className="kg-concern-name">{c.name}</div>
              <span className="kg-concern-type">{c.type}</span>
            </div>
            <div className="kg-concern-desc">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   7. WHY CHOOSE US
═══════════════════════════════════════ */
const WhyChooseUsSection = ({ t }) => {
  const [ref, v] = useScrollReveal();
  const points = t('aboutUs.why.points') || [];
  const commitCards = t('aboutUs.why.commitCards') || [];

  return (
    <>
      <section className="kg-why-section">
        <div className="kg-why-grid">
          {/* Image with floating badges */}
          <div ref={ref} className={`kg-why-image-wrap kg-fade-left ${v ? 'kg-visible' : ''}`}>
            <div className="kg-why-image-frame">
              <img src={kawaiiJpeg} alt="Kawaii Group Japan Bangladesh Office" className="kg-why-img" />
            </div>
            <div className="kg-why-badge-float">
              <div className="kg-why-badge-num">37+</div>
              <div className="kg-why-badge-text">{t('aboutUs.why.yearsLabel').split('\\n').join('\n')}</div>
            </div>
            <div className="kg-why-badge-float2">{t('aboutUs.why.globalLabel')}</div>
          </div>

          {/* Content */}
          <div className={`kg-fade-right ${v ? 'kg-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="kg-section-label">{t('aboutUs.why.sectionLabel')}</div>
            <h2 className="kg-section-title">
              {t('aboutUs.why.title1')} <span>{t('aboutUs.why.title2')}</span>
            </h2>
            <div className="kg-section-divider" />
            <p className="kg-section-body">{t('aboutUs.why.subtitle')}</p>

            <div className="kg-why-points kg-stagger">
              {points.map((point, i) => (
                <div
                  key={i}
                  className={`kg-why-point kg-fade-up ${v ? 'kg-visible' : ''}`}
                  style={{ transitionDelay: `${0.1 + i * 0.07}s` }}
                >
                  <div className="kg-why-point-icon">✓</div>
                  <div className="kg-why-point-text">{point}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment cards */}
      <section className="kg-commit-section">
        <div style={{ textAlign: 'center' }}>
          <div className="kg-section-label" style={{ justifyContent: 'center' }}>{t('aboutUs.why.commitSectionLabel')}</div>
          <h2 className="kg-section-title" style={{ textAlign: 'center' }}>
            {t('aboutUs.why.commitTitle1')} <span>{t('aboutUs.why.commitTitle2')}</span>
          </h2>
          <p className="kg-section-body" style={{ textAlign: 'center', margin: '0 auto' }}>
            {t('aboutUs.why.commitSubtitle')}
          </p>
        </div>
        <div className="kg-commit-grid kg-stagger">
          {commitCards.map((c, i) => (
            <div key={i} className="kg-commit-card">
              <span className="kg-commit-icon">{c.icon}</span>
              <div className="kg-commit-title">{c.title}</div>
              <div className="kg-commit-text">{c.text}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

/* ═══════════════════════════════════════
   8. CONCLUSION / CTA
═══════════════════════════════════════ */
const ConclusionSection = ({ t }) => {
  const [ref, v] = useScrollReveal();
  const { localizedPath } = useLocale();

  return (
    <section className="kg-cta-section">
      <div className="kg-cta-deco-circle kg-cta-deco-circle--1" />
      <div className="kg-cta-deco-circle kg-cta-deco-circle--2" />
      <div ref={ref} className={`kg-fade-up ${v ? 'kg-visible' : ''}`} style={{ position: 'relative', zIndex: 1 }}>
        <div className="kg-section-label" style={{ justifyContent: 'center' }}>{t('aboutUs.cta.sectionLabel')}</div>
        <h2 className="kg-cta-title">
          {t('aboutUs.cta.title1')}<br />
          <span>{t('aboutUs.cta.title2')}</span>
        </h2>
        <p className="kg-cta-body">{t('aboutUs.cta.body')}</p>
        <div className="kg-cta-btn-row">
          <a href={localizedPath('/contact')} className="kg-cta-btn">
            {t('aboutUs.cta.btnPrimary')}
          </a>
          <a href={localizedPath('/concerns')} className="kg-cta-btn-secondary">
            {t('aboutUs.cta.btnSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════
   MAIN EXPORT — passes `t` to every section
═══════════════════════════════════════ */
const KgAboutUs = () => {
  const { t } = useLocale();

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <HeroSection t={t} />
      <IntroSection t={t} />
      <MissionVisionSection t={t} />
      <CoreValuesSection t={t} />
      <ServicesSection t={t} />
      <SisterConcernsSection t={t} />
      <WhyChooseUsSection t={t} />
      <ConclusionSection t={t} />
    </div>
  );
};

export default KgAboutUs;
