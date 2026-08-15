'use client';

import React, { useState, useEffect } from 'react';
import './KawaiiConcerns.css';
import { useLocale } from '../../i18n/LocaleContext';
import hwch_1 from "../../Assets/ssw2.webp";
import hwch_2 from "../../Assets/foodfest2.webp";
import hwch_2_1 from "../../Assets/tredmigcover.webp";
import hwch_3 from "../../Assets/SaaSKats.webp";
import hwch_6 from "../../Assets/KCCardImg/kgjCard.webp";
import hwch_6_1 from "../../Assets/bimanh.webp";
import hwch_7 from "../../Assets/KCCardImg/kddlCard.webp";
import hwch_8 from "../../Assets/KCCardImg/kielCard.webp";
import sanajanaLogo from "../../Assets/Sister_Concerns/sanjana_logo.webp";
import ajLogo from "../../Assets/Sister_Concerns/aj_logo.webp";
import tredmig from "../../Assets/Sister_Concerns/tredmig.svg";
import kastlLogo from "../../Assets/Sister_Concerns/KATSL_Logo.webp";
import kgjLogo from "../../Assets/Sister_Concerns/3_logo.webp";
import bhLogo from "../../Assets/Sister_Concerns/bimanholidays.webp";
import kddlLogo from "../../Assets/Sister_Concerns/4_logo.webp";
import kiecLogo from "../../Assets/Sister_Concerns/5_logo.webp";
import kgvlLogo from "../../Assets/Sister_Concerns/kgvl_logo.svg";
import kjchsLogo from "../../Assets/Sister_Concerns/Asset_2_2x-removebg-preview.webp";
import jpBusinessCenter from "../../Assets/jpBusinessCenter.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { 
    faArrowUpRightFromSquare, 
    faXmark, 
    faGlobe, 
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { resolveImage } from '../../lib/image';


const KawaiiConcerns = () => {
    const { t, localizedPath } = useLocale();
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCompany, setSelectedCompany] = useState(null);

    const categories = [
        { id: 'all', label: 'All Companies' },
        { id: 'hr', label: 'Recruitment & HR' },
        { id: 'tech', label: 'Technology & Software' },
        { id: 'trade', label: 'Trade & Manufacturing' },
        { id: 'edu', label: 'Education & Travel' },
        { id: 'ventures', label: 'Global Ventures' }
    ];

    const concernCards = [
        {
            cardId: 'sanjanaHr',
            category: 'hr',
            categoryLabel: 'Recruitment & HR',
            location: 'Bangladesh & Japan',
            flag: '🇧🇩 🇯🇵',
            concernName: 'M/S Sanjana International',
            cardImg: hwch_1,
            cardLogo: sanajanaLogo,
            externalLink: 'https://sanjanahr.com/'
        },
        {
            cardId: 'aj',
            category: 'edu',
            categoryLabel: 'Education & Training',
            location: 'Japan & Bangladesh',
            flag: '🇯🇵 🇧🇩',
            concernName: 'Achieve Japan',
            cardImg: hwch_2,
            cardLogo: ajLogo,
            externalLink: 'https://achievejapanssw.com/'
        },
        {
            cardId: 'tredmig',
            category: 'trade',
            categoryLabel: 'Trade & Consultancy',
            location: 'Global Operations',
            flag: '🌐',
            concernName: 'Tredmig',
            cardImg: hwch_2_1,
            cardLogo: tredmig,
            externalLink: 'https://tredmig.com/'
        },
        {
            cardId: 'katsl',
            category: 'tech',
            categoryLabel: 'Technology & Software',
            location: 'Bangladesh & Japan',
            flag: '🇧🇩 🇯🇵',
            concernName: 'Kawaii Advanced Technology & Solution',
            cardImg: hwch_3,
            cardLogo: kastlLogo,
            internalPath: '/concerns',
        },
        {
            cardId: 'kgj',
            category: 'ventures',
            categoryLabel: 'Global HQ & Operations',
            location: 'Tokyo, Japan',
            flag: '🇯🇵',
            concernName: 'Kawaii Group Japan',
            cardImg: hwch_6,
            cardLogo: kgjLogo,
            externalLink: 'https://kawaiigroupjapan.jp/',
            featured: true
        },
        {
            cardId: 'bh',
            category: 'edu',
            categoryLabel: 'Travel & Aviation',
            location: 'Global Network',
            flag: '✈️ 🌐',
            concernName: 'Biman Holidays',
            cardImg: hwch_6_1,
            cardLogo: bhLogo,
            externalLink: 'https://bimanholidays.com/'
        },
        {
            cardId: 'kddl',
            category: 'trade',
            categoryLabel: 'Design & Manufacturing',
            location: 'Japan & Bangladesh',
            flag: '🇯🇵 🇧🇩',
            concernName: 'Japan Kawaii Design & Development',
            cardImg: hwch_7,
            cardLogo: kddlLogo
        },
        {
            cardId: 'kiec',
            category: 'edu',
            categoryLabel: 'Higher Education Consultancy',
            location: 'Global / Europe / Australia',
            flag: '🎓 🌐',
            concernName: 'Kawaii International Education Center',
            cardImg: hwch_8,
            cardLogo: kiecLogo,
            externalLink: 'https://kawaiieducationbd.com/'
        },
        {
            cardId: 'kgvl',
            category: 'ventures',
            categoryLabel: 'Joint Venture & Investment',
            location: 'Japan & Bangladesh',
            flag: '🇯🇵 🇧🇩',
            concernName: 'Kawaii Global Ventures Limited',
            cardImg: jpBusinessCenter,
            cardLogo: kgvlLogo,
            internalPath: '/kawaii-global-ventures'
        },
        {
            cardId: 'kjchs',
            category: 'hr',
            categoryLabel: 'Career Placement & HR',
            location: 'Japan & Bangladesh',
            flag: '🇯🇵 🇧🇩',
            concernName: 'Kawaii Japan Career & HR Solutions',
            cardImg: hwch_1,
            cardLogo: kjchsLogo,
            internalPath: '/kawaii-japan-career-hr'
        }
    ];

    const filteredCards = activeTab === 'all' 
        ? concernCards 
        : concernCards.filter(c => c.category === activeTab);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedCompany(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const openCompanyModal = (card) => {
        setSelectedCompany(card);
    };

    return (
        <div className="kc-main-container">
            {/* Ambient Background Gradient Elements */}
            <div className="kc-bg-blob kc-blob-1"></div>
            <div className="kc-bg-blob kc-blob-2"></div>

            {/* Header Hero Section */}
            <header className="kc-hero-section">
                <div className="kc-eyebrow-wrapper">
                    <span className="kc-eyebrow-badge">
                        <span className="kc-pulse-dot"></span>
                        {t('nav.sisterConcerns') || 'Sister Concerns'}
                    </span>
                </div>
                
                <h1 className="kc-hero-title">
                    <span className="kc-title-accent">Kawaii Group</span> Family At a Glance
                </h1>
                
                <p className="kc-hero-subtitle">
                    {t('concernsPage.intro') || "At Kawaii Group, we've built a diverse family of specialized companies united by a shared vision:"}
                    <strong className="kc-intro-bold"> {t('concernsPage.introBold') || "to bridge gaps between cultures and deliver world-class solutions."}</strong>
                    {" "}{t('concernsPage.introRest') || "Our sister concerns span recruitment, tech, education, trade, and global business ventures."}
                </p>

                {/* Interactive Filter Tabs */}
                <div className="kc-filter-bar">
                    {categories.map((cat) => {
                        const count = cat.id === 'all' 
                            ? concernCards.length 
                            : concernCards.filter(c => c.category === cat.id).length;
                        
                        return (
                            <button
                                key={cat.id}
                                type="button"
                                className={`kc-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                <span>{cat.label}</span>
                                <span className="kc-tab-count">{count}</span>
                            </button>
                        );
                    })}
                </div>
            </header>

            {/* Premium Card Grid */}
            <section className="kc-grid-section" aria-labelledby="kc-companies-heading">
                <h2 id="kc-companies-heading" className="sr-only">
                    {t('nav.sisterConcerns') || 'Sister Concerns'}
                </h2>
                <div className="kc-cards-grid">
                    {filteredCards.map((card) => {
                        const typeText = t(`concernsPage.cards.${card.cardId}.type`) !== `concernsPage.cards.${card.cardId}.type`
                            ? t(`concernsPage.cards.${card.cardId}.type`)
                            : card.categoryLabel;

                        const descText = t(`concernsPage.cards.${card.cardId}.desc`) !== `concernsPage.cards.${card.cardId}.desc`
                            ? t(`concernsPage.cards.${card.cardId}.desc`)
                            : '';

                        return (
                            <article
                                key={card.cardId}
                                className="kc-company-card"
                                onClick={() => openCompanyModal(card)}
                            >
                                <div className="kc-card-top-bar">
                                    <span className="kc-badge-category">
                                        {card.categoryLabel}
                                    </span>
                                    <span className="kc-badge-flag">
                                        {card.flag}
                                    </span>
                                </div>

                                <div className="kc-logo-wrapper">
                                    <div className="kc-logo-box">
                                        <img loading="lazy" decoding="async" 
                                            {...resolveImage(card.cardLogo)}
                                            alt={`${card.concernName} logo`} 
                                            className="kc-logo-img" 
                                        />
                                    </div>
                                    <div className="kc-image-preview">
                                        <img loading="lazy" decoding="async" 
                                            {...resolveImage(card.cardImg)}
                                            alt={card.concernName} 
                                            className="kc-bg-thumb" 
                                        />
                                        <div className="kc-thumb-overlay"></div>
                                    </div>
                                </div>

                                <div className="kc-card-body">
                                    <h3 className="kc-card-title">{card.concernName}</h3>
                                    <div className="kc-card-type">{typeText}</div>
                                    <p className="kc-card-desc">{descText}</p>
                                </div>

                                <div className="kc-card-footer">
                                    <button 
                                        type="button" 
                                        className="kc-card-cta-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openCompanyModal(card);
                                        }}
                                    >
                                        <span>{t('concernsPage.exploreNow') || 'Explore Concern'}</span>
                                        <FontAwesomeIcon icon={faChevronRight} className="kc-arrow-icon" />
                                    </button>

                                    {card.internalPath ? (
                                        <a 
                                            href={localizedPath(card.internalPath)} 
                                            className="kc-ext-link-btn"
                                            title="View Page"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </a>
                                    ) : null}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Quick Overview Modal */}
            {selectedCompany && (
                <div 
                    className="kc-modal-overlay" 
                    onClick={() => setSelectedCompany(null)}
                >
                    <div 
                        className="kc-modal-container" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="kc-modal-close" 
                            onClick={() => setSelectedCompany(null)}
                            aria-label="Close modal"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <div className="kc-modal-banner">
                            <img loading="lazy" decoding="async" 
                                {...resolveImage(selectedCompany.cardImg)} 
                                alt={selectedCompany.concernName} 
                                className="kc-modal-banner-img" 
                            />
                            <div className="kc-modal-banner-overlay"></div>
                            <div className="kc-modal-logo-float">
                                <img loading="lazy" decoding="async" 
                                    {...resolveImage(selectedCompany.cardLogo)} 
                                    alt={`${selectedCompany.concernName} logo`} 
                                />
                            </div>
                        </div>

                        <div className="kc-modal-content">
                            <div className="kc-modal-tags">
                                <span className="kc-badge-category">{selectedCompany.categoryLabel}</span>
                                <span className="kc-modal-location"><FontAwesomeIcon icon={faGlobe} /> {selectedCompany.location}</span>
                            </div>

                            <h3 className="kc-modal-title">{selectedCompany.concernName}</h3>
                            <p className="kc-modal-type">{t(`concernsPage.cards.${selectedCompany.cardId}.type`)}</p>

                            <p className="kc-modal-desc">
                                {t(`concernsPage.details.${selectedCompany.cardId}.body`) !== `concernsPage.details.${selectedCompany.cardId}.body`
                                    ? t(`concernsPage.details.${selectedCompany.cardId}.body`)
                                    : t(`concernsPage.cards.${selectedCompany.cardId}.desc`)}
                            </p>

                            {t(`concernsPage.details.${selectedCompany.cardId}.bullets`) && (
                                <div className="kc-modal-highlights">
                                    <h5 className="kc-modal-h5">Key Services & Highlights</h5>
                                    <ul className="kc-bullets-list">
                                        {t(`concernsPage.details.${selectedCompany.cardId}.bullets`).map((b, idx) => (
                                            <li key={idx} className="kc-bullet-item">
                                                <FontAwesomeIcon icon={faCircleCheck} className="kc-check-icon" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="kc-modal-actions">
                                {selectedCompany.externalLink ? (
                                    <a 
                                        href={selectedCompany.externalLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer nofollow"
                                        className="kc-btn-primary"
                                    >
                                        <span>Visit Website</span>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </a>
                                ) : selectedCompany.internalPath ? (
                                    <a 
                                        href={localizedPath(selectedCompany.internalPath)} 
                                        className="kc-btn-primary"
                                    >
                                        <span>Explore Details</span>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </a>
                                ) : (
                                    <button 
                                        type="button" 
                                        className="kc-btn-secondary"
                                        onClick={() => setSelectedCompany(null)}
                                    >
                                        Close
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KawaiiConcerns;

