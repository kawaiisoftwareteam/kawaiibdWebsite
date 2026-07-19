import React from 'react'
import "./MakeDifference.css"
import topCorner from "../../Assets/diffCardTopCorner.svg"
import bottomCorner from "../../Assets/diffCardBottomCorner.svg"
import mainbottomCorner from "../../Assets/diffcardmainbottomcorner.svg"

const MakeDifference = () => {
    return (
        <div className='makeDiff'>
            <div className='textBoxDiff'>
                <div className='titleDiff'>How We're Making a Difference</div>
            </div>
            <div className="flex flex-col md:flex-row py-12 items-start gap-6">
                <div className='diffCard'>
                    <div className='diffCardImg' style={{ backgroundImage: `url(${require('../../Assets/diffcard1.png')})` }}>
                        <div className='DiffCardTitle'>For Businesses</div>
                        <div className='diffCardCornerBg'>
                            <img src={topCorner} alt="" />
                        </div>
                    </div>
                    <div className='diffCardContentBox'>
                        <div className='diffCardContentDescription'>Delivering world-class solutions across technology, fashion, and engineering sectors.</div>
                    </div>
                    <div className='diffCardCornerDownBg'>
                        <img src={bottomCorner} alt="" />
                    </div>
                </div>
                <div className='diffCard'>
                    <div className='diffCardImg' style={{ backgroundImage: `url(${require('../../Assets/diffcard2.png')})` }}>
                        <div className='DiffCardTitle'>For Students</div>
                        <div className='diffCardCornerBg'>
                            <img src={topCorner} alt="" />
                        </div>
                    </div>
                    <div className='diffCardContentBox'>
                        <div className='diffCardContentDescription'>Opening doors to international education, with over 3,000 students sent to Japan.</div>
                    </div>
                    <div className='diffCardCornerDownBg'>
                        <img src={bottomCorner} alt="" />
                    </div>
                </div>
                <div className='diffCard'>
                    <div className='diffCardImg' style={{ backgroundImage: `url(${require('../../Assets/diffcard3.png')})` }}>
                        <div className='DiffCardTitle'>For Communities</div>
                        <div className='diffCardCornerBg'>
                            <img src={topCorner} alt="" />
                        </div>
                    </div>
                    <div className='diffCardContentBox'>
                        <div className='diffCardContentDescription'>Building sustainable infrastructure and creating employment opportunities.</div>
                    </div>
                    <div className='diffCardCornerDownBg'>
                        <img src={bottomCorner} alt="" />
                    </div>
                </div>
            </div>
            <div className='diffCardMainBottomCorner'>
                <img src={mainbottomCorner} alt="" />
            </div>
        </div>
    )
}

export default MakeDifference
