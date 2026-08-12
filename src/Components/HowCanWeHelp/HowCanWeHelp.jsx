'use client';

import React from 'react';
import './HowCanWeHelp.css';
import sanjanaLogo from '../../Assets/Sister_Concerns/sanjana_logo.webp';
import ajLogo from '../../Assets/Sister_Concerns/aj_logo.webp';
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.webp';
import ButtonNormal from '../ButtonNormal/ButtonNormal';
import ButtonTransparent from '../ButtonTransparent/ButtonTransparent';
import arrow from '../../Assets/kg_button_indicator.svg';
import { useLocale } from '../../i18n/LocaleContext';

import hwch1 from '../../Assets/hwch_1.webp';
import hwch2 from '../../Assets/hwch_2.webp';
import hwch3 from '../../Assets/hwch_3.webp';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const cardImages = [
    getSrc(hwch1),
    getSrc(hwch2),
    getSrc(hwch3),
];

const cardLogos = [getSrc(sanjanaLogo), getSrc(ajLogo), getSrc(katslLogo)];

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
                        <img loading="lazy" decoding="async" src={cardLogos[index]} alt="" className='hcwh_card_img' />
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
    );
};

export default HowCanWeHelp;
