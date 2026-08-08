'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Hero.css';
import gsap from 'gsap';
import bangladeshSkyline from '../../Assets/view-landmark-asian-sky-reflection.jpg';
import japanCastle from '../../Assets/cherry-blossoms-castle-himeji-japan.jpg';
import dhakaCityscape from '../../Assets/pattaya-chonburi-thailand-28-may-2019-beautiful-landscape-cityscape-pattaya-city-is-popular-destination-thailand-with-white-cloud-blue-sky.jpg';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const slides = [
  {
    name: 'Bangladesh',
    src: getSrc(bangladeshSkyline),
    alt: 'Bangladesh city skyline across the river',
  },
  {
    name: 'Japan',
    src: getSrc(japanCastle),
    alt: 'Himeji Castle with cherry blossoms in Japan',
  },
  {
    name: 'Dhaka',
    src: getSrc(dhakaCityscape),
    alt: 'Dhaka city skyline',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const titleRef = useRef(null);
  const maskRef = useRef(null);
  const isFirstRender = useRef(true);

  const fitTitle = useCallback(() => {
    const el = titleRef.current;
    const mask = maskRef.current;
    if (!el || !mask) return;

    // Reset to CSS size, then shrink until the full word fits
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
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onResize = () => fitTitle();
    window.addEventListener('resize', onResize);
    fitTitle();
    return () => window.removeEventListener('resize', onResize);
  }, [fitTitle]);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    // First load: name rises up into view
    if (isFirstRender.current) {
      isFirstRender.current = false;
      el.textContent = slides[0].name;
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

    // Auto change: current name goes up, next name comes from below
    const tl = gsap.timeline();
    tl.to(el, {
      y: '-110%',
      opacity: 0,
      duration: 0.55,
      ease: 'power2.in',
    })
      .set(el, {
        textContent: slides[currentSlide].name,
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
      <section className="hero" id="hero" aria-label="Hero slideshow">
        {slides.map((slide, index) => (
          <div
            key={slide.name}
            className={`hero__slide-bg ${index === currentSlide ? 'hero__slide-bg--active' : ''}`}
          >
            <img
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
