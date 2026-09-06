'use client';

import React, { useCallback, useEffect, useState } from 'react';
import './NewsMedia.css';
import { useLocale } from '../../i18n/LocaleContext';

const VISITING_IMAGES = {
  welcome: { src: '/news-media/visiting/welcome.jpeg', orient: 'landscape' },
  kazama: { src: '/news-media/visiting/naoki-kazama.jpeg', orient: 'portrait' },
  uemura: { src: '/news-media/visiting/osamu-uemura.jpeg', orient: 'portrait' },
  suzuki: { src: '/news-media/visiting/takuya-suzuki.jpeg', orient: 'portrait' },
  hameem: { src: '/news-media/visiting/ha-meem-group.jpeg', orient: 'landscape' },
};

const BIM_IMAGES = {
  speech: '/news-media/BIM/bim-ceo-speech.jpeg',
  mou: '/news-media/BIM/bim-mou-signing.jpeg',
  group: '/news-media/BIM/bim-mou-group.jpeg',
};

const YOUTUBE_EMBED = 'https://www.youtube.com/embed/sjQUOtl07mg';

const VISITING_KEYS = ['welcome', 'kazama', 'uemura', 'suzuki', 'hameem'];

const NewsMedia = () => {
  const { t } = useLocale();
  const visiting = t('newsMedia.visiting') || {};
  const visitingPhotos = visiting.photos || [];
  const visitingGuests = visiting.guests || [];
  const feature = t('newsMedia.feature') || {};
  const photos = feature.photos || [];
  const people = feature.people || [];
  const archive = t('home.news.items') || [];
  const [lightbox, setLightbox] = useState(null);

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

  const openVisit = (key, index) => {
    const photo = visitingPhotos[index] || {};
    setLightbox({
      src: VISITING_IMAGES[key].src,
      title: photo.title || '',
      caption: photo.caption || photo.role || '',
    });
  };

  return (
    <div className="newsMedia">
      <div className="newsMedia__shell">
        <header className="newsMedia__header">
          <div className="newsMedia__headerCopy">
            <span className="newsMedia__eyebrow">{t('newsMedia.eyebrow')}</span>
            <h1 className="newsMedia__title">{t('newsMedia.title')}</h1>
          </div>
          <p className="newsMedia__intro">{t('newsMedia.intro')}</p>
        </header>

        <article className="newsMedia__feature" id="japan-visit">
          <button
            type="button"
            className="newsMedia__featureMedia newsMedia__featureMedia--btn"
            onClick={() => openVisit('kazama', 1)}
            aria-label={visiting.openFull || 'View full image'}
          >
            <img
              className="newsMedia__featureImg newsMedia__featureImg--portrait"
              src={VISITING_IMAGES.kazama.src}
              alt={visitingPhotos[1]?.title || visiting.title}
              loading="eager"
              decoding="async"
            />
          </button>

          <div className="newsMedia__featureBody">
            <div className="newsMedia__meta">
              <span className="newsMedia__date">{visiting.date}</span>
              <span className="newsMedia__tag">{visiting.tag}</span>
            </div>
            <h2 className="newsMedia__articleTitle">{visiting.title}</h2>
            <p className="newsMedia__lead">{visiting.lead}</p>
            <p className="newsMedia__copy">{visiting.body}</p>
          </div>
        </article>

        <section className="newsMedia__block" aria-labelledby="visit-gallery-title">
          <div className="newsMedia__blockHead">
            <h3 className="newsMedia__sectionTitle" id="visit-gallery-title">
              {visiting.galleryTitle}
            </h3>
            {visiting.galleryLead && (
              <p className="newsMedia__sectionLead">{visiting.galleryLead}</p>
            )}
          </div>

          <div className="newsMedia__visitGrid">
            {VISITING_KEYS.map((key, index) => {
              const photo = visitingPhotos[index] || {};
              const { src, orient } = VISITING_IMAGES[key];
              const isWide = orient === 'landscape';
              return (
                <figure
                  key={key}
                  className={`newsMedia__visitCard newsMedia__visitCard--${orient}${isWide ? ' newsMedia__visitCard--wide' : ''}`}
                >
                  <button
                    type="button"
                    className="newsMedia__visitMedia"
                    onClick={() => openVisit(key, index)}
                    aria-label={`${visiting.openFull || 'View full image'}: ${photo.title || ''}`}
                  >
                    <img
                      className={`newsMedia__visitImg newsMedia__visitImg--${orient}`}
                      src={src}
                      alt={photo.title || ''}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <span className="newsMedia__visitZoom" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                        <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <figcaption className="newsMedia__visitCaption">
                    <span className="newsMedia__visitLabel">{photo.label}</span>
                    <strong>{photo.title}</strong>
                    <span className="newsMedia__visitRole">{photo.role}</span>
                    {photo.caption && <p>{photo.caption}</p>}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        {visitingGuests.length > 0 && (
          <section className="newsMedia__block" aria-labelledby="visit-guests-title">
            <div className="newsMedia__blockHead">
              <h3 className="newsMedia__sectionTitle" id="visit-guests-title">
                {visiting.guestsTitle}
              </h3>
            </div>
            <ul className="newsMedia__guests">
              {visitingGuests.map((guest) => (
                <li key={guest.name} className="newsMedia__guestCard">
                  <strong>{guest.name}</strong>
                  {guest.title && <span className="newsMedia__guestTitle">{guest.title}</span>}
                  {guest.org && <span className="newsMedia__guestOrg">{guest.org}</span>}
                  {guest.note && <p>{guest.note}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}

        <article className="newsMedia__feature newsMedia__feature--secondary" id="bim-seminar">
          <div className="newsMedia__featureMedia">
            <img
              className="newsMedia__featureImg"
              src={BIM_IMAGES.speech}
              alt={photos[0]?.title || feature.title}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="newsMedia__featureBody">
            <div className="newsMedia__meta">
              <span className="newsMedia__date">{feature.date}</span>
              <span className="newsMedia__tag">{feature.tag}</span>
            </div>
            <h2 className="newsMedia__articleTitle">{feature.title}</h2>
            <p className="newsMedia__lead">{feature.lead}</p>
            <p className="newsMedia__copy">{feature.body}</p>
          </div>
        </article>

        <section className="newsMedia__block" aria-labelledby="news-video-title">
          <div className="newsMedia__blockHead">
            <h3 className="newsMedia__sectionTitle" id="news-video-title">
              {feature.videoTitle}
            </h3>
          </div>
          <div className="newsMedia__videoFrame">
            <iframe
              src={YOUTUBE_EMBED}
              title={feature.videoTitle || 'BIM Seminar Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </section>

        <section className="newsMedia__block" aria-labelledby="news-gallery-title">
          <div className="newsMedia__blockHead">
            <h3 className="newsMedia__sectionTitle" id="news-gallery-title">
              {feature.galleryTitle}
            </h3>
          </div>
          <div className="newsMedia__gallery">
            <figure className="newsMedia__galleryItem">
              <img
                className="newsMedia__galleryImg"
                src={BIM_IMAGES.speech}
                alt={photos[0]?.title || ''}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="newsMedia__galleryCaption">
                <strong>{photos[0]?.title}</strong>
                {photos[0]?.caption}
              </figcaption>
            </figure>

            <figure className="newsMedia__galleryItem">
              <img
                className="newsMedia__galleryImg"
                src={BIM_IMAGES.mou}
                alt={photos[1]?.title || ''}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="newsMedia__galleryCaption">
                <strong>{photos[1]?.title}</strong>
                {photos[1]?.caption}
              </figcaption>
            </figure>

            <figure className="newsMedia__galleryItem">
              <img
                className="newsMedia__galleryImg"
                src={BIM_IMAGES.group}
                alt={photos[2]?.title || ''}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="newsMedia__galleryCaption">
                <strong>{photos[2]?.title}</strong>
                {photos[2]?.caption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="newsMedia__block" aria-labelledby="news-people-title">
          <div className="newsMedia__blockHead">
            <h3 className="newsMedia__sectionTitle" id="news-people-title">
              {feature.peopleTitle}
            </h3>
          </div>
          <ul className="newsMedia__people">
            {people.map((person) => (
              <li key={person.name}>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
              </li>
            ))}
          </ul>
        </section>

        {archive.length > 0 && (
          <section className="newsMedia__archive" aria-labelledby="news-archive-title">
            <h2 className="newsMedia__archiveTitle" id="news-archive-title">
              {t('newsMedia.archiveTitle')}
            </h2>
            <div className="newsMedia__archiveGrid">
              {archive.map((item) => (
                <article className="newsMedia__archiveCard" key={item.title}>
                  <div className="newsMedia__archiveDate">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {lightbox && (
        <div
          className="newsMedia__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title || visiting.openFull || 'Full image'}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="newsMedia__lightboxClose"
            onClick={closeLightbox}
            aria-label={visiting.close || 'Close'}
          >
            ×
          </button>
          <figure
            className="newsMedia__lightboxFigure"
            onClick={(e) => e.stopPropagation()}
          >
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
    </div>
  );
};

export default NewsMedia;
