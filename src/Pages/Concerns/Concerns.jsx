import React from 'react'
import HeaderContact from '../../Components/HeaderContact/HeaderContact'
import KawaiiConcerns from '../../Components/KawaiiConcerns/KawaiiConcerns'
import { useLocale } from '../../i18n/LocaleContext'

const Concerns = () => {
  const { t } = useLocale();

  return (
    <>
    <HeaderContact text={t('concerns.header')}
    backgroundImage={require('../../Assets/sisterconcernCover.png')}/>
    <KawaiiConcerns/>
    </>
  )
}

export default Concerns
