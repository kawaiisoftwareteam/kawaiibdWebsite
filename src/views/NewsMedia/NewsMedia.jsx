'use client';

import React from 'react';
import './NewsMedia.css';
import { useLocale } from '../../i18n/LocaleContext';

const BIM_IMAGES = {
  speech: '/news-media/BIM/bim-ceo-speech.jpeg',
  mou: '/news-media/BIM/bim-mou-signing.jpeg',
  group: '/news-media/BIM/bim-mou-group.jpeg',
};

const YOUTUBE_EMBED = 'https://www.youtube.com/embed/sjQUOtl07mg';

const NewsMedia = () => {
  const { t } = useLocale();
  const feature = t('newsMedia.feature') || {};
  const photos = feature.photos || [];
  const people = feature.people || [];
  const archive = t('home.news.items') || [];

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

        <article className="newsMedia__feature" id="bim-seminar">
          <div className="newsMedia__featureMedia">
            <img
              className="newsMedia__featureImg"
              src={BIM_IMAGES.speech}
              alt={photos[0]?.title || feature.title}
              loading="eager"
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
    </div>
  );
};

export default NewsMedia;
