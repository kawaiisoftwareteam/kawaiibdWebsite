'use client';

import React from 'react';
import HeaderContact from '../../Components/HeaderContact/HeaderContact';
import KawaiiConcerns from '../../Components/KawaiiConcerns/KawaiiConcerns';
import { useLocale } from '../../i18n/LocaleContext';
import sisterconcernCover from '../../Assets/sisterconcernCover.png';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const Concerns = () => {
  const { t } = useLocale();

  return (
    <>
      <HeaderContact
        text={t('concerns.header')}
        backgroundImage={getSrc(sisterconcernCover)}
      />
      <KawaiiConcerns />
    </>
  );
};

export default Concerns;
