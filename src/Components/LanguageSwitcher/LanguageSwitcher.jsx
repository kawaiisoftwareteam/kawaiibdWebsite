'use client';

import React, { useState, useEffect } from 'react';
import './LanguageSwitcher.css';
import { LANGUAGES } from '../../i18n/config';
import { useLocale } from '../../i18n/LocaleContext';
import usFlag from './flags/us.svg';
import bdFlag from './flags/bd.svg';
import jpFlag from './flags/jp.svg';
import { resolveImage } from '../../lib/image';


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

  return (
    <div className="relative language-switcher">
      <button
        className="lang-trigger"
        onClick={toggleDropdown}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={dropdownVisible}
      >
        <img loading="lazy" decoding="async"
          className="language-switcher__flag"
          {...resolveImage(flagImages[current.code])}
          alt={`${current.nativeName} flag`}
        />
        <span className="lang-trigger__label">{current.nativeName}</span>
        <svg
          className={`lang-trigger__chevron ${dropdownVisible ? 'lang-trigger__chevron--open' : ''}`}
          width="12" height="12" viewBox="0 0 12 12" fill="none"
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {dropdownVisible && (
        <div
          className={`lang-dropdown ${isNavbar ? 'lang-dropdown--navbar' : 'lang-dropdown--footer'}`}
          role="listbox"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={lang.code === locale}
              onClick={() => changeLanguage(lang.code)}
              className={`lang-dropdown__option ${lang.code === locale ? 'lang-dropdown__option--active' : ''}`}
            >
              <img loading="lazy" decoding="async"
                className="language-switcher__flag language-switcher__flag--option"
                {...resolveImage(flagImages[lang.code])}
                alt={`${lang.nativeName} flag`}
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
