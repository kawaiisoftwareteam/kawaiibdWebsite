'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './Career.css';
import {
  FaQrcode,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaHandshake,
  FaGraduationCap,
  FaPassport,
  FaBriefcase,
  FaLanguage,
  FaCheckCircle,
  FaAward,
  FaBullhorn,
  FaComments,
  FaPercent,
  FaChalkboardTeacher,
  FaUser,
  FaMapMarkerAlt,
  FaBuilding,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import careerBannerBg from '../../Assets/career_banner_bg.png';
import { useLocale } from '../../i18n/LocaleContext';

const GOOGLE_FORM_URL = 'https://forms.gle/yEA2JZLPr43JAaiu9';
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSc3HehwaMQY3SIjpLjQE9Z3gXr86HMI7Foe0WIey7f9cz0e4Q/formResponse';
const CAREER_PAGE_LINK = 'https://kawaiibd.com/career';

const SERVICE_ICONS = [FaLanguage, FaGraduationCap, FaPassport, FaBriefcase, FaPassport, FaHandshake];
const PROVIDE_ICONS = [FaAward, FaChalkboardTeacher, FaBullhorn, FaComments, FaPercent];

const INITIAL_FORM = {
  email: '',
  fullName: '',
  fatherName: '',
  dob: '',
  gender: '',
  mobile: '',
  currentAddress: '',
  permanentAddress: '',
  occupation: '',
  experience: '',
  area: '',
  capacity: '',
  workforce: '',
  workforceOther: '',
  reason: '',
};

const Career = () => {
  const { t } = useLocale();
  const formRef = useRef(null);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = t('careerPage.services') || [];
  const provide = t('careerPage.provide') || [];
  const priority = t('careerPage.priority') || [];
  const workforceOptions = t('careerPage.form.workforceOptions') || ['SSW', 'TITP/ESDP', 'Student'];

  const scrollToForm = () => {
    document.getElementById('career-apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.email.trim()) newErrors.email = t('careerPage.form.errors.emailRequired');
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('careerPage.form.errors.emailInvalid');
      if (!formData.fullName.trim()) newErrors.fullName = t('careerPage.form.errors.fullNameRequired');
      if (!formData.dob) newErrors.dob = t('careerPage.form.errors.dobRequired');
      if (!formData.gender) newErrors.gender = t('careerPage.form.errors.genderRequired');
      if (!formData.mobile.trim()) newErrors.mobile = t('careerPage.form.errors.mobileRequired');
    } else if (step === 2) {
      // optional fields — no hard required beyond UX
    } else if (step === 3) {
      if (!formData.capacity.trim()) newErrors.capacity = t('careerPage.form.errors.capacityRequired');
      if (!formData.workforce) newErrors.workforce = t('careerPage.form.errors.workforceRequired');
      if (formData.workforce === '__other_option__' && !formData.workforceOther.trim()) {
        newErrors.workforceOther = t('careerPage.form.errors.workforceOtherRequired');
      }
      if (!formData.reason.trim()) newErrors.reason = t('careerPage.form.errors.reasonRequired');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
      window.scrollTo({ top: (formRef.current?.offsetTop || 0) - 100, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: (formRef.current?.offsetTop || 0) - 100, behavior: 'smooth' });
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
    setCurrentStep(1);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!validateStep(3)) {
      document.getElementById('career-apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const formBody = new URLSearchParams();
    formBody.append('emailAddress', formData.email.trim());
    formBody.append('entry.2090717478', formData.fullName.trim());
    formBody.append('entry.1866069720', formData.fatherName.trim());

    if (formData.dob) {
      const [year, month, day] = formData.dob.split('-');
      formBody.append('entry.1128182559_year', year);
      formBody.append('entry.1128182559_month', String(Number(month)));
      formBody.append('entry.1128182559_day', String(Number(day)));
    }

    formBody.append('entry.1821231611', formData.gender);
    formBody.append('entry.1710684903', formData.mobile.trim());
    formBody.append('entry.1054729212', formData.currentAddress.trim());
    formBody.append('entry.1674403528', formData.permanentAddress.trim());
    formBody.append('entry.972088693', formData.occupation.trim());
    if (formData.experience) formBody.append('entry.1914455599', formData.experience);
    formBody.append('entry.237912465', formData.area.trim());
    formBody.append('entry.1940079245', formData.capacity.trim());

    if (formData.workforce === '__other_option__') {
      formBody.append('entry.2103981819', '__other_option__');
      formBody.append('entry.2103981819.other_option_response', formData.workforceOther.trim());
    } else {
      formBody.append('entry.2103981819', formData.workforce);
    }

    formBody.append('entry.138921756', formData.reason.trim());
    formBody.append('fvv', '1');
    formBody.append('pageHistory', '0,1');
    formBody.append('submissionTimestamp', '-1');

    setSubmitted(true);

    fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString(),
    }).catch(() => {});
  };

  useEffect(() => {
    if (!submitted) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [submitted]);

  const workforceLabel =
    formData.workforce === '__other_option__'
      ? formData.workforceOther
      : formData.workforce;

  const summaryRows = [
    { label: t('careerPage.form.fields.email'), value: formData.email },
    { label: t('careerPage.form.fields.fullName'), value: formData.fullName },
    { label: t('careerPage.form.fields.fatherName'), value: formData.fatherName },
    { label: t('careerPage.form.fields.dob'), value: formData.dob },
    { label: t('careerPage.form.fields.gender'), value: formData.gender },
    { label: t('careerPage.form.fields.mobile'), value: formData.mobile },
    { label: t('careerPage.form.fields.currentAddress'), value: formData.currentAddress },
    { label: t('careerPage.form.fields.permanentAddress'), value: formData.permanentAddress },
    { label: t('careerPage.form.fields.occupation'), value: formData.occupation },
    { label: t('careerPage.form.fields.experience'), value: formData.experience },
    { label: t('careerPage.form.fields.area'), value: formData.area },
    { label: t('careerPage.form.fields.capacity'), value: formData.capacity },
    { label: t('careerPage.form.fields.workforce'), value: workforceLabel },
    { label: t('careerPage.form.fields.reason'), value: formData.reason },
  ].filter((row) => row.value);

  const successModal = submitted
    ? createPortal(
        <div
          className="career-success-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="career-success-title"
          onClick={resetForm}
        >
          <div className="career-success-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="career-success-close"
              onClick={resetForm}
              aria-label={t('careerPage.form.close')}
            >
              ×
            </button>
            <div className="career-success-icon">
              <FaCheckCircle />
            </div>
            <div className="career-success-header">
              <h3 id="career-success-title">{t('careerPage.success.title')}</h3>
              <p>
                {t('careerPage.success.thankYouPrefix')}{' '}
                <strong>{formData.fullName}</strong>. {t('careerPage.success.thankYouSuffix')}
              </p>
            </div>

            <div className="career-success-doc">
              <div className="career-success-doc-title">
                <span className="career-success-doc-dot" />
                {t('careerPage.success.summaryTitle')}
              </div>
              <dl className="career-success-doc-list">
                {summaryRows.map((row) => (
                  <div key={row.label} className="career-success-doc-row">
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ul className="career-success-next">
              <li>{t('careerPage.success.next1')}</li>
              <li>{t('careerPage.success.next2')}</li>
              <li>{t('careerPage.success.next3')}</li>
            </ul>

            <button type="button" onClick={resetForm} className="career-success-done">
              {t('careerPage.success.done')}
            </button>
          </div>
        </div>,
        document.body
      )
    : null;

  const fieldClass = (key) =>
    `career-form-input ${errors[key] ? 'has-error' : ''}`;

  return (
    <div className="career-page-container">
      {successModal}

      <section className="career-hero" style={{ backgroundImage: `url(${careerBannerBg})` }}>
        <div className="career-hero-overlay" />
        <div className="career-hero-content">
          <span className="career-badge">
            <FaHandshake className="career-badge-icon" />
            {t('careerPage.badge')}
          </span>
          <h1 className="career-main-title">{t('careerPage.title')}</h1>
          <p className="career-sub-title">{t('careerPage.subtitle')}</p>
          <div className="career-hero-actions">
            <button type="button" className="career-hero-cta" onClick={scrollToForm}>
              {t('careerPage.ctaApply')}
            </button>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="career-hero-secondary"
            >
              {t('careerPage.openForm')}
              <FaExternalLinkAlt className="career-btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="career-intro-section career-page-shell">
        <div className="career-intro-inner">
          <h2 className="career-section-title">{t('careerPage.introTitle')}</h2>
          <p className="career-intro-body">{t('careerPage.introBody')}</p>
        </div>
      </section>

      <section className="career-highlights career-page-shell">
        <div className="career-highlights-grid">
          <div className="career-highlight-block">
            <h3 className="career-highlight-title">{t('careerPage.servicesTitle')}</h3>
            <ul className="career-highlight-list">
              {services.map((item, i) => {
                const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
                return (
                  <li key={`svc-${i}`}>
                    <Icon className="career-list-icon" />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="career-highlight-block accent">
            <h3 className="career-highlight-title">{t('careerPage.provideTitle')}</h3>
            <ul className="career-highlight-list">
              {provide.map((item, i) => {
                const Icon = PROVIDE_ICONS[i % PROVIDE_ICONS.length];
                return (
                  <li key={`prv-${i}`}>
                    <Icon className="career-list-icon" />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="career-highlight-block">
            <h3 className="career-highlight-title">{t('careerPage.priorityTitle')}</h3>
            <ul className="career-highlight-list">
              {priority.map((item, i) => (
                <li key={`pri-${i}`}>
                  <FaCheckCircle className="career-list-icon check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="career-main-wrapper career-page-shell" id="career-apply">
        <div className="career-apply-header">
          <span className="form-status-tag">
            <FaPaperPlane className="career-btn-icon" />
            {t('careerPage.officialForm')}
          </span>
          <h2 className="form-section-heading">{t('careerPage.formTitle')}</h2>
          <p className="career-form-hint">{t('careerPage.formHint')}</p>
        </div>

        <div className="career-content-grid">
          <aside className="career-qr-card">
            <div className="qr-card-inner">
              <div className="qr-icon-header">
                <FaQrcode className="qr-header-icon" />
                <h3 className="qr-card-title">{t('careerPage.qrTitle')}</h3>
              </div>
              <div className="qr-image-container">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(CAREER_PAGE_LINK)}`}
                  alt={t('careerPage.qrTitle')}
                  className="qr-code-img"
                  loading="lazy"
                />
              </div>
              <p className="qr-scan-text">{t('careerPage.qrText')}</p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-form-btn"
              >
                <span>{t('careerPage.openForm')}</span>
                <FaExternalLinkAlt className="career-btn-icon" />
              </a>
            </div>
          </aside>

          <main className="career-form-card">
            <div className="career-form-card-head">
              <h3>{t('careerPage.form.cardTitle')}</h3>
              <p>{t('careerPage.form.cardSubtitle')}</p>
            </div>

            <div className="career-form-body" ref={formRef}>
              <div className="career-stepper">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="career-stepper-item">
                    <button
                      type="button"
                      className={`career-progress-step ${
                        currentStep === stepNum ? 'active' : currentStep > stepNum ? 'completed' : ''
                      }`}
                      onClick={() => {
                        if (stepNum < currentStep || validateStep(currentStep)) {
                          setCurrentStep(stepNum);
                        }
                      }}
                      aria-label={`${t('careerPage.form.stepLabel')} ${stepNum}`}
                    >
                      {currentStep > stepNum ? <FaCheckCircle /> : stepNum}
                    </button>
                    {stepNum < 3 && (
                      <div className={`career-stepper-line ${currentStep > stepNum ? 'filled' : ''}`} />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} noValidate className="career-native-form">
                {/* Step 1 — Personal */}
                <div className={currentStep === 1 ? 'career-step-panel' : 'hidden'}>
                  <h4 className="career-step-title">
                    <FaUser /> {t('careerPage.form.steps.s1')}
                  </h4>

                  <div className="career-fields-grid">
                    <div className="career-field">
                      <label htmlFor="email">{t('careerPage.form.fields.email')} *</label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.email')}
                        className={fieldClass('email')}
                      />
                      {errors.email && <p className="career-field-error">{errors.email}</p>}
                    </div>

                    <div className="career-field">
                      <label htmlFor="fullName">{t('careerPage.form.fields.fullName')} *</label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.fullName')}
                        className={fieldClass('fullName')}
                      />
                      {errors.fullName && <p className="career-field-error">{errors.fullName}</p>}
                    </div>

                    <div className="career-field">
                      <label htmlFor="fatherName">{t('careerPage.form.fields.fatherName')}</label>
                      <input
                        id="fatherName"
                        type="text"
                        value={formData.fatherName}
                        onChange={(e) => handleInputChange('fatherName', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.fatherName')}
                        className={fieldClass('fatherName')}
                      />
                    </div>

                    <div className="career-field">
                      <label htmlFor="dob">{t('careerPage.form.fields.dob')} *</label>
                      <input
                        id="dob"
                        type="date"
                        value={formData.dob}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        className={fieldClass('dob')}
                      />
                      {errors.dob && <p className="career-field-error">{errors.dob}</p>}
                    </div>

                    <div className="career-field">
                      <label>{t('careerPage.form.fields.gender')} *</label>
                      <div className="career-choice-row">
                        {['Male', 'Female'].map((opt) => (
                          <label key={opt} className={`career-choice ${formData.gender === opt ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="gender"
                              value={opt}
                              checked={formData.gender === opt}
                              onChange={(e) => handleInputChange('gender', e.target.value)}
                            />
                            <span>{t(`careerPage.form.genderLabels.${opt.toLowerCase()}`)}</span>
                          </label>
                        ))}
                      </div>
                      {errors.gender && <p className="career-field-error">{errors.gender}</p>}
                    </div>

                    <div className="career-field">
                      <label htmlFor="mobile">{t('careerPage.form.fields.mobile')} *</label>
                      <input
                        id="mobile"
                        type="tel"
                        autoComplete="tel"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.mobile')}
                        className={fieldClass('mobile')}
                      />
                      {errors.mobile && <p className="career-field-error">{errors.mobile}</p>}
                    </div>
                  </div>
                </div>

                {/* Step 2 — Address & work */}
                <div className={currentStep === 2 ? 'career-step-panel' : 'hidden'}>
                  <h4 className="career-step-title">
                    <FaMapMarkerAlt /> {t('careerPage.form.steps.s2')}
                  </h4>

                  <div className="career-fields-grid">
                    <div className="career-field career-field-full">
                      <label htmlFor="currentAddress">{t('careerPage.form.fields.currentAddress')}</label>
                      <textarea
                        id="currentAddress"
                        rows={3}
                        value={formData.currentAddress}
                        onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.currentAddress')}
                        className={fieldClass('currentAddress')}
                      />
                    </div>

                    <div className="career-field career-field-full">
                      <label htmlFor="permanentAddress">{t('careerPage.form.fields.permanentAddress')}</label>
                      <textarea
                        id="permanentAddress"
                        rows={3}
                        value={formData.permanentAddress}
                        onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.permanentAddress')}
                        className={fieldClass('permanentAddress')}
                      />
                    </div>

                    <div className="career-field">
                      <label htmlFor="occupation">{t('careerPage.form.fields.occupation')}</label>
                      <input
                        id="occupation"
                        type="text"
                        value={formData.occupation}
                        onChange={(e) => handleInputChange('occupation', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.occupation')}
                        className={fieldClass('occupation')}
                      />
                    </div>

                    <div className="career-field">
                      <label>{t('careerPage.form.fields.experience')}</label>
                      <div className="career-choice-row">
                        {['Yes', 'No'].map((opt) => (
                          <label key={opt} className={`career-choice ${formData.experience === opt ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="experience"
                              value={opt}
                              checked={formData.experience === opt}
                              onChange={(e) => handleInputChange('experience', e.target.value)}
                            />
                            <span>{t(`careerPage.form.experienceLabels.${opt.toLowerCase()}`)}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 — Business */}
                <div className={currentStep === 3 ? 'career-step-panel' : 'hidden'}>
                  <h4 className="career-step-title">
                    <FaBuilding /> {t('careerPage.form.steps.s3')}
                  </h4>

                  <div className="career-fields-grid">
                    <div className="career-field">
                      <label htmlFor="area">{t('careerPage.form.fields.area')}</label>
                      <input
                        id="area"
                        type="text"
                        value={formData.area}
                        onChange={(e) => handleInputChange('area', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.area')}
                        className={fieldClass('area')}
                      />
                    </div>

                    <div className="career-field">
                      <label htmlFor="capacity">{t('careerPage.form.fields.capacity')} *</label>
                      <input
                        id="capacity"
                        type="text"
                        value={formData.capacity}
                        onChange={(e) => handleInputChange('capacity', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.capacity')}
                        className={fieldClass('capacity')}
                      />
                      {errors.capacity && <p className="career-field-error">{errors.capacity}</p>}
                    </div>

                    <div className="career-field career-field-full">
                      <label>{t('careerPage.form.fields.workforce')} *</label>
                      <div className="career-choice-col">
                        {workforceOptions.map((opt) => (
                          <label key={opt} className={`career-choice ${formData.workforce === opt ? 'selected' : ''}`}>
                            <input
                              type="radio"
                              name="workforce"
                              value={opt}
                              checked={formData.workforce === opt}
                              onChange={(e) => handleInputChange('workforce', e.target.value)}
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                        <label
                          className={`career-choice ${formData.workforce === '__other_option__' ? 'selected' : ''}`}
                        >
                          <input
                            type="radio"
                            name="workforce"
                            value="__other_option__"
                            checked={formData.workforce === '__other_option__'}
                            onChange={(e) => handleInputChange('workforce', e.target.value)}
                          />
                          <span>{t('careerPage.form.other')}</span>
                        </label>
                      </div>
                      {formData.workforce === '__other_option__' && (
                        <input
                          type="text"
                          value={formData.workforceOther}
                          onChange={(e) => handleInputChange('workforceOther', e.target.value)}
                          placeholder={t('careerPage.form.placeholders.workforceOther')}
                          className={`${fieldClass('workforceOther')} career-other-input`}
                        />
                      )}
                      {errors.workforce && <p className="career-field-error">{errors.workforce}</p>}
                      {errors.workforceOther && <p className="career-field-error">{errors.workforceOther}</p>}
                    </div>

                    <div className="career-field career-field-full">
                      <label htmlFor="reason">{t('careerPage.form.fields.reason')} *</label>
                      <textarea
                        id="reason"
                        rows={4}
                        value={formData.reason}
                        onChange={(e) => handleInputChange('reason', e.target.value)}
                        placeholder={t('careerPage.form.placeholders.reason')}
                        className={fieldClass('reason')}
                      />
                      {errors.reason && <p className="career-field-error">{errors.reason}</p>}
                    </div>
                  </div>
                </div>

                <div className="career-form-nav">
                  {currentStep > 1 ? (
                    <button type="button" className="career-nav-btn secondary" onClick={handlePrev}>
                      <FaArrowLeft /> {t('careerPage.form.prev')}
                    </button>
                  ) : (
                    <span />
                  )}

                  {currentStep < 3 ? (
                    <button type="button" className="career-nav-btn primary" onClick={handleNext}>
                      {t('careerPage.form.next')} <FaArrowRight />
                    </button>
                  ) : (
                    <button type="submit" className="career-nav-btn primary">
                      {t('careerPage.form.submit')} <FaPaperPlane />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Career;
