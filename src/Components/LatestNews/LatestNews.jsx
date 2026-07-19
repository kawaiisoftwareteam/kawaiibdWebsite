import React from 'react'
import './LatestNews.css'
import topCorner from "../../Assets/diffCardTopCorner.svg"
import bottomCorner from "../../Assets/diffCardBottomCorner.svg"
import mainbottomCorner from "../../Assets/diffcardmainbottomcorner.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

const LatestNews = () => {
    return (
        <div className='makenews'>
            <div className='textBoxnews'>
                <div className='titlenews'>Latest News</div>
                <div className='titledescription'>From an early stage-up’s growth strategies to helping existing businesses,
                    we have done it all! The results speak for themselves. Our service work.</div>
            </div>
            <div className="flex flex-col md:flex-row py-12 items-start gap-6">
                <div className='newsCard'>
                    <div className='newsCardImg' style={{ backgroundImage: `url(${require('../../Assets/BMET27.jpg')})` }}>
                        <div className='newsCardBack'>
                            <div className='newsCardTitle'>Kawaii Group-Bureau of Manpower Employment and Training (BMET) MOU Signing Ceremony</div>
                        </div>
                        <div className='newsCardCornerBg'>
                            <img src={topCorner} alt="" />
                        </div>
                    </div>
                    <div className='newsCardContentBox'>
                        <div className='newsCardContentDescription'>BMET partnered with Kawaii Group to enhance workforce readiness for Japan’s Specified Skilled Worker (SSW) program. Kawaii Group’s extensive experience and strong presence in Japan make it a key player in facilitating smooth migration and employment for Bangladeshi workers.
                        </div>
                        <div className='newsCardBottom'>
                            <div className='newsDate'>05 March 2025</div>
                            <div className='newsReadMore'>
                                <div className='newsReadMoreText'>READ more</div>
                                <FontAwesomeIcon icon={faArrowRight} className='readMoreArrow' />
                            </div>
                        </div>
                    </div>
                    <div className='newsCardCornerDownBg'>
                        <img src={bottomCorner} alt="" />
                    </div>
                </div>
                <div className='newsCard'>
                    <div className='newsCardImg' style={{ backgroundImage: `url(${require('../../Assets/foodfest2.jpg')})` }}>
                        <div className='newsCardBack'>
                            <div className='newsCardTitle'>Japanese Food and Traditional Green Tea Ceremony</div>
                        </div>
                        <div className='newsCardCornerBg'>
                            <img src={topCorner} alt="" />
                        </div>
                    </div>
                    <div className='newsCardContentBox'>
                        <div className='newsCardContentDescription'>On February 21st, International Mother Language Day, Achieve Japan hosted a Japanese Food and Traditional Green Tea Ceremony attended by Japan Foundation representatives including Ms. Kyoko Takemoto, Mr. Okubo, Mr. Kasai, and officials from JF KC in Osaka. Students demonstrated Japanese culinary traditions and cultural values. Discussions covered Bangladesh's current Japanese language training landscape, the impact of enhanced teacher training methods, IRODORI materials' significance, and strategic approaches to SSW program advancement. The Japan Foundation pledged comprehensive support for Achieve Japan's development initiatives.</div>
                        <div className='newsCardBottom'>
                            <div className='newsDate'>21 February 2025</div>
                            <div className='newsReadMore'>
                                <div className='newsReadMoreText'>READ more</div>
                                <FontAwesomeIcon icon={faArrowRight} className='readMoreArrow' />
                            </div>
                        </div>
                    </div>
                    <div className='newsCardCornerDownBg'>
                        <img src={bottomCorner} alt="" />
                    </div>
                </div>
                <div className='newsCard'>
                    <div className='newsCardImg' style={{ backgroundImage: `url(${require('../../Assets/egrowthmou.jpg')})` }}>
                        <div className='newsCardBack'>
                            <div className='newsCardTitle'>Kawaii Group-Egrowth Inc. MOU Signing Ceremony</div>
                        </div>
                        <div className='newsCardCornerBg'>
                            <img src={topCorner} alt="" />
                        </div>
                    </div>
                    <div className='newsCardContentBox'>
                        <div className='newsCardContentDescription'>On December 17th, during the Japan Day event organized by BASIS: Japan Desk, Kawaii Advanced Technology & Solution Ltd participated as a Gold Sponsor.
                            As part of the event, the company signed a Memorandum of Understanding (MoU) with Egrowth, aiming to create new opportunities in IT engineer training and job placement. This collaboration marks a step forward in strengthening global tech talent exchange and workforce development.</div>
                        <div className='newsCardBottom'>
                            <div className='newsDate'>17 December 2024</div>
                            <div className='newsReadMore'>
                                <div className='newsReadMoreText'>READ more</div>
                                <FontAwesomeIcon icon={faArrowRight} className='readMoreArrow' />
                            </div>
                        </div>
                    </div>
                    <div className='newsCardCornerDownBg'>
                        <img src={bottomCorner} alt="" />
                    </div>
                </div>
            </div>
            <div className='newsCardMainBottomCorner'>
                <img src={mainbottomCorner} alt="" />
            </div>
        </div>
    )
}

export default LatestNews
