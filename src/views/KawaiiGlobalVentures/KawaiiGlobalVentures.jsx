'use client';

import React from 'react';
import HeaderContact from '../../Components/HeaderContact/HeaderContact';
import Cta from '../../Components/CTA/Cta';
import './KawaiiGlobalVentures.css';
import { useLocale } from '../../i18n/LocaleContext';
import kgvlCover from '../../Assets/kgvl_cover.webp';
import jpBusinessCenter from '../../Assets/jpBusinessCenter.webp';
import bondingCover from '../../Assets/bonding.webp';

import { 
  FaHandshake, 
  FaUserGraduate, 
  FaLaptopCode, 
  FaGlobe, 
  FaChartLine, 
  FaBuilding, 
  FaBullseye, 
  FaLightbulb, 
  FaUserTie, 
  FaAward, 
  FaShieldAlt, 
  FaSync 
} from 'react-icons/fa';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const SERVICE_KEYS = ['s1', 's2', 's3', 's4', 's5', 's6'];
const SERVICE_ICONS = {
  s1: FaHandshake,
  s2: FaUserGraduate,
  s3: FaUserGraduate,
  s4: FaLaptopCode,
  s5: FaGlobe,
  s6: FaChartLine,
};

const LEADERS = [
  { id: 'junji', name: 'Junji Ueda', roleKey: 'chairman', regionKey: 'japan', initials: 'JU' },
  { id: 'zillur', name: 'S. M. Zillur Rahman', roleKey: 'viceChairman', regionKey: 'bangladesh', initials: 'ZR' },
  { id: 'samir', name: 'Dewan Samir', roleKey: 'managingDirector', regionKey: 'bangladesh', initials: 'DS' },
  { id: 'iqbal', name: 'Iqbal Hossain', roleKey: 'ceo', regionKey: 'bangladesh', initials: 'IH' },
  { id: 'shafi', name: 'Md. Shafi Uddin', roleKey: 'cfo', regionKey: 'bangladesh', initials: 'SU' },
];

const KawaiiGlobalVentures = () => {
  const { t } = useLocale();

  return (
    <div className="kgvl-page">
      <HeaderContact 
        text={t('kgvl.headerTitle')} 
        backgroundImage={getSrc(kgvlCover)} 
      />

      <section className="kgvl-overview-sec py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="overview-container bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="overview-text flex-1">
            <span className="badge-jp-bd">{t('kgvl.badge')}</span>
            <h2 className="section-title mt-4 text-[#0C0C0C] font-bold text-3xl md:text-4xl leading-tight">
              {t('kgvl.overviewTitle')}
            </h2>
            <p className="overview-desc mt-6 text-gray-600 text-lg leading-relaxed text-justify">
              {t('kgvl.overviewDesc')}
            </p>
            <div className="overview-stats grid grid-cols-2 gap-6 mt-8">
              <div className="stat-card p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="stat-num text-3xl font-extrabold text-[#BE1E2D]">{t('kgvl.stat1Num')}</span>
                <span className="stat-lbl text-xs text-gray-500 block mt-1">{t('kgvl.stat1Label')}</span>
              </div>
              <div className="stat-card p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="stat-num text-3xl font-extrabold text-[#0C0C0C]">{t('kgvl.stat2Num')}</span>
                <span className="stat-lbl text-xs text-gray-500 block mt-1">{t('kgvl.stat2Label')}</span>
              </div>
            </div>
          </div>
          <div className="overview-graphic flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <img loading="lazy" decoding="async" 
                src={getSrc(jpBusinessCenter)} 
                alt={t('kgvl.hubAlt')} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">{t('kgvl.hubTitle')}</h3>
                <p className="text-gray-200 text-xs mt-1">{t('kgvl.hubDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kgvl-vision-mission py-16 bg-gradient-to-b from-gray-50 to-white px-6 md:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="vision-card bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
            <div className="icon-wrapper bg-[#FFE9E9] p-4 rounded-2xl mb-6">
              <FaBullseye className="text-2xl text-[#BE1E2D]" />
            </div>
            <h3 className="card-title text-2xl font-bold text-[#0C0C0C]">{t('kgvl.visionTitle')}</h3>
            <p className="card-text text-gray-600 mt-4 leading-relaxed text-justify">{t('kgvl.visionText')}</p>
          </div>
          <div className="mission-card bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
            <div className="icon-wrapper bg-gray-100 p-4 rounded-2xl mb-6">
              <FaLightbulb className="text-2xl text-[#0C0C0C]" />
            </div>
            <h3 className="card-title text-2xl font-bold text-[#0C0C0C]">{t('kgvl.missionTitle')}</h3>
            <p className="card-text text-gray-600 mt-4 leading-relaxed text-justify">{t('kgvl.missionText')}</p>
          </div>
        </div>
      </section>

      <section className="kgvl-services py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">{t('kgvl.servicesSubtitle')}</span>
          <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">{t('kgvl.servicesTitle')}</h2>
          <div className="h-1 w-16 bg-[#BE1E2D] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_KEYS.map((key) => {
            const Icon = SERVICE_ICONS[key];
            return (
              <div key={key} className="service-card bg-white p-8 rounded-3xl shadow-md hover:shadow-xl border border-gray-100 hover:border-[#FFE9E9] transition-all duration-300 flex flex-col group">
                <div className="service-icon-box mb-6 p-4 rounded-2xl bg-gray-50 group-hover:bg-[#FFE9E9] transition-colors duration-300 w-fit">
                  <Icon className="service-icon text-[#BE1E2D]" />
                </div>
                <h3 className="service-title font-bold text-lg text-[#0C0C0C] mb-3 group-hover:text-[#BE1E2D] transition-colors duration-300">
                  {t(`kgvl.services.${key}.title`)}
                </h3>
                <p className="service-desc text-sm text-gray-600 leading-relaxed text-justify flex-1">
                  {t(`kgvl.services.${key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="kgvl-leadership py-16 bg-gradient-to-b from-white to-gray-50 px-6 md:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">{t('kgvl.leadershipSubtitle')}</span>
            <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">{t('kgvl.leadershipTitle')}</h2>
            <div className="h-1 w-16 bg-[#BE1E2D] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 justify-center">
            {LEADERS.slice(0, 2).map((leader) => (
              <LeaderCard key={leader.id} leader={leader} t={t} large />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
            {LEADERS.slice(2).map((leader) => (
              <LeaderCard key={leader.id} leader={leader} t={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="kgvl-commitment py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="commitment-box bg-gradient-to-r from-[#0C0C0C] to-[#2A2A2A] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BE1E2D]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="commitment-text flex-1 z-10">
            <span className="text-[#BE1E2D] uppercase font-bold tracking-widest text-xs">{t('kgvl.commitmentBadge')}</span>
            <h2 className="text-3xl font-extrabold mt-3">{t('kgvl.commitmentTitle')}</h2>
            <p className="text-gray-300 mt-6 text-sm leading-relaxed text-justify">{t('kgvl.commitmentDesc')}</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { key: 'v1', Icon: FaAward },
                { key: 'v2', Icon: FaShieldAlt },
                { key: 'v3', Icon: FaSync },
                { key: 'v4', Icon: FaUserTie },
              ].map(({ key, Icon }) => (
                <div key={key} className="flex items-center gap-3">
                  <Icon className="text-[#BE1E2D] text-lg" />
                  <span className="text-xs font-medium">{t(`kgvl.commitmentValues.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="commitment-icon-graphic lg:w-1/3 flex justify-center z-10">
            <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center w-64 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-[#BE1E2D] flex items-center justify-center mx-auto mb-4">
                <FaBuilding className="text-white text-lg" />
              </div>
              <h4 className="font-bold text-sm">{t('kgvl.entityTitle')}</h4>
              <p className="text-gray-400 text-xs mt-1">{t('kgvl.entitySubtitle')}</p>
              <div className="h-[1px] bg-white/10 my-4"></div>
              <span className="text-[10px] text-[#BE1E2D] bg-[#BE1E2D]/10 py-1 px-3 rounded-full font-bold">
                {t('kgvl.entityBadge')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Cta 
        title={t('kgvl.ctaTitle')} 
        text={t('kgvl.ctaText')}
        backgroundImage={getSrc(bondingCover)} 
      />
    </div>
  );
};

const LeaderCard = ({ leader, t, large = false }) => (
  <div className="leader-card bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg border border-gray-100 flex flex-col items-center text-center transition-all duration-300">
    <div className="leader-avatar w-20 h-20 rounded-full bg-gradient-to-tr from-[#BE1E2D] to-red-500 text-white flex items-center justify-center font-extrabold text-2xl mb-4 shadow-md">
      {leader.initials}
    </div>
    <h4 className={`leader-name font-extrabold text-[#0C0C0C] leading-tight ${large ? 'text-2xl' : 'text-xl'}`}>
      {leader.name}
    </h4>
    <p className={`leader-role font-bold text-[#BE1E2D] mt-2 uppercase tracking-wide ${large ? 'text-base' : 'text-sm'}`}>
      {t(`kgvl.roles.${leader.roleKey}`)}
    </p>
    <span className="leader-region text-xs font-semibold text-gray-500 bg-gray-100 py-1 px-3 rounded-full mt-2">
      {t(`kgvl.regions.${leader.regionKey}`)}
    </span>
    <p className="leader-desc text-gray-600 mt-5 leading-relaxed border-t border-gray-100 pt-4">
      {t(`kgvl.leaders.${leader.id}`)}
    </p>
  </div>
);

export default KawaiiGlobalVentures;
