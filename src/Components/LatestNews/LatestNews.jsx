import React from 'react'
import './LatestNews.css'
import topCorner from "../../Assets/diffCardTopCorner.svg"
import bottomCorner from "../../Assets/diffCardBottomCorner.svg"
import mainbottomCorner from "../../Assets/diffcardmainbottomcorner.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { useLocale } from '../../i18n/LocaleContext'

const newsImages = [
    require('../../Assets/BMET27.jpg'),
    require('../../Assets/foodfest2.jpg'),
    require('../../Assets/egrowthmou.jpg'),
];

const LatestNews = () => {
    const { t } = useLocale();
    const items = t('home.news.items') || [];

    return (
        <div className='makenews'>
            <div className='textBoxnews'>
                <div className='titlenews'>{t('home.news.title')}</div>
                <div className='titledescription'>{t('home.news.intro')}</div>
            </div>
            <div className="flex flex-col md:flex-row py-12 items-start gap-6">
                {items.map((item, index) => (
                <div className='newsCard' key={index}>
                    <div className='newsCardImg' style={{ backgroundImage: `url(${newsImages[index]})` }}>
                        <div className='newsCardBack'>
                            <div className='newsCardTitle'>{item.title}</div>
                        </div>
                        <div className='newsCardCornerBg'>
                            <img src={topCorner} alt="" />
                        </div>
                    </div>
                    <div className='newsCardContentBox'>
                        <div className='newsCardContentDescription'>{item.desc}</div>
                        <div className='newsCardBottom'>
                            <div className='newsDate'>{item.date}</div>
                            <div className='newsReadMore'>
                                <div className='newsReadMoreText'>{t('home.news.readMore')}</div>
                                <FontAwesomeIcon icon={faArrowRight} className='readMoreArrow' />
                            </div>
                        </div>
                    </div>
                    <div className='newsCardCornerDownBg'>
                        <img src={bottomCorner} alt="" />
                    </div>
                </div>
                ))}
            </div>
            <div className='newsCardMainBottomCorner'>
                <img src={mainbottomCorner} alt="" />
            </div>
        </div>
    )
}

export default LatestNews
