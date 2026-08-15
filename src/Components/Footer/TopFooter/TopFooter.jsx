'use client';

import React from 'react';
import "./TopFooter.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import kgLogobh from '../../../Assets/kawaiigroup.webp';
import { useLocale } from '../../../i18n/LocaleContext';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const TopFooter = () => {
    const { t, localizedPath } = useLocale();

    return (
        <div className="mainTop">
            <div className='colLeft'>
                <Link href={localizedPath('/home')}>
                    <img loading="lazy" decoding="async" src={getSrc(kgLogobh)} alt="kawaiiGroupgreyscale" />
                </Link>
                <div className="text-white text-base font-normal font-main leading-snug pr-5">
                    {t('footer.aboutBlurb')}{' '}
                    <Link href={localizedPath('/about')} className="underline">
                        {t('footer.readMore')}
                    </Link>
                </div>
                <div style={{ color: '#fff' }}>
                    <b> {t('footer.quickLinks')}</b>
                    <br />
                    <span style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <Link href={localizedPath('/home')}>
                            {t('nav.home')}
                        </Link>
                        <Link href={localizedPath('/about')}>
                            {t('nav.whoWeAre')}
                        </Link>
                        <Link href={localizedPath('/services')}>
                            {t('nav.whatWeDo')}
                        </Link>
                        <Link href={localizedPath('/concerns')}>
                            {t('nav.sisterConcerns')}
                        </Link>
                        <Link href={localizedPath('/contact')}>
                            {t('nav.getInTouch')}
                        </Link>
                    </span>
                </div>
            </div>
            <div className='colRight'>
                <div className='rLeft'>
                    <div className='countryTitle'>
                        <b>{t('footer.bangladeshOffice')}</b>
                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faPhone} className='iconF' />
                        <div>
                            <a href="tel:+8801901850570">+88 01901850570</a>
                        </div>
                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faEnvelope} className='iconF' />
                        <div>
                            <a href="mailto:info@kawaiibd.com" target='_blank' rel="noreferrer">info@kawaiibd.com</a>
                        </div>

                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faLocationDot} className='iconF' />
                        <div>
                            <a
                                href="https://maps.app.goo.gl/sfL5dbZTL65kB2W19"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Suite-2A, House # 11, Block-B,
                                Main Road, Banasree, Rampura, Dhaka-1219
                            </a>
                        </div>
                    </div>
                </div>
                <div className='rLeft'>
                    <div className='countryTitle'>
                        <b>{t('footer.japanOffice')}</b>
                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faPhone} className='iconF' />
                        <div>
                            <a href="tel:+81369105465">+81 03-6910-5465</a>
                        </div>
                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faEnvelope} className='iconF' />
                        <div>
                            <a href="mailto:info@kawaiigroupjapan.com" target='_blank' rel="noreferrer">info@kawaiigroupjapan.com</a>
                        </div>

                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faLocationDot} className='iconF' />
                        <div>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=ITO+Daikanyama,+2-17-8+Ebisu-Nishi,+Shibuya-ku,+Tokyo+150-0021,+Japan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ITO Daikanyama 1F, 2-17-8 Ebisu-Nishi,
                                Shibuya-ku, Tokyo 150-0021, Japan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFooter;
