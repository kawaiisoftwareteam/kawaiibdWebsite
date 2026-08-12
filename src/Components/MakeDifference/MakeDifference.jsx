import React from 'react'
import "./MakeDifference.css"
import topCorner from "../../Assets/diffCardTopCorner.svg"
import bottomCorner from "../../Assets/diffCardBottomCorner.svg"
import mainbottomCorner from "../../Assets/diffcardmainbottomcorner.svg"
import { useLocale } from '../../i18n/LocaleContext'

const diffImages = [
    require('../../Assets/diffcard1.webp'),
    require('../../Assets/diffcard2.webp'),
    require('../../Assets/diffcard3.webp'),
];

const MakeDifference = () => {
    const { t } = useLocale();
    const cards = t('about.difference.cards') || [];

    return (
        <div className='makeDiff'>
            <div className='textBoxDiff'>
                <div className='titleDiff'>{t('about.difference.title')}</div>
            </div>
            <div className="flex flex-col md:flex-row py-12 items-start gap-6">
                {cards.map((card, index) => (
                <div className='diffCard' key={index}>
                    <div className='diffCardImg' style={{ backgroundImage: `url(${diffImages[index]})` }}>
                        <div className='DiffCardTitle'>{card.title}</div>
                        <div className='diffCardCornerBg'>
                            <img loading="lazy" decoding="async" src={topCorner} alt="" />
                        </div>
                    </div>
                    <div className='diffCardContentBox'>
                        <div className='diffCardContentDescription'>{card.desc}</div>
                    </div>
                    <div className='diffCardCornerDownBg'>
                        <img loading="lazy" decoding="async" src={bottomCorner} alt="" />
                    </div>
                </div>
                ))}
            </div>
            <div className='diffCardMainBottomCorner'>
                <img loading="lazy" decoding="async" src={mainbottomCorner} alt="" />
            </div>
        </div>
    )
}

export default MakeDifference
