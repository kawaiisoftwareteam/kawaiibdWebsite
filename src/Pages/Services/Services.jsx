import React from 'react'
import HeaderContact from '../../Components/HeaderContact/HeaderContact'
import { useLocale } from '../../i18n/LocaleContext'

const Services = () => {
  const { t } = useLocale();

  return (
    <>
    <HeaderContact text={t('services.header')}
    backgroundImage={require('../../Assets/sswCover.png')}/>
    </>
  )
}

export default Services
