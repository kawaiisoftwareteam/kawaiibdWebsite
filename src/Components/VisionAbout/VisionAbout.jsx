import React from 'react'
import "./VisionAbout.css"
import leftWhite from '../../Assets/KG_symbol_left_white.png'
import rightWhite from '../../Assets/KG_symbol_right_white.png'

const VisionAbout = () => {
  return (
    <div className='vision_about_main'>
        <img src={leftWhite} alt="leftwhite" className='aboutleftWhite' />
       <div className='about_text_box_shape'>
       <div className='about_text_box_header'>
       <div className='about_text_header_'>Our Vision for the Future</div>
       <div className='about_text_description'>
       Our vision is to be a leading force in connecting global businesses with Japanese expertise driving innovation and sustainable growth across diverse industries.
       </div>
       </div>
       </div>
        <img src={rightWhite} alt="rightwhite" className='aboutrightWhite' />
    </div>
  )
}

export default VisionAbout
