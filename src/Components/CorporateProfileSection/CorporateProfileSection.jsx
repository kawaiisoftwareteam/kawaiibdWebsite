'use client';

import React from 'react';
import Link from 'next/link';
import './CorporateProfileSection.css';
import CorporateProfileInfo from '../CorporateProfileInfo/CorporateProfileInfo';
import { useLocale } from '../../i18n/LocaleContext';
import { getSrc } from '../../lib/image';
import kgjLogo from '../../Assets/Sister_Concerns/3_logo.webp';
import kgvlLogo from '../../Assets/Sister_Concerns/kgvl_logo.svg';
import kjchsLogo from '../../Assets/Sister_Concerns/Asset_2_2x-removebg-preview.webp';
import sanajanaLogo from '../../Assets/Sister_Concerns/sanjana_logo.webp';
import ajLogo from '../../Assets/Sister_Concerns/aj_logo.webp';
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.webp';
import tredmigLogo from '../../Assets/Sister_Concerns/tredmig.svg';
import kddlLogo from '../../Assets/Sister_Concerns/4_logo.webp';
import kiecLogo from '../../Assets/Sister_Concerns/5_logo.webp';
import bhLogo from '../../Assets/Sister_Slider/biman_holidays.webp';

const TABLE_KEYS = [
  'companyName',
  'companyType',
  'established',
  'capital',
  'employees',
  'businessActivities',
  'headOffice',
  'corporateOffice',
  'japanOffice',
  'telephone',
  'email',
  'website',
  'officeHours',
  'majorBanks',
  'accountant',
  'legalAdvisor',
  'affiliation',
];

const STAT_KEYS = ['established', 'capital', 'employees'];

const SISTER_CONCERNS = [
  { name: 'Kawaii Group Japan', href: 'https://kawaiigroupjapan.jp/', logo: kgjLogo },
  { name: 'Kawaii Global Ventures Limited', path: '/kawaii-global-ventures', logo: kgvlLogo },
  { name: 'Kawaii Japan Career & HR Solutions', path: '/kawaii-japan-career-hr', logo: kjchsLogo },
  { name: 'M/S Sanjana International', href: 'https://sanjanahr.com/', logo: sanajanaLogo },
  { name: 'Achieve Japan', href: 'https://achievejapanssw.com/', logo: ajLogo },
  { name: 'Kawaii Advanced Technology & Solution', path: '/concerns', logo: katslLogo },
  { name: 'Tredmig', href: 'https://tredmig.com/', logo: tredmigLogo },
  { name: 'Japan Kawaii Design & Development', path: '/concerns', logo: kddlLogo },
  { name: 'Kawaii International Education Center', href: 'https://kawaiieducationbd.com/', logo: kiecLogo },
  { name: 'Biman Holidays', href: 'https://bimanholidays.com/', logo: bhLogo },
];

const CorporateProfileSection = () => {
  const { t, localizedPath } = useLocale();

  return (
    <section className="cp_main">
      <header className="cp_hero">
        <div className="cp_heroInner">
          <p className="cp_intro__eyebrow">{t('corporate.companyHeader')}</p>
          <h1 className="cp_intro__title">{t('corporate.pageTitle')}</h1>
          <p className="cp_intro__text">{t('corporate.heroText')}</p>
        </div>
      </header>

      <div className="cp_body">
        <div className="cp_stats">
          {STAT_KEYS.map((key) => (
            <div className="cp_stat" key={key}>
              <span className="cp_stat__label">{t(`corporate.fields.${key}`)}</span>
              <span className="cp_stat__value">{t(`corporate.values.${key}`)}</span>
            </div>
          ))}
        </div>

        <div className="cp_split">
          <aside className="cp_aside">
            <div className="cp_lead">
              <div className="cp_lead__photoWrap">
                <img
                  className="cp_lead__photo"
                  src="/image.png"
                  alt={t('corporate.values.representative')}
                  width="180"
                  height="180"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="cp_lead__role">{t('corporate.fields.representative')}</p>
              <h2 className="cp_lead__name">{t('corporate.values.representative')}</h2>
              <p className="cp_lead__title">{t('corporate.values.position')}</p>
              <blockquote className="cp_lead__quote">
                <span className="cp_lead__quoteMark" aria-hidden="true">“</span>
                <p className="cp_lead__message">{t('corporate.leadMessage')}</p>
              </blockquote>
            </div>
          </aside>

          <CorporateProfileInfo fieldKeys={TABLE_KEYS} />
        </div>

        <div className="cp_info">
          <div className="cp_info__head">
            <p className="cp_info__eyebrow">{t('corporate.sisterEyebrow')}</p>
            <h2 className="cp_info__title">{t('corporate.sisterTitle')}</h2>
            <p className="cp_info__asOf">{t('corporate.sisterText')}</p>
          </div>
          <ul className="cp_sisters">
            {SISTER_CONCERNS.map((item) => {
              const inner = (
                <>
                  <img src={getSrc(item.logo)} alt="" width="48" height="48" />
                  <span>{item.name}</span>
                </>
              );
              return (
                <li key={item.name}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">{inner}</a>
                  ) : (
                    <Link href={localizedPath(item.path)}>{inner}</Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link href={localizedPath('/concerns')} className="cp_sisters__more">
            {t('corporate.sisterMore')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CorporateProfileSection;
