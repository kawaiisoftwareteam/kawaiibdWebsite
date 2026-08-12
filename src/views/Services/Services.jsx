'use client';

import React from 'react';
import HeaderContact from '../../Components/HeaderContact/HeaderContact';
import ServicesShowcase from '../../Components/ServicesShowcase/ServicesShowcase';
import { useLocale } from '../../i18n/LocaleContext';
import sswCover from '../../Assets/sswCover.webp';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const Services = () => {
  const { t } = useLocale();

  return (
    <>
      <HeaderContact
        text={t('services.header')}
        backgroundImage={getSrc(sswCover)}
      />
      <ServicesShowcase />
    </>
  );
};

export default Services;
