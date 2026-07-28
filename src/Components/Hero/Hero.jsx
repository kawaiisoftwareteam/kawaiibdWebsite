'use client';

import React, { useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import BlockGridSlider from '../BlockGridSlider/BlockGridSlider';
import bigBuildings from '../../Assets/big-buildings.jpg';
import illuminatedCity from '../../Assets/slider_image_1.jpg';
import indianCity from '../../Assets/indian-city-buildings-scene.jpg';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const slides = [
  { src: getSrc(bigBuildings), alt: 'City buildings' },
  { src: getSrc(illuminatedCity), alt: 'Illuminated city at night' },
  { src: getSrc(indianCity), alt: 'City skyline' },
];

const Hero = () => {
  const lineRef = useRef(null);
  const arrowRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    // Bouncing arrow animation with GSAP
    const arrowTween = gsap.to(arrowRef.current, {
      y: 16,
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    // Pulse animation for the vertical scroll line
    const lineTween = gsap.to(lineRef.current, {
      opacity: 0.95,
      scaleY: 1.1,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Scroll fade & transform effect with GSAP
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollWrapperRef.current) {
        const opacity = Math.max(0, 1 - scrollY / 250);
        gsap.to(scrollWrapperRef.current, {
          opacity,
          y: `-50%` + ` + ${scrollY * 0.3}px`,
          duration: 0.2,
          overwrite: 'auto',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      arrowTween.kill();
      lineTween.kill();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-container">
      <section className="hero" id="hero">
        {/* 10x10 Block Grid Staggered Image Slider */}
        <BlockGridSlider
          slides={slides}
          rows={10}
          cols={10}
          autoPlay={true}
          interval={5000}
          staggerPattern="diagonal"
        />

        <div className="hero__overlay" />

        {/* Red accent line (left) */}
        <div className="hero__accent-line" />

        {/* Main content — bold mixed typography */}
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-line">
              <span className="hero__text--filled">Business</span>
            </span>
            <span className="hero__title-line">
              <span className="hero__text--outlined">growth,</span>
            </span>
            <span className="hero__title-line">
              <span className="hero__text--filled">simplified</span>
            </span>
          </h1>
        </div>
      </section>

      {/* GSAP Right Side Vertical Scroll Indicator */}
      <div className="hero__side-scroll" ref={scrollWrapperRef}>
        <span className="hero__side-scroll-text">SCROLL</span>
        <div className="hero__side-scroll-line" ref={lineRef}>
          <svg
            ref={arrowRef}
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero__side-scroll-arrow"
          >
            <path
              d="M8 3V13M8 13L3 8M8 13L13 8"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
