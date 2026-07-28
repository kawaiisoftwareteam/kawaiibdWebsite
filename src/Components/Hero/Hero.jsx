'use client';

import React, { useState, useEffect, useCallback } from 'react';
import './Hero.css';
import kawaiiOffice from '../../Assets/kawaii copy.png';
import bigBuildings from '../../Assets/big-buildings.jpg';
import illuminatedCity from '../../Assets/illuminated-city-night.jpg';
import indianCity from '../../Assets/indian-city-buildings-scene.jpg';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const slides = [
  { src: getSrc(kawaiiOffice), alt: 'Kawaii Group Office' },
  { src: getSrc(bigBuildings), alt: 'City buildings' },
  { src: getSrc(illuminatedCity), alt: 'Illuminated city at night' },
  { src: getSrc(indianCity), alt: 'City skyline' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="hero" id="hero">
      {/* Background slideshow using <img> tags */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero__slide ${index === current ? 'hero__slide--active' : ''} ${!loaded && index === 0 ? 'hero__slide--initial' : ''}`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="hero__slide-img"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

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
            <span className="hero__text--outlined">Growth,</span>
          </span>
          <span className="hero__title-line">
            <span className="hero__text--filled">Simplified</span>
          </span>
        </h1>
      </div>

      {/* Slide indicators */}
      <div className="hero__indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default Hero;
