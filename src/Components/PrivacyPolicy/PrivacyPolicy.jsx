'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useLocale } from '../../i18n/LocaleContext';
import './PrivacyPolicy.css';

const SECTION_IDS = [
  'overview',
  'info-collect',
  'personal-data',
  'usage-data',
  'cookies',
  'why-collect',
  'disclosure',
  'security',
  'retention',
  'rights',
  'children',
  'international',
  'changes',
  'contact',
];

const PrivacyPolicy = () => {
  const { t, localizedPath } = useLocale();
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);

  const toc = useMemo(
    () =>
      SECTION_IDS.map((id) => ({
        id,
        label: t(`privacy.toc.${id}`),
      })),
    [t]
  );

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const list = (key) => {
    const value = t(key);
    return Array.isArray(value) ? value : [];
  };

  return (
    <div className="privacyPage">
      <section className="privacyHero">
        <div className="privacyHero__glow" aria-hidden="true" />
        <div className="privacyHero__inner">
          <p className="privacyHero__eyebrow">{t('privacy.eyebrow')}</p>
          <h1 className="privacyHero__title">{t('privacy.pageTitle')}</h1>
          <p className="privacyHero__lead">{t('privacy.intro')}</p>
          <div className="privacyHero__meta">
            <span>{t('privacy.effectiveDate')}</span>
            <span>{t('privacy.lastUpdated')}</span>
          </div>
        </div>
      </section>

      <div className="privacyLayout">
        <aside className="privacyToc" aria-label="Privacy policy sections">
          <p className="privacyToc__label">{t('privacy.tocLabel')}</p>
          <nav className="privacyToc__nav">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`privacyToc__link${activeId === item.id ? ' is-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="privacyContent">
          <article id="overview" className="privacySection">
            <h2>{t('privacy.sections.overview')}</h2>
            <p>{t('privacy.sections.overviewText')}</p>
            <p>{t('privacy.sections.overviewText2')}</p>
          </article>

          <article id="info-collect" className="privacySection">
            <h3>{t('privacy.sections.infoCollect')}</h3>
            <p>{t('privacy.sections.infoCollectIntro')}</p>
            <p>{t('privacy.sections.infoCollectIntro2')}</p>
          </article>

          <article id="personal-data" className="privacySection">
            <h3>{t('privacy.sections.personalData')}</h3>
            <p>{t('privacy.sections.personalDataIntro')}</p>
            <ul>
              {list('privacy.sections.personalItems').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{t('privacy.sections.personalDataOutro')}</p>
          </article>

          <article id="usage-data" className="privacySection">
            <h3>{t('privacy.sections.usageData')}</h3>
            <p>{t('privacy.sections.usageDataText')}</p>
            <p>{t('privacy.sections.usageDataText2')}</p>
          </article>

          <article id="cookies" className="privacySection">
            <h3>{t('privacy.sections.cookies')}</h3>
            <p>{t('privacy.sections.cookiesText')}</p>
            <p>{t('privacy.sections.cookiesText2')}</p>
            <ul>
              {list('privacy.sections.cookieItems').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article id="why-collect" className="privacySection">
            <h3>{t('privacy.sections.whyCollect')}</h3>
            <p>{t('privacy.sections.whyCollectIntro')}</p>
            <ul>
              {list('privacy.sections.whyItems').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article id="disclosure" className="privacySection">
            <h3>{t('privacy.sections.disclosure')}</h3>
            <p>{t('privacy.sections.disclosureText')}</p>
            <p>{t('privacy.sections.disclosureText2')}</p>
          </article>

          <article id="security" className="privacySection">
            <h3>{t('privacy.sections.security')}</h3>
            <p>{t('privacy.sections.securityText')}</p>
            <p>{t('privacy.sections.securityText2')}</p>
          </article>

          <article id="retention" className="privacySection">
            <h3>{t('privacy.sections.retention')}</h3>
            <p>{t('privacy.sections.retentionText')}</p>
            <p>{t('privacy.sections.retentionText2')}</p>
          </article>

          <article id="rights" className="privacySection">
            <h3>{t('privacy.sections.rights')}</h3>
            <p>{t('privacy.sections.rightsIntro')}</p>
            <ul>
              {list('privacy.sections.rightsItems').map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{t('privacy.sections.rightsOutro')}</p>
          </article>

          <article id="children" className="privacySection">
            <h3>{t('privacy.sections.children')}</h3>
            <p>{t('privacy.sections.childrenText')}</p>
          </article>

          <article id="international" className="privacySection">
            <h3>{t('privacy.sections.international')}</h3>
            <p>{t('privacy.sections.internationalText')}</p>
            <p>{t('privacy.sections.internationalText2')}</p>
          </article>

          <article id="changes" className="privacySection">
            <h3>{t('privacy.sections.changes')}</h3>
            <p>{t('privacy.sections.changesText')}</p>
            <p>{t('privacy.sections.changesText2')}</p>
          </article>

          <article id="contact" className="privacySection privacySection--contact">
            <h3>{t('privacy.sections.contact')}</h3>
            <p>{t('privacy.sections.contactText')}</p>
            <div className="privacyContactCard">
              <p>
                <strong>{t('privacy.sections.contactOrg')}</strong>
              </p>
              <p>
                <a href="mailto:info@kawaiibd.com">info@kawaiibd.com</a>
              </p>
              <p>
                <a href="tel:+8801901850570">+88 01901850570</a>
              </p>
              <p>{t('footer.address')}</p>
              <Link href={localizedPath('/contact')} className="privacyContactCard__cta">
                {t('privacy.sections.contactCta')}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
