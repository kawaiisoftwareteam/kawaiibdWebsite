import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Cta from '../../Components/CTA/Cta'
import Map from '../../Components/Map/Map'
import LatestNews from '../../Components/LatestNews/LatestNews'
import CeoMessage from '../../Components/CeoMessage/CeoMessage'
import HowCanWeHelp from '../../Components/HowCanWeHelp/HowCanWeHelp'
import OurProjects from '../../Components/OurProjects/OurProjects'
import KawaiiVenture from '../../Components/KawaiiVenture/KawaiiVenture'
import HomePhotoGallery from '../../Components/HomePhotoGallery/HomePhotoGallery'
import { useLocale } from '../../i18n/LocaleContext'

const Home = () => {
  const { t } = useLocale();

  return (
    <div>
      <Hero />
      <CeoMessage />
      <HowCanWeHelp />
      <OurProjects/>
      <KawaiiVenture/>
      <LatestNews />
      <HomePhotoGallery/>
      <Map />
      <Cta
        title={t('home.cta.title')}
        text={t('home.cta.text')}
        backgroundImage={require('../../Assets/cta.png')}
      />
    </div>
  )
}

export default Home
