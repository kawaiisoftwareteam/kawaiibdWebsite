import React from 'react'
import './HowCanWeHelp.css'
import sanjanaLogo from '../../Assets/Sister_Concerns/sanjana_logo.png'
import ajLogo from '../../Assets/Sister_Concerns/aj_logo.png'
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.png'
import ButtonNormal from '../ButtonNormal/ButtonNormal'
import ButtonTransparent from '../ButtonTransparent/ButtonTransparent'
import arrow from '../../Assets/kg_button_indicator.svg'
import { useLocale } from '../../i18n/LocaleContext'

const cardImages = [
    require('../../Assets/hwch_1.png'),
    require('../../Assets/hwch_2.jpeg'),
    require('../../Assets/hwch_3.jpeg'),
];

const cardLogos = [sanjanaLogo, ajLogo, katslLogo];

const cardLinks = [
    'https://sanjanahr.com/',
    'https://achievejapanssw.com/',
    'https://katsl.vercel.app/',
];

const HowCanWeHelp = () => {
    const { t, localizedPath } = useLocale();
    const cards = t('home.help.cards') || [];

    return (
        <div className='hcwh_main'>
            <div className='hcwh_top'>
                <div className='hcwh_top_content_box'>
                    <div className='hcwh_header'>{t('home.help.title')}</div>
                    <div className='hcwh_content'>{t('home.help.subtitle')}</div>
                    <ButtonTransparent text={t('home.help.cta')} link={localizedPath('/contact')}/>
                </div>
            </div>
            <div className='hcwh_bottom'>
                {cards.map((card, index) => (
                <div
                    key={index}
                    className='hcwh_card'
                    style={{
                        background: `linear-gradient( to bottom,
                          rgba(0, 0, 0, 0.2),
                          rgba(0, 0, 0, 1)), url(${cardImages[index]})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className='hcwh_card_box'>
                        <img src={cardLogos[index]} alt="" className='hcwh_card_img' />
                        <div className='hcwh_card_header'>{card.title}</div>
                        <div className='hcwh_card_Content'>{card.with}</div>
                        <div className='hcwh_card_description'>{card.desc}</div>
                        <a className='hcwh_card_btn' href={cardLinks[index]} target='_blank' rel="noreferrer">
                            <ButtonNormal arrow={arrow} text={t('common.readMore')} />
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default HowCanWeHelp
