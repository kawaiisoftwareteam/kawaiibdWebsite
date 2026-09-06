'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import './HomeVisiting.css';
import { useLocale } from '../../i18n/LocaleContext';

const VISITING_IMAGES = [
  {
    key: 'welcome',
    src: '/news-media/visiting/welcome.jpeg',
    orient: 'landscape',
  },
  {
    key: 'kazama',
    src: '/news-media/visiting/naoki-kazama.jpeg',
    orient: 'portrait',
  },
  {
    key: 'uemura',
    src: '/news-media/visiting/osamu-uemura.jpeg',
    orient: 'portrait',
  },
  {
    key: 'suzuki',
    src: '/news-media/visiting/takuya-suzuki.jpeg',
    orient: 'portrait',
  },
  {
    key: 'hameem',
    src: '/news-media/visiting/ha-meem-group.jpeg',
    orient: 'landscape',
  },
];

const PREVIEW_COUNT = 2;

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomeVisiting = () => {
  const { t, localizedPath } = useLocale();
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const content = t('home.visiting') || {};
  const photos = content.photos || [];

  const visibleImages = expanded ? VISITING_IMAGES : VISITING_IMAGES.slice(0, PREVIEW_COUNT);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, closeLightbox]);

  const openLightbox = (image, index) => {
    const photo = photos[index] || {};
    setLightbox({
      src: image.src,
      title: photo.title || '',
      caption: photo.role || '',
    });
  };

  return (
    <section className="homeVisit" aria-labelledby="home-visit-title">
      <div className="homeVisit__inner">
        <header className="homeVisit__header">
          <div className="homeVisit__headerCopy">
            <span className="homeVisit__eyebrow">{content.eyebrow}</span>
            <h2 className="homeVisit__title" id="home-visit-title">
              {content.title}
            </h2>
            <p className="homeVisit__lead">{content.lead}</p>
          </div>
          <div className="homeVisit__headerMeta">
            <span className="homeVisit__date">{content.date}</span>
            <span className="homeVisit__tag">{content.tag}</span>
          </div>
        </header>

        <div className={`homeVisit__grid${expanded ? ' homeVisit__grid--expanded' : ''}`}>
          {visibleImages.map((image, index) => {
            const photo = photos[index] || {};
            const isHero = index === 0 && !expanded;
            return (
              <figure
                key={image.key}
                className={`homeVisit__card homeVisit__card--${image.orient}${isHero ? ' homeVisit__card--hero' : ''}`}
              >
                <button
                  type="button"
                  className={`homeVisit__media homeVisit__media--${image.orient}`}
                  onClick={() => openLightbox(image, index)}
                  aria-label={`${content.openFull || 'View full image'}: ${photo.title || ''}`}
                >
                  <img
                    src={image.src}
                    alt={photo.title || content.title}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <span className="homeVisit__zoom" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                      <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <figcaption className="homeVisit__caption">
                  <span className="homeVisit__label">{photo.label}</span>
                  <strong>{photo.title}</strong>
                  {photo.role && <span className="homeVisit__role">{photo.role}</span>}
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="homeVisit__actions">
          <button
            type="button"
            className="homeVisit__toggle"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            <span>{expanded ? content.seeLess : content.seeMore}</span>
            <span className={`homeVisit__toggleIcon${expanded ? ' is-open' : ''}`}>
              <ArrowIcon />
            </span>
          </button>

          <Link href={localizedPath('/news/#japan-visit')} className="homeVisit__fullLink">
            <span>{content.readFull}</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {lightbox && (
        <div
          className="homeVisit__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title || content.openFull || 'Full image'}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="homeVisit__lightboxClose"
            onClick={closeLightbox}
            aria-label={content.close || 'Close'}
          >
            ×
          </button>
          <figure className="homeVisit__lightboxFigure" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            {(lightbox.title || lightbox.caption) && (
              <figcaption>
                {lightbox.title && <strong>{lightbox.title}</strong>}
                {lightbox.caption && <span>{lightbox.caption}</span>}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  );
};

export default HomeVisiting;
