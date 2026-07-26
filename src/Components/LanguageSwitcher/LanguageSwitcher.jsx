import React, { useState, useEffect } from 'react';
import './LanguageSwitcher.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import globeLang from '../../Assets/globe.svg';
import { LANGUAGES } from '../../i18n/config';
import { useLocale } from '../../i18n/LocaleContext';
import usFlag from './flags/us.svg';
import bdFlag from './flags/bd.svg';
import jpFlag from './flags/jp.svg';

const flagImages = {
  en: usFlag,
  bn: bdFlag,
  ja: jpFlag,
};

const LanguageSwitcher = ({ isNavbar = false }) => {
  const { locale, setLocale } = useLocale();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const current = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  const toggleDropdown = () => setDropdownVisible((v) => !v);

  const changeLanguage = (code) => {
    setLocale(code, 'manual');
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownVisible && !event.target.closest('.language-switcher')) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownVisible]);

  const dropdownPositionClasses = isNavbar
    ? 'absolute z-50 top-12 right-0'
    : 'absolute z-50 bottom-12 right-0';

  return (
    <div className="relative language-switcher">
      <div
        className="h-10 px-4 py-2 bg-white/0 rounded justify-center items-center gap-0.5 flex cursor-pointer"
        onClick={toggleDropdown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleDropdown();
        }}
        aria-haspopup="listbox"
        aria-expanded={dropdownVisible}
      >
        <div className="text-white">
          <img src={globeLang} alt="" />
        </div>
        <div className="flex px-1 pb-0.5 items-center gap-1">
          <img
            className="language-switcher__flag"
            src={flagImages[current.code]}
            alt=""
            aria-hidden="true"
          />
          <div className="text-white text-sm font-normal font-main leading-none">
            {current.nativeName}
          </div>
        </div>
        <div className="text-white">
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`ml-1 transform transition-transform duration-300 ${
              dropdownVisible ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {dropdownVisible && (
        <div
          className={`${dropdownPositionClasses} bg-white shadow-md rounded-md overflow-hidden min-w-[150px]`}
          role="listbox"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={lang.code === locale}
              onClick={() => changeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${
                lang.code === locale ? 'bg-gray-50 font-semibold' : ''
              }`}
            >
              <img
                className="language-switcher__flag language-switcher__flag--option"
                src={flagImages[lang.code]}
                alt=""
                aria-hidden="true"
              />
              {lang.nativeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
