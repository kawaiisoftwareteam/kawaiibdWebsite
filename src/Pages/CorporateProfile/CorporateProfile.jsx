import React from 'react'
import HeaderContact from '../../Components/HeaderContact/HeaderContact'
import Cta from '../../Components/CTA/Cta'
import CorporateProfileSection from '../../Components/CorporateProfileSection/CorporateProfileSection'
import { useLocale } from '../../i18n/LocaleContext'

const CorporateProfile = () => {
  const { t } = useLocale();

  return (
    <>
    <HeaderContact text={t('corporate.pageTitle')}
    backgroundImage={require('../../Assets/kg_corporateProfile.png')}/>
    <CorporateProfileSection/>
    <Cta
      title={t('about.cta.title')}
      text={t('about.cta.text')}
      text2={t('about.cta.text2')}
      backgroundImage={require('../../Assets/bonding.png')}
      marginY="mb-10 md:mb-0"/>
    </>
  )
}

export default CorporateProfile
