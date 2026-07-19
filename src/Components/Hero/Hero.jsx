import React from 'react'
import './Hero.css'
import leftCorner from "../../Assets/heroLeftCorner.svg"
import rightCorner from "../../Assets/heroRightCorner.svg"
import Slider from '../Slider/Slider'

const Hero = () => {
  return (
    <div className='heroMain'>
      <img src={leftCorner} alt="" className='heroCornerLeft' />
      <img src={rightCorner} alt="" className='heroCornerRight'/>
      <Slider/>
    </div>
  )
}

export default Hero
