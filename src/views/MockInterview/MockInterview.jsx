'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './MockInterview.css';
import { useLocale } from '../../i18n/LocaleContext';
import { resolveImage } from '../../lib/image';
import supportImg from '../../Assets/career_support.webp';
import {
  FaUserCheck,
  FaComments,
  FaGlobeAsia,
  FaClipboardList,
  FaFileAlt,
  FaPlaneDeparture,
  FaArrowRight,
  FaCheck,
  FaCheckCircle,
  FaUser,
  FaLanguage,
  FaHandshake,
} from 'react-icons/fa';

const HERO_IMG_WEBP = '/mock/mock.webp';
const HERO_IMG_FALLBACK = '/mock/mock.jpg';
const HERO_WIDTH = 1400;
const HERO_HEIGHT = 788;
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdpwdcYfzCH0ozqczKK0NzvuF3akOEtQb_j2L_k_KxM5XoF2w/viewform';
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdpwdcYfzCH0ozqczKK0NzvuF3akOEtQb_j2L_k_KxM5XoF2w/formResponse';

/** Google Form entry IDs — values must match form options exactly */
const ENTRIES = {
  fullName: 'entry.127653719',
  mobile: 'entry.648325870',
  whatsapp: 'entry.1138225617',
  courseComplete: 'entry.113003442',
  languageLevel: 'entry.322069157',
  skillAssessment: 'entry.835121160',
  interviewInterest: 'entry.546532078',
  interviewReady: 'entry.683037630',
};

const COURSE_OPTIONS = ['Yes', 'Currently studying', 'No'];
const LEVEL_OPTIONS = ['JLPT N5', 'JLPT N4', 'JFT A1', 'JFT A2', 'Other'];
const SKILL_OPTIONS = ['Yes', 'Currently studying', 'No'];
const INTEREST_OPTIONS = ['Yes', 'Need more information'];
const READY_OPTIONS = ["Yes, I'm interested", 'I want to know more'];

const INITIAL_FORM = {
  fullName: '',
  mobile: '',
  whatsapp: '',
  courseComplete: '',
  languageLevel: '',
  skillAssessment: '',
  interviewInterest: '',
  interviewReady: '',
};

const JOURNEY_ICONS = [FaComments, FaUserCheck, FaFileAlt, FaClipboardList, FaPlaneDeparture];

const MockInterview = () => {
  const { t } = useLocale();
  const pageRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const items = root.querySelectorAll('.mi-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mi-reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!submitted) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [submitted]);

  const problems = t('mockInterview.problems') || [];
  const highlights = t('mockInterview.highlights') || [];
  const journey = t('mockInterview.journey') || [];
  const forWhom = t('mockInterview.forWhom') || [];

  const optionLabel = (group, value) => {
    const map = t(`mockInterview.form.optionLabels.${group}`) || {};
    return map[value] || value;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const next = {};
    if (!formData.fullName.trim()) next.fullName = t('mockInterview.form.errors.fullName');
    if (!formData.mobile.trim()) next.mobile = t('mockInterview.form.errors.mobile');
    if (!formData.whatsapp.trim()) next.whatsapp = t('mockInterview.form.errors.whatsapp');
    if (!formData.courseComplete) next.courseComplete = t('mockInterview.form.errors.courseComplete');
    if (!formData.languageLevel) next.languageLevel = t('mockInterview.form.errors.languageLevel');
    if (!formData.skillAssessment) next.skillAssessment = t('mockInterview.form.errors.skillAssessment');
    if (!formData.interviewInterest) next.interviewInterest = t('mockInterview.form.errors.interviewInterest');
    if (!formData.interviewReady) next.interviewReady = t('mockInterview.form.errors.interviewReady');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitting(false);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!validate()) {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const body = new URLSearchParams();
    body.append(ENTRIES.fullName, formData.fullName.trim());
    body.append(ENTRIES.mobile, formData.mobile.trim());
    body.append(ENTRIES.whatsapp, formData.whatsapp.trim());
    body.append(ENTRIES.courseComplete, formData.courseComplete);
    body.append(ENTRIES.languageLevel, formData.languageLevel);
    body.append(ENTRIES.skillAssessment, formData.skillAssessment);
    body.append(ENTRIES.interviewInterest, formData.interviewInterest);
    body.append(ENTRIES.interviewReady, formData.interviewReady);
    body.append('fvv', '1');
    body.append('pageHistory', '0');
    body.append('submissionTimestamp', '-1');

    setSubmitting(true);
    setSubmitted(true);

    fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    }).catch(() => {});
  };

  const fieldClass = (name) => `mi-input${errors[name] ? ' mi-input--error' : ''}`;

  const summaryRows = [
    { label: t('mockInterview.form.fields.fullName'), value: formData.fullName },
    { label: t('mockInterview.form.fields.mobile'), value: formData.mobile },
    { label: t('mockInterview.form.fields.whatsapp'), value: formData.whatsapp },
    {
      label: t('mockInterview.form.fields.courseComplete'),
      value: optionLabel('courseComplete', formData.courseComplete),
    },
    {
      label: t('mockInterview.form.fields.languageLevel'),
      value: optionLabel('languageLevel', formData.languageLevel),
    },
    {
      label: t('mockInterview.form.fields.skillAssessment'),
      value: optionLabel('skillAssessment', formData.skillAssessment),
    },
    {
      label: t('mockInterview.form.fields.interviewInterest'),
      value: optionLabel('interviewInterest', formData.interviewInterest),
    },
    {
      label: t('mockInterview.form.fields.interviewReady'),
      value: optionLabel('interviewReady', formData.interviewReady),
    },
  ].filter((row) => row.value);

  const successModal = submitted
    ? createPortal(
        <div
          className="mi-success-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mi-success-title"
          onClick={resetForm}
        >
          <div className="mi-success-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="mi-success-close"
              onClick={resetForm}
              aria-label={t('mockInterview.form.close')}
            >
              ×
            </button>

            <div className="mi-success-top">
              <div className="mi-success-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="36" height="36" focusable="false">
                  <path
                    fill="currentColor"
                    d="M9.0 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
                  />
                </svg>
              </div>
              <p className="mi-success-eyebrow">{t('mockInterview.success.eyebrow')}</p>
              <h3 id="mi-success-title">{t('mockInterview.success.title')}</h3>
              <p className="mi-success-lead">
                {t('mockInterview.success.thankYouPrefix')} <strong>{formData.fullName}</strong>.{' '}
                {t('mockInterview.success.thankYouSuffix')}
              </p>
            </div>

            <div className="mi-success-body">
              <p className="mi-success-summary-label">{t('mockInterview.success.summaryTitle')}</p>
              <dl className="mi-success-summary">
                {summaryRows.map((row) => (
                  <div key={row.label} className="mi-success-row">
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mi-success-next">
                <p className="mi-success-summary-label">{t('mockInterview.success.nextTitle')}</p>
                <ul>
                  {(t('mockInterview.success.nextSteps') || []).map((step, i) => (
                    <li key={i}>
                      <FaCheck aria-hidden="true" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button type="button" className="mi-btn mi-btn--primary mi-btn--cta" onClick={resetForm}>
                {t('mockInterview.success.done')}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  const renderChoiceGroup = (field, options, groupKey) => (
    <div className="mi-choice-row">
      {options.map((opt) => (
        <label key={opt} className={`mi-choice ${formData[field] === opt ? 'mi-choice--selected' : ''}`}>
          <input
            type="radio"
            name={field}
            value={opt}
            checked={formData[field] === opt}
            onChange={(e) => handleInputChange(field, e.target.value)}
          />
          <span>{optionLabel(groupKey, opt)}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="mi-page" ref={pageRef}>
      {successModal}

      <header className="mi-hero">
        <div className="mi-hero__banner">
          <picture>
            <source srcSet={HERO_IMG_WEBP} type="image/webp" />
            <img
              className="mi-hero__media"
              src={HERO_IMG_FALLBACK}
              alt={t('mockInterview.heroImgAlt')}
              width={HERO_WIDTH}
              height={HERO_HEIGHT}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <div className="mi-hero__veil" aria-hidden="true" />
          <h1 className="mi-sr-only">{t('mockInterview.title')}</h1>
        </div>
        <div className="mi-hero__actions-bar">
          <div className="mi-shell mi-hero__cta">
            <div className="mi-hero__cta-text">
              <span className="mi-hero__cta-badge">{t('mockInterview.ctaBadge')}</span>
              <p className="mi-hero__cta-title">{t('mockInterview.ctaInvite')}</p>
              <p className="mi-hero__cta-note">{t('mockInterview.ctaNote')}</p>
            </div>
            <div className="mi-hero__actions">
              <a href="#register" className="mi-btn mi-btn--primary mi-btn--cta">
                {t('mockInterview.registerCta')}
                <FaArrowRight aria-hidden="true" />
              </a>
              <a href="#why" className="mi-btn mi-btn--outline mi-btn--cta-secondary">
                {t('mockInterview.learnMore')}
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="mi-section mi-section--problem">
        <div className="mi-shell mi-reveal">
          <p className="mi-eyebrow">{t('mockInterview.problemEyebrow')}</p>
          <h2 className="mi-heading">{t('mockInterview.problemTitle')}</h2>
          <p className="mi-copy">{t('mockInterview.problemLead')}</p>
          <ul className="mi-problem-list">
            {problems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mi-section mi-section--solution" id="why">
        <div className="mi-shell mi-solution mi-reveal">
          <div className="mi-solution__text">
            <p className="mi-eyebrow mi-eyebrow--red">{t('mockInterview.solutionEyebrow')}</p>
            <h2 className="mi-heading">{t('mockInterview.solutionTitle')}</h2>
            <p className="mi-copy">{t('mockInterview.solutionLead')}</p>
            <p className="mi-copy">{t('mockInterview.solutionBody')}</p>
            <ul className="mi-check-list">
              {highlights.map((item, i) => (
                <li key={i}>
                  <FaCheck aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mi-solution__visual">
            <img
              {...resolveImage(supportImg)}
              alt={t('mockInterview.solutionImgAlt')}
              loading="lazy"
              decoding="async"
            />
            <div className="mi-solution__caption">
              <FaGlobeAsia aria-hidden="true" />
              <span>{t('mockInterview.nativeInterviewer')}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mi-section mi-section--journey">
        <div className="mi-shell mi-reveal">
          <p className="mi-eyebrow">{t('mockInterview.journeyEyebrow')}</p>
          <h2 className="mi-heading mi-heading--center">{t('mockInterview.journeyTitle')}</h2>
          <p className="mi-copy mi-copy--center">{t('mockInterview.journeyLead')}</p>
          <ol className="mi-journey">
            {journey.map((step, i) => {
              const Icon = JOURNEY_ICONS[i] || FaCheck;
              return (
                <li key={i} className="mi-journey__step">
                  <div className="mi-journey__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <span className="mi-journey__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="mi-section mi-section--for">
        <div className="mi-shell mi-for mi-reveal">
          <div>
            <p className="mi-eyebrow mi-eyebrow--red">{t('mockInterview.forEyebrow')}</p>
            <h2 className="mi-heading">{t('mockInterview.forTitle')}</h2>
            <p className="mi-copy">{t('mockInterview.forLead')}</p>
          </div>
          <ul className="mi-for-list">
            {forWhom.map((item, i) => (
              <li key={i}>
                <FaUserCheck aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Registration form — mirrors Google Form fields */}
      <section className="mi-section mi-section--form" id="register" ref={formRef}>
        <div className="mi-shell mi-reveal">
          <div className="mi-form-layout">
            <aside className="mi-form-aside">
              <p className="mi-eyebrow mi-eyebrow--red">{t('mockInterview.form.eyebrow')}</p>
              <h2 className="mi-heading">{t('mockInterview.form.title')}</h2>
              <p className="mi-copy">{t('mockInterview.form.subtitle')}</p>
              <ul className="mi-form-aside-points">
                {(t('mockInterview.form.asidePoints') || []).map((point, i) => (
                  <li key={i}>
                    <FaCheckCircle aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <form className="mi-form" onSubmit={handleSubmit} noValidate>
              <div className="mi-form-progress" aria-hidden="true">
                <span className="mi-form-progress__step is-active">1</span>
                <span className="mi-form-progress__line" />
                <span className="mi-form-progress__step is-active">2</span>
                <span className="mi-form-progress__line" />
                <span className="mi-form-progress__step is-active">3</span>
              </div>

              <fieldset className="mi-fieldset">
                <legend>
                  <span className="mi-fieldset__num">01</span>
                  <span className="mi-fieldset__title">
                    <FaUser aria-hidden="true" /> {t('mockInterview.form.sections.basic')}
                  </span>
                </legend>
                <div className="mi-fields">
                  <div className="mi-field mi-field--full">
                    <label htmlFor="mi-fullName">{t('mockInterview.form.fields.fullName')} *</label>
                    <input
                      id="mi-fullName"
                      type="text"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder={t('mockInterview.form.placeholders.fullName')}
                      className={fieldClass('fullName')}
                    />
                    {errors.fullName && <p className="mi-field-error">{errors.fullName}</p>}
                  </div>

                  <div className="mi-field">
                    <label htmlFor="mi-mobile">{t('mockInterview.form.fields.mobile')} *</label>
                    <input
                      id="mi-mobile"
                      type="tel"
                      autoComplete="tel"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                      placeholder={t('mockInterview.form.placeholders.mobile')}
                      className={fieldClass('mobile')}
                    />
                    {errors.mobile && <p className="mi-field-error">{errors.mobile}</p>}
                  </div>

                  <div className="mi-field">
                    <label htmlFor="mi-whatsapp">{t('mockInterview.form.fields.whatsapp')} *</label>
                    <input
                      id="mi-whatsapp"
                      type="tel"
                      autoComplete="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder={t('mockInterview.form.placeholders.whatsapp')}
                      className={fieldClass('whatsapp')}
                    />
                    {errors.whatsapp && <p className="mi-field-error">{errors.whatsapp}</p>}
                  </div>
                </div>
              </fieldset>

              <fieldset className="mi-fieldset">
                <legend>
                  <span className="mi-fieldset__num">02</span>
                  <span className="mi-fieldset__title">
                    <FaLanguage aria-hidden="true" /> {t('mockInterview.form.sections.skills')}
                  </span>
                </legend>
                <div className="mi-fields">
                  <div className="mi-field mi-field--full">
                    <label>{t('mockInterview.form.fields.courseComplete')} *</label>
                    {renderChoiceGroup('courseComplete', COURSE_OPTIONS, 'courseComplete')}
                    {errors.courseComplete && <p className="mi-field-error">{errors.courseComplete}</p>}
                  </div>

                  <div className="mi-field mi-field--full">
                    <label>{t('mockInterview.form.fields.languageLevel')} *</label>
                    {renderChoiceGroup('languageLevel', LEVEL_OPTIONS, 'languageLevel')}
                    {errors.languageLevel && <p className="mi-field-error">{errors.languageLevel}</p>}
                  </div>

                  <div className="mi-field mi-field--full">
                    <label>{t('mockInterview.form.fields.skillAssessment')} *</label>
                    {renderChoiceGroup('skillAssessment', SKILL_OPTIONS, 'skillAssessment')}
                    {errors.skillAssessment && <p className="mi-field-error">{errors.skillAssessment}</p>}
                  </div>
                </div>
              </fieldset>

              <fieldset className="mi-fieldset">
                <legend>
                  <span className="mi-fieldset__num">03</span>
                  <span className="mi-fieldset__title">
                    <FaHandshake aria-hidden="true" /> {t('mockInterview.form.sections.interest')}
                  </span>
                </legend>
                <div className="mi-fields">
                  <div className="mi-field mi-field--full">
                    <label>{t('mockInterview.form.fields.interviewInterest')} *</label>
                    {renderChoiceGroup('interviewInterest', INTEREST_OPTIONS, 'interviewInterest')}
                    {errors.interviewInterest && (
                      <p className="mi-field-error">{errors.interviewInterest}</p>
                    )}
                  </div>

                  <div className="mi-field mi-field--full">
                    <label>{t('mockInterview.form.fields.interviewReady')} *</label>
                    {renderChoiceGroup('interviewReady', READY_OPTIONS, 'interviewReady')}
                    {errors.interviewReady && <p className="mi-field-error">{errors.interviewReady}</p>}
                  </div>
                </div>
              </fieldset>

              <div className="mi-form-actions">
                <div className="mi-form-actions__copy">
                  <strong>{t('mockInterview.form.privacyNote')}</strong>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mi-form-alt"
                  >
                    {t('mockInterview.form.openGoogle')}
                  </a>
                </div>
                <button type="submit" className="mi-btn mi-btn--primary mi-btn--cta" disabled={submitting}>
                  {submitting ? t('mockInterview.form.submitting') : t('mockInterview.form.submit')}
                  <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MockInterview;
