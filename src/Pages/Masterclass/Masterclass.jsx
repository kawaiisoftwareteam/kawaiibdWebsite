import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Masterclass.css';
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

const Masterclass = () => {
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

  const formRef = useRef(null);

  // Countdown timer logic
  useEffect(() => {
    // Last Date of Registration: Sunday, August 16, 2026 23:59:59 (BST)
    const targetDate = new Date('2026-08-16T23:59:59+06:00');

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
    navigator.clipboard.writeText('https://kawaiibd.com/masterclass');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email Address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) newErrors.phone = 'WhatsApp/Phone number is required';
    } else if (step === 2) {
      if (!formData.status) newErrors.status = 'Please select your status';
      if (!formData.org.trim()) newErrors.org = 'Organization or University Name is required';
      if (!formData.designation.trim()) newErrors.designation = 'Designation/Subject is required';
      if (!formData.experience) newErrors.experience = 'Please select your experience level';
    } else if (step === 3) {
      if (!formData.familiarity) newErrors.familiarity = 'Please answer this question';
      if (!formData.opinion.trim()) newErrors.opinion = 'This field is required';
      if (!formData.bimLevel) newErrors.bimLevel = 'Please select your BIM experience level';
    } else if (step === 4) {
      if (!formData.source) newErrors.source = 'Please select how you heard about us';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: formRef.current?.offsetTop - 120, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: formRef.current?.offsetTop - 120, behavior: 'smooth' });
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

    // Show popup immediately — do not wait on Google
    setSubmitted(true);

    // fetch/no-cors keeps the page from navigating away
    fetch(GOOGLE_FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody.toString()
    }).catch(() => {
      // Opaque response is expected; ignore network errors after popup is shown
    });
  };

  // Lock page scroll while success popup is open
  useEffect(() => {
    if (!submitted) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [submitted]);

  const successModal = submitted
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
              aria-label="Close"
            >
              ×
            </button>
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-green-50 text-green-500 rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
              <FaCheckCircle />
            </div>
            <div className="space-y-2 text-center">
              <h3 id="registration-success-title" className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Registration Complete!
              </h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Your registration for the BIM & Construction DX Masterclass has been successfully recorded.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-4 sm:p-5 rounded-2xl text-left space-y-3 w-full">
              <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-rose-600"></span> What happens next?
              </h4>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                <li>A confirmation email with Zoom join details will be sent to you.</li>
                <li>Please check your <b>spam folder</b> if you do not see it within 10 minutes.</li>
                <li>Handout materials will be emailed 24 hours before the masterclass.</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={resetForm}
              className="w-full px-6 py-3.5 rounded-xl bg-[#be1e2d] hover:bg-[#9E1825] text-white font-bold transition shadow-md"
            >
              Done
            </button>
          </div>
        </div>,
        document.body
      )
    : null;

  // Canonical QR Code data link
  const registrationLink = 'https://kawaiibd.com/masterclass';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(registrationLink)}`;

  return (
    <div className="masterclass-container min-h-screen py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      {successModal}
      {/* Visual Hero Banner */}
      <div className="max-w-6xl mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-100 bg-white">
        <img 
          src={require('../../Assets/bim_masterclass_banner.jpg')} 
          alt="BIM & Construction DX Masterclass with Dr. Shunsuke Someya" 
          className="w-full h-auto block"
        />
      </div>

      {/* Countdown Timer & Urgency Bar */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 bg-gray-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border border-gray-800">
        <div className="space-y-2 text-center md:text-left w-full md:w-auto">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-rose-500/25 text-rose-300 border border-rose-500/30 uppercase tracking-widest pulse-animation">
            Live Zoom Masterclass
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">Free Registration Closes Soon!</h2>
          <p className="text-sm sm:text-base text-gray-400">Masterclass Date: Tuesday, Aug 18, 2026</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto">
          <div className="flex gap-2 sm:gap-3 text-center w-full sm:w-auto justify-between sm:justify-center">
            <div className="countdown-unit bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 flex-1 sm:flex-none">
              <span className="countdown-value block font-bold text-rose-500">{timeLeft.days}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-wider">Days</span>
            </div>
            <div className="countdown-unit bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 flex-1 sm:flex-none">
              <span className="countdown-value block font-bold text-rose-500">{timeLeft.hours}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-wider">Hours</span>
            </div>
            <div className="countdown-unit bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 flex-1 sm:flex-none">
              <span className="countdown-value block font-bold text-rose-500">{timeLeft.minutes}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-wider">Mins</span>
            </div>
            <div className="countdown-unit bg-gray-800 rounded-xl sm:rounded-2xl border border-gray-700 flex-1 sm:flex-none">
              <span className="countdown-value block font-bold text-rose-500">{timeLeft.seconds}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase font-bold tracking-wider">Secs</span>
            </div>
          </div>
          <a
            href="#register-section"
            className="w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-10 py-3.5 sm:py-5 rounded-xl text-base sm:text-lg font-black bg-[#be1e2d] text-white hover:bg-[#9E1825] transition-all transform hover:scale-105 shadow-lg shadow-rose-900/20 whitespace-nowrap"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Main Info Blocks & Speaker Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
        
        {/* Left column: Event Grid Cards (2 columns span on large) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3 sm:gap-4 hover-card-effect">
              <div className="p-3 sm:p-4 bg-rose-50 text-[#be1e2d] rounded-xl flex-shrink-0">
                <FaCalendarAlt className="text-2xl sm:text-3xl" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Date</h4>
                <p className="text-lg sm:text-2xl font-bold text-gray-850 mt-1">Tuesday, Aug 18, 2026</p>
                <p className="text-sm sm:text-base text-gray-550 mt-1">Add to calendar invites will follow</p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3 sm:gap-4 hover-card-effect">
              <div className="p-3 sm:p-4 bg-rose-50 text-[#be1e2d] rounded-xl flex-shrink-0">
                <FaClock className="text-2xl sm:text-3xl" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Time</h4>
                <p className="text-lg sm:text-2xl font-bold text-gray-850 mt-1">7:00 PM - 10:00 PM</p>
                <p className="text-sm sm:text-base text-gray-550 mt-1">Bangladesh Time (BST)</p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3 sm:gap-4 hover-card-effect">
              <div className="p-3 sm:p-4 bg-rose-50 text-[#be1e2d] rounded-xl flex-shrink-0">
                <FaMapMarkerAlt className="text-2xl sm:text-3xl" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Location</h4>
                <p className="text-lg sm:text-2xl font-bold text-gray-850 mt-1">Online via Zoom</p>
                <p className="text-sm sm:text-base text-gray-550 mt-1">Link emailed upon registration</p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-3 sm:gap-4 hover-card-effect">
              <div className="p-3 sm:p-4 bg-rose-50 text-[#be1e2d] rounded-xl flex-shrink-0">
                <FaAward className="text-2xl sm:text-3xl" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Incentives</h4>
                <p className="text-lg sm:text-2xl font-bold text-gray-850 mt-1">Participation Certificate</p>
                <p className="text-sm sm:text-base text-gray-550 mt-1">Awarded to all active attendees</p>
              </div>
            </div>
          </div>

          {/* Dr Shunsuke Someya profile card */}
          <div id="speaker-section" className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm border border-gray-150 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-rose-50 rounded-bl-full -z-1 opacity-50"></div>
            <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">
              {/* Speaker Avatar & Quick links */}
              <div className="w-full md:w-48 flex flex-col items-center gap-4 flex-shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md border-2 border-gray-100 relative">
                  <img 
                    src={require('../../Assets/shunsuke_someya.jpg')} 
                    alt="Dr. Shunsuke Someya" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#be1e2d] bg-opacity-95 py-1 text-center text-[10px] uppercase font-bold tracking-widest text-white">
                    Speaker
                  </div>
                </div>
                
                <div className="w-full text-center space-y-2">
                  <a 
                    href="http://www.dc-someya.com/en/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-bold text-[#be1e2d] hover:text-[#9E1825] underline"
                  >
                    View Official Profile
                  </a>
                </div>

                {/* Profile Stats Mini Grid */}
                <div className="w-full grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-800">18 Yr</div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold">GC R&D</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">20+</div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold">Papers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">10</div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold">Patents</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">2</div>
                    <div className="text-[10px] text-gray-400 uppercase font-bold">Committees</div>
                  </div>
                </div>
              </div>

              {/* Bio & Professional timeline */}
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-3xl font-black text-gray-900">Dr. SHUNSUKE SOMEYA</h3>
                  <p className="text-lg font-semibold text-[#be1e2d] mt-1">First-class Architect & Ph.D. in Engineering (Japan)</p>
                  <p className="text-sm text-gray-450 mt-0.5">Proprietor, Digital Construction Someya R&D</p>
                </div>
                
                <p className="text-lg text-gray-650 leading-relaxed">
                  Dr. Shunsuke Someya sits at a unique intersection of academic expertise and field operations. With a Ph.D. in Engineering and license as a First-class Architect in Japan, he bridges technology, field practices, and corporate strategy to lead Construction DX and BIM transformations.
                </p>

                {/* Timeline info */}
                <div className="space-y-2 border-t border-gray-100 pt-3">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Professional Timeline</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex gap-4">
                      <span className="font-bold text-[#be1e2d] w-20 flex-shrink-0">2007–2025</span>
                      <span><b>Takenaka Corporation</b> — Technology Research Institute, BIM Promotion Office, HQ Chief Expert (18 years).</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-bold text-[#be1e2d] w-20 flex-shrink-0">2024</span>
                      <span><b>Ph.D. in Engineering</b>, Shibaura Institute of Technology.</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-bold text-[#be1e2d] w-20 flex-shrink-0">2025–2026</span>
                      <span><b>ABeam Consulting</b> — Strategy Consultant Manager.</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-bold text-[#be1e2d] w-20 flex-shrink-0">2026–Pres</span>
                      <span><b>Digital Construction Someya R&D</b> — Founder & Proprietor.</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <b>Academic & Industry Roles:</b> Committee Member of Architectural Institute of Japan (AIJ) VDC/BIM Subcommittee, and Committee Member of Japan Society for Precision Engineering (JSPE).
                </div>
              </div>
            </div>
          </div>

          {/* Event description & modules */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">What We Will Cover in this Masterclass</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                  <span className="w-6 h-6 bg-rose-50 text-[#be1e2d] rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                  Construction DX (Digital Transformation)
                </h4>
                <p className="text-base text-gray-500 pl-8">
                  Understanding Japan's MLIT standards and the transition from manual, legacy systems to digital-native sites.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                  <span className="w-6 h-6 bg-rose-50 text-[#be1e2d] rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                  3D & Multidimensional BIM Workflows
                </h4>
                <p className="text-base text-gray-500 pl-8">
                  Moving from 2D CAD to 3D, 4D (Time Scheduling), and 5D (Costing) workflows with Revit, Navisworks, and Tekla.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                  <span className="w-6 h-6 bg-rose-50 text-[#be1e2d] rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                  Practical Clash Detection
                </h4>
                <p className="text-base text-gray-500 pl-8">
                  Techniques for identifying structural and MEP interference issues before fabrication, saving millions in rework.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-gray-800 flex items-center gap-2 text-lg">
                  <span className="w-6 h-6 bg-rose-50 text-[#be1e2d] rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                  Global BIM Job Opportunities
                </h4>
                <p className="text-base text-gray-500 pl-8">
                  How Bangladeshi engineers and architects can prepare their portfolios for international and Japanese firms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: QR Code / Sharing and Event Countdown (Desktop Sidebar) */}
        <div className="space-y-8 lg:sticky lg:top-24">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-150 sharing-card space-y-6 flex flex-col items-center">
            <div className="text-center">
              <h3 className="font-bold text-gray-800 text-xl">Scan & Share</h3>
              <p className="text-base text-gray-500 mt-2">Scan this QR code with your mobile device to open the registration page instantly</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center justify-center">
              <img 
                src={qrCodeUrl} 
                alt="Scan to Register QR Code" 
                className="w-48 h-48 block shadow-inner rounded-lg"
              />
            </div>

            <div className="w-full space-y-3 pt-2">
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-base font-bold border border-gray-250 text-gray-700 bg-white hover:bg-gray-55 transition"
              >
                {copied ? <><FaCheckCircle className="text-green-500" /> Link Copied!</> : <><FaCopy /> Copy Shareable Link</>}
              </button>
              <a
                href={`mailto:?subject=Invitation: BIM and Construction DX Masterclass&body=Check out this free BIM and Construction DX masterclass featuring Dr. Shunsuke Someya on August 18, 2026. Register here: ${encodeURIComponent(registrationLink)}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl text-base font-bold bg-gray-900 text-white hover:bg-gray-950 transition"
              >
                <FaShareAlt /> Share via Email
              </a>
            </div>
          </div>

          <div className="bg-rose-50/50 p-6 rounded-3xl border border-rose-100 flex items-start gap-4">
            <FaInfoCircle className="text-[#be1e2d] text-xl mt-0.5 flex-shrink-0" />
            <div className="text-sm text-rose-800 space-y-1.5 leading-relaxed">
              <p className="font-bold">Need Help?</p>
              <p>For any technical assistance or bulk registrations, contact Kawaii Group Bangladesh via <a href="mailto:info@kawaiibd.com" className="font-semibold underline">info@kawaiibd.com</a>.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Submission Section */}
      <div id="register-section" className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-150 overflow-hidden mb-10 sm:mb-16">
        
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 sm:p-10 relative">
          <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 pointer-events-none">
            <FaAward className="text-6xl sm:text-9xl" />
          </div>
          <h2 className="text-xl sm:text-4xl font-extrabold text-white pr-8">Masterclass Registration Form</h2>
          <p className="text-gray-300 text-sm sm:text-lg mt-2 max-w-xl">
            Please fill out all required details. Zoom access codes and handouts will be sent to your registered email address.
          </p>
        </div>

        {/* Form body — always visible; success shows as centered popup */}
          <div className="p-4 sm:p-10">
            
            {/* Step Progress indicators */}
            <div className="flex justify-between items-center mb-8 sm:mb-12 max-w-xl mx-auto px-1">
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
                    aria-label={`Step ${stepNum}`}
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

            {/* Form tag submitting to Google Forms Response URL */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6 sm:space-y-8"
            >
              
              {/* STEP 1: Contact Details */}
              <div className={currentStep === 1 ? "space-y-5 sm:space-y-6" : "hidden"}>
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-black text-gray-900 flex items-start sm:items-center gap-2 flex-wrap">
                    <FaUser className="text-[#be1e2d] mt-1 sm:mt-0 flex-shrink-0" /> Contact & Personal Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-black text-gray-900">Full Name *</label>
                    <input
                      id="name"
                      name="entry.2092238618"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Doe"
                      autoComplete="name"
                      className={`w-full rounded-2xl border font-semibold form-input ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1 font-bold">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-black text-gray-900">Email Address *</label>
                    <input
                      id="email"
                      name="entry.1521615587"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john.doe@example.com"
                      autoComplete="email"
                      className={`w-full rounded-2xl border font-semibold form-input ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1 font-bold">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-black text-gray-900">WhatsApp Number/Phone *</label>
                    <input
                      id="phone"
                      name="entry.1432728139"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+880 1XXXX XXXXX"
                      autoComplete="tel"
                      className={`w-full rounded-2xl border font-semibold form-input ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.phone && <p className="text-sm text-red-500 mt-1 font-bold">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="block font-black text-gray-900">LinkedIn Profile Link (Optional)</label>
                    <input
                      id="linkedin"
                      name="entry.1502097248"
                      type="text"
                      inputMode="url"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange('linkedin', e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full rounded-2xl border border-gray-300 font-semibold form-input"
                    />
                  </div>
                </div>
              </div>

              {/* STEP 2: Background Info */}
              <div className={currentStep === 2 ? "space-y-5 sm:space-y-6" : "hidden"}>
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-black text-gray-900 flex items-start sm:items-center gap-2 flex-wrap">
                    <FaBriefcase className="text-[#be1e2d] mt-1 sm:mt-0 flex-shrink-0" /> Educational & Professional Background
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="status" className="block font-black text-gray-900">What best describes your current status? *</label>
                    <select
                      id="status"
                      name="entry.1556369182"
                      value={formData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className={`w-full rounded-2xl border font-semibold form-input bg-white ${errors.status ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Status</option>
                      <option value="Working Professional (Structural/Architectural/Civil/MEP)">Working Professional (Structural/Architectural/Civil/MEP)</option>
                      <option value="Fresh Graduate (0-1 year experience)">Fresh Graduate (0-1 year experience)</option>
                      <option value="Undergraduate/Postgraduate Student">Undergraduate/Postgraduate Student</option>
                      <option value="Academic/Educator">Academic/Educator</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.status && <p className="text-base text-red-500 mt-1 font-bold">{errors.status}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="org" className="block font-black text-gray-900">Organization / Firm or University Name *</label>
                    <input
                      id="org"
                      name="entry.479301265"
                      type="text"
                      value={formData.org}
                      onChange={(e) => handleInputChange('org', e.target.value)}
                      placeholder="e.g. BUET / Firm Name"
                      className={`w-full rounded-2xl border font-semibold form-input ${errors.org ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.org && <p className="text-base text-red-500 mt-1 font-bold">{errors.org}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="designation" className="block font-black text-gray-900">Designation / Highest Level of Education & Subject *</label>
                    <input
                      id="designation"
                      name="entry.1753222212"
                      type="text"
                      value={formData.designation}
                      onChange={(e) => handleInputChange('designation', e.target.value)}
                      placeholder="e.g. Structural Engineer / B.Sc. Civil Engineering"
                      className={`w-full rounded-2xl border font-semibold form-input ${errors.designation ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                    />
                    {errors.designation && <p className="text-base text-red-500 mt-1 font-bold">{errors.designation}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="experience" className="block font-black text-gray-900">Years of Experience / Academic Year *</label>
                    <select
                      id="experience"
                      name="entry.588393791"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className={`w-full rounded-2xl border font-semibold form-input bg-white ${errors.experience ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Experience / Year</option>
                      <option value="Student Final Year">Student Final Year</option>
                      <option value="Student (1st year-3rd year)">Student (1st year-3rd year)</option>
                      <option value="(1-3) years experience">(1-3) years experience</option>
                      <option value="(3-5) years experience">(3-5) years experience</option>
                      <option value="5+ years experience">5+ years experience</option>
                    </select>
                    {errors.experience && <p className="text-base text-red-500 mt-1 font-bold">{errors.experience}</p>}
                  </div>
                </div>
              </div>

              {/* STEP 3: Goals & Technical Skill Check */}
              <div className={currentStep === 3 ? "space-y-5 sm:space-y-6" : "hidden"}>
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-black text-gray-900 flex items-start sm:items-center gap-2 flex-wrap">
                    <FaGraduationCap className="text-[#be1e2d] mt-1 sm:mt-0 flex-shrink-0" /> Dr. Someya Familiarity & Course Feedback
                  </h3>
                </div>

                {/* Familiarity */}
                <div className="space-y-3">
                  <label className="block font-black text-gray-900">
                    Have you visited Dr. SHUNSUKE SOMEYA's professional profile / research background? *
                  </label>
                  <div className="space-y-2.5">
                    {[
                      "Yes, I am familiar with his profile and work",
                      "Not yet, but I would like to learn more about his background",
                      "No"
                    ].map((option) => {
                      const isSelected = formData.familiarity === option;
                      return (
                        <label 
                          key={option} 
                          className={`flex items-center gap-3 sm:gap-4 rounded-2xl border-2 transition-all cursor-pointer ${
                            isSelected 
                              ? 'border-[#be1e2d] bg-rose-50/20 shadow-sm' 
                              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="entry.1019765081"
                            value={option}
                            checked={isSelected}
                            onChange={() => handleInputChange('familiarity', option)}
                            className="h-6 w-6 text-[#be1e2d] border-gray-300 focus:ring-rose-500"
                          />
                          <span className="font-bold text-gray-800">{option}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.familiarity && <p className="text-base text-red-500 mt-1 font-bold">{errors.familiarity}</p>}
                </div>

                {/* Opinion */}
                <div className="space-y-2">
                  <label htmlFor="opinion" className="block font-black text-gray-900">
                    What is your opinion on Kawaii Group launching this international BIM & Construction DX Course? *
                  </label>
                  <textarea
                    id="opinion"
                    name="entry.1796051141"
                    rows={3}
                    value={formData.opinion}
                    onChange={(e) => handleInputChange('opinion', e.target.value)}
                    placeholder="Share your thoughts on the course launch..."
                    className={`w-full rounded-2xl border font-semibold form-input ${errors.opinion ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                  ></textarea>
                  {errors.opinion && <p className="text-base text-red-500 mt-1 font-bold">{errors.opinion}</p>}
                </div>

                {/* BIM software level */}
                <div className="space-y-3">
                  <label className="block font-black text-gray-900">
                    What is your current experience level with BIM software (e.g. Revit, Navisworks, Tekla)? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Complete Beginner (Never used)",
                      "Basic (Can Navigate models & basic 3D)",
                      "Intermediate (Can model elements & extract drawings)",
                      "Advanced (Clash detection, 4D/5D, BEP)"
                    ].map((level) => {
                      const isSelected = formData.bimLevel === level;
                      return (
                        <label 
                          key={level} 
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
                          <span className="font-bold text-gray-800">{level}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.bimLevel && <p className="text-base text-red-500 mt-1 font-bold">{errors.bimLevel}</p>}
                </div>
              </div>

              {/* STEP 4: Goals, AutoCAD Skill level & Submitting */}
              <div className={currentStep === 4 ? "space-y-5 sm:space-y-6" : "hidden"}>
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-extrabold text-gray-900 flex items-start sm:items-center gap-2 flex-wrap">
                    <FaAward className="text-[#be1e2d] mt-1 sm:mt-0 flex-shrink-0" /> Goals, AutoCAD Level & Source tracking
                  </h3>
                </div>

                {/* Goals Checkbox */}
                <div className="space-y-3">
                  <label className="block font-black text-gray-900">
                    What is your primary goal for taking this course? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Master practical 3D/4D/5D BIM workflows & clash detection",
                      "Learn Japanese Construction DX & MLIT standards",
                      "Improve portfolio for Japanese / International job opportunities",
                      "Transition my firm from 2D CAD to 3D BIM workflows"
                    ].map((goal) => {
                      const isChecked = formData.goals.includes(goal);
                      return (
                        <label 
                          key={goal} 
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
                          <span className="font-bold text-gray-800 leading-snug">{goal}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* AutoCAD Slider */}
                <div className="space-y-4">
                  <label className="block font-black text-gray-900">
                    What is your proficiency level in 2D Drafting (AutoCAD)?
                  </label>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="text-[10px] sm:text-sm text-gray-400 font-bold uppercase flex-shrink-0">Beginner</span>
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
                    <span className="text-[10px] sm:text-sm text-gray-400 font-bold uppercase flex-shrink-0">Advanced</span>
                  </div>
                </div>

                {/* Suggestion Textarea */}
                <div className="space-y-2">
                  <label htmlFor="suggestions" className="block font-black text-gray-900">
                    Is there any specific topic you would like Dr. Someya to address during the course? (Optional)
                  </label>
                  <textarea
                    id="suggestions"
                    name="entry.550888905"
                    rows={2}
                    value={formData.suggestions}
                    onChange={(e) => handleInputChange('suggestions', e.target.value)}
                    placeholder="Topics, questions, or specific BIM questions..."
                    className="w-full rounded-2xl border border-gray-300 font-semibold form-input"
                  ></textarea>
                </div>

                {/* Referral Source */}
                <div className="space-y-3">
                  <label className="block font-black text-gray-900">
                    How did you hear about this BIM & Construction DX Course? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Kawaii Group Facebook / LinkedIn Page",
                      "University Club / Notice Board",
                      "WhatsApp Group / Telegram",
                      "Referred by a colleague / friend",
                      "Other"
                    ].map((src) => {
                      const isSelected = formData.source === src;
                      return (
                        <label 
                          key={src} 
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
                          <span className="font-bold text-gray-800">{src}</span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.source && <p className="text-sm text-red-500 mt-1 font-semibold">{errors.source}</p>}
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="form-nav-actions pt-5 sm:pt-6 border-t border-gray-100">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition"
                  >
                    <FaArrowLeft /> Previous
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
                    Next Step <FaArrowRight />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-3.5 sm:px-10 sm:py-5 rounded-xl bg-[#be1e2d] hover:bg-[#9E1825] text-white font-extrabold transition shadow-xl shadow-rose-900/10 cursor-pointer"
                  >
                    Submit Registration <FaCheckCircle />
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
