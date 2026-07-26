import React from 'react';
import Cta from '../../Components/CTA/Cta';
import './KawaiiJapanCareerHr.css';
import { useLocale } from '../../i18n/LocaleContext';
import { 
  FaBuilding, 
  FaBullseye, 
  FaLightbulb, 
  FaLaptopCode, 
  FaIndustry, 
  FaTshirt, 
  FaPills, 
  FaHospital, 
  FaUniversity, 
  FaShoppingBag, 
  FaHeadset,
  FaCheckCircle,
  FaAward,
  FaUsers
} from 'react-icons/fa';

const SECTOR_KEYS = ['it', 'manufacturing', 'garments', 'pharma', 'healthcare', 'banking', 'fmcg', 'bpo'];
const SECTOR_ICONS = {
  it: FaLaptopCode,
  manufacturing: FaIndustry,
  garments: FaTshirt,
  pharma: FaPills,
  healthcare: FaHospital,
  banking: FaUniversity,
  fmcg: FaShoppingBag,
  bpo: FaHeadset,
};

const KawaiiJapanCareerHr = () => {
  const { t } = useLocale();

  const renderList = (itemsKey) => (t(itemsKey) || []).map((item, i) => (
    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
      <FaCheckCircle className="text-[#BE1E2D] mt-0.5 shrink-0" />
      <span>{item}</span>
    </li>
  ));

  return (
    <div className="kjchs-page">
      <div className="split-hero">
        {/* Left Side: For Companies */}
        <div className="split-side left-side" style={{ backgroundImage: `url(${require('../../Assets/kawaii.png')})` }}>
          <div className="split-overlay"></div>
          <div className="split-content-box">
            <h1 className="split-title" dangerouslySetInnerHTML={{ __html: t('kjchs.heroCompaniesTitle').replace(/\n/g, '<br />') }} />
            <button 
              onClick={() => document.getElementById('companies-section').scrollIntoView({ behavior: 'smooth' })}
              className="split-btn"
            >
              {t('kjchs.heroCompaniesBtn')}
            </button>
          </div>
        </div>

        {/* Right Side: For Job Seekers */}
        <div className="split-side right-side" style={{ backgroundImage: `url(${require('../../Assets/career_support.png')})` }}>
          <div className="split-overlay"></div>
          <div className="split-content-box">
            <h1 className="split-title" dangerouslySetInnerHTML={{ __html: t('kjchs.heroSeekersTitle').replace(/\n/g, '<br />') }} />
            <button 
              onClick={() => document.getElementById('candidates-section').scrollIntoView({ behavior: 'smooth' })}
              className="split-btn"
            >
              {t('kjchs.heroSeekersBtn')}
            </button>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="kjchs-overview-sec py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="overview-container bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="overview-text flex-1">
            <span className="badge-jp-bd">{t('kjchs.badge')}</span>
            <h2 className="section-title mt-4 text-[#0C0C0C] font-bold text-3xl md:text-4xl leading-tight">
              {t('kjchs.overviewTitle')}
            </h2>
            <p className="overview-desc mt-6 text-gray-600 text-lg leading-relaxed text-justify">
              {t('kjchs.overviewP1')}
            </p>
            <p className="overview-desc mt-4 text-gray-600 text-lg leading-relaxed text-justify">
              {t('kjchs.overviewP2')}
            </p>
          </div>
          <div className="overview-stats flex-shrink-0 w-full lg:w-80 grid grid-cols-1 gap-6">
            <div className="stat-card p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <span className="stat-num text-4xl font-extrabold text-[#BE1E2D] block">{t('kjchs.stat1Num')}</span>
              <span className="stat-lbl text-sm text-gray-500 block mt-2">{t('kjchs.stat1Label')}</span>
            </div>
            <div className="stat-card p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <span className="stat-num text-4xl font-extrabold text-[#0C0C0C] block">{t('kjchs.stat2Num')}</span>
              <span className="stat-lbl text-sm text-gray-500 block mt-2">{t('kjchs.stat2Label')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section className="kjchs-about-sec py-16 bg-gradient-to-b from-gray-50 to-white px-6 md:px-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="about-graphic flex-1 w-full lg:order-2 flex justify-center">
            <div className="border border-white/10 bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md w-full border border-gray-100 relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#FFE9E9] rounded-2xl flex items-center justify-center shadow-lg">
                <FaAward className="text-[#BE1E2D] text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0C0C0C] mb-4">{t('kjchs.standardsTitle')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify mb-6">
                {t('kjchs.standardsIntro')}
              </p>
              <div className="space-y-4">
                {(t('kjchs.standards') || []).map((standard, idx) => (
                  <div key={standard} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${idx % 2 === 0 ? 'bg-[#FFE9E9]' : 'bg-gray-100'}`}>
                      <span className={`font-bold text-xs ${idx % 2 === 0 ? 'text-[#BE1E2D]' : 'text-[#0c0c0c]'}`}>{idx + 1}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about-text flex-1 lg:order-1">
            <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">{t('kjchs.aboutSubtitle')}</span>
            <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">{t('kjchs.aboutTitle')}</h2>
            <div className="h-1 w-16 bg-[#BE1E2D] mt-4 mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">{t('kjchs.aboutP1')}</p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">{t('kjchs.aboutP2')}</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="kjchs-vision-mission py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="vision-card bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-start">
            <div className="icon-wrapper bg-[#FFE9E9] p-4 rounded-2xl mb-6">
              <FaBullseye className="text-2xl text-[#BE1E2D]" />
            </div>
            <h3 className="card-title text-2xl font-bold text-[#0C0C0C]">{t('kjchs.visionTitle')}</h3>
            <p className="card-text text-gray-600 mt-4 leading-relaxed text-justify">{t('kjchs.visionText')}</p>
          </div>

          {/* Mission */}
          <div className="mission-card bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-start">
            <div className="icon-wrapper bg-gray-100 p-4 rounded-2xl mb-6">
              <FaLightbulb className="text-2xl text-[#0C0C0C]" />
            </div>
            <h3 className="card-title text-2xl font-bold text-[#0C0C0C]">{t('kjchs.missionTitle')}</h3>
            <p className="card-text text-gray-600 mt-4 leading-relaxed text-justify">{t('kjchs.missionText')}</p>
          </div>
        </div>
      </section>

      {/* Detailed Section: FOR COMPANIES / EMPLOYERS */}
      <section id="companies-section" className="kjchs-detail-section py-20 bg-gray-50 border-t border-gray-100 px-6 md:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="flex-1">
              <span className="badge-jp-bd">{t('kjchs.employersBadge')}</span>
              <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-4">{t('kjchs.employersTitle')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify mt-6">{t('kjchs.employersDesc')}</p>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <img 
                src={require('../../Assets/kawaii.png')} 
                alt={t('kjchs.employersImgAlt')} 
                className="w-full max-w-lg rounded-3xl shadow-lg object-cover h-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#0c0c0c] mb-6 border-b pb-4">{t('kjchs.ourServices')}</h3>
              <ul className="space-y-4">{renderList('kjchs.employerServices')}</ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-[#0c0c0c] mb-3">{t('kjchs.ourExpertise')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">{t('kjchs.employerExpertise')}</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-[#0c0c0c] mb-3">{t('kjchs.ourPhilosophy')}</h3>
                <blockquote className="border-l-4 border-[#BE1E2D] pl-4 italic text-sm text-gray-600">{t('kjchs.employerPhilosophy')}</blockquote>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0c0c0c] mb-4">{t('kjchs.ourProcess')}</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">{t('kjchs.employerProcessIntro')}</p>
              <div className="space-y-4">
                {['s1', 's2', 's3'].map((step, idx) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FFE9E9] text-[#BE1E2D] font-bold text-sm flex items-center justify-center shrink-0">{idx + 1}</div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0C0C0C]">{t(`kjchs.employerSteps.${step}.title`)}</h4>
                      <p className="text-xs text-gray-500 mt-1">{t(`kjchs.employerSteps.${step}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0c0c0c] mb-4">{t('kjchs.whyChooseUs')}</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">{t('kjchs.employerWhy1')}</p>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">{t('kjchs.employerWhy2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Section: FOR CANDIDATES / JOB SEEKERS */}
      <section id="candidates-section" className="kjchs-detail-section py-20 bg-white border-t border-gray-100 px-6 md:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="flex-1 lg:order-2">
              <span className="badge-jp-bd">{t('kjchs.seekersBadge')}</span>
              <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-4">{t('kjchs.seekersTitle')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify mt-6">{t('kjchs.seekersDesc')}</p>
            </div>
            <div className="flex-1 w-full lg:order-1 flex justify-center">
              <img 
                src={require('../../Assets/career_support.png')} 
                alt={t('kjchs.seekersImgAlt')} 
                className="w-full max-w-lg rounded-3xl shadow-lg object-cover h-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#0c0c0c] mb-6 border-b pb-4">{t('kjchs.ourServices')}</h3>
              <ul className="space-y-4">{renderList('kjchs.seekerServices')}</ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-[#0c0c0c] mb-3">{t('kjchs.ourExpertise')}</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">{t('kjchs.seekerExpertise')}</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-[#0c0c0c] mb-3">{t('kjchs.ourPhilosophy')}</h3>
                <blockquote className="border-l-4 border-[#BE1E2D] pl-4 italic text-sm text-gray-600">{t('kjchs.seekerPhilosophy')}</blockquote>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0c0c0c] mb-4">{t('kjchs.ourProcess')}</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">{t('kjchs.seekerProcessIntro')}</p>
              <div className="space-y-4">
                {['s1', 's2', 's3'].map((step, idx) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#FFE9E9] text-[#BE1E2D] font-bold text-sm flex items-center justify-center shrink-0">{idx + 1}</div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0C0C0C]">{t(`kjchs.seekerSteps.${step}.title`)}</h4>
                      <p className="text-xs text-gray-500 mt-1">{t(`kjchs.seekerSteps.${step}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0c0c0c] mb-4">{t('kjchs.whyChooseUs')}</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">{t('kjchs.seekerWhy1')}</p>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">{t('kjchs.seekerWhy2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Sectors Grid */}
      <section className="kjchs-sectors py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">{t('kjchs.sectorsSubtitle')}</span>
          <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">{t('kjchs.sectorsTitle')}</h2>
          <div className="h-1 w-16 bg-[#BE1E2D] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto">{t('kjchs.sectorsIntro')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SECTOR_KEYS.map((key) => {
            const Icon = SECTOR_ICONS[key];
            return (
              <div key={key} className="sector-card bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-[#FFE9E9] transition-all duration-300 flex flex-col group">
                <div className="sector-icon-box mb-4 p-3 rounded-xl bg-gray-50 group-hover:bg-[#FFE9E9] text-[#BE1E2D] transition-colors duration-300 w-fit">
                  <Icon className="sector-icon" />
                </div>
                <h3 className="sector-title font-bold text-sm text-[#0C0C0C] mb-2 group-hover:text-[#BE1E2D] transition-colors duration-300">
                  {t(`kjchs.sectors.${key}.name`)}
                </h3>
                <p className="sector-desc text-xs text-gray-500 leading-relaxed text-justify">
                  {t(`kjchs.sectors.${key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="kjchs-achievements py-16 bg-gradient-to-b from-white to-gray-50 px-6 md:px-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">{t('kjchs.milestonesSubtitle')}</span>
          <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">{t('kjchs.milestonesTitle')}</h2>
          <div className="h-1 w-16 bg-[#BE1E2D] mx-auto mt-4 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="achievement-card bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
              <div className="w-12 h-12 rounded-full bg-[#FFE9E9] flex items-center justify-center mx-auto mb-4 text-[#BE1E2D]">
                <FaBuilding className="text-xl" />
              </div>
              <span className="block text-4xl font-extrabold text-[#BE1E2D]">{t('kjchs.achievement1Num')}</span>
              <span className="block text-sm font-bold text-[#0C0C0C] mt-2">{t('kjchs.achievement1Title')}</span>
              <p className="text-xs text-gray-500 mt-1">{t('kjchs.achievement1Desc')}</p>
            </div>
            <div className="achievement-card bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-[#0c0c0c]">
                <FaUsers className="text-xl" />
              </div>
              <span className="block text-4xl font-extrabold text-[#0C0C0C]">{t('kjchs.achievement2Num')}</span>
              <span className="block text-sm font-bold text-[#0C0C0C] mt-2">{t('kjchs.achievement2Title')}</span>
              <p className="text-xs text-gray-500 mt-1">{t('kjchs.achievement2Desc')}</p>
            </div>
            <div className="achievement-card bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
              <div className="w-12 h-12 rounded-full bg-[#FFE9E9] flex items-center justify-center mx-auto mb-4 text-[#BE1E2D]">
                <FaAward className="text-xl" />
              </div>
              <span className="block text-4xl font-extrabold text-[#BE1E2D]">{t('kjchs.achievement3Num')}</span>
              <span className="block text-sm font-bold text-[#0C0C0C] mt-2">{t('kjchs.achievement3Title')}</span>
              <p className="text-xs text-gray-500 mt-1">{t('kjchs.achievement3Desc')}</p>
            </div>
          </div>
        </div>
      </section>
      <Cta 
        title={t('kjchs.ctaTitle')} 
        text={t('kjchs.ctaText')}
        backgroundImage={require('../../Assets/bonding.png')} 
      />
    </div>
  );
};

export default KawaiiJapanCareerHr;
