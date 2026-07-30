'use client';

import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import heroSunset from '../../Assets/hero_sunset_skyline.png';
import bigBuildings from '../../Assets/big-buildings.jpg';
import illuminatedCity from '../../Assets/slider_image_1.jpg';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const slides = [
  {
    src: getSrc(heroSunset),
    alt: 'Kawaii Group Sunset City Skyline',
    title: 'KAWAII',
    redWord: 'Boundless,',
    whiteWord: 'Together',
  },
  {
    src: getSrc(bigBuildings),
    alt: 'Kawaii Group City Buildings',
    title: 'KAWAII',
    redWord: 'Boundless,',
    whiteWord: 'Together',
  },
  {
    src: getSrc(illuminatedCity),
    alt: 'Kawaii Group Illuminated City',
    title: 'KAWAII',
    redWord: 'Boundless,',
    whiteWord: 'Together',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardRef = useRef(null);
  const brandRef = useRef(null);
  const subtitleRef = useRef(null);

  // Auto slide transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Entrance GSAP animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        brandRef.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  const activeSlideData = slides[currentSlide];

  return (
    <div className="hero-container">
      <section className="hero" id="hero">
        {/* Background Slideshow */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero__slide-bg ${index === currentSlide ? 'hero__slide-bg--active' : ''}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero__slide-img"
            />
          </div>
        ))}

        {/* Soft Golden Sunset & Gradient Overlay */}
        <div className="hero__overlay" />

        {/* Main Content Box with Frosted Glassmorphism */}
        <div className="hero__content">
          <div className="hero__glass-card" ref={cardRef}>
            <h1 className="hero__brand-name" ref={brandRef}>
              {activeSlideData.title}
            </h1>
            <h2 className="hero__subtitle" ref={subtitleRef}>
              <span className="hero__subtitle-red">{activeSlideData.redWord}</span>{' '}
              <span className="hero__subtitle-white">{activeSlideData.whiteWord}</span>
            </h2>
          </div>
        </div>

        {/* Bottom Carousel Pagination Dots */}
        <div className="hero__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;

