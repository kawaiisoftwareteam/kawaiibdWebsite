'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './ServicesShowcase.css';
import { useLocale } from '../../i18n/LocaleContext';

import apparelImg from '../../Assets/services/Apparel Manufacturing.jpg';
import textileImg from '../../Assets/services/Textile Manufacturing.jpg';
import tradingImg from '../../Assets/services/ International Trading.jpg';
import techImg from '../../Assets/services/Technology Solutions.jpg';
import recruitmentImg from '../../Assets/services/International Recruitment.jpg';
import hrImg from '../../Assets/services/Human Resource Solutions.jpg';
import overseasImg from '../../Assets/services/Overseas Employment Support.jpg';
import japaneseImg from '../../Assets/services/Japanese Language Education.jpg';
import educationImg from '../../Assets/services/International Education Services.jpg';
import careerImg from '../../Assets/services/Career Counseling.jpg';
import skillImg from '../../Assets/services/Skill Development Programs.jpg';
import travelImg from '../../Assets/services/Travel and Tourism Services.jpg';
import visaImg from '../../Assets/services/Visa Assistance.jpg';
import globalBusinessImg from '../../Assets/services/global-business.jpg';
import partnershipImg from '../../Assets/services/Strategic Business Partnerships.jpg';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const AUTO_MS = 4500;

const servicesData = [
  {
    id: 'hr',
    category: 'Domestic Recruitment',
    title: 'Domestic recruitment',
    image: hrImg,
    desc: 'We provide optimal talent matching, primarily in IT and specialized fields, while staying close to the needs of each company.',
  },
  {
    id: 'tech',
    category: 'IT Development',
    title: 'IT development',
    image: techImg,
    desc: 'We support efficiency improvements and business growth through system development tailored to each company’s challenges and offshore infrastructure.',
  },
  {
    id: 'apparel',
    category: 'Apparel',
    title: 'Apparel',
    image: apparelImg,
    desc: 'With high-quality production lines and flexible capabilities, we provide global apparel manufacturing services, including OEM and ODM.',
  },
  {
    id: 'textile',
    category: 'Textile',
    title: 'Textile Manufacturing',
    image: textileImg,
    desc: 'Advanced fabric production, premium material sourcing, and sustainable textile processing tailored to global industry standards.',
  },
  {
    id: 'trading',
    category: 'Trading',
    title: 'International Trading',
    image: tradingImg,
    desc: 'Seamless cross-border commerce, import-export facilitation, and strategic global supply chain operations.',
  },
  {
    id: 'recruitment',
    category: 'Overseas Recruitment',
    title: 'Overseas recruitment',
    image: recruitmentImg,
    desc: 'Connecting highly skilled international talent with leading global companies through transparent, reliable recruitment pathways.',
  },
  {
    id: 'overseas',
    category: 'Employment Support',
    title: 'Overseas Employment Support',
    image: overseasImg,
    desc: 'End-to-end relocation guidance, documentation, orientation, and ongoing welfare support for overseas placements.',
  },
  {
    id: 'japanese',
    category: 'Language Education',
    title: 'Japanese Language Education',
    image: japaneseImg,
    desc: 'Specialized JLPT and NAT-TEST preparatory courses, Japanese business manners, and intensive language training programs.',
  },
  {
    id: 'education',
    category: 'Education Services',
    title: 'International Education Services',
    image: educationImg,
    desc: 'Guidance for higher education abroad, student exchange assistance, university admissions, and international academic pathways.',
  },
  {
    id: 'career',
    category: 'Counseling',
    title: 'Career Counseling',
    image: careerImg,
    desc: 'Personalized career roadmap planning, skill assessment, and professional mentoring for aspiring global professionals.',
  },
  {
    id: 'skill',
    category: 'Skill Development',
    title: 'Skill Development Programs',
    image: skillImg,
    desc: 'Practical technical and vocational training modules designed to meet evolving international labor market demands.',
  },
  {
    id: 'travel',
    category: 'Tourism Services',
    title: 'Travel and Tourism Services',
    image: travelImg,
    desc: 'Complete corporate travel management, customized tour packages, flight ticketing, and hospitality arrangements.',
  },
  {
    id: 'visa',
    category: 'Visa Support',
    title: 'Visa Assistance',
    image: visaImg,
    desc: 'Expert visa application handling, legal documentation guidance, and fast-track immigration processing support.',
  },
  {
    id: 'global-business',
    category: 'Business Development',
    title: 'Global Business Development',
    image: globalBusinessImg,
    desc: 'Strategic market entry consultancy, cross-border venture creation, and international commercial growth solutions.',
  },
  {
    id: 'partnerships',
    category: 'Partnerships',
    title: 'Strategic Business Partnerships',
    image: partnershipImg,
    desc: 'Building enduring corporate joint ventures, strategic technology alliances, and bilateral business investment networks.',
  },
];

const ArrowIcon = ({ direction = 'right' }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    {direction === 'left' ? (
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);

const ServicesShowcase = () => {
  const { localizedPath } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, servicesData.length - cardsToShow);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    if (paused || maxIndex === 0) return undefined;
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, AUTO_MS);
    return () => window.clearInterval(timerRef.current);
  }, [paused, maxIndex]);

  const activeBg = servicesData[currentIndex]?.image || apparelImg;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="bizIntro">
      {/* Main background — changes with carousel */}
      <div className="bizIntro__curve" key={servicesData[currentIndex]?.id}>
        <img src={getSrc(activeBg)} alt="" className="bizIntro__curveImg" />
      </div>

      <div className="bizIntro__inner">
        <header className="bizIntro__header">
          <h2 className="bizIntro__title">
            <span>OUR</span>
            <span>BUSINESS</span>
          </h2>
        </header>

        <div
          className="bizIntro__panel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="bizIntro__nav bizIntro__nav--prev"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="bizIntro__viewport">
            <div
              className="bizIntro__track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {servicesData.map((item) => (
                <article
                  key={item.id}
                  className="bizIntro__card"
                  style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                >
                  <div className="bizIntro__cardBody">
                    <div className="bizIntro__media">
                      <img src={getSrc(item.image)} alt={item.title} />
                    </div>

                    <div className="bizIntro__meta">
                      <p className="bizIntro__category">{item.category}</p>
                      <div className="bizIntro__titleRow">
                        <h3 className="bizIntro__cardTitle">{item.title}</h3>
                        <div className="bizIntro__action">
                          <span className="bizIntro__line" />
                          <Link
                            href={localizedPath('/services')}
                            className="bizIntro__arrow"
                            aria-label={`Explore ${item.title}`}
                          >
                            <ArrowIcon direction="right" />
                          </Link>
                        </div>
                      </div>
                      <p className="bizIntro__desc">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="bizIntro__nav bizIntro__nav--next"
            onClick={nextSlide}
            aria-label="Next"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
