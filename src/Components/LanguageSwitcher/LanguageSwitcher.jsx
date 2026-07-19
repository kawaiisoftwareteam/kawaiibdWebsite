import React, { useState, useEffect } from 'react';
import './LanguageSwitcher.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
import globeLang from '../../Assets/globe.svg'

const LanguageSwitcher = ({ currentLang, setCurrentLang, isNavbar = false }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
    const languages = [
      { name: 'English', code: 'en' },
      { name: 'Japanese', code: 'ja' },
      { name: 'Bengali', code: 'bn' }
    ];
  
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  
    const changeLanguage = (langName, langCode) => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
        setCurrentLang(langName);
        setDropdownVisible(false);
      }
    };
  
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownVisible && !event.target.closest('.language-switcher')) {
          setDropdownVisible(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropdownVisible]);

    // Dynamic dropdown position classes
    const dropdownPositionClasses = isNavbar 
      ? "absolute z-50 top-12 right-0" 
      : "relative mt-2";
  

  return (
    <>
    <div className="relative language-switcher">
          <div
            className="h-10 px-4 py-2 bg-white/0 rounded justify-center items-center gap-0.5 flex cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="text-white">
              <img src={globeLang} alt="globeLang" />
            </div>
            <div className="flex px-1 pb-0.5 items-center">
              <div className="text-white text-sm font-normal font-main leading-none">
                {currentLang}
              </div>
            </div>
            <div className="text-white">
              <FontAwesomeIcon icon={faAngleDown} 
              className={`ml-1 transform transition-transform duration-300 ${dropdownVisible ? 'rotate-180' : ''}`}/>
            </div>
          </div>

          {/* Dropdown Menu */}
          {dropdownVisible && (
            <div className={`${dropdownPositionClasses} bg-white shadow-md rounded-md overflow-hidden min-w-[120px]`}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.name, lang.code)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" className="hidden"></div>
    </>
  );
};

export default LanguageSwitcher;