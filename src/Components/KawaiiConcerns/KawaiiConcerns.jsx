import React from 'react'
import './KawaiiConcerns.css'
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
import jpBusinessCenter from "../../Assets/jpBusinessCenter.png"
import leftWhite from '../../Assets/top-left-corner-kg.svg'
import rightWhite from '../../Assets/KG_symbol_right_white.png'
import ButtonKg from '../ButtonKg/ButtonKg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const concernCards = [
    {
        cardId: 'sanjanaHr',
        backgroundColor: '#FEDFEA',
        concernName: 'M/S Sanjana International',
        concernContent: 'Dedicated recruiting agency.',
        contentDescription: 'We specialize in connecting skilled Bangladeshi professionals with opportunities in Japan and beyond.',
        cardImg: hwch_1,
        cardLogo: sanajanaLogo
    },
    {
        cardId: 'aj',
        backgroundColor: '#FBEACC',
        concernName: 'Achieve Japan',
        concernContent: 'Japanese language learning center.',
        contentDescription: 'We provide top-notch language and cultural training, preparing individuals for success in Japanese business environments.',
        cardImg: hwch_2,
        cardLogo: ajLogo
    },
    {
        cardId: 'tredmig',
        backgroundColor: '#F7D8BA',
        concernName: 'Tredmig',
        concernContent: 'Professional consultancy firm.',
        contentDescription: 'Tredmig ensures that all applicants have a smooth transition into the global job market in the most cost-effective manner.',
        cardImg: hwch_2_1,
        cardLogo: tredmig
    },
    {
        cardId: 'katsl',
        backgroundColor: '#D8FCDB',
        concernName: 'Kawaii Advanced Technology & Solution',
        concernContent: 'SaaS (Software as a Service) solution-based software company.',
        contentDescription: 'We develop advanced software solutions to meet the evolving needs of businesses in both Bangladesh and Japan.',
        cardImg: hwch_3,
        cardLogo: kastlLogo
    },
    // {
    //     cardId: 'kfl',
    //     backgroundColor: '#E1F8DC',
    //     concernName: 'Kawaii Fashion',
    //     concernContent: 'Fashion sourcing company. ',
    //     contentDescription: 'We provide comprehensive services including fashion brand establishment in Japan, OEM, ODM, wholesale, and e-commerce solutions, all tailored to meet the exact requirements of the Japanese market.',
    //     cardImg: hwch_4,
    //     cardLogo: kflLogo
    // },
    // {
    //     cardId: 'kecl',
    //     backgroundColor: '#ACCAFF',
    //     concernName: 'Kawaii Engineering & Construction',
    //     concernContent: 'Construction focused company',
    //     contentDescription: 'This division brings Japanese construction standards to Bangladesh. We undertake projects with a focus on quality, efficiency, and innovation.',
    //     cardImg: hwch_5,
    //     cardLogo: keclLogo
    // },
    {
        cardId: 'kgj',
        backgroundColor: '#DCC1F8',
        concernName: 'Kawaii Group Japan',
        concernContent: 'Our Japanese headquarter.',
        contentDescription: 'It serves as a vital link between Bangladesh and Japan. It facilitates smooth business operations and cultural exchange.',
        cardImg: hwch_6,
        cardLogo: kgjLogo
    },
    {
        cardId: 'bh',
        backgroundColor: '#ACDDDE',
        concernName: 'Biman Holidays',
        concernContent: 'Premier online travel aggregator (OTA).',
        contentDescription: 'Get the best prices on Flights, Hotels, Transfers & Activities Worldwide',
        cardImg: hwch_6_1,
        cardLogo: bhLogo
    },
    {
        cardId: 'kddl',
        backgroundColor: '#FEDFEA',
        concernName: 'Japan Kawaii Design & Development',
        concernContent: 'Business Design & Development focused',
        contentDescription: 'This sister concern combines Japanese design principles with global trends. We offer innovative design solutions for various industries.',
        cardImg: hwch_7,
        cardLogo: kddlLogo
    },
    {
        cardId: 'kiec',
        backgroundColor: '#D8FCDB',
        concernName: 'Kawaii International Education Center',
        concernContent: 'Higher Studies and International Education consultancy agency.',
        contentDescription: 'We assist students in pursuing international education opportunities, with a focus on countries like Europe, and Australia.',
        cardImg: hwch_8,
        cardLogo: kiecLogo
    },
    // {
    //     cardId: 'kgc',
    //     backgroundColor: '#FBEACC',
    //     concernName: 'Kawaii Group Canada',
    //     concernContent: 'Our Canada focused company',
    //     contentDescription: 'This branch explores business opportunities and partnerships in the Canadian market.',
    //     cardImg: hwch_9,
    //     cardLogo: kgcLogo
    // },
    {
        cardId: 'kgvl',
        backgroundColor: '#FFE9E9',
        concernName: 'Kawaii Global Ventures Limited',
        concernContent: 'Japan–Bangladesh joint venture for business & collaboration.',
        contentDescription: 'Promoting partnerships, investment, HR development, and digital transformation across Japan and Bangladesh.',
        cardImg: jpBusinessCenter,
        cardLogo: kgvlLogo
    }
];

const KawaiiConcerns = () => {
    return (
        <div>
            <div className='KawaiiConcernsMain'>
                <div className='KCHeadBox'>
                    <div className='KCHeadTitle'>Kawaii Group Family At a Glance</div>
                    <div className='KDHeadContent'>
                        At Kawaii Group, we're more than just a company - we're a family of diverse businesses united by a common goal: <span style={{ fontWeight: '700' }}>to bridge gaps between cultures and create value across multiple sectors.</span> Our sister concerns span recruiting, education, technology, fashion, and more, each playing a crucial role in our mission to connect Bangladesh with Japan and the world.
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
                                <div className='KCCardContentType'>{card.concernContent}</div>
                            </div>
                            <div className='KCCardDescriptionBox'>
                                <div className='KCCardDescription'>
                                    {card.contentDescription}
                                </div>
                            </div>
                            <div className='KCExploreDiv'>
                                <div className='KCExploreBtn'>
                                    <div className='KCExploreContent'>Explore Now</div>
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
                <div id="sanjanaHr" className='concern_detail_main_top' style={{ backgroundImage: `url(${hwch_1})` }}>
                    <div
                        className="absolute inset-0 z-[1] pointer-events-none"
                        style={{
                            backgroundColor: 'rgba(254, 223, 234, 0.8)',
                        }}
                    ></div>
                    <img src={leftWhite} alt="concernLeftWhite" className='concernLeftWhite' />
                    <div className="absolute z-[3] px-[16px] md:px-[240px] gap-[24px] md:gap-6 flex flex-col justify-between"
                        style={{ height: '100%' }}>
                        <div className='concertTitleText'>
                            Recruitment & Global Employment
                        </div>
                        <div className="flex flex-col items-start w-full md:w-1/2 gap-[24px] md:gap-6 rounded-t-[30px] p-9 bg-white ml-auto md:ml-auto">
                            <div>
                                <div className='concernBoxTitle'>M/S Sanjana International</div>
                                <div className='concernBoxDes'>Connecting Talent with Global Opportunities</div>
                            </div>
                            <div className='concernBoxDetailText'>
                                We are a leading recruitment agency specializing in placing skilled Bangladeshi professionals in high-demand markets, particularly Japan. With a proven track record, we ensure that every candidate is fully prepared for their international career journey.
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Expertise in Japanese employment markets</div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Training and skill development for overseas jobs</div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Comprehensive visa and relocation support</div>
                                </div>
                            </div>
                            <div className='flex justify-end ml-auto'>
                                <a href="https://sanjanahr.com/" className='inline-flex' target='_blank' rel="noreferrer">
                                    <ButtonKg text="Learn More" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={rightWhite} alt="concernRightWhite" className='concernRightWhite' />
                </div>
                {/* achieve japan  */}
                <div id="aj" className='concern_detail_main_top' style={{ backgroundImage: `url(${hwch_2})` }}>
                    <div
                        className="absolute inset-0 z-[1] pointer-events-none"
                        style={{
                            backgroundColor: 'rgba(251, 234, 204, 0.8)',
                        }}
                    ></div>
                    <img src={leftWhite} alt="concernLeftWhite" className='concernLeftWhite' />
                    <div className="absolute z-[3] px-[16px] md:px-[240px] gap-[24px] md:gap-6 flex flex-col justify-between"
                        style={{ height: '100%' }}>
                        <div className='concertTitleText'>
                            Language & Cultural Training
                        </div>
                        <div className="flex flex-col items-start w-full md:w-1/2 gap-[24px] md:gap-6 rounded-t-[30px] p-9 bg-white">
                            <div>
                                <div className='concernBoxTitle'>Achieve Japan</div>
                                <div className='concernBoxDes'>Prepare for Success in Japan with Expert Language & Cultural Training</div>
                            </div>
                            <div className='concernBoxDetailText'>
                                Achieve Japan provides industry-leading Japanese language education, preparing individuals for work, study, or migration. We ensure that you not only learn the language but also gain a deep understanding of Japanese culture, setting you up for success in Japan’s professional environments.
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>JLPT-certified courses</div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Cultural orientation and etiquette training</div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Native and local Japanese instructors</div>
                                </div>
                            </div>
                            <div className='flex justify-end ml-auto'>
                                <a href="https://achievejapanssw.com/" className='inline-flex' target='_blank' rel="noreferrer">
                                    <ButtonKg text="Join Our Classes" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={rightWhite} alt="concernRightWhite" className='concernRightWhite' />
                </div>

                {/* Katsl  */}
                <div id="katsl" className='concern_detail_main_top' style={{ backgroundImage: `url(${hwch_3})` }}>
                    <div
                        className="absolute inset-0 z-[1] pointer-events-none"
                        style={{
                            backgroundColor: 'rgba(216, 252, 219, 0.9)',
                        }}
                    ></div>
                    <img src={leftWhite} alt="concernLeftWhite" className='concernLeftWhite' />
                    <div className="absolute z-[3] px-[16px] md:px-[240px] gap-[24px] md:gap-6 flex flex-col justify-between"
                        style={{ height: '100%' }}>
                        <div className='concertTitleText'>
                            Digital Transformation Solutions
                        </div>
                        <div className="flex flex-col items-start w-full md:w-1/2 gap-[24px] md:gap-6 rounded-t-[30px] p-9 bg-white ml-auto md:ml-auto">
                            <div>
                                <div className='concernBoxTitle'>Kawaii Advanced Technology & Solution Ltd.</div>
                                <div className='concernBoxDes'>Innovating Business with Advanced Software Solutions</div>
                            </div>
                            <div className='concernBoxDetailText'>
                                Kawaii Advanced Technology & Solution Ltd. offers custom SaaS software that helps businesses across Bangladesh and Japan optimize their operations. Whether it's enterprise resource planning or business automation, our tailored solutions meet the evolving needs of modern businesses.
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Offshore/Augmentation Development Team</div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Custom SaaS software for businesses</div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>IT Engineers Training & Job Placement in Japan</div>
                                </div>
                            </div>
                            <div className='flex justify-end ml-auto'>
                                <a href="https://kawaiitechsol.com/" className='inline-flex' target='_blank' rel="noreferrer">
                                    <ButtonKg text="Discover Our Solutions" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={rightWhite} alt="concernRightWhite" className='concernRightWhite' />
                </div>

                {/* Kawaii Global Ventures Limited detail section */}
                <div id="kgvl" className='concern_detail_main_top' style={{ backgroundImage: `url(${jpBusinessCenter})` }}>
                    <div
                        className="absolute inset-0 z-[1] pointer-events-none"
                        style={{
                            backgroundColor: 'rgba(255, 233, 233, 0.85)',
                        }}
                    ></div>
                    <img src={leftWhite} alt="concernLeftWhite" className='concernLeftWhite' />
                    <div className="absolute z-[3] px-[16px] md:px-[240px] gap-[24px] md:gap-6 flex flex-col justify-between"
                        style={{ height: '100%' }}>
                        <div className='concertTitleText'>
                            Business & International Collaboration
                        </div>
                        <div className="flex flex-col items-start w-full md:w-1/2 gap-[24px] md:gap-6 rounded-t-[30px] p-9 bg-white ml-auto md:ml-auto">
                            <div>
                                <div className='concernBoxTitle'>Kawaii Global Ventures Limited</div>
                                <div className='concernBoxDes'>Japan–Bangladesh Joint Venture for Business & HR Development</div>
                            </div>
                            <div className='concernBoxDetailText'>
                                Promotes strategic partnerships, investments, human resource development, technology exchange, and trade facilitation between Bangladesh, Japan, and global markets.
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Business & Investment Consultancy</div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Workforce Solutions & HR Development</div>
                                </div>
                                <div className='flex gap-[10px] items-center'>
                                    <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#be1e2d", }} />
                                    <div>Technology Transfer & Digital Transformation</div>
                                </div>
                            </div>
                            <div className='flex justify-end ml-auto'>
                                <a href="/kawaii-global-ventures" className='inline-flex'>
                                    <ButtonKg text="View Full Profile" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={rightWhite} alt="concernRightWhite" className='concernRightWhite' />
                </div>
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
