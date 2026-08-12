'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Masterclass.css';
import { useLocale } from '../../i18n/LocaleContext';
import banarImg from '../../Assets/banar.webp';
import shunsukeImg from '../../Assets/shunsuke_someya.webp';
import specialGuestImg from '../../Assets/special_guest.webp';

const masterclassVideo = '/videos/someya.mp4';
const masterclassVideoPoster = '/videos/someya_poster.webp';

import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap,
  FaShareAlt,
  FaCopy,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaInfoCircle,
  FaAward
} from 'react-icons/fa';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const FORM_VALUES = {
  status: {
    professional: 'Working Professional (Structural/Architectural/Civil/MEP)',
    graduate: 'Fresh Graduate (0-1 year experience)',
    student: 'Undergraduate/Postgraduate Student',
    educator: 'Academic/Educator',
    other: 'Other',
  },
  experience: {
    finalYear: 'Student Final Year',
    studentEarly: 'Student (1st year-3rd year)',
    exp13: '(1-3) years experience',
    exp35: '(3-5) years experience',
    exp5plus: '5+ years experience',
  },
  familiarity: {
    yes: 'Yes, I am familiar with his profile and work',
    notYet: 'Not yet, but I would like to learn more about his background',
    no: 'No',
  },
  bimLevel: {
    beginner: 'Complete Beginner (Never used)',
    basic: 'Basic (Can Navigate models & basic 3D)',
    intermediate: 'Intermediate (Can model elements & extract drawings)',
    advanced: 'Advanced (Clash detection, 4D/5D, BEP)',
  },
  goals: {
    g1: 'Master practical 3D/4D/5D BIM workflows & clash detection',
    g2: 'Learn Japanese Construction DX & MLIT standards',
    g3: 'Improve portfolio for Japanese / International job opportunities',
    g4: 'Transition my firm from 2D CAD to 3D BIM workflows',
  },
  source: {
    social: 'Kawaii Group Facebook / LinkedIn Page',
    university: 'University Club / Notice Board',
    messaging: 'WhatsApp Group / Telegram',
    referral: 'Referred by a colleague / friend',
    other: 'Other',
  },
};

const STATUS_KEYS = ['professional', 'graduate', 'student', 'educator', 'other'];
const EXPERIENCE_KEYS = ['finalYear', 'studentEarly', 'exp13', 'exp35', 'exp5plus'];
const FAMILIARITY_KEYS = ['yes', 'notYet', 'no'];
const BIM_LEVEL_KEYS = ['beginner', 'basic', 'intermediate', 'advanced'];
const GOAL_KEYS = ['g1', 'g2', 'g3', 'g4'];
const SOURCE_KEYS = ['social', 'university', 'messaging', 'referral', 'other'];

const Masterclass = () => {
  const { t } = useLocale();
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    status: '',
    org: '',
    designation: '',
    experience: '',
    familiarity: '',
    opinion: '',
    goals: [],
    autocad: '3',
    bimLevel: '',
    suggestions: '',
    source: ''
  });

  // UI States
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [errors, setErrors] = useState({});
  const [mounted, setMounted] = useState(false);

  const formRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pause & reset video when it scrolls out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
          video.currentTime = 0;
          video.load(); // restore poster frame
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date('2026-08-17T23:59:59+06:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText('https://kawaiibd.com/masterclass');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = t('masterclass.form.errors.nameRequired');
      if (!formData.email.trim()) {
        newErrors.email = t('masterclass.form.errors.emailRequired');
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = t('masterclass.form.errors.emailInvalid');
      }
      if (!formData.phone.trim()) newErrors.phone = t('masterclass.form.errors.phoneRequired');
    } else if (step === 2) {
      if (!formData.status) newErrors.status = t('masterclass.form.errors.statusRequired');
      if (!formData.org.trim()) newErrors.org = t('masterclass.form.errors.orgRequired');
      if (!formData.designation.trim()) newErrors.designation = t('masterclass.form.errors.designationRequired');
      if (!formData.experience) newErrors.experience = t('masterclass.form.errors.experienceRequired');
    } else if (step === 3) {
      if (!formData.familiarity) newErrors.familiarity = t('masterclass.form.errors.familiarityRequired');
      if (!formData.opinion.trim()) newErrors.opinion = t('masterclass.form.errors.opinionRequired');
      if (!formData.bimLevel) newErrors.bimLevel = t('masterclass.form.errors.bimLevelRequired');
    } else if (step === 4) {
      if (!formData.source) newErrors.source = t('masterclass.form.errors.sourceRequired');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: formRef.current?.offsetTop - 120, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: formRef.current?.offsetTop - 120, behavior: 'smooth' });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleCheckboxChange = (value) => {
    const updatedGoals = [...formData.goals];
    const index = updatedGoals.indexOf(value);
    if (index > -1) {
      updatedGoals.splice(index, 1);
    } else {
      updatedGoals.push(value);
    }
    setFormData((prev) => ({ ...prev, goals: updatedGoals }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      status: '',
      org: '',
      designation: '',
      experience: '',
      familiarity: '',
      opinion: '',
      goals: [],
      autocad: '3',
      bimLevel: '',
      suggestions: '',
      source: ''
    });
    setErrors({});
    setCurrentStep(1);
    setSubmitted(false);
  };

  const GOOGLE_FORM_ACTION =
    'https://docs.google.com/forms/d/e/1FAIpQLSeKSQe05sxY4pX-ONVg6gf_SGf4X7qxU-sTnGIwjTRbwE4NQw/formResponse';

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!validateStep(4)) {
      const registerSection = document.getElementById('register-section');
      registerSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const formBody = new URLSearchParams();
    formBody.append('entry.2092238618', formData.name);
    formBody.append('entry.1521615587', formData.email);
    formBody.append('entry.1432728139', formData.phone);
    formBody.append('entry.1502097248', formData.linkedin || '');
    formBody.append('entry.1556369182', formData.status);
    formBody.append('entry.479301265', formData.org);
    formBody.append('entry.1753222212', formData.designation);
    formBody.append('entry.588393791', formData.experience);
    formBody.append('entry.1019765081', formData.familiarity);
    formBody.append('entry.1796051141', formData.opinion);
    formBody.append('entry.1131256443', formData.bimLevel);
    formBody.append('entry.1674419703', formData.autocad);
    formBody.append('entry.550888905', formData.suggestions || '');
    formBody.append('entry.948741661', formData.source);
    formBody.append('entry.1234746699_sentinel', '');
    formData.goals.forEach((goal) => formBody.append('entry.1234746699', goal));
    formBody.append('fvv', '1');
    formBody.append('pageHistory', '0,1,2,3,4,5');
    formBody.append('submissionTimestamp', '-1');

    setSubmitted(true);

    fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString()
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

  const successModal = (submitted && mounted)
    ? createPortal(
        <div
          className="success-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-success-title"
          onClick={resetForm}
        >
          <div
            className="success-modal-card success-overlay"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="success-modal-close"
              onClick={resetForm}
              aria-label={t('masterclass.form.close')}
            >
              ×
            </button>
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-green-50 text-green-500 rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
              <FaCheckCircle />
            </div>
            <div className="space-y-2 text-center">
              <h3 id="registration-success-title" className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {t('masterclass.success.title')}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
                {t('masterclass.success.thankYouPrefix')}{' '}
                <span className="font-semibold text-gray-900">{formData.name}</span>.{' '}
                {t('masterclass.success.thankYouSuffix')}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4 sm:p-5 rounded-2xl text-left space-y-3 w-full">
              <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-600"></span> {t('masterclass.success.nextTitle')}
              </h4>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                <li>{t('masterclass.success.next1')}</li>
                <li>{t('masterclass.success.next2')}</li>
                <li>{t('masterclass.success.next3')}</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={resetForm}
              className="w-full px-6 py-3.5 rounded-xl bg-[#be1e2d] hover:bg-[#9E1825] text-white font-bold transition shadow-md"
            >
              {t('masterclass.success.done')}
            </button>
          </div>
        </div>,
        document.body
      )
    : null;

  const registrationLink = 'https://kawaiibd.com/masterclass';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(registrationLink)}`;

  return (
    <div className="masterclass-container min-h-screen pb-4 sm:pb-8">
      {successModal}
      {/* Visual Hero Banner */}
      <div className="masterclass-page-shell mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-100 bg-white">
        <img 
          src={getSrc(banarImg)} 
          alt={t('masterclass.bannerAlt')} 
          className="w-full h-auto block"
        />
      </div>

      {/* Countdown Timer & Urgency Bar */}
      <div className="masterclass-page-shell mb-8 sm:mb-12 bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800/80 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-2 text-center md:text-left w-full md:w-auto z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase tracking-widest pulse-animation">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
            {t('masterclass.urgency.badge')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">{t('masterclass.urgency.title')}</h2>
          <p className="text-sm sm:text-base text-gray-300 font-medium">{t('masterclass.urgency.dateLabel')}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 w-full md:w-auto z-10">
          <div className="flex gap-2 sm:gap-3 text-center w-full sm:w-auto justify-between sm:justify-center">
            <div className="countdown-unit bg-gray-900/90 rounded-2xl border border-gray-700/70 p-3 sm:p-4 min-w-[70px] sm:min-w-[84px] flex-1 sm:flex-none shadow-inner">
              <span className="countdown-value block font-black text-2xl sm:text-3xl text-rose-400">{timeLeft.days}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-wider">{t('masterclass.countdown.days')}</span>
            </div>
            <div className="countdown-unit bg-gray-900/90 rounded-2xl border border-gray-700/70 p-3 sm:p-4 min-w-[70px] sm:min-w-[84px] flex-1 sm:flex-none shadow-inner">
              <span className="countdown-value block font-black text-2xl sm:text-3xl text-rose-400">{timeLeft.hours}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-wider">{t('masterclass.countdown.hours')}</span>
            </div>
            <div className="countdown-unit bg-gray-900/90 rounded-2xl border border-gray-700/70 p-3 sm:p-4 min-w-[70px] sm:min-w-[84px] flex-1 sm:flex-none shadow-inner">
              <span className="countdown-value block font-black text-2xl sm:text-3xl text-rose-400">{timeLeft.minutes}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-wider">{t('masterclass.countdown.mins')}</span>
            </div>
            <div className="countdown-unit bg-gray-900/90 rounded-2xl border border-gray-700/70 p-3 sm:p-4 min-w-[70px] sm:min-w-[84px] flex-1 sm:flex-none shadow-inner">
              <span className="countdown-value block font-black text-2xl sm:text-3xl text-rose-400">{timeLeft.seconds}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-wider">{t('masterclass.countdown.secs')}</span>
            </div>
          </div>
          <a
            href="#register-section"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-black bg-gradient-to-r from-[#be1e2d] to-[#e11d48] text-white hover:from-[#9E1825] hover:to-[#be1e2d] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-rose-900/40 whitespace-nowrap"
          >
            {t('masterclass.registerNow')}
          </a>
        </div>
      </div>

      {/* Main Info Blocks & Speaker Cards */}
      <div className="masterclass-page-shell grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)] xl:grid-cols-[minmax(0,1fr)_minmax(340px,400px)] gap-8 sm:gap-10 items-start mb-16">
        
        {/* Left column: Event Grid Cards */}
        <div className="space-y-8 sm:space-y-10 min-w-0">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover-card-effect relative overflow-hidden group">
              <div className="p-4 bg-gradient-to-br from-rose-50 to-rose-100/80 text-[#be1e2d] rounded-2xl flex-shrink-0 shadow-inner border border-rose-100/80 group-hover:scale-105 transition-transform duration-300">
                <FaCalendarAlt className="text-2xl sm:text-3xl" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('masterclass.meta.date.label')}</h4>
                <p className="text-lg sm:text-2xl font-black text-slate-900 mt-1">{t('masterclass.meta.date.value')}</p>
                <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">{t('masterclass.meta.date.note')}</p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover-card-effect relative overflow-hidden group">
              <div className="p-4 bg-gradient-to-br from-rose-50 to-rose-100/80 text-[#be1e2d] rounded-2xl flex-shrink-0 shadow-inner border border-rose-100/80 group-hover:scale-105 transition-transform duration-300">
                <FaClock className="text-2xl sm:text-3xl" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('masterclass.meta.time.label')}</h4>
                <p className="text-lg sm:text-2xl font-black text-slate-900 mt-1">{t('masterclass.meta.time.value')}</p>
                <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">{t('masterclass.meta.time.note')}</p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover-card-effect relative overflow-hidden group">
              <div className="p-4 bg-gradient-to-br from-rose-50 to-rose-100/80 text-[#be1e2d] rounded-2xl flex-shrink-0 shadow-inner border border-rose-100/80 group-hover:scale-105 transition-transform duration-300">
                <FaMapMarkerAlt className="text-2xl sm:text-3xl" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('masterclass.meta.location.label')}</h4>
                <p className="text-lg sm:text-2xl font-black text-slate-900 mt-1">{t('masterclass.meta.location.value')}</p>
                <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">{t('masterclass.meta.location.note')}</p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4 hover-card-effect relative overflow-hidden group">
              <div className="p-4 bg-gradient-to-br from-rose-50 to-rose-100/80 text-[#be1e2d] rounded-2xl flex-shrink-0 shadow-inner border border-rose-100/80 group-hover:scale-105 transition-transform duration-300">
                <FaAward className="text-2xl sm:text-3xl" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('masterclass.meta.incentives.label')}</h4>
                <p className="text-lg sm:text-2xl font-black text-slate-900 mt-1">{t('masterclass.meta.incentives.value')}</p>
                <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">{t('masterclass.meta.incentives.note')}</p>
              </div>
            </div>
          </div>

          {/* Dr Shunsuke Someya profile card */}
          <div id="speaker-section" className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200/80 relative overflow-hidden hover-card-effect">
            <div className="absolute top-0 right-0 h-48 w-48 bg-gradient-to-bl from-rose-100/60 to-transparent rounded-bl-full pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-10">
              <div className="w-full md:w-52 flex flex-col items-center gap-4 flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 relative group">
                  <img 
                    src={getSrc(shunsukeImg)} 
                    alt="Dr. Shunsuke Someya" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#be1e2d] bg-opacity-95 py-1 text-center text-[10px] uppercase font-black tracking-widest text-white">
                    {t('masterclass.speaker.badge')}
                  </div>
                </div>
                
                <div className="w-full text-center space-y-2">
                  <a 
                    href="http://www.dc-someya.com/en/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-bold text-[#be1e2d] hover:text-[#9E1825] underline"
                  >
                    {t('masterclass.speaker.viewProfile')}
                  </a>
                </div>

                <div className="w-full grid grid-cols-2 gap-2.5 bg-slate-50/90 p-3.5 rounded-2xl border border-slate-200/60 text-center shadow-inner">
                  <div>
                    <div className="text-xl font-black text-slate-900">18 Yr</div>
                    <div className="text-[10px] text-slate-400 uppercase font-extrabold">{t('masterclass.speaker.stats.gcRd')}</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900">20+</div>
                    <div className="text-[10px] text-slate-400 uppercase font-extrabold">{t('masterclass.speaker.stats.papers')}</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900">10</div>
                    <div className="text-[10px] text-slate-400 uppercase font-extrabold">{t('masterclass.speaker.stats.patents')}</div>
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900">2</div>
                    <div className="text-[10px] text-slate-400 uppercase font-extrabold">{t('masterclass.speaker.stats.committees')}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 flex-1">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{t('masterclass.speaker.name')}</h3>
                  <p className="text-lg font-bold text-[#be1e2d] mt-1">{t('masterclass.speaker.role')}</p>
                  <p className="text-sm font-semibold text-slate-500 mt-0.5">{t('masterclass.speaker.company')}</p>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed font-normal">
                  {t('masterclass.speaker.bio')}
                </p>

                <div className="space-y-3 border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">{t('masterclass.speaker.timelineTitle')}</h4>
                  <div className="space-y-2.5 text-sm text-slate-600 font-medium">
                    <div className="flex gap-4">
                      <span className="font-extrabold text-[#be1e2d] w-24 flex-shrink-0">2007–2025</span>
                      <span>{t('masterclass.speaker.timeline.t1')}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-extrabold text-[#be1e2d] w-24 flex-shrink-0">2024</span>
                      <span>{t('masterclass.speaker.timeline.t2')}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-extrabold text-[#be1e2d] w-24 flex-shrink-0">2025–2026</span>
                      <span>{t('masterclass.speaker.timeline.t3')}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-extrabold text-[#be1e2d] w-24 flex-shrink-0">2026–Pres</span>
                      <span>{t('masterclass.speaker.timeline.t4')}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-600 bg-slate-50/90 p-4 rounded-xl border border-slate-200/70 font-medium">
                  <b className="font-extrabold text-slate-900">{t('masterclass.speaker.academicRoles')}</b> {t('masterclass.speaker.academicRolesText')}
                </div>
              </div>
            </div>
          </div>

          {/* Speaker video */}
          <div id="speaker-video-section" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden hover-card-effect">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              {t('masterclass.video.title')}
            </h3>
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-black shadow-lg aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                preload="metadata"
                playsInline
                poster={masterclassVideoPoster}
              >
                <source src={masterclassVideo} type="video/mp4" />
                {t('masterclass.video.unsupported')}
              </video>
            </div>
          </div>

          {/* Special Guest — Toshiro Kan */}
          <div id="special-guest-section" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 relative overflow-hidden hover-card-effect">
            <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-rose-100/50 to-transparent rounded-bl-full pointer-events-none"></div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <div className="flex flex-col items-center gap-2 flex-shrink-0 w-28 sm:w-36">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md border-2 border-slate-100">
                  <img
                    src={getSrc(specialGuestImg)}
                    alt={t('masterclass.specialGuest.name')}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-full bg-[#be1e2d] rounded-lg py-1.5 text-center text-[10px] uppercase font-black tracking-widest text-white">
                  {t('masterclass.specialGuest.badge')}
                </div>
              </div>
              <div className="space-y-2 text-center sm:text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{t('masterclass.specialGuest.name')}</h3>
                <p className="text-lg font-bold text-[#be1e2d]">{t('masterclass.specialGuest.role')}</p>
                <p className="text-sm sm:text-base text-slate-500 font-medium">{t('masterclass.specialGuest.company')}</p>
              </div>
            </div>
          </div>

          {/* Modules Section */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200/80 space-y-6 hover-card-effect">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{t('masterclass.modules.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {['m1', 'm2', 'm3', 'm4'].map((key, idx) => (
                <div key={key} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/60 hover:bg-white hover:shadow-md transition-all duration-300 space-y-2.5">
                  <h4 className="font-extrabold text-slate-900 flex items-center gap-3 text-lg">
                    <span className="w-8 h-8 bg-gradient-to-br from-[#be1e2d] to-[#e11d48] text-white rounded-xl flex items-center justify-center text-sm font-black shadow-md flex-shrink-0">{idx + 1}</span>
                    {t(`masterclass.modules.${key}.title`)}
                  </h4>
                  <p className="text-base text-slate-600 font-medium pl-11 leading-relaxed">
                    {t(`masterclass.modules.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: QR Code / Sharing */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 sharing-card space-y-6 flex flex-col items-center hover-card-effect">
            <div className="text-center">
              <h3 className="font-black text-slate-900 text-xl tracking-tight">{t('masterclass.share.title')}</h3>
              <p className="text-base text-slate-500 font-medium mt-2">{t('masterclass.share.desc')}</p>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-center shadow-inner">
              <img 
                src={qrCodeUrl} 
                alt={t('masterclass.share.qrAlt')} 
                className="w-48 h-48 block rounded-xl shadow-sm"
              />
            </div>

            <div className="w-full space-y-3 pt-2">
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-base font-extrabold border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 transition shadow-sm"
              >
                {copied ? <><FaCheckCircle className="text-emerald-500 text-lg" /> {t('masterclass.share.linkCopied')}</> : <><FaCopy className="text-slate-500" /> {t('masterclass.share.copyLink')}</>}
              </button>
              <a
                href={`mailto:?subject=${encodeURIComponent(t('masterclass.share.emailSubject'))}&body=${encodeURIComponent(`${t('masterclass.share.emailBody')} ${registrationLink}`)}`}
                className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-base font-extrabold bg-slate-900 text-white hover:bg-slate-950 transition shadow-md"
              >
                <FaShareAlt /> {t('masterclass.share.shareEmail')}
              </a>
            </div>
          </div>

          <div className="bg-rose-50/70 p-6 rounded-3xl border border-rose-200/60 flex items-start gap-4 shadow-sm">
            <FaInfoCircle className="text-[#be1e2d] text-2xl mt-0.5 flex-shrink-0" />
            <div className="text-sm text-rose-900 space-y-1.5 leading-relaxed font-medium">
              <p className="font-extrabold text-base">{t('masterclass.help.title')}</p>
              <p>{t('masterclass.help.text')} <a href="mailto:info@kawaiibd.com" className="font-bold underline text-[#be1e2d]">info@kawaiibd.com</a>.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Submission Section */}
      <div id="register-section" className="masterclass-form-shell bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-150 overflow-hidden mb-10 sm:mb-16">
        
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 sm:p-10 relative">
          <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 pointer-events-none">
            <FaAward className="text-6xl sm:text-9xl" />
          </div>
          <h2 className="text-xl sm:text-4xl font-extrabold text-white pr-8">{t('masterclass.form.title')}</h2>
          <p className="text-gray-300 text-sm sm:text-lg mt-2 max-w-xl">
            {t('masterclass.form.subtitle')}
          </p>
        </div>

        <div className="p-4 sm:p-10">
          
          <div className="flex justify-between items-center mb-8 sm:mb-12 max-w-2xl mx-auto px-1">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center flex-1 last:flex-initial">
                <button
                  type="button"
                  onClick={() => {
                    if (stepNum < currentStep || validateStep(currentStep)) {
                      setCurrentStep(stepNum);
                    }
                  }}
                  className={`progress-step flex items-center justify-center rounded-full border-2 bg-white font-bold ${
                    currentStep === stepNum
                      ? 'active'
                      : currentStep > stepNum
                      ? 'completed'
                      : 'border-gray-200 text-gray-400'
                  }`}
                  aria-label={`${t('masterclass.form.stepLabel')} ${stepNum}`}
                >
                  {currentStep > stepNum ? <FaCheckCircle className="text-base sm:text-2xl" /> : stepNum}
                </button>
                {stepNum < 4 && (
                  <div
                    className={`h-0.5 flex-1 mx-1 sm:mx-2 ${
                      currentStep > stepNum ? 'bg-[#be1e2d]' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6 sm:space-y-8"
          >
            
            {/* STEP 1 */}
            <div className={currentStep === 1 ? "space-y-5 sm:space-y-6" : "hidden"}>
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-black text-gray-900 flex items-start sm:items-center gap-2 flex-wrap">
                  <FaUser className="text-[#be1e2d] mt-1 sm:mt-0 flex-shrink-0" /> {t('masterclass.form.steps.s1')}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-black text-gray-900">{t('masterclass.form.fields.fullName')}</label>
                  <input
                    id="name"
                    name="entry.2092238618"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={t('masterclass.form.placeholders.name')}
                    autoComplete="name"
                    className={`w-full rounded-2xl border font-semibold form-input ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1 font-bold">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block font-black text-gray-900">{t('masterclass.form.fields.email')}</label>
                  <input
                    id="email"
                    name="entry.1521615587"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={t('masterclass.form.placeholders.email')}
                    autoComplete="email"
                    className={`w-full rounded-2xl border font-semibold form-input ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1 font-bold">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-black text-gray-900">{t('masterclass.form.fields.phone')}</label>
                  <input
                    id="phone"
                    name="entry.1432728139"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder={t('masterclass.form.placeholders.phone')}
                    autoComplete="tel"
                    className={`w-full rounded-2xl border font-semibold form-input ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  />
                  {errors.phone && <p className="text-sm text-red-500 mt-1 font-bold">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="linkedin" className="block font-black text-gray-900">{t('masterclass.form.fields.linkedin')}</label>
                  <input
                    id="linkedin"
                    name="entry.1502097248"
                    type="text"
                    inputMode="url"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    placeholder={t('masterclass.form.placeholders.linkedin')}
                    className="w-full rounded-2xl border border-gray-300 font-semibold form-input"
                  />
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className={currentStep === 2 ? "space-y-5 sm:space-y-6" : "hidden"}>
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-black text-gray-900 flex items-start sm:items-center gap-2 flex-wrap">
                  <FaBriefcase className="text-[#be1e2d] mt-1 sm:mt-0 flex-shrink-0" /> {t('masterclass.form.steps.s2')}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="status" className="block font-black text-gray-900">{t('masterclass.form.fields.status')}</label>
                  <select
                    id="status"
                    name="entry.1556369182"
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className={`w-full rounded-2xl border font-semibold form-input bg-white ${errors.status ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">{t('masterclass.form.selectStatus')}</option>
                    {STATUS_KEYS.map((key) => (
                      <option key={key} value={FORM_VALUES.status[key]}>
                        {t(`masterclass.form.statusLabels.${key}`)}
                      </option>
                    ))}
                  </select>
                  {errors.status && <p className="text-base text-red-500 mt-1 font-bold">{errors.status}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="org" className="block font-black text-gray-900">{t('masterclass.form.fields.org')}</label>
                  <input
                    id="org"
                    name="entry.479301265"
                    type="text"
                    value={formData.org}
                    onChange={(e) => handleInputChange('org', e.target.value)}
                    placeholder={t('masterclass.form.placeholders.org')}
                    className={`w-full rounded-2xl border font-semibold form-input ${errors.org ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  />
                  {errors.org && <p className="text-base text-red-500 mt-1 font-bold">{errors.org}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="designation" className="block font-black text-gray-900">{t('masterclass.form.fields.designation')}</label>
                  <input
                    id="designation"
                    name="entry.1753222212"
                    type="text"
                    value={formData.designation}
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                    placeholder={t('masterclass.form.placeholders.designation')}
                    className={`w-full rounded-2xl border font-semibold form-input ${errors.designation ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  />
                  {errors.designation && <p className="text-base text-red-500 mt-1 font-bold">{errors.designation}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="experience" className="block font-black text-gray-900">{t('masterclass.form.fields.experience')}</label>
                  <select
                    id="experience"
                    name="entry.588393791"
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className={`w-full rounded-2xl border font-semibold form-input bg-white ${errors.experience ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">{t('masterclass.form.selectExperience')}</option>
                    {EXPERIENCE_KEYS.map((key) => (
                      <option key={key} value={FORM_VALUES.experience[key]}>
                        {t(`masterclass.form.experienceLabels.${key}`)}
                      </option>
                    ))}
                  </select>
                  {errors.experience && <p className="text-base text-red-500 mt-1 font-bold">{errors.experience}</p>}
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className={currentStep === 3 ? "space-y-5 sm:space-y-6" : "hidden"}>
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-black text-gray-900 flex items-start sm:items-center gap-2 flex-wrap">
                  <FaGraduationCap className="text-[#be1e2d] mt-1 sm:mt-0 flex-shrink-0" /> {t('masterclass.form.steps.s3')}
                </h3>
              </div>

              <div className="space-y-3">
                <label className="block font-black text-gray-900">
                  {t('masterclass.form.fields.familiarity')}
                </label>
                <div className="space-y-2.5">
                  {FAMILIARITY_KEYS.map((key) => {
                    const value = FORM_VALUES.familiarity[key];
                    const isSelected = formData.familiarity === value;
                    return (
                      <label 
                        key={key} 
                        className={`flex items-center gap-3 sm:gap-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-[#be1e2d] bg-rose-50/20 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="entry.1019765081"
                          value={value}
                          checked={isSelected}
                          onChange={() => handleInputChange('familiarity', value)}
                          className="h-6 w-6 text-[#be1e2d] border-gray-300 focus:ring-rose-500"
                        />
                        <span className="font-bold text-gray-800">{t(`masterclass.form.familiarityLabels.${key}`)}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.familiarity && <p className="text-base text-red-500 mt-1 font-bold">{errors.familiarity}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="opinion" className="block font-black text-gray-900">
                  {t('masterclass.form.fields.opinion')}
                </label>
                <textarea
                  id="opinion"
                  name="entry.1796051141"
                  rows={3}
                  value={formData.opinion}
                  onChange={(e) => handleInputChange('opinion', e.target.value)}
                  placeholder={t('masterclass.form.placeholders.opinion')}
                  className={`w-full rounded-2xl border font-semibold form-input ${errors.opinion ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                ></textarea>
                {errors.opinion && <p className="text-base text-red-500 mt-1 font-bold">{errors.opinion}</p>}
              </div>

              <div className="space-y-3">
                <label className="block font-black text-gray-900">
                  {t('masterclass.form.fields.bimLevel')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {BIM_LEVEL_KEYS.map((key) => {
                    const level = FORM_VALUES.bimLevel[key];
                    const isSelected = formData.bimLevel === level;
                    return (
                      <label 
                        key={key} 
                        className={`flex items-center gap-3 sm:gap-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-[#be1e2d] bg-rose-50/20 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="entry.1131256443"
                          value={level}
                          checked={isSelected}
                          onChange={() => handleInputChange('bimLevel', level)}
                          className="h-6 w-6 text-[#be1e2d] border-gray-300 focus:ring-rose-500"
                        />
                        <span className="font-bold text-gray-800">{t(`masterclass.form.bimLevelLabels.${key}`)}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.bimLevel && <p className="text-base text-red-500 mt-1 font-bold">{errors.bimLevel}</p>}
              </div>
            </div>

            {/* STEP 4 */}
            <div className={currentStep === 4 ? "space-y-5 sm:space-y-6" : "hidden"}>
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-extrabold text-gray-900 flex items-start sm:items-center gap-2 flex-wrap">
                  <FaAward className="text-[#be1e2d] mt-1 sm:mt-0 flex-shrink-0" /> {t('masterclass.form.steps.s4')}
                </h3>
              </div>

              <div className="space-y-3">
                <label className="block font-black text-gray-900">
                  {t('masterclass.form.fields.goals')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {GOAL_KEYS.map((key) => {
                    const goal = FORM_VALUES.goals[key];
                    const isChecked = formData.goals.includes(goal);
                    return (
                      <label 
                        key={key} 
                        className={`flex items-start gap-3 sm:gap-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          isChecked 
                            ? 'border-[#be1e2d] bg-rose-50/20 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="entry.1234746699"
                          value={goal}
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(goal)}
                          className="h-6 w-6 mt-0.5 text-[#be1e2d] border-gray-300 rounded focus:ring-rose-500"
                        />
                        <span className="font-bold text-gray-800 leading-snug">{t(`masterclass.form.goalsLabels.${key}`)}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <label className="block font-black text-gray-900">
                  {t('masterclass.form.fields.autocad')}
                </label>
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-[10px] sm:text-sm text-gray-400 font-bold uppercase flex-shrink-0">{t('masterclass.form.autocadBeginner')}</span>
                  <div className="flex-1 flex justify-between gap-1.5 sm:gap-2">
                    {['1', '2', '3', '4', '5'].map((num) => (
                      <label key={num} className="flex-1 text-center cursor-pointer">
                        <input
                          type="radio"
                          name="entry.1674419703"
                          value={num}
                          checked={formData.autocad === num}
                          onChange={() => handleInputChange('autocad', num)}
                          className="sr-only scale-input"
                        />
                        <div className="scale-label p-2 sm:p-3.5 rounded-lg border border-gray-300 text-base font-extrabold text-gray-700 hover:border-rose-300 transition duration-150 scale-number">
                          {num}
                        </div>
                      </label>
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-sm text-gray-400 font-bold uppercase flex-shrink-0">{t('masterclass.form.autocadAdvanced')}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="suggestions" className="block font-black text-gray-900">
                  {t('masterclass.form.fields.suggestions')}
                </label>
                <textarea
                  id="suggestions"
                  name="entry.550888905"
                  rows={2}
                  value={formData.suggestions}
                  onChange={(e) => handleInputChange('suggestions', e.target.value)}
                  placeholder={t('masterclass.form.placeholders.suggestions')}
                  className="w-full rounded-2xl border border-gray-300 font-semibold form-input"
                ></textarea>
              </div>

              <div className="space-y-3">
                <label className="block font-black text-gray-900">
                  {t('masterclass.form.fields.source')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SOURCE_KEYS.map((key) => {
                    const src = FORM_VALUES.source[key];
                    const isSelected = formData.source === src;
                    return (
                      <label 
                        key={key} 
                        className={`flex items-center gap-3 sm:gap-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-[#be1e2d] bg-rose-50/20 shadow-sm' 
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="entry.948741661"
                          value={src}
                          checked={isSelected}
                          onChange={() => handleInputChange('source', src)}
                          className="h-6 w-6 text-[#be1e2d] border-gray-300 focus:ring-rose-500"
                        />
                        <span className="font-bold text-gray-800">{t(`masterclass.form.sourceLabels.${key}`)}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.source && <p className="text-sm text-red-500 mt-1 font-semibold">{errors.source}</p>}
              </div>
            </div>

            <div className="form-nav-actions pt-5 sm:pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition"
                >
                  <FaArrowLeft /> {t('masterclass.form.prev')}
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#be1e2d] hover:bg-[#9E1825] text-white font-bold transition shadow-md"
                >
                  {t('masterclass.form.next')} <FaArrowRight />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-3.5 sm:px-10 sm:py-5 rounded-xl bg-[#be1e2d] hover:bg-[#9E1825] text-white font-extrabold transition shadow-xl shadow-rose-900/10 cursor-pointer"
                >
                  {t('masterclass.form.submit')} <FaCheckCircle />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Masterclass;
