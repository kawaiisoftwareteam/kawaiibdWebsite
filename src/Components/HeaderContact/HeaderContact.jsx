'use client';

import React from 'react';
import './HeaderContact.css';
import leftWhite from '../../Assets/top-left-corner-kg.svg';
import rightWhite from '../../Assets/KG_symbol_right_white.webp';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const HeaderContact = ({ text, backgroundImage }) => {
  return (
    <div className='header_main_top' style={{ backgroundImage: `url(${getSrc(backgroundImage)})` }}>
      <img loading="lazy" decoding="async" src={getSrc(leftWhite)} alt="Kawaii Group decorative corner" className='leftWhite' />
      <div className='text_box_header'>
        <div className='text_shape_header'>
          <h1 className='text_header_'>
            {text}
          </h1>
        </div>
      </div>
      <img loading="lazy" decoding="async" src={getSrc(rightWhite)} alt="Kawaii Group symbol" className='rightWhite' />
    </div>
  );
};

export default HeaderContact;