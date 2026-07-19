import React from 'react'
import "./Cta.css"
import KgLogoBg from "../../Assets/KG_logo_bg.png"
// import cta from "../../Assets/cta.png"
import { Link } from 'react-router-dom'
import ButtonKg from '../ButtonKg/ButtonKg'

const Cta = ({title, text,backgroundImage, marginY}) => {
  return (
    <div className={`cta_main ${marginY}`}>
      <div className='cta_sub'>
        <div className="left_cta">
          <div className="main_bg">
            <svg style={{ borderTopLeftRadius: '15px'}} xmlns="http://www.w3.org/2000/svg"width="436" height="324" viewBox="0 0 436 324" fill="none">
              <path d="M-3 0H436L398 324H-3V0Z" fill="#BE1E2D" />
            </svg>
            <img src={KgLogoBg} alt="kg_logo" className='kg_logo_bg' />
            <div className='left_title'>
            Bridging Cultures, Connecting Opportunities
            </div>
          </div>
          <div className='left_frame'>
            <img src={backgroundImage} alt="" className='cta_pic_bg'/>
          </div>
        </div>
        <div className="right_cta">
          <div className='right_frame'>
            <div className='right_title'>
             {title}
            </div>
            <div className='right_description'>
             {text}
            </div>
            <Link to="/contact">
              <ButtonKg text="Let's Connect"/>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cta
