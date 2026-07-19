import React from 'react'
import "./BottomFooter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import LanguageSwitcher from '../../LanguageSwitcher/LanguageSwitcher'

const BottomFooter = ({ currentLang, setCurrentLang }) => {
  return (
    <div className='mainBottom'>
      <div className='bottom_button'>
        <div className='bText'>
          Join us on:
        </div>
        <a href='https://www.facebook.com/profile.php?id=61563359894758' target='_blank' rel="noreferrer" className="text-white">
            <FontAwesomeIcon icon={faFacebook} size='xl' />
          </a>
          <a href='https://www.linkedin.com/company/kawaii-group-bd' target='_blank' rel="noreferrer" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} size='xl' />
          </a>
      </div>
      <div className='bCopyright'>Copyright © 2024 Kawaii Group Bangladesh. All rights reserved.</div>
      <div className='lnFrame'>
        <div className='lnButton'>
          <LanguageSwitcher currentLang={currentLang} setCurrentLang={setCurrentLang} isNavbar={false}/>
        </div>
      </div>
    </div>
  )
}

export default BottomFooter
