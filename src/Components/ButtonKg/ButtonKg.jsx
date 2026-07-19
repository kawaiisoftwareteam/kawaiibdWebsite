import React from 'react'
import './ButtonKg.css'
import arrow from '../../Assets/kg_button_indicator.svg'

const Button_kg = ({ text }) => {
  return (
    <div className='button_cta'>
      <div className='btn_sub'>
        <div className='btn_text'>
          {text}
        </div>
        <img src={arrow} alt="arrow" className='mt-[0.35rem]'/>
      </div>
    </div>
  )
}

export default Button_kg
