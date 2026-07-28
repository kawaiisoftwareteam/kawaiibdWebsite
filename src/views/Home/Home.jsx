'use client';

import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Cta from '../../Components/CTA/Cta';
import Map from '../../Components/Map/Map';
import LatestNews from '../../Components/LatestNews/LatestNews';
import CeoMessage from '../../Components/CeoMessage/CeoMessage';
import HowCanWeHelp from '../../Components/HowCanWeHelp/HowCanWeHelp';
import OurProjects from '../../Components/OurProjects/OurProjects';
import KawaiiVenture from '../../Components/KawaiiVenture/KawaiiVenture';
import HomePhotoGallery from '../../Components/HomePhotoGallery/HomePhotoGallery';
import { useLocale } from '../../i18n/LocaleContext';
import ctaBg from '../../Assets/cta.png';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const Home = () => {
  const { t } = useLocale();

  return (
    <div>
      <Hero />
      <CeoMessage />
      <HowCanWeHelp />
      <OurProjects />
      <KawaiiVenture />
      <LatestNews />
      <HomePhotoGallery />
      <Map />
      <Cta
        title={t('home.cta.title')}
        text={t('home.cta.text')}
        backgroundImage={getSrc(ctaBg)}
      />
    </div>
  );
};

export default Home;
