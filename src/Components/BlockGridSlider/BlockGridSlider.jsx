'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BlockGridSlider.css';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const BlockGridSlider = ({
  slides = [],
  rows = 10,
  cols = 10,
  autoPlay = true,
  interval = 5000,
  staggerPattern = 'diagonal',
  className = '',
  children,
  onSlideChange,
}) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate grid cells array
  const gridCells = useMemo(() => {
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let delay = 0;
        if (staggerPattern === 'radial') {
          const centerR = (rows - 1) / 2;
          const centerC = (cols - 1) / 2;
          const dist = Math.hypot(r - centerR, c - centerC);
          delay = dist * 0.075;
        } else if (staggerPattern === 'random') {
          delay = ((r * 37 + c * 17) % 50) * 0.02;
        } else {
          // 'diagonal' wave default
          delay = (r + c) * 0.055;
        }
        cells.push({
          id: `${r}-${c}`,
          row: r,
          col: c,
          delay,
          bgPosX: cols > 1 ? (c / (cols - 1)) * 100 : 0,
          bgPosY: rows > 1 ? (r / (rows - 1)) * 100 : 0,
        });
      }
    }
    return cells;
  }, [rows, cols, staggerPattern]);

  const goToNext = useCallback(() => {
    if (slides.length <= 1) return;
    setPrev(current);
    setCurrent((prevIdx) => {
      const nextIdx = (prevIdx + 1) % slides.length;
      if (onSlideChange) onSlideChange(nextIdx);
      return nextIdx;
    });
    setIsAnimating(true);
  }, [current, slides.length, onSlideChange]);

  const goToPrev = useCallback(() => {
    if (slides.length <= 1) return;
    setPrev(current);
    setCurrent((prevIdx) => {
      const nextIdx = (prevIdx - 1 + slides.length) % slides.length;
      if (onSlideChange) onSlideChange(nextIdx);
      return nextIdx;
    });
    setIsAnimating(true);
  }, [current, slides.length, onSlideChange]);

  const goToSlide = useCallback((index) => {
    if (index === current || slides.length <= 1) return;
    setPrev(current);
    setCurrent(index);
    if (onSlideChange) onSlideChange(index);
    setIsAnimating(true);
  }, [current, slides.length, onSlideChange]);

  // Autoplay timer
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, goToNext, slides.length]);

  const activeSlide = slides[current];
  const previousSlide = slides[prev];

  const activeSrc = getSrc(activeSlide?.src || activeSlide);
  const prevSrc = getSrc(previousSlide?.src || previousSlide);

  return (
    <div className={`blockGridSlider ${className}`}>
      {/* Layer 1: Previous slide image (remains visible behind while new blocks assemble) */}
      {prevSrc && (
        <div
          className="blockGridSlider__bg"
          style={{ backgroundImage: `url(${prevSrc})` }}
        />
      )}

      {/* Layer 2: 10x10 Staggered Animated Blocks for Active Slide */}
      <div className="blockGridSlider__grid-container">
        <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={current}
            className="blockGridSlider__grid"
            style={{
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
          >
            {gridCells.map((cell) => (
              <motion.div
                key={cell.id}
                className="blockGridSlider__cell"
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: cell.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={activeSrc}
                  alt=""
                  className="blockGridSlider__cell-img"
                  style={{
                    width: `${cols * 100}%`,
                    height: `${rows * 100}%`,
                    left: `-${cell.col * 100}%`,
                    top: `-${cell.row * 100}%`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay Content */}
      {children && (
        <div className="blockGridSlider__overlay">
          {typeof children === 'function' ? children({ current, activeSlide }) : children}
        </div>
      )}

      {/* Dots Pagination */}
      {slides.length > 1 && (
        <div className="blockGridSlider__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`blockGridSlider__dot ${index === current ? 'blockGridSlider__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlockGridSlider;
