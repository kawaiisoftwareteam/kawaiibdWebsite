'use client';

import React from 'react';
import HeaderContact from '../../Components/HeaderContact/HeaderContact';
import AboutFirst from '../../Components/AboutFirst/AboutFirst';
import Cta from '../../Components/CTA/Cta';
import VisionAbout from '../../Components/VisionAbout/VisionAbout';
import KawaiiAnatomy from '../../Components/KawaiiAnatomy/KawaiiAnatomy';
import KawaiiWay from '../../Components/KawaiiWay/KawaiiWay';
import MeetTeam from '../../Components/MeetTeam/MeetTeam';
import MakeDifference from '../../Components/MakeDifference/MakeDifference';
import { useLocale } from '../../i18n/LocaleContext';
import aboutCover from '../../Assets/aboutCover.png';
import bondingCover from '../../Assets/bonding.png';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const About = () => {
  const { t } = useLocale();

  return (
    <>
      <HeaderContact
        text={t('about.header')}
        backgroundImage={getSrc(aboutCover)}
      />
      <AboutFirst />
      <VisionAbout />
      <KawaiiAnatomy />
      <MakeDifference />
      <MeetTeam />
      <KawaiiWay />
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

export default About;
