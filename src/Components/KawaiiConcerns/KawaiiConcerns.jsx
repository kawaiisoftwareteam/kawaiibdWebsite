import React from 'react'
import './KawaiiConcerns.css'
import { useLocale } from '../../i18n/LocaleContext'
import KCExplore from "../../Assets/KCExploreDirection.svg"
import hwch_1 from "../../Assets/ssw2.jpeg"
import hwch_2 from "../../Assets/foodfest2.jpg"
import hwch_2_1 from "../../Assets/tredmigcover.jpg"
import hwch_3 from "../../Assets/SaaSKats.png"
// import hwch_4 from "../../Assets/KCCardImg/kflCard.jpeg"
// import hwch_5 from "../../Assets/KCCardImg/kecCard.png"
import hwch_6 from "../../Assets/KCCardImg/kgjCard.png"
import hwch_6_1 from "../../Assets/bimanh.jpg"
import hwch_7 from "../../Assets/KCCardImg/kddlCard.png"
import hwch_8 from "../../Assets/KCCardImg/kielCard.png"
// import hwch_9 from "../../Assets/KCCardImg/kgcCard.png"
import sanajanaLogo from "../../Assets/Sister_Concerns/sanjana_logo.png"
import ajLogo from "../../Assets/Sister_Concerns/aj_logo.png"
import tredmig from "../../Assets/Sister_Concerns/tredmig.svg"
import kastlLogo from "../../Assets/Sister_Concerns/KATSL_Logo.png"
// import kflLogo from "../../Assets/Sister_Concerns/KF_Logo_Final_1_trans.png"
// import keclLogo from "../../Assets/Sister_Concerns/2_logo.png"
import kgjLogo from "../../Assets/Sister_Concerns/3_logo.png"
import bhLogo from "../../Assets/Sister_Concerns/bimanholidays.webp"
import kddlLogo from "../../Assets/Sister_Concerns/4_logo.png"
import kiecLogo from "../../Assets/Sister_Concerns/5_logo.png"
// import kgcLogo from "../../Assets/Sister_Concerns/7_logo.png"
import kgvlLogo from "../../Assets/Sister_Concerns/kgvl_logo.svg"
import kjchsLogo from "../../Assets/Sister_Concerns/Asset_2_2x-removebg-preview.png"
import jpBusinessCenter from "../../Assets/jpBusinessCenter.png"
import leftWhite from '../../Assets/top-left-corner-kg.svg'
import rightWhite from '../../Assets/KG_symbol_right_white.png'
import ButtonKg from '../ButtonKg/ButtonKg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const KawaiiConcerns = () => {
    const { t, localizedPath } = useLocale();

    const concernCards = [
        {
            cardId: 'sanjanaHr',
            backgroundColor: '#FEDFEA',
            concernName: 'M/S Sanjana International',
            cardImg: hwch_1,
            cardLogo: sanajanaLogo
        },
        {
            cardId: 'aj',
            backgroundColor: '#FBEACC',
            concernName: 'Achieve Japan',
            cardImg: hwch_2,
            cardLogo: ajLogo
        },
        {
            cardId: 'tredmig',
            backgroundColor: '#F7D8BA',
            concernName: 'Tredmig',
            cardImg: hwch_2_1,
            cardLogo: tredmig
        },
        {
            cardId: 'katsl',
            backgroundColor: '#D8FCDB',
            concernName: 'Kawaii Advanced Technology & Solution',
            cardImg: hwch_3,
            cardLogo: kastlLogo
        },
        {
            cardId: 'kgj',
            backgroundColor: '#DCC1F8',
            concernName: 'Kawaii Group Japan',
            cardImg: hwch_6,
            cardLogo: kgjLogo
        },
        {
            cardId: 'bh',
            backgroundColor: '#ACDDDE',
            concernName: 'Biman Holidays',
            cardImg: hwch_6_1,
            cardLogo: bhLogo
        },
        {
            cardId: 'kddl',
            backgroundColor: '#FEDFEA',
            concernName: 'Japan Kawaii Design & Development',
            cardImg: hwch_7,
            cardLogo: kddlLogo
        },
        {
            cardId: 'kiec',
            backgroundColor: '#D8FCDB',
            concernName: 'Kawaii International Education Center',
            cardImg: hwch_8,
            cardLogo: kiecLogo
        },
        {
            cardId: 'kgvl',
            backgroundColor: '#FFE9E9',
            concernName: 'Kawaii Global Ventures Limited',
            cardImg: jpBusinessCenter,
            cardLogo: kgvlLogo
        },
        {
            cardId: 'kjchs',
            backgroundColor: '#FFE0E0',
            concernName: 'Kawaii Japan Career & HR Solutions',
            cardImg: hwch_1,
            cardLogo: kjchsLogo
        }
    ];

    const detailSections = [
        { id: 'sanjanaHr', bg: hwch_1, overlay: 'rgba(254, 223, 234, 0.8)', alignRight: true, externalLink: 'https://sanjanahr.com/' },
        { id: 'aj', bg: hwch_2, overlay: 'rgba(251, 234, 204, 0.8)', alignRight: false, externalLink: 'https://achievejapanssw.com/' },
        { id: 'katsl', bg: hwch_3, overlay: 'rgba(216, 252, 219, 0.9)', alignRight: true, externalLink: 'https://katsl.vercel.app/' },
        { id: 'kgvl', bg: jpBusinessCenter, overlay: 'rgba(255, 233, 233, 0.85)', alignRight: true, internalPath: '/kawaii-global-ventures' },
        { id: 'kjchs', bg: hwch_1, overlay: 'rgba(255, 224, 224, 0.85)', alignRight: false, internalPath: '/kawaii-japan-career-hr' },
    ];

    const concernNames = {
        sanjanaHr: 'M/S Sanjana International',
        aj: 'Achieve Japan',
        katsl: 'Kawaii Advanced Technology & Solution Ltd.',
        kgvl: 'Kawaii Global Ventures Limited',
        kjchs: 'Kawaii Japan Career & HR Solutions',
    };

    return (
        <div>
            <div className='KawaiiConcernsMain'>
                <div className='KCHeadBox'>
                    <div className='KCHeadTitle'>{t('concernsPage.title')}</div>
                    <div className='KDHeadContent'>
                        {t('concernsPage.intro')} <span style={{ fontWeight: '700' }}>{t('concernsPage.introBold')}</span> {t('concernsPage.introRest')}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {concernCards.map((card) => (
                        <div
                            key={card.cardId}
                            className="KCCardBox"
                            onClick={() => document.getElementById(card.cardId).scrollIntoView({ behavior: 'smooth' })}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className='KCRect' style={{ background: card.backgroundColor }}></div>
                            <div className='KCCardContentBox'>
                                <div className='KCCardContentHeader'>{card.concernName}</div>
                                <div className='KCCardContentType'>{t(`concernsPage.cards.${card.cardId}.type`)}</div>
                            </div>
                            <div className='KCCardDescriptionBox'>
                                <div className='KCCardDescription'>
                                    {t(`concernsPage.cards.${card.cardId}.desc`)}
                                </div>
                            </div>
                            <div className='KCExploreDiv'>
                                <div className='KCExploreBtn'>
                                    <div className='KCExploreContent'>{t('concernsPage.exploreNow')}</div>
                                    <img src={KCExplore} alt="KCExplore" />
                                </div>
                            </div>
                            <div className='KCImageBox'>
                                <img src={card.cardImg} alt={`${card.concernName} background`} className='KCCardBg' />
                                <div className="KCimage-overlay"></div>
                                <div className='KCLogoContainer'>
                                    <img src={card.cardLogo} alt={`${card.concernName} logo`} className='KCCardLogo' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col'>
                {detailSections.map((section) => (
                    <div
                        key={section.id}
                        id={section.id}
                        className='concern_detail_main_top'
                        style={{ backgroundImage: `url(${section.bg})` }}
                    >
                        <div
                            className="absolute inset-0 z-[1] pointer-events-none"
                            style={{ backgroundColor: section.overlay }}
                        ></div>
                        <img src={leftWhite} alt="concernLeftWhite" className='concernLeftWhite' />
                        <div
                            className="absolute z-[3] px-[16px] md:px-[240px] gap-[24px] md:gap-6 flex flex-col justify-between"
                            style={{ height: '100%' }}
                        >
                            <div className='concertTitleText'>
                                {t(`concernsPage.details.${section.id}.sectionTitle`)}
                            </div>
                            <div className={`flex flex-col items-start w-full md:w-1/2 gap-[24px] md:gap-6 rounded-t-[30px] p-9 bg-white${section.alignRight ? ' ml-auto md:ml-auto' : ''}`}>
                                <div>
                                    <div className='concernBoxTitle'>{concernNames[section.id]}</div>
                                    <div className='concernBoxDes'>{t(`concernsPage.details.${section.id}.subtitle`)}</div>
                                </div>
                                <div className='concernBoxDetailText'>
                                    {t(`concernsPage.details.${section.id}.body`)}
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    {(t(`concernsPage.details.${section.id}.bullets`) || []).map((bullet, i) => (
                                        <div key={i} className='flex gap-[10px] items-center'>
                                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d" }} />
                                            <div>{bullet}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-end ml-auto'>
                                    {section.externalLink ? (
                                        <a href={section.externalLink} className='inline-flex' target='_blank' rel="noreferrer">
                                            <ButtonKg text={t(`concernsPage.details.${section.id}.cta`)} />
                                        </a>
                                    ) : (
                                        <a href={localizedPath(section.internalPath)} className='inline-flex'>
                                            <ButtonKg text={t(`concernsPage.details.${section.id}.cta`)} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <img src={rightWhite} alt="concernRightWhite" className='concernRightWhite' />
                    </div>
                ))}
                {/* <div id="kfl">
                    Kawaii Fashion
                </div>
                <div id="kecl">
                    Kawaii Engineering & Construction
                </div>
                <div id="kgj">
                    Kawaii group japan
                </div>
                <div id="kddl">
                    Kawaii Design & Development
                </div>
                <div id="kiec">
                    Kawaii international education
                </div>
                <div id="kgc">
                    Kawaii Group Canada
                </div> */}
            </div>
        </div>
    )
}

export default KawaiiConcerns
