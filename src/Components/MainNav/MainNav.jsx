import React, { useState, useEffect } from 'react';
import "./MainNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import kawaiiLogo from '../../Assets/kawaiiLogoMain.svg';
import kawaiiLogobh from '../../Assets/kawaiiGroupLogobw.svg';
import mobileCross from '../../Assets/mobileCross.svg';
// import kfLogo from '../../Assets/Sister_Concerns/KF_Logo_Final_1_trans.png'
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.png'
// import keclLogo from '../../Assets/Sister_Concerns/2_logo.png'
import kgjLogo from '../../Assets/Sister_Concerns/3_logo.png'
import kddLogo from '../../Assets/Sister_Concerns/4_logo.png'
import khcLogo from '../../Assets/Sister_Concerns/1_logo.png'
import kiecLogo from '../../Assets/Sister_Concerns/5_logo.png'
import kjdlLogo from '../../Assets/Sister_Concerns/6_logo.png'
// import kgclLogo from '../../Assets/Sister_Concerns/7_logo.png'
import aj_logo from '../../Assets/Sister_Concerns/aj_logo.png'
import sanjana_logo from '../../Assets/Sister_Concerns/sanjana_logo.png'
import tredmig_logo from '../../Assets/Sister_Concerns/tredmig.svg'
import letsfly_logo from '../../Assets/Sister_Concerns/bimanholidays.webp'
import kgvlLogo from '../../Assets/Sister_Concerns/kgvl_logo.svg'
import dropdownArrow from '../../Assets/Sister_Concerns/dropdownArrowConcerns.svg'
import mobiledropdownArrow from '../../Assets/Sister_Concerns/mobile_arrow_drop_down.svg'

const concernLinks = [
  // 1 — commented out
  // {
  //   id: 1,
  //   path: "/kf",
  //   name: "Kawaii Fashion Limited",
  //   logo: kfLogo,
  //   alt: "kfLogo",
  //   isExternal: false
  // },
  // 2
  {
    id: 2,
    path: "https://katsl.vercel.app/",
    name: "Kawaii Advanced Technology & Solution Ltd.",
    logo: katslLogo,
    alt: "KAtslLogo",
    isExternal: true
  },
  // 3 — commented out
  // {
  //   id: 3,
  //   path: "/kecl",
  //   name: "Kawaii Engineer & Constructions Limited",
  //   logo: keclLogo,
  //   alt: "keclLogo",
  //   isExternal: false
  // },
  // 4
  {
    id: 4,
    path: "https://kawaiijapanbd.com/",
    name: "Kawaii Group Japan Limited",
    logo: kgjLogo,
    alt: "kgjLogo",
    isExternal: true
  },
  // 5 — commented out
  // {
  //   id: 5,
  //   path: "/kgcl",
  //   name: "Kawaii Group Canada Limited",
  //   logo: kgclLogo,
  //   alt: "kgclLogo",
  //   isExternal: false
  // },
  // 6
  {
    id: 6,
    path: "/kdd",
    name: "Japan Kawaii Design & Development Limited",
    logo: kddLogo,
    alt: "kddLogo",
    isExternal: false
  },
  // 7
  {
    id: 7,
    path: "/khc",
    name: "Kawaii Human Consultant Limited",
    logo: khcLogo,
    alt: "khcLogo",
    isExternal: false
  },
  // 8
  {
    id: 8,
    path: "https://kawaiieducationbd.com/",
    name: "Kawaii International Education Centre",
    logo: kiecLogo,
    alt: "kiecLogo",
    isExternal: true
  },
  // 9
  {
    id: 9,
    path: "/kjdl",
    name: "Japan Kawaii Development Limited",
    logo: kjdlLogo,
    alt: "kjdlLogo",
    isExternal: false
  },
  // 10
  {
    id: 10,
    path: "https://achievejapanssw.com/",
    name: "Achieve Japan",
    logo: aj_logo,
    alt: "aj_logo",
    isExternal: true
  },
  // 11
  {
    id: 11,
    path: "https://sanjanahr.com/",
    name: "M/S Sanjana International (RL-711)",
    logo: sanjana_logo,
    alt: "sanjana_logo",
    isExternal: true
  },
   // 12
   {
    id: 12,
    path: "https://tredmig.com/",
    name: "Tredmig",
    logo: tredmig_logo,
    alt: "tredmig_logo",
    isExternal: true
  },
   // 13
   {
    id: 13,
    path: "https://bimanholidays.com/",
    name: "Biman Holidays",
    logo: letsfly_logo,
    alt: "letsfly_logo",
    isExternal: true
  },
  // 14
  {
    id: 14,
    path: "/kawaii-global-ventures",
    name: "Kawaii Global Ventures Limited",
    logo: kgvlLogo,
    alt: "kgvlLogo",
    isExternal: false
  }
];

const MainNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Add useEffect to handle viewport changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
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

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.classList.remove('sidebar-open');
    document.body.style.touchAction = '';
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleSisterConcernsClick = () => {
    if (dropdownVisible) {
      // Redirect to /concern if dropdown is already open and close dropdown
      setDropdownVisible(false);
      navigate('/concerns');
      closeSidebar();
    } else {
      // Show dropdown if it's not already open
      setDropdownVisible(true);
    }
  };

  return (
    <div className='bottomHeader'>
      <NavLink to="/home" className='logoFrame'>
        <img src={kawaiiLogo} alt="kawaiiGroupLogo" />
      </NavLink>
      <div className='navFrame'>
        <NavLink to="/home" className={({ isActive }) => `navMenu ${isActive ? 'active' : ''}`}>
          <div className='menuText'>Home</div>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `navMenu ${isActive ? 'active' : ''}`}>
          <div className='menuText'>Who We Are</div>
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => `navMenu ${isActive ? 'active' : ''}`}>
          <div className='menuText'>What We Do</div>
        </NavLink>
        <div className="navMenu-wrapper">
          <NavLink
            to="/concerns"
            className={({ isActive }) => `navMenu ${isActive ? 'active' : ''}`}
          >
            <div className='menuText'>Sister Concerns</div>
            <img src={dropdownArrow} alt="dropdown" className='dropdownArrow' />
          </NavLink>

          <div className='dropdownMenu'>
            <div className='dropdownMainBox'>
              {concernLinks.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.id}  // changed to use id instead of index
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='dropdownIconBox'
                  >
                    <img src={item.logo} alt={item.alt} className='dropdownLogo' />
                  </a>
                ) : (
                  <NavLink
                    key={item.id}  // changed to use id instead of index
                    to={item.path}
                    className='dropdownIconBox'
                  >
                    <img src={item.logo} alt={item.alt} className='dropdownLogo' />
                  </NavLink>
                )
              ))}
            </div>
          </div>
        </div>

        <NavLink to="/contact" className={({ isActive }) => `navMenu ${isActive ? 'active' : ''}`}>
          <div className='menuText'>Get in Touch</div>
        </NavLink>
      </div>

      {/* Mobile menu icon */}
      <div className='menuLayer' onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} style={{ fontSize: '24px' }} />
      </div>

      {/* Mobile sidebar nav */}
      {isSidebarOpen && (
        <div className='mobileNavSideBar'>
          <div className='mobileSidebarTop'>
            <NavLink to="/home" onClick={closeSidebar}>
              <img src={kawaiiLogobh} alt="" />
            </NavLink>
            <img src={mobileCross} alt="mobileSideBarCross" onClick={toggleSidebar} />
          </div>
          <div className='mobileNavItemBox'>
            <NavLink
              to="/home"
              className={({ isActive }) => `mobileNavItem ${isActive ? 'active-mobile-nav-item' : ''}`}
              onClick={closeSidebar}
            >
              <div className='mobileNavItemText'>Home</div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `mobileNavItem ${isActive ? 'active-mobile-nav-item' : ''}`}
              onClick={closeSidebar}
            >
              <div className='mobileNavItemText'>Who We Are</div>
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => `mobileNavItem ${isActive ? 'active-mobile-nav-item' : ''}`}
              onClick={closeSidebar}
            >
              <div className='mobileNavItemText'>What We Do</div>
            </NavLink>
           {/* Sister Concerns clickable item */}
           <div
                className={`mobileNavItem ${dropdownVisible ? 'active-mobile-nav-item' : ''}`}
                onClick={handleSisterConcernsClick}
              >
                <div className='mobileNavItemText'>Sister Concerns</div>
                <img
                  src={mobiledropdownArrow}
                  alt="mobiledropdownArrow"
                  className={`sidemobileDropdownArrow ${dropdownVisible ? 'rotate-arrow' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the parent onClick from triggering
                    setDropdownVisible(!dropdownVisible);
                  }}
                />
              </div>

              {/* Dropdown box that appears when dropdownVisible is true */}
              {dropdownVisible && (
                <div className="dropdownMobileBox">
                  {concernLinks.map((item) =>
                    item.isExternal ? (
                      <a
                        key={item.id}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobileNavItemDropdown"
                        onClick={() => {
                          setDropdownVisible(false);
                          closeSidebar();
                        }}
                      >
                        <div className="mobileNavItemText">{item.name}</div>
                      </a>
                    ) : (
                      <NavLink
                        key={item.id}
                        to={item.path}
                        className={({ isActive }) =>
                          `mobileNavItemDropdown ${isActive ? 'active-mobile-nav-item' : ''}`
                        }
                        onClick={() => {
                          setDropdownVisible(false);
                          closeSidebar();
                        }}
                      >
                        <div className="mobileNavItemText">{item.name}</div>
                      </NavLink>
                    )
                  )}
                </div>
              )}

            <NavLink
              to="/contact"
              className={({ isActive }) => `mobileNavItem ${isActive ? 'active-mobile-nav-item' : ''}`}
              onClick={closeSidebar}
            >
              <div className='mobileNavItemText'>Get in Touch</div>
            </NavLink>
          </div>
          <div className='mobileNavBottom'>
            <div className='mobileNavBottomIconBox'>
              <div className='mobileNavBottomJoin'>Join us on:</div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
            </div>
            <div className='mobileNavBottomText'>Copyright © 2024 Kawaii Group Bangladesh. <br />
              All rights reserved.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainNav;
