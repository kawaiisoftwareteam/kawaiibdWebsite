import React from 'react'
import "./CeoMessage.css"
import commaMsg from '../../Assets/commaSvgmsg.svg'
import Buttonkg from '../ButtonKg/ButtonKg'
import { Link } from 'react-router-dom'
import dewanSamir from '../../Assets/Dewan_Samir.jpg'
import blob from '../../Assets/blobmsg.svg'
import msgKgSvg from '../../Assets/msgKgSvg.svg'

const CeoMessage = () => {
    return (
        <div className='ceoMessage'>
            <img src={commaMsg} alt="Comma_Msg" className='commaCeoMsg' />
            <div className='contentBoxMsg'>
                <div className='contentLeftMsg'>
                    <div className='contentLeftMsgtext1'>At Kawaii Group, we believe in the power of global collaboration
                        and the fusion of diverse expertise. Our message to you is simple yet profound:</div>
                    <div className='contentLeftMsgHeader'>Building Bridges, Creating Smiles</div>
                    <div className='contentLeftMsgSignBox'>
                        <div className='contentLeftMsgJoinBox'>
                            <span className='contentLeftMsgJoinText'>Join us in creating a future where borders are no barrier to success,
                                and where every challenge is an opportunity for growth.</span>
                        </div>
                        {/* <div><span className='cotentMsgName'>Dewan Samir, </span><span className='cotentMsgDesignation'>Managing Director & CEO of Kawaii Group</span></div> */}
                    </div>
                    <Link to="/about">
                        <Buttonkg text="Let's Grow Together" />
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
                                {/* <img src={dewanSamir} alt="" className='contentRightImgDS' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CeoMessage
