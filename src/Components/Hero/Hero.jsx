'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Hero.css';
import gsap from 'gsap';
import bangladeshSkyline from '../../Assets/view-landmark-asian-sky-reflection.webp';
import japanCastle from '../../Assets/cherry-blossoms-castle-himeji-japan.webp';
import dhakaCityscape from '../../Assets/pattaya-chonburi-thailand-28-may-2019-beautiful-landscape-cityscape-pattaya-city-is-popular-destination-thailand-with-white-cloud-blue-sky.webp';
import { useLocale } from '../../i18n/LocaleContext';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const Hero = () => {
  const { t, locale } = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const titleRef = useRef(null);
  const maskRef = useRef(null);
  const isFirstRender = useRef(true);
  const slidesRef = useRef([]);

  const slides = useMemo(
    () => [
      {
        id: 'bangladesh',
        name: t('home.hero.bangladesh'),
        src: getSrc(bangladeshSkyline),
        alt: t('home.hero.bangladeshAlt'),
      },
      {
        id: 'japan',
        name: t('home.hero.japan'),
        src: getSrc(japanCastle),
        alt: t('home.hero.japanAlt'),
      },
      {
        id: 'dhaka',
        name: t('home.hero.dhaka'),
        src: getSrc(dhakaCityscape),
        alt: t('home.hero.dhakaAlt'),
      },
    ],
    [t, locale]
  );

  slidesRef.current = slides;

  const fitTitle = useCallback(() => {
    const el = titleRef.current;
    const mask = maskRef.current;
    if (!el || !mask) return;

    el.style.fontSize = '';
    const maxWidth = mask.clientWidth;
    if (maxWidth <= 0) return;

    let size = parseFloat(getComputedStyle(el).fontSize);
    const minSize = 28;

    while (el.scrollWidth > maxWidth && size > minSize) {
      size -= 1;
      el.style.fontSize = `${size}px`;
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesRef.current.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onResize = () => fitTitle();
    window.addEventListener('resize', onResize);
    fitTitle();
    return () => window.removeEventListener('resize', onResize);
  }, [fitTitle]);

  // Keep visible title in sync when language changes
  useEffect(() => {
    const el = titleRef.current;
    if (!el || isFirstRender.current) return;
    el.textContent = slidesRef.current[currentSlide]?.name || '';
    fitTitle();
    // Only re-sync label text on locale change; slide animation owns currentSlide updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, fitTitle]);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const slideName = slidesRef.current[currentSlide]?.name || '';

    if (isFirstRender.current) {
      isFirstRender.current = false;
      el.textContent = slidesRef.current[0]?.name || '';
      fitTitle();
      gsap.fromTo(
        el,
        { y: '110%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.2,
          onComplete: fitTitle,
        }
      );
      return;
    }

    const tl = gsap.timeline();
    tl.to(el, {
      y: '-110%',
      opacity: 0,
      duration: 0.55,
      ease: 'power2.in',
    })
      .set(el, {
        textContent: slideName,
        y: '110%',
      })
      .add(() => fitTitle())
      .to(el, {
        y: '0%',
        opacity: 1,
        duration: 0.65,
        ease: 'power3.out',
        onComplete: fitTitle,
      });

    return () => tl.kill();
  }, [currentSlide, fitTitle]);

  return (
    <div className="hero-container">
      <section className="hero" id="hero" aria-label={t('home.hero.ariaLabel')}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__slide-bg ${index === currentSlide ? 'hero__slide-bg--active' : ''}`}
          >
            <img loading="eager" decoding="async"
              src={slide.src}
              alt={slide.alt}
              className="hero__slide-img"
            />
          </div>
        ))}

        <div className="hero__overlay" />

        <div className="hero__content">
          <div className="hero__title-mask" ref={maskRef}>
            <h1 className="hero__place-name" ref={titleRef}>
              {slides[0].name}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
