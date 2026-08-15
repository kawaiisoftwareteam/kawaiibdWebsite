'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './Hero.css';
import gsap from 'gsap';
import bangladeshSkyline from '../../Assets/view-landmark-asian-sky-reflection.webp';
import japanCastle from '../../Assets/cherry-blossoms-castle-himeji-japan.webp';
import dhakaCityscape from '../../Assets/pattaya-chonburi-thailand-28-may-2019-beautiful-landscape-cityscape-pattaya-city-is-popular-destination-thailand-with-white-cloud-blue-sky.webp';
import { useLocale } from '../../i18n/LocaleContext';
import { resolveImage } from '../../lib/image';


const decodeImage = (src) =>
  new Promise((resolve) => {
    if (!src || typeof window === 'undefined') {
      resolve();
      return;
    }
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().then(resolve).catch(resolve);
      } else {
        resolve();
      }
    };
    img.onerror = () => resolve();
    img.src = src;
  });

const Hero = () => {
  const { t, locale } = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [readySlides, setReadySlides] = useState(() => new Set([0]));
  const titleRef = useRef(null);
  const maskRef = useRef(null);
  const sectionRef = useRef(null);
  const isFirstRender = useRef(true);
  const isVisibleRef = useRef(true);
  const isAdvancingRef = useRef(false);
  const slidesRef = useRef([]);
  const readyRef = useRef(new Set([0]));

  const slides = useMemo(
    () => [
      {
        id: 'bangladesh',
        name: t('home.hero.bangladesh'),
        ...resolveImage(bangladeshSkyline),
        alt: t('home.hero.bangladeshAlt'),
      },
      {
        id: 'japan',
        name: t('home.hero.japan'),
        ...resolveImage(japanCastle),
        alt: t('home.hero.japanAlt'),
      },
      {
        id: 'dhaka',
        name: t('home.hero.dhaka'),
        ...resolveImage(dhakaCityscape),
        alt: t('home.hero.dhakaAlt'),
      },
    ],
    [t, locale]
  );

  slidesRef.current = slides;

  const markReady = useCallback((index) => {
    if (readyRef.current.has(index)) return;
    readyRef.current = new Set(readyRef.current).add(index);
    setReadySlides(new Set(readyRef.current));
  }, []);

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

  // Warm-decode all slides so crossfades never hit a black decode gap
  useEffect(() => {
    let cancelled = false;
    slides.forEach((slide, index) => {
      decodeImage(slide.src).then(() => {
        if (!cancelled) markReady(index);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [slides, markReady]);

  // Pause autoplay while hero is off-screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting && entry.intersectionRatio > 0.2;
      },
      { threshold: [0, 0.2, 0.5] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const currentSlideRef = useRef(0);
  currentSlideRef.current = currentSlide;

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isVisibleRef.current || isAdvancingRef.current) return;

      const list = slidesRef.current;
      if (!list.length) return;

      const next = (currentSlideRef.current + 1) % list.length;

      const advance = () => {
        setCurrentSlide(next);
        isAdvancingRef.current = false;
      };

      if (readyRef.current.has(next)) {
        advance();
        return;
      }

      isAdvancingRef.current = true;
      decodeImage(list[next]?.src).then(() => {
        markReady(next);
        advance();
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [markReady]);

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
      // Keep title visible on first paint — only a light rise, no opacity flash
      gsap.set(el, { y: '12%', opacity: 1 });
      fitTitle();
      gsap.to(el, {
        y: '0%',
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.05,
        onComplete: fitTitle,
      });
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

  const firstSrc = slides[0]?.src;

  return (
    <div
      className="hero-container"
      style={firstSrc ? { backgroundImage: `url(${firstSrc})` } : undefined}
    >
      <section
        ref={sectionRef}
        className="hero"
        id="hero"
        aria-label={t('home.hero.ariaLabel')}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const isReady = readySlides.has(index) || index === 0;
          return (
            <div
              key={slide.id}
              className={[
                'hero__slide-bg',
                isActive ? 'hero__slide-bg--active' : '',
                isReady ? 'hero__slide-bg--ready' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <img
                src={slide.src}
                width={slide.width}
                height={slide.height}
                alt={slide.alt}
                className="hero__slide-img"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding={index === 0 ? 'sync' : 'async'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                onLoad={() => markReady(index)}
              />
            </div>
          );
        })}

        <div className="hero__overlay" />

        <div className="hero__content">
          <div className="hero__title-mask" ref={maskRef}>
            <h1 className="hero__place-name" ref={titleRef} aria-label="Kawaii Group - Japan-Bangladesh Joint Venture">
              {slides[0].name}
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
