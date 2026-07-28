'use client';

import React from 'react';
import "./CeoMessage.css";
import commaMsg from '../../Assets/commaSvgmsg.svg';
import Buttonkg from '../ButtonKg/ButtonKg';
import Link from 'next/link';
import blob from '../../Assets/blobmsg.svg';
import msgKgSvg from '../../Assets/msgKgSvg.svg';
import { useLocale } from '../../i18n/LocaleContext';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const CeoMessage = () => {
    const { t, localizedPath } = useLocale();

    return (
        <div className='ceoMessage'>
            <img src={getSrc(commaMsg)} alt="Comma_Msg" className='commaCeoMsg' />
            <div className='contentBoxMsg'>
                <div className='contentLeftMsg'>
                    <div className='contentLeftMsgtext1'>{t('home.ceo.intro')}</div>
                    <div className='contentLeftMsgHeader'>{t('home.ceo.headline')}</div>
                    <div className='contentLeftMsgSignBox'>
                        <div className='contentLeftMsgJoinBox'>
                            <span className='contentLeftMsgJoinText'>{t('home.ceo.join')}</span>
                        </div>
                    </div>
                    <Link href={localizedPath('/about')}>
                        <Buttonkg text={t('home.ceo.cta')} />
                    </Link>
                </div>
                <div className='contentRightMsg'>
                    <div className='contentRightMsgBox'>
                        <div className='contentRightPattern'>
                            <img src={getSrc(blob)} alt="" className='blobMsg' />
                            <div className='msgKgPattern'>
                                <img src={getSrc(msgKgSvg)} alt="msgKgSvg" />
                            </div>
                        </div>
                        <div className='contentRightImage'>
                            <div className='contentRightImageFrame'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoMessage;
