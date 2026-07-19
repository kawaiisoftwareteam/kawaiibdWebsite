import React from 'react';
import './HeaderContact.css'
import leftWhite from '../../Assets/top-left-corner-kg.svg'
import rightWhite from '../../Assets/KG_symbol_right_white.png'

const HeaderContact = ({ text, backgroundImage }) => {
  return (
    <div className='header_main_top' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src={leftWhite} alt="leftwhite" className='leftWhite' />
      <div className='text_box_header'>
        <div className='text_shape_header'>
          <div className='text_header_'>
            {text}
          </div>
        </div>
      </div>
      <img src={rightWhite} alt="rightwhite" className='rightWhite' />
    </div>
  );
};

export default HeaderContact;