import React from 'react'
import "./Footer.css"
import TopFooter from './TopFooter/TopFooter'
import BottomFooter from './BottomFooter/BottomFooter'

const Footer = ({ currentLang, setCurrentLang }) => {
  return (
    <div className='mainFoot'>
      <TopFooter/>
      <BottomFooter currentLang={currentLang} setCurrentLang={setCurrentLang}/>
    </div>
  )
}

export default Footer
