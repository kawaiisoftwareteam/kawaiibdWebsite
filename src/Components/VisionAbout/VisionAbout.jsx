'use client';

import React from 'react';
import "./VisionAbout.css";
import leftWhite from '../../Assets/KG_symbol_left_white.webp';
import rightWhite from '../../Assets/KG_symbol_right_white.webp';
import { useLocale } from '../../i18n/LocaleContext';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const VisionAbout = () => {
  const { t } = useLocale();

  return (
    <div className='vision_about_main'>
      <img loading="lazy" decoding="async" src={getSrc(leftWhite)} alt="leftwhite" className='aboutleftWhite' />
      <div className='about_text_box_shape'>
        <div className='about_text_box_header'>
          <div className='about_text_header_'>{t('about.vision.title')}</div>
          <div className='about_text_description'>
            {t('about.vision.body')}
          </div>
        </div>
      </div>
      <img loading="lazy" decoding="async" src={getSrc(rightWhite)} alt="rightwhite" className='aboutrightWhite' />
    </div>
  );
};

export default VisionAbout;
