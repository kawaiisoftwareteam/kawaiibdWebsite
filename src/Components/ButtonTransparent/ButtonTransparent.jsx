'use client';

import React from 'react';
import "./ButtonTransparent.css";
import Link from 'next/link';
import arrow from '../../Assets/kg_button_indicator.svg';

const ButtonTransparent = ({ text, link, bgclass }) => {
  return (
    <Link href={link || '#'} className='button_transparent' style={{ background: bgclass }}>
      <div className='btn_transparent'>
        <div className='btn_transparent_text'>
          {text}
        </div>
        <div>
          <img src={typeof arrow === 'string' ? arrow : arrow?.src || arrow} alt="arrow" className='mt-[0.35rem]' />
        </div>
      </div>
    </Link>
  );
};

export default ButtonTransparent;
