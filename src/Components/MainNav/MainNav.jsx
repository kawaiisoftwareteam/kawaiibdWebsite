'use client';

import React, { useState, useEffect, useCallback } from 'react';
import "./MainNav.css";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import kawaiiLogo from '../../Assets/kawaiigroup.png';
import kawaiiLogobh from '../../Assets/kawaiigroup.png';
import mobileCross from '../../Assets/mobileCross.svg';
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.png';
import kgjLogo from '../../Assets/Sister_Concerns/3_logo.png';
import kddLogo from '../../Assets/Sister_Concerns/4_logo.png';
import khcLogo from '../../Assets/Sister_Concerns/1_logo.png';
import kiecLogo from '../../Assets/Sister_Concerns/5_logo.png';
import kjdlLogo from '../../Assets/Sister_Concerns/6_logo.png';
import aj_logo from '../../Assets/Sister_Concerns/aj_logo.png';
import sanjana_logo from '../../Assets/Sister_Concerns/sanjana_logo.png';
import tredmig_logo from '../../Assets/Sister_Concerns/tredmig.svg';
import letsfly_logo from '../../Assets/Sister_Concerns/bimanholidays.webp';
import kgvlLogo from '../../Assets/Sister_Concerns/kgvl_logo.svg';
import kjchsLogo from '../../Assets/Sister_Concerns/Asset_2_2x-removebg-preview.png';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useLocale } from '../../i18n/LocaleContext';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const concernLinks = [
  {
    id: 2,
    path: "https://katsl.vercel.app/",
    name: "Kawaii Advanced Technology & Solution Ltd.",
    logo: getSrc(katslLogo),
    alt: "KAtslLogo",
    isExternal: true
  },
  {
    id: 4,
    path: "https://kawaiigroupjapan.jp/",
    name: "Kawaii Group Japan Limited",
    logo: getSrc(kgjLogo),
    alt: "kgjLogo",
    isExternal: true
  },
  {
    id: 6,
    path: "/kdd",
    name: "Japan Kawaii Design & Development Limited",
    logo: getSrc(kddLogo),
    alt: "kddLogo",
    isExternal: false
  },
  {
    id: 7,
    path: "/khc",
    name: "Kawaii Human Consultant Limited",
    logo: getSrc(khcLogo),
    alt: "khcLogo",
    isExternal: false
  },
  {
    id: 8,
    path: "https://kawaiieducationbd.com/",
    name: "Kawaii International Education Centre",
    logo: getSrc(kiecLogo),
    alt: "kiecLogo",
    isExternal: true
  },
  {
    id: 9,
    path: "/kjdl",
    name: "Japan Kawaii Development Limited",
    logo: getSrc(kjdlLogo),
    alt: "kjdlLogo",
    isExternal: false
  },
  {
    id: 10,
    path: "https://achievejapanssw.com/",
    name: "Achieve Japan",
    logo: getSrc(aj_logo),
    alt: "aj_logo",
    isExternal: true
  },
  {
    id: 11,
    path: "https://sanjanahr.com/",
    name: "M/S Sanjana International (RL-711)",
    logo: getSrc(sanjana_logo),
    alt: "sanjana_logo",
    isExternal: true
  },
  {
    id: 12,
    path: "https://tredmig.com/",
    name: "Tredmig",
    logo: getSrc(tredmig_logo),
    alt: "tredmig_logo",
    isExternal: true
  },
  {
    id: 13,
    path: "https://bimanholidays.com/",
    name: "Biman Holidays",
    logo: getSrc(letsfly_logo),
    alt: "letsfly_logo",
    isExternal: true
  },
  {
    id: 14,
    path: "/kawaii-global-ventures",
    name: "Kawaii Global Ventures Limited",
    logo: getSrc(kgvlLogo),
    alt: "kgvlLogo",
    isExternal: false
  },
  {
    id: 15,
    path: "/kawaii-japan-career-hr",
    name: "Kawaii Japan Career & HR Solutions",
    logo: getSrc(kjchsLogo),
    alt: "kjchsLogo",
    isExternal: false
  }
];

const MainNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, localizedPath } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // Scroll detection for transparent → solid navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isSidebarOpen) {
        setIsSidebarOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.classList.add('sidebar-open');
      document.body.style.touchAction = 'none';
    } else {
      document.body.classList.remove('sidebar-open');
      document.body.style.touchAction = '';
    }
  };

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
    document.body.classList.remove('sidebar-open');
    document.body.style.touchAction = '';
  }, []);

  const resolveConcernPath = (path, isExternal) =>
    isExternal ? path : localizedPath(path);

  const handleSisterConcernsClick = () => {
    if (dropdownVisible) {
      setDropdownVisible(false);
      router.push(localizedPath('/concerns'));
      closeSidebar();
    } else {
      setDropdownVisible(true);
    }
  };

  const isLinkActive = (path) => {
    if (!pathname) return false;
    const target = localizedPath(path);
    return pathname === target;
  };

  return (
    <>
      <nav className={`mainNav ${scrolled ? 'mainNav--scrolled' : ''}`}>
        <div className="mainNav__inner">
          {/* Logo */}
          <Link href={localizedPath('/home')} className="mainNav__logo">
            <img src={getSrc(kawaiiLogo)} alt="Kawaii Group Logo" />
          </Link>

          {/* Desktop navigation links */}
          <div className="mainNav__links">
            <Link
              href={localizedPath('/home')}
              className={`mainNav__link ${isLinkActive('/home') ? 'mainNav__link--active' : ''}`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href={localizedPath('/about')}
              className={`mainNav__link ${isLinkActive('/about') ? 'mainNav__link--active' : ''}`}
            >
              {t('nav.whoWeAre')}
            </Link>
            <Link
              href={localizedPath('/services')}
              className={`mainNav__link ${isLinkActive('/services') ? 'mainNav__link--active' : ''}`}
            >
              {t('nav.whatWeDo')}
            </Link>

            {/* Sister Concerns with dropdown */}
            <div className="mainNav__dropdown-wrapper">
              <Link
                href={localizedPath('/concerns')}
                className={`mainNav__link ${isLinkActive('/concerns') ? 'mainNav__link--active' : ''}`}
              >
                {t('nav.sisterConcerns')}
                <svg className="mainNav__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <div className="mainNav__dropdown">
                <div className="mainNav__dropdown-grid">
                  {concernLinks.map((item) => (
                    item.isExternal ? (
                      <a
                        key={item.id}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mainNav__dropdown-item"
                      >
                        <img src={item.logo} alt={item.alt} className="mainNav__dropdown-logo" />
                      </a>
                    ) : (
                      <Link
                        key={item.id}
                        href={resolveConcernPath(item.path, item.isExternal)}
                        className="mainNav__dropdown-item"
                      >
                        <img src={item.logo} alt={item.alt} className="mainNav__dropdown-logo" />
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={localizedPath('/masterclass')}
              className={`mainNav__link mainNav__link--hot ${isLinkActive('/masterclass') ? 'mainNav__link--active' : ''}`}
            >
              {t('nav.bimMasterclass')}
            </Link>
          </div>

          {/* Right actions */}
          <div className="mainNav__actions">
            <LanguageSwitcher isNavbar={true} />
            <Link href={localizedPath('/contact')} className="mainNav__cta">
              <span>{t('nav.getInTouch')}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mainNav__cta-icon">
                <path d="M3.33334 8H12.6667M12.6667 8L8 3.33334M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="mainNav__hamburger" onClick={toggleSidebar} aria-label="Open menu">
            <span className="mainNav__hamburger-line"></span>
            <span className="mainNav__hamburger-line"></span>
            <span className="mainNav__hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div className="mobileOverlay" onClick={closeSidebar} />
      )}

      {/* Mobile sidebar */}
      <div className={`mobileSidebar ${isSidebarOpen ? 'mobileSidebar--open' : ''}`}>
        <div className="mobileSidebar__top">
          <Link href={localizedPath('/home')} onClick={closeSidebar}>
            <img src={getSrc(kawaiiLogobh)} alt="Kawaii Group" className="mobileSidebar__logo" />
          </Link>
          <button className="mobileSidebar__close" onClick={toggleSidebar} aria-label="Close menu">
            <img src={getSrc(mobileCross)} alt="" />
          </button>
        </div>

        <div className="mobileSidebar__nav">
          <Link
            href={localizedPath('/home')}
            className={`mobileSidebar__link ${isLinkActive('/home') ? 'mobileSidebar__link--active' : ''}`}
            onClick={closeSidebar}
          >
            {t('nav.home')}
          </Link>
          <Link
            href={localizedPath('/about')}
            className={`mobileSidebar__link ${isLinkActive('/about') ? 'mobileSidebar__link--active' : ''}`}
            onClick={closeSidebar}
          >
            {t('nav.whoWeAre')}
          </Link>
          <Link
            href={localizedPath('/services')}
            className={`mobileSidebar__link ${isLinkActive('/services') ? 'mobileSidebar__link--active' : ''}`}
            onClick={closeSidebar}
          >
            {t('nav.whatWeDo')}
          </Link>

          {/* Sister Concerns with mobile dropdown */}
          <div
            className={`mobileSidebar__link mobileSidebar__link--expandable ${dropdownVisible ? 'mobileSidebar__link--active' : ''}`}
            onClick={handleSisterConcernsClick}
          >
            <span>{t('nav.sisterConcerns')}</span>
            <svg
              className={`mobileSidebar__arrow ${dropdownVisible ? 'mobileSidebar__arrow--open' : ''}`}
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownVisible(!dropdownVisible);
              }}
            >
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {dropdownVisible && (
            <div className="mobileSidebar__sub-nav">
              {concernLinks.map((item) =>
                item.isExternal ? (
                  <a
                    key={item.id}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobileSidebar__sub-link"
                    onClick={() => {
                      setDropdownVisible(false);
                      closeSidebar();
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.id}
                    href={resolveConcernPath(item.path, item.isExternal)}
                    className={`mobileSidebar__sub-link ${isLinkActive(item.path) ? 'mobileSidebar__sub-link--active' : ''}`}
                    onClick={() => {
                      setDropdownVisible(false);
                      closeSidebar();
                    }}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          )}

          <Link
            href={localizedPath('/masterclass')}
            className={`mobileSidebar__link mobileSidebar__link--hot ${isLinkActive('/masterclass') ? 'mobileSidebar__link--active' : ''}`}
            onClick={closeSidebar}
          >
            {t('nav.bimMasterclass')}
          </Link>

          <Link
            href={localizedPath('/contact')}
            className={`mobileSidebar__link ${isLinkActive('/contact') ? 'mobileSidebar__link--active' : ''}`}
            onClick={closeSidebar}
          >
            {t('nav.getInTouch')}
          </Link>
        </div>

        <div className="mobileSidebar__bottom">
          <div className="mobileSidebar__social">
            <span className="mobileSidebar__social-label">{t('nav.joinUsOn')}</span>
            <a href="https://www.facebook.com/profile.php?id=61563359894758" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/kawaii-group-bd" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="18" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
            </a>
          </div>
          <div className="mobileSidebar__copyright">{t('nav.copyright')}</div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
