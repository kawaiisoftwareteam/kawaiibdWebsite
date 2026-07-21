import React from 'react'
import "./TopFooter.css"
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import kgLogobh from '../../../Assets/kawaiiGroupLogobw.svg'

const TopFooter = () => {
    return (
        <div className="mainTop">
            <div className='colLeft'>
                <NavLink to="/home">
                    <img src={kgLogobh} alt="kawaiiGroupgreyscale" />
                </NavLink>
                <div className="text-white text-base font-normal font-main leading-snug pr-5">Kawaii Group was founded with one core idea: to create opportunities. Whether it's helping businesses thrive or guiding individuals to new career paths, we are passionate about making a difference. With roots deep in both Japan and Bangladesh. read more          , our journey over the past 37 years has been about fostering connections—between countries, businesses, and people. Through innovation, education, and strategic partnerships, we aim to uplift communities and empower futures.</div>
                <div style={{ color: '#fff' }}>
                    <b> QUICK LINKS</b>
                    <br />
                    <span style={{ display: 'flex', gap: '15px' }}>
                        <Link to="/home">
                            Home
                        </Link>
                        <Link to="/about">
                            Who We Are
                        </Link>
                        <Link to="/services">
                            What We Do
                        </Link>
                        <Link to="/concerns">
                            Sister Concerns
                        </Link>
                        <Link to="/contact">
                            Get in Touch
                        </Link>
                    </span>
                </div>
            </div>
            <div className='colRight'>
                <div className='rLeft'>
                    <div className='countryTitle'>
                        <b>Bangladesh Office</b>
                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faPhone} className='iconF' />
                        <div>
                            <a href="tel:+880255123797">+88 02-55123797</a>
                            <br />
                            <a href="tel:+8801318304512">+88 01318304512</a>
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
                        <b>Japan Office</b>
                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faPhone} className='iconF' />
                        <div>
                            <a href="tel:+81343635903">+81 03-4363-5903</a>
                        </div>
                    </div>
                    <div className='frame'>
                        <FontAwesomeIcon icon={faEnvelope} className='iconF' />
                        <div>
                            <a href="mailto:japan@achievejapan.com" target='_blank' rel="noreferrer">japan@achievejapan.com</a>
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
    )
}

export default TopFooter
