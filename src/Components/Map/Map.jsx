'use client';

import React from 'react';
import "./Map.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import location from '../../Assets/location.webp';
import { useLocale } from '../../i18n/LocaleContext';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const Map = () => {
  const { t } = useLocale();
  const offices = t('home.map.offices') || {};

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-12 map_main">
      <div className="order-1 md:order-1 flex flex-col justify-end items-center md:items-start gap-6 flex-1">
        <b className='text_title text-center md:text-left'>
          {t('home.map.title')}
        </b>
        <div className='text_sub_title text-center md:text-left'>
          {t('home.map.subtitle')}
        </div>
      </div>
      <div className=" order-3 md:order-2 address_div">
        <div className='top_address_bar'>
          {offices.bangladesh}
        </div>
        <div className='bottom_address_bar'>
          <div className='contact_frame'>
            <div className='mobile_frame'>
              <FontAwesomeIcon icon={faPhone} className='h-6 w-6' style={{ color: '#475569' }} />
              <div className='number_style'>
                <a href="tel:+8801901850570">+88 01901850570</a>
              </div>
            </div>
            <div className='mobile_frame'>
              <FontAwesomeIcon icon={faEnvelope} className='h-6 w-6' style={{ color: '#475569' }} />
              <div className='number_style'><a href="mailto:info@kawaiibd.com" target='_blank' rel="noreferrer">info@kawaiibd.com</a></div>
            </div>
          </div>
          <div className='mobile_frame'>
            <FontAwesomeIcon icon={faLocationDot} className='h-6 w-6' style={{ color: '#475569' }} />
            <div className='number_style'>
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
      </div>
      <div className="order-4 md:order-3 address_div">
        <div className='top_address_bar'>
          {offices.japan}
        </div>
        <div className='bottom_address_bar'>
          <div className='contact_frame'>
            <div className='mobile_frame'>
              <FontAwesomeIcon icon={faPhone} className='h-6 w-6' style={{ color: '#475569' }} />
              <div className='number_style'><a href="tel:+81343635903">+810343635903</a></div>
            </div>
            <div className='mobile_frame'>
              <FontAwesomeIcon icon={faEnvelope} className='h-6 w-6' style={{ color: '#475569' }} />
              <div className='number_style'><a href="mailto:japan@achievejapan.com" target='_blank' rel="noreferrer">japan@achievejapan.com</a></div>
            </div>
          </div>
          <div className='mobile_frame'>
            <FontAwesomeIcon icon={faLocationDot} className='h-6 w-6' style={{ color: '#475569' }} />
            <div className='number_style'><a
              href="https://www.google.com/maps/search/?api=1&query=ITO+Daikanyama,+2-17-8+Ebisu-Nishi,+Shibuya-ku,+Tokyo+150-0021,+Japan"
              target="_blank"
              rel="noopener noreferrer"
            >
              ITO Daikanyama 1F, 2-17-8 Ebisu-Nishi,
              Shibuya-ku, Tokyo 150-0021, Japan
            </a></div>
          </div>
        </div>
      </div>
      <div className="order-5 md:order-4 address_div">
        <div className='top_address_bar_gray'>
          {offices.canada}
        </div>
        <div className='bottom_address_bar' >
          <div className='contact_frame'>
            <div className='mobile_frame'>
              <FontAwesomeIcon icon={faPhone} className='h-6 w-6' style={{ color: '#475569' }} />
              <div className='number_style'><a href="tel:+1 514-575-4090">+1 514-575-4090</a>
              </div>
            </div>
          </div>
          <div className='mobile_frame'>
            <FontAwesomeIcon icon={faLocationDot} className='h-6 w-6' style={{ color: '#475569' }} />
            <div className='number_style'>
              <a
                href="https://maps.app.goo.gl/fy4gmtYiXPq2odDH7"
                target="_blank"
                rel="noopener noreferrer"
              >
                8178 Avenue Wiseman, Montreal, QC,
                H3N 2P4, Canada.
              </a></div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 md:row-span-3 col-span-1 row-span-1 order-2 md:order-5">
        <img loading="lazy" decoding="async" src={getSrc(location)} alt="" className='pt-0 md:pt-24' /></div>
      <div className="order-6 md:order-6 address_div">
        <div className='top_address_bar_gray'>
          {offices.germany}
        </div>
        <div className='bottom_address_bar' >
          <div className='contact_frame'>
            <div className='mobile_frame'>
              <FontAwesomeIcon icon={faPhone} className='h-6 w-6' style={{ color: '#475569' }} />
              <div className='number_style'>
                <a href="tel:+491639491888">+491639491888</a>
              </div>
            </div>
            <div className='mobile_frame'>
              <FontAwesomeIcon icon={faEnvelope} className='h-6 w-6' style={{ color: '#475569' }} />
              <div className='number_style'>
                <a href="mailto:pavel.bd2590@gmail.com" target='_blank' rel="noreferrer">pavel.bd2590@gmail.com</a>
              </div>
            </div>
          </div>
          <div className='mobile_frame'>
            <FontAwesomeIcon icon={faLocationDot} className='h-6 w-6' style={{ color: '#475569' }} />
            <div className='number_style'>
              <a
                href="https://maps.app.goo.gl/ShP4GxUBJ7EJZYgh6"
                target="_blank"
                rel="noopener noreferrer"
              >
                8Berliner Str. 93, 14979 Großbeeren, Germany.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="order-7 md:order-7 address_div">
        <div className='top_address_bar_gray'>
          {offices.malaysia}
        </div>
        <div className='bottom_address_bar' >
          <div className='contact_frame'>
            <div className='mobile_frame'>
              <FontAwesomeIcon icon={faPhone} className='h-6 w-6' style={{ color: '#475569' }} />
              <div className='number_style'>
                <a href="tel:+60 3-27796128">+60 3-27796128</a>
              </div>
            </div>
          </div>
          <div className='mobile_frame'>
            <FontAwesomeIcon icon={faLocationDot} className='h-6 w-6' style={{ color: '#475569' }} />
            <div className='number_style'>
              <a
                href="https://maps.app.goo.gl/EyKnhmW8FfAoLkNs9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Level 7, Menara Arina Uniti, Jalan Raja Muda Abdul Aziz,  50300, Kuala Lumpur, Malaysia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
