'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import './WhyChooseUs.css';
import { useLocale } from '../../i18n/LocaleContext';
import whyChooseBanner from '../../Assets/whyChooseBanner.webp';
import { resolveImage } from '../../lib/image';


// Icons for the 10 differentiators
const itemIcons = [
  // 1. Diversified business portfolio
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  // 2. Strong manufacturing expertise
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M5 20V8l5 3V8l5 3V4h4v16"/></svg>,
  // 3. Premium apparel and textile solutions
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10a2 2 0 002 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>,
  // 4. Trusted international recruitment services
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  // 5. Professional technology solutions
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // 6. Reliable global trading network
  <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  // 7. Customer-focused business approach
  <svg key="7" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  // 8. Ethical business practices
  <svg key="8" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  // 9. Experienced management team
  <svg key="9" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>,
  // 10. Long-term partnership commitment
  <svg key="10" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
];

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const WhyChooseUs = ({ showDifferent = true }) => {
  const { t, localizedPath } = useLocale();
  const excellenceRef = useRef(null);
  const standardsRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const block = excellenceRef.current;
    const list = standardsRef.current;
    if (!block || !list) return;

    const items = list.querySelectorAll('.whyChoose__standard');
    const intro = block.querySelectorAll(
      '.whyChoose__excellenceEyebrow, .whyChoose__excellenceTitle, .whyChoose__excellenceBody'
    );

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      gsap.set([intro, items], { opacity: 1, y: 0 });
      return;
    }

    gsap.set(intro, { opacity: 0, y: 24 });
    gsap.set(items, { opacity: 0, y: 28 });

    const play = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.to(intro, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
      }).to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.14,
        },
        '-=0.15'
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(block);
    return () => {
      observer.disconnect();
      gsap.killTweensOf([intro, items]);
    };
  }, []);

  const getText = (key, fallback) => {
    const val = t(key);
    if (!val || typeof val !== 'string' || val === key || val.toLowerCase().includes('whychoosesection')) {
      // Also try under aboutUs.
      const altVal = t(`aboutUs.${key}`);
      if (altVal && typeof altVal === 'string' && altVal !== `aboutUs.${key}` && !altVal.toLowerCase().includes('whychoosesection')) {
        return altVal;
      }
      return fallback;
    }
    return val;
  };

  const title1 = getText('whyChooseSection.titleLine1', 'WHY CHOOSE');
  const title2 = getText('whyChooseSection.titleLine2', 'KAWAII GROUP?');
  const subtitle = getText(
    'whyChooseSection.subtitle',
    'Businesses need reliable partners to achieve sustainable growth. Kawaii Group combines industry expertise with professional service to deliver consistent value.'
  );
  const diffTitle = getText('whyChooseSection.differentTitle', 'What Makes Us Different?');

  const defaultItems = [
    'Diversified business portfolio',
    'Strong manufacturing expertise',
    'Premium apparel and textile solutions',
    'Trusted international recruitment services',
    'Professional technology solutions',
    'Reliable global trading network',
    'Customer-focused business approach',
    'Ethical business practices',
    'Experienced management team',
    'Long-term partnership commitment',
  ];

  const rawItems = t('whyChooseSection.differentItems') || t('aboutUs.whyChooseSection.differentItems');
  const itemsArray = Array.isArray(rawItems) ? rawItems : defaultItems;

  const excellenceTitle = getText('whyChooseSection.excellenceTitle', 'Our Commitment to Excellence');
  const excellenceBody = getText(
    'whyChooseSection.excellenceBody',
    'Excellence drives every part of our business. We maintain high standards across every company. We focus on quality, efficiency, and customer satisfaction. Every client receives professional support. Every project receives dedicated attention. Every partnership reflects our commitment to trust and long-term success.'
  );

  const seeMoreText = getText('whyChooseSection.seeMoreBtn', 'See More');

  const pillars = [
    { title: 'Quality & Standards', badge: 'High Quality' },
    { title: 'Operational Efficiency', badge: 'Efficiency' },
    { title: 'Customer Satisfaction', badge: 'Satisfaction' },
    { title: 'Professional Support', badge: 'Dedicated Support' },
    { title: 'Project Focus', badge: 'Dedicated Attention' },
    { title: 'Long-term Success', badge: 'Trusted Partner' },
  ];

  return (
    <section className="whyChoose">
      <div className="whyChoose__frame">
        <div className="whyChoose__panel">
          <aside className="whyChoose__rail">
            <p className="whyChoose__railTitle">
              <span className="whyChoose__railTitleMain">{title1}</span>
              <span className="whyChoose__railTitleSub">{title2}</span>
            </p>
          </aside>

          <div className="whyChoose__main">
            <header className="whyChoose__header">
              <h3 className="whyChoose__title">
                <span>{title1}</span>
                <span>{title2}</span>
              </h3>
            </header>

            {/* Hero Banner & Intro Subtitle */}
            <div className="whyChoose__heroRow">
              <div className="whyChoose__heroMedia">
                <img loading="lazy" decoding="async"
                  {...resolveImage(whyChooseBanner)}
                  alt="Why Choose Kawaii Group"
                  className="whyChoose__heroImg"
                />
              </div>
              <div className="whyChoose__heroText">
                <p className="whyChoose__subtitle">{subtitle}</p>

                <div className="whyChoose__quickMetrics">
                  <div className="whyChoose__metric">
                    <span className="whyChoose__metricVal">100%</span>
                    <span className="whyChoose__metricLbl">Quality Assurance</span>
                  </div>
                  <div className="whyChoose__metric">
                    <span className="whyChoose__metricVal">Global</span>
                    <span className="whyChoose__metricLbl">Trade & Services</span>
                  </div>
                  <div className="whyChoose__metric">
                    <span className="whyChoose__metricVal">37+</span>
                    <span className="whyChoose__metricLbl">Years Legacy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: What Makes Us Different? (Rendered on About page) */}
            {showDifferent && (
              <div className="whyChoose__sectionBlock" id="what-makes-us-different">
                <div className="whyChoose__sectionHeader">
                  <span className="whyChoose__sectionTag">DISTINCTION</span>
                  <h3 className="whyChoose__sectionTitle">{diffTitle}</h3>
                </div>

                <div className="whyChoose__grid">
                  {itemsArray.map((itemText, idx) => (
                    <div className="whyChoose__card" key={idx}>
                      <div className="whyChoose__cardIcon">
                        {itemIcons[idx % itemIcons.length]}
                      </div>
                      <div className="whyChoose__cardNum">
                        {idx < 9 ? `0${idx + 1}` : `${idx + 1}`}
                      </div>
                      <p className="whyChoose__cardText">{itemText}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Section 2: Our Commitment to Excellence */}
            <div className="whyChoose__excellenceBlock" ref={excellenceRef}>
              <div className="whyChoose__excellenceIntro">
                <span className="whyChoose__excellenceEyebrow">VALUES & STANDARDS</span>
                <h3 className="whyChoose__excellenceTitle">{excellenceTitle}</h3>
                <p className="whyChoose__excellenceBody">{excellenceBody}</p>
              </div>

              <ol className="whyChoose__standards" ref={standardsRef}>
                {pillars.map((p, idx) => (
                  <li className="whyChoose__standard" key={idx}>
                    <span className="whyChoose__standardIndex" aria-hidden="true">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="whyChoose__standardCopy">
                      <span className="whyChoose__standardBadge">{p.badge}</span>
                      <span className="whyChoose__standardTitle">{p.title}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA Row - "See More" Navigation to About Section */}
            <div className="whyChoose__footerCta">
              <Link
                href={localizedPath('/about')}
                className="whyChoose__btn"
                aria-label="See More about Kawaii Group"
              >
                <span>{seeMoreText}</span>
                <span className="whyChoose__btnIcon">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
