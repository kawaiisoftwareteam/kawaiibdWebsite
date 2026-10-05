'use client';

import React from 'react';
import HeaderContact from '../../Components/HeaderContact/HeaderContact';
import ServicesShowcase from '../../Components/ServicesShowcase/ServicesShowcase';
import ServicesPillars from '../../Components/ServicesPillars/ServicesPillars';
import FaqSection from '../../Components/Faq/FaqSection';
import Cta from '../../Components/CTA/Cta';
import { useLocale } from '../../i18n/LocaleContext';
import sswCover from '../../Assets/sswCover.webp';
import bondingCover from '../../Assets/bonding.webp';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const Services = () => {
  const { t } = useLocale();

  return (
    <div className="services-page-wrap">
      <HeaderContact
        text={t('services.header')}
        backgroundImage={getSrc(sswCover)}
      />
      <ServicesShowcase titleAs="h2" />
      <ServicesPillars />
      <FaqSection />
      <Cta
        title={t('services.ctaTitle')}
        text={t('services.ctaText')}
        backgroundImage={getSrc(bondingCover)}
      />
    </div>
  );
};

export default Services;
