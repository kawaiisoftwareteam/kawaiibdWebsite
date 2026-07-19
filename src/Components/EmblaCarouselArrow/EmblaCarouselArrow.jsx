import React from 'react'
import './EmblaCarouselArrow.css'
import leftArrow from '../../Assets/slideChangerLeftArrow.svg'
import rightArrow from '../../Assets/slidechangeRightArrow.svg'

const EmblaCarouselArrow = ({ onPrevClick, onNextClick }) => {
    return (
        <div className='projectheroPrevNext'>
            <div className='projectsliderArrowDirection' onClick={onPrevClick}>
                <div className='projectherosliderArrow'>
                    <img src={leftArrow} alt="leftArrow" />
                </div>
            </div>
            <div className='projectsliderArrowDirection' onClick={onNextClick}>
                <div className='projectherosliderArrow'>
                    <img src={rightArrow} alt="rightArrow" />
                </div>
            </div>
        </div>
    )
}

export default EmblaCarouselArrow
