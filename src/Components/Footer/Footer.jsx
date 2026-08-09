'use client';

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import kgLogo from '../../Assets/kawaiigroup.png';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useLocale } from '../../i18n/LocaleContext';
import './Footer.css';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const Footer = () => {
  const { t, localizedPath } = useLocale();

  const quickLinks = [
    { label: t('nav.home'), href: localizedPath('/home') },
    { label: t('nav.whoWeAre'), href: localizedPath('/about') },
    { label: t('nav.whatWeDo'), href: localizedPath('/services') },
    { label: t('nav.sisterConcerns'), href: localizedPath('/concerns') },
    { label: t('nav.getInTouch'), href: localizedPath('/contact') },
  ];

  const services = [
    t('footer.services.s1'),
    t('footer.services.s2'),
    t('footer.services.s3'),
    t('footer.services.s4'),
  ];

  return (
    <footer className="siteFooter">
      <div className="siteFooter__inner">
        <div className="siteFooter__top">
          <div className="siteFooter__brand">
            <Link href={localizedPath('/home')} className="siteFooter__logo">
              <img src={getSrc(kgLogo)} alt="Kawaii Group" />
            </Link>
            <p className="siteFooter__tagline">{t('footer.tagline')}</p>
            <div className="siteFooter__social">
              <a
                href="https://www.linkedin.com/company/kawaii-group-bd"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="siteFooter__socialLink"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563359894758"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="siteFooter__socialLink"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://wa.me/8801318304512"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="siteFooter__socialLink"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          <div className="siteFooter__links">
            <div className="siteFooter__col">
              <h3 className="siteFooter__heading">{t('footer.quickLinks')}</h3>
              <ul className="siteFooter__list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="siteFooter__col siteFooter__col--contact">
              <h3 className="siteFooter__heading">{t('footer.contactInfo')}</h3>
              <ul className="siteFooter__contact">
                <li>
                  <FontAwesomeIcon icon={faPhone} className="siteFooter__icon" />
                  <div>
                    <a href="tel:+880255123797">+88 02-55123797</a>
                    <a href="tel:+8801318304512">+88 01318304512</a>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="siteFooter__icon" />
                  <a href="mailto:info@kawaiibd.com">info@kawaiibd.com</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} className="siteFooter__icon" />
                  <a
                    href="https://maps.app.goo.gl/sfL5dbZTL65kB2W19"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('footer.address')}
                  </a>
                </li>
              </ul>
            </div>

            <div className="siteFooter__col">
              <h3 className="siteFooter__heading">{t('footer.servicesTitle')}</h3>
              <ul className="siteFooter__list">
                {services.map((service) => (
                  <li key={service}>
                    <Link href={localizedPath('/services')}>{service}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="siteFooter__divider" />

        <div className="siteFooter__legal">
          <p className="siteFooter__copyright">{t('footer.copyright')}</p>
          <div className="siteFooter__legalRight">
            <Link href={localizedPath('/privacypolicy')}>
              {t('common.privacyPolicy')}
            </Link>
            <LanguageSwitcher isNavbar={false} />
          </div>
        </div>

        <h2 className="siteFooter__statement">{t('footer.statement')}</h2>
      </div>
    </footer>
  );
};

export default Footer;
