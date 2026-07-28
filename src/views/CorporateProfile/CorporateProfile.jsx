'use client';

import React from 'react';
import HeaderContact from '../../Components/HeaderContact/HeaderContact';
import Cta from '../../Components/CTA/Cta';
import CorporateProfileSection from '../../Components/CorporateProfileSection/CorporateProfileSection';
import { useLocale } from '../../i18n/LocaleContext';
import corporateProfileCover from '../../Assets/kg_corporateProfile.png';
import bondingCover from '../../Assets/bonding.png';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const CorporateProfile = () => {
  const { t } = useLocale();

  return (
    <>
      <HeaderContact
        text={t('corporate.pageTitle')}
        backgroundImage={getSrc(corporateProfileCover)}
      />
      <CorporateProfileSection />
      <Cta
        title={t('about.cta.title')}
        text={t('about.cta.text')}
        text2={t('about.cta.text2')}
        backgroundImage={getSrc(bondingCover)}
        marginY="mb-10 md:mb-0"
      />
    </>
  );
};

export default CorporateProfile;
