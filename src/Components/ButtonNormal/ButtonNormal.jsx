import React from 'react'
import './ButtonNormal.css'

const ButtonNormal = ({ text, arrow }) => {
    return (
      <div className='button_normal_cta'>
        <div className='btn_normal_sub'>
          <div className='btn_normal_text'>
            {text}
          </div>
          <img src={arrow} alt="arrow" className='mt-[0.35rem]'/>
        </div>
      </div>
    )
  }

export default ButtonNormal
