import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
// import { faToggleOn } from '@fortawesome/free-solid-svg-icons/faToggleOn';
// import { faToggleOff } from '@fortawesome/free-solid-svg-icons/faToggleOff';

const NavHead = ({ currentLang, setCurrentLang }) => {
  return (
    <div className="w-full h-fixed-40px bg-[#BE1E2D] justify-between items-center flex px-4 md:px-16 lg:px-[240px]">
      <div className="text-white text-sm font-normal font-main">A Japan-Bangladesh Joint Venture Company</div>
      <div className="flex items-center">
        {/* Language Switcher */}
        <LanguageSwitcher currentLang={currentLang} setCurrentLang={setCurrentLang}  isNavbar={true} />
        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-[#e0e0e0] mx-2 flex" />
        
        {/* Dark Mode Toggle */}
        {/* <div className="h-10 p-1.5 bg-white/0 rounded justify-center items-center flex">
          <FontAwesomeIcon icon={faToggleOn} size="2xl" style={{ color: "#ffffff", }} />
          <div className="hidden md:flex pl-1 pr-2 items-center">
            <div className="text-white text-sm font-normal font-main leading-none">Dark mode</div>
          </div>
        </div> */}
        {/* Light Mode Toggle */}
        {/* <div className="h-10 p-1.5 bg-white/0 rounded justify-center items-center flex">
          <FontAwesomeIcon icon={faToggleOff} size="2xl" style={{ color: "#ffffff", }} />
          <div className="hidden md:flex pl-1 pr-2 items-center">
            <div className="text-white text-sm font-normal font-main leading-none">Light mode</div>
          </div>
        </div> */}

        {/* Divider */}
        {/* <div className="hidden md:block w-px h-5 bg-[#e0e0e0] mx-2 flex" /> */}

        {/* Social Links Section */}
        <div className="h-10 p-1.5 bg-white/0 rounded justify-center items-center gap-2.5 flex">
          <div className="hidden md:flex px-2 items-center">
            <div className="text-white text-sm font-normal font-main leading-none">Join us on:</div>
          </div>
          <a href='https://www.facebook.com/profile.php?id=61563359894758' target='_blank' rel="noreferrer" className="text-white">
            <FontAwesomeIcon icon={faFacebook} size='xl' />
          </a>
          <a href='https://www.linkedin.com/company/kawaii-group-bd' target='_blank' rel="noreferrer" className="text-white">
            <FontAwesomeIcon icon={faLinkedin} size='xl' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavHead
