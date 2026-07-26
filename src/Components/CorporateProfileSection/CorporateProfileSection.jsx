import React from 'react'
import './CorporateProfileSection.css'
import CorporateProfileInfo from '../CorporateProfileInfo/CorporateProfileInfo';
import { useLocale } from '../../i18n/LocaleContext';

const FIELD_KEYS = [
  'companyName',
  'headOffice',
  'japanOffice',
  'tel',
  'managingDirector',
  'incorporated',
  'capital',
  'employees',
  'sisterConcerns',
];

const CorporateProfileSection = () => {
    const { t } = useLocale();

  return (
    <div className='cp_main relative'>
      <div className='cp_bar'>
      <div className="cp_bar_box"><div className='cp_bar_text'>{t('corporate.tabs.profile')}</div></div>
      <div className="cp_bar_box"><div className='cp_bar_text'>{t('corporate.tabs.history')}</div></div>
      <div className="cp_bar_box"><div className='cp_bar_text'>{t('corporate.tabs.management')}</div></div>
      <div className="cp_bar_box"><div className='cp_bar_text'>{t('corporate.tabs.governance')}</div></div>
      </div>
      <div className='cp_company_header'>{t('corporate.companyHeader')}</div>
      <CorporateProfileInfo fieldKeys={FIELD_KEYS} />
    </div>
  )
}

export default CorporateProfileSection
