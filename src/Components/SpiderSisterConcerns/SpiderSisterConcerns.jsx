'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import './SpiderSisterConcerns.css';
import { useLocale } from '../../i18n/LocaleContext';

// Sister Concern Logos
import sanjanaLogo from '../../Assets/Sister_Concerns/sanjana_logo.png';
import ajLogo from '../../Assets/Sister_Concerns/aj_logo.png';
import tredmigLogo from '../../Assets/Sister_Concerns/tredmig.svg';
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.png';
import kgjLogo from '../../Assets/Sister_Concerns/3_logo.png';
import bhLogo from '../../Assets/Sister_Concerns/bimanholidays.webp';
import kddlLogo from '../../Assets/Sister_Concerns/4_logo.png';
import kiecLogo from '../../Assets/Sister_Concerns/5_logo.png';
import kgvlLogo from '../../Assets/Sister_Concerns/kgvl_logo.svg';
import kjchsLogo from '../../Assets/Sister_Concerns/Asset_2_2x-removebg-preview.png';

import arrow from '../../Assets/kg_button_indicator.svg';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const leftConcerns = [
  {
    id: 'sanjanaHr',
    name: 'M/S Sanjana International',
    category: 'Manpower & HR Recruiting',
    logo: sanjanaLogo,
    color: '#BE1E2D',
    externalLink: 'https://sanjanahr.com/',
  },
  {
    id: 'aj',
    name: 'Achieve Japan',
    category: 'SSW & Japanese Training',
    logo: ajLogo,
    color: '#BE1E2D',
    externalLink: 'https://achievejapanssw.com/',
  },
  {
    id: 'tredmig',
    name: 'Tredmig',
    category: 'E-Commerce & Digital',
    logo: tredmigLogo,
    color: '#BE1E2D',
    externalLink: 'https://tredmig.com/',
  },
  {
    id: 'katsl',
    name: 'KATSL',
    fullName: 'Kawaii Advanced Tech & Solution',
    category: 'Software & Technology',
    logo: katslLogo,
    color: '#BE1E2D',
    externalLink: 'https://katsl.vercel.app/',
  },
  {
    id: 'kgj',
    name: 'Kawaii Group Japan',
    category: 'Japan Headquarters',
    logo: kgjLogo,
    color: '#BE1E2D',
    externalLink: 'https://kawaiigroupjapan.jp/',
    link: '/concerns',
  },
];

const rightConcerns = [
  {
    id: 'bh',
    name: 'Biman Holidays',
    category: 'Travel & Tourism',
    logo: bhLogo,
    color: '#BE1E2D',
    externalLink: 'https://bimanholidays.com/',
  },
  {
    id: 'kddl',
    name: 'Japan Kawaii Design & Dev',
    category: 'Architecture & Design',
    logo: kddlLogo,
    color: '#BE1E2D',
    link: '/concerns',
  },
  {
    id: 'kiec',
    name: 'Kawaii Int. Education Center',
    category: 'Global Education',
    logo: kiecLogo,
    color: '#BE1E2D',
    externalLink: 'https://kawaiieducationbd.com/',
  },
  {
    id: 'kgvl',
    name: 'Kawaii Global Ventures',
    category: 'Investments & Business',
    logo: kgvlLogo,
    color: '#BE1E2D',
    link: '/kawaii-global-ventures',
  },
  {
    id: 'kjchs',
    name: 'Kawaii Japan Career & HR',
    category: 'Career & Talent Placement',
    logo: kjchsLogo,
    color: '#BE1E2D',
    link: '/kawaii-japan-career-hr',
  },
];

// Staggered column-wise sequencing order (Left column 1..5, then Right column 1..5)
const allConcerns = [...leftConcerns, ...rightConcerns];

const SpiderSisterConcerns = () => {
  const { t, localizedPath } = useLocale();
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const nodeRefs = useRef({});
  const [lines, setLines] = useState([]);

  const calculateLines = useCallback(() => {
    if (!containerRef.current || !centerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    if (containerRect.width <= 768) {
      setLines([]);
      return;
    }

    const centerRect = centerRef.current.getBoundingClientRect();
    const isSmallMobile = containerRect.width < 640;

    const cx = centerRect.left + centerRect.width / 2 - containerRect.left;
    const cy = centerRect.top + centerRect.height / 2 - containerRect.top;
    const radius = centerRect.width / 2;

    const newLines = [];

    allConcerns.forEach((item) => {
      const nodeEl = nodeRefs.current[item.id];
      if (!nodeEl) return;

      const nodeRect = nodeEl.getBoundingClientRect();
      const isLeft = leftConcerns.some((c) => c.id === item.id);

      const cardX = isLeft
        ? nodeRect.right - containerRect.left
        : nodeRect.left - containerRect.left;
      const cardY = nodeRect.top + nodeRect.height / 2 - containerRect.top;

      const angle = Math.atan2(cardY - cy, cardX - cx);

      const circleX = cx + radius * Math.cos(angle);
      const circleY = cy + radius * Math.sin(angle);

      const dx = circleX - cardX;
      const midX = isLeft
        ? cardX + Math.min(isSmallMobile ? 12 : 45, dx * 0.45)
        : cardX + Math.max(isSmallMobile ? -12 : -45, dx * 0.45);

      const path = `M ${cardX} ${cardY} L ${midX} ${cardY} L ${circleX} ${circleY}`;

      const dotX = (midX + circleX) / 2;
      const dotY = (cardY + circleY) / 2;

      newLines.push({
        id: item.id,
        cardX,
        cardY,
        midX,
        circleX,
        circleY,
        dotX,
        dotY,
        path,
        color: item.color,
      });
    });

    setLines(newLines);
  }, []);

  useEffect(() => {
    calculateLines();
    const timer1 = setTimeout(calculateLines, 150);
    const timer2 = setTimeout(calculateLines, 500);

    window.addEventListener('resize', calculateLines);
    window.addEventListener('orientationchange', calculateLines);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('resize', calculateLines);
      window.removeEventListener('orientationchange', calculateLines);
    };
  }, [calculateLines]);

  const activeId = hoveredId;

  return (
    <section className="spiderSectionMain">
      <div className="spiderHeader">
        <div className="spiderBadge">{t('nav.sisterConcerns')}</div>
        <h2 className="spiderTitle">{t('home.spiderConcerns.title')}</h2>
        <p className="spiderSubtitle">{t('home.spiderConcerns.subtitle')}</p>
      </div>

      <div className="spiderContainer" ref={containerRef}>
        {/* SVG Canvas for Spider Legs */}
        <svg className="spiderSvgCanvas">
          {lines.map((line, idx) => {
            const isActive = activeId === line.id;
            const pulseRadius = isActive ? 5 : 3.5;

            return (
              <g key={line.id} className={`spiderLegGroup ${isActive ? 'active' : ''}`}>
                <path
                  d={line.path}
                  className="spiderLegLine pulsing"
                  stroke="#BE1E2D"
                  strokeWidth={isActive ? 3.5 : 1.5}
                  strokeOpacity={isActive ? 1 : 0.4}
                  fill="none"
                />
                <circle
                  cx={line.circleX}
                  cy={line.circleY}
                  r={isActive ? 5.5 : 3}
                  fill="#BE1E2D"
                  className="spiderCircleDot"
                />
                <circle
                  cx={line.dotX}
                  cy={line.dotY}
                  r={isActive ? 4.5 : 2.5}
                  fill="#BE1E2D"
                  className="spiderMidDot"
                />
                <circle
                  r={pulseRadius}
                  fill="#BE1E2D"
                  fillOpacity={isActive ? '0.95' : '0.45'}
                  className={`spiderPulseDot ${isActive ? 'isActivePulse' : ''}`}
                >
                  <animateMotion
                    dur={isActive ? '4.8s' : '6.8s'}
                    begin={`${idx * 0.45}s`}
                    repeatCount="indefinite"
                    path={line.path}
                  />
                  <animate
                    attributeName="opacity"
                    values={isActive ? '0.2;1;0.2' : '0.1;0.55;0.1'}
                    dur={isActive ? '4.8s' : '6.8s'}
                    begin={`${idx * 0.45}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Central Hub Node */}
        <div className="spiderCenterHub" ref={centerRef}>
          <div className="spiderRedGlow"></div>
          <div className="centerHubBox">
            <svg
              className="centerHexIcon"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.2816 6.84912H16.1027L4.51398 26.9126L16.1027 46.9775H39.2816L50.8744 26.9126L39.2816 6.84912ZM18.9815 10.4973H35.4118C33.7322 13.7475 31.4097 16.6225 28.5854 18.948C25.7611 21.2736 22.4937 23.001 18.9815 24.0256V10.4973ZM18.9815 29.7983C22.4936 30.8231 25.7609 32.5506 28.5852 34.8761C31.4095 37.2016 33.732 40.0765 35.4118 43.3266H18.9815V29.7983ZM25.953 28.734H45.6074L38.4035 41.2035C35.5603 35.924 31.2354 31.5911 25.9612 28.7381L25.953 28.734ZM25.953 25.0858C31.2293 22.2346 35.5555 17.9013 38.3981 12.6204L45.6019 25.0899H25.953V25.0858ZM15.332 15.4829V38.3505L8.72621 26.9194L15.332 15.4951V15.4829Z"
                fill="#BE1E2D"
              />
            </svg>
          </div>
        </div>

        {/* Left Column (5 Cards) */}
        <div className="spiderColumn leftColumn">
          {leftConcerns.map((concern) => {
            const isActive = activeId === concern.id;
            return (
              <div
                key={concern.id}
                ref={(el) => (nodeRefs.current[concern.id] = el)}
                className={`spiderNodeCard ${isActive ? 'nodeActiveSeq' : ''}`}
                onMouseEnter={() => {
                  setHoveredId(concern.id);
                  calculateLines();
                }}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a
                  href={concern.externalLink || localizedPath(concern.link)}
                  target={concern.externalLink ? '_blank' : '_self'}
                  rel={concern.externalLink ? 'noopener noreferrer' : ''}
                  className="spiderNodeCardInner"
                >
                  <div className="nodeLogoWrapper">
                    <img src={getSrc(concern.logo)} alt={concern.name} className="nodeLogo" />
                  </div>
                  <div className="nodeInfo">
                    <span className="nodeCategory">{concern.category}</span>
                    <h3 className="nodeTitle">{concern.fullName || concern.name}</h3>
                  </div>
                  <div className="nodeArrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Right Column (5 Cards) */}
        <div className="spiderColumn rightColumn">
          {rightConcerns.map((concern) => {
            const isActive = activeId === concern.id;
            return (
              <div
                key={concern.id}
                ref={(el) => (nodeRefs.current[concern.id] = el)}
                className={`spiderNodeCard ${isActive ? 'nodeActiveSeq' : ''}`}
                onMouseEnter={() => {
                  setHoveredId(concern.id);
                  calculateLines();
                }}
                onMouseLeave={() => setHoveredId(null)}
              >
                <a
                  href={concern.externalLink || localizedPath(concern.link)}
                  target={concern.externalLink ? '_blank' : '_self'}
                  rel={concern.externalLink ? 'noopener noreferrer' : ''}
                  className="spiderNodeCardInner"
                >
                  <div className="nodeLogoWrapper">
                    <img src={getSrc(concern.logo)} alt={concern.name} className="nodeLogo" />
                  </div>
                  <div className="nodeInfo">
                    <span className="nodeCategory">{concern.category}</span>
                    <h3 className="nodeTitle">{concern.fullName || concern.name}</h3>
                  </div>
                  <div className="nodeArrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="spiderFooterCta">
        <Link href={localizedPath('/concerns')}>
          <div className="spiderCtaBtn">
            <span>{t('home.spiderConcerns.explore')}</span>
            <img src={getSrc(arrow)} alt="indicator" className="ctaArrow" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SpiderSisterConcerns;
