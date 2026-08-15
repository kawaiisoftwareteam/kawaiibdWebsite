import React from 'react'
import './ButtonNormal.css'

const ButtonNormal = ({ text, arrow }) => {
    const arrowSrc = typeof arrow === 'string' ? arrow : arrow?.src || ''
    return (
      <div className='button_normal_cta'>
        <div className='btn_normal_sub'>
          <div className='btn_normal_text'>
            {text}
          </div>
          {arrowSrc ? (
            <img loading="eager" decoding="async" src={arrowSrc} alt="Continue" className='mt-[0.35rem]' />
          ) : null}
        </div>
      </div>
    )
  }

export default ButtonNormal
