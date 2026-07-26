import React from 'react'
import "./CeoMessage.css"
import commaMsg from '../../Assets/commaSvgmsg.svg'
import Buttonkg from '../ButtonKg/ButtonKg'
import { Link } from 'react-router-dom'
import blob from '../../Assets/blobmsg.svg'
import msgKgSvg from '../../Assets/msgKgSvg.svg'
import { useLocale } from '../../i18n/LocaleContext'

const CeoMessage = () => {
    const { t, localizedPath } = useLocale();

    return (
        <div className='ceoMessage'>
            <img src={commaMsg} alt="Comma_Msg" className='commaCeoMsg' />
            <div className='contentBoxMsg'>
                <div className='contentLeftMsg'>
                    <div className='contentLeftMsgtext1'>{t('home.ceo.intro')}</div>
                    <div className='contentLeftMsgHeader'>{t('home.ceo.headline')}</div>
                    <div className='contentLeftMsgSignBox'>
                        <div className='contentLeftMsgJoinBox'>
                            <span className='contentLeftMsgJoinText'>{t('home.ceo.join')}</span>
                        </div>
                    </div>
                    <Link to={localizedPath('/about')}>
                        <Buttonkg text={t('home.ceo.cta')} />
                    </Link>
                </div>
                <div className='contentRightMsg'>
                    <div className='contentRightMsgBox'>
                        <div className='contentRightPattern'>
                            <img src={blob} alt="" className='blobMsg' />
                            <div className='msgKgPattern'>
                                <img src={msgKgSvg} alt="msgKgSvg" />
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
    )
}

export default CeoMessage
