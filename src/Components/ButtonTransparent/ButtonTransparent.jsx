import React from 'react'
import "./ButtonTransparent.css"
import { NavLink } from 'react-router-dom'
import arrow from '../../Assets/kg_button_indicator.svg'

const ButtonTransparent = ({text, link, bgclass}) => {
    return (
        <NavLink to={link} className='button_transparent' style={{ background: bgclass }}>
        <div className='btn_transparent'>
            <div className='btn_transparent_text'>
                {text}
            </div>
            <div>
                <img src={arrow} alt="arrow" className='mt-[0.35rem]'/>
            </div>
        </div>
    </NavLink>
    )
}

export default ButtonTransparent
