import React from 'react'
import "./Footer.css"
import TopFooter from './TopFooter/TopFooter'
import BottomFooter from './BottomFooter/BottomFooter'

const Footer = () => {
  return (
    <div className='mainFoot'>
      <TopFooter/>
      <BottomFooter />
    </div>
  )
}

export default Footer
