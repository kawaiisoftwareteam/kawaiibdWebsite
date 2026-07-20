import React from 'react'
import './HowCanWeHelp.css'
import sanjanaLogo from '../../Assets/Sister_Concerns/sanjana_logo.png'
import ajLogo from '../../Assets/Sister_Concerns/aj_logo.png'
import katslLogo from '../../Assets/Sister_Concerns/KATSL_Logo.png'
// import kflLogo from '../../Assets/Sister_Concerns/KF_Logo_Final_1_trans.png'
import ButtonNormal from '../ButtonNormal/ButtonNormal'
import ButtonTransparent from '../ButtonTransparent/ButtonTransparent'
import arrow from '../../Assets/kg_button_indicator.svg'

const HowCanWeHelp = () => {
    return (
        <div className='hcwh_main'>
            <div className='hcwh_top'>
                <div className='hcwh_top_content_box'>
                    <div className='hcwh_header'>How We Can Help You Grow</div>
                    <div className='hcwh_content'>We support business from staffing to software having expertise in recruitment,
                        international education, and software solutions.</div>
                        <ButtonTransparent text="Start Your Journey With Us" link="/contact"/>
                </div>
            </div>
            <div className='hcwh_bottom'>
                <div
                    className='hcwh_card'
                    style={{
                        background: `linear-gradient( to bottom,
                          rgba(0, 0, 0, 0.2),
                          rgba(0, 0, 0, 1)), url(${require('../../Assets/hwch_1.png')})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className='hcwh_card_box'>
                        <img src={sanjanaLogo} alt="" className='hcwh_card_img' />
                        <div className='hcwh_card_header'>Simplify Global Hiring</div>
                        <div className='hcwh_card_Content'>with M/S Sanjana International</div>
                        <div className='hcwh_card_description'>M/S Sanjana International connects businesses with skilled professionals worldwide, ensuring the right fit for your organizational needs.</div>
                        <a className='hcwh_card_btn' href="https://sanjanahr.com/" target='_blank' rel="noreferrer"><ButtonNormal arrow={arrow} text="Read More" /></a>
                    </div>
                </div>
                <div
                    className='hcwh_card'
                    style={{
                        background: `linear-gradient( to bottom,
                          rgba(0, 0, 0, 0.2),
                          rgba(0, 0, 0, 1)), url(${require('../../Assets/hwch_2.jpeg')})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className='hcwh_card_box'>
                        <img src={ajLogo} alt="ajLogo" className='hcwh_card_img' />
                        <div className='hcwh_card_header'>Build Your
                            Career in Japan</div>
                        <div className='hcwh_card_Content'>with Achieve Japan</div>
                        <div className='hcwh_card_description'>Achieve Japan empowers individuals with educational opportunities in Japan and beyond, fostering global perspectives and career readiness.</div>
                        <a className='hcwh_card_btn' href="https://achievejapanssw.com/" target='_blank' rel="noreferrer"><ButtonNormal arrow={arrow} text="Read More" /></a>
                    </div>
                </div>
                <div
                    className='hcwh_card'
                    style={{
                        background: `linear-gradient(
                          to bottom,
                          rgba(0, 0, 0, 0.2),
                          rgba(0, 0, 0, 1)
                        ), url(${require('../../Assets/hwch_3.jpeg')})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className='hcwh_card_box'>
                        <img src={katslLogo} alt="katslLogo" className='hcwh_card_img' />
                        <div className='hcwh_card_header'>Drive Business Efficiency integrating software solutions</div>
                        <div className='hcwh_card_Content'>with KATSL</div>
                        <div className='hcwh_card_description'>Kawaii Technology equips businesses with transformative SaaS solutions, enhancing operational efficiency and driving sustainable growth.</div>
                        <a className='hcwh_card_btn' href="https://katsl.vercel.app/" target='_blank' rel="noreferrer"><ButtonNormal arrow={arrow} text="Read More" /></a>
                    </div>
                </div>
                {/* Kawaii Fashion Ltd — commented out
                <div
                    className='hcwh_card'
                    style={{
                        background: `linear-gradient( to bottom,
                          rgba(0, 0, 0, 0.2),
                          rgba(0, 0, 0, 1)), url(${require('../../Assets/hwch_4.png')})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className='hcwh_card_box'>
                        <img src={kflLogo} alt="kflLogo" className='hcwh_card_img' />
                        <div className='hcwh_card_header'>Sourcing Success for Your Apparel Brand</div>
                        <div className='hcwh_card_Content'>with Kawaii Fashion Ltd</div>
                        <div className='hcwh_card_description'>We specialize in sourcing Made in Bangladesh apparel and delivering OEM & ODM services that meet Japanese standards, helping you scale and succeed in new markets.</div>
                        <NavLink className='hcwh_card_btn' to="/kfl"><ButtonNormal arrow={arrow} text="Read More" /></NavLink>
                    </div>
                </div>
                */}
            </div>
        </div>
    )
}

export default HowCanWeHelp
