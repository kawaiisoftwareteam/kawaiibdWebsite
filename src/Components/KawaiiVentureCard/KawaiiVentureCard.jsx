import React from 'react'
import './KawaiiVentureCard.css'
import ventureSvgCorner from '../../Assets/projectSvgCorner.svg';

const KawaiiVentureCard = ({ data }) => {
    return (
        <>
            {data.map((venture, index) => (
                <div className="OurventureCardBox" key={index}>
                    <img src={ventureSvgCorner} alt="ventureSvgCorner" className="ventureSvg" />
                    <div className="OurVentureCardTitleBox">
                        <div className="OurVentureCardTitle">{venture.title}</div>
                    </div>
                    <div className="OurVentureCardContentBox">
                        {venture.content.map((item, idx) => (
                            <div className="OurVentureCardContent" key={idx}>
                                • {item}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default KawaiiVentureCard
