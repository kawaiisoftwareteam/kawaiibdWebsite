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

const Home = () => {
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
      <Cta title="Looking for a Trusted Partner
              in Global Business?" text="From recruitment to technology, we've got you covered."
        backgroundImage={require('../../Assets/cta.png')} />
    </div>
  )
}

export default Home
