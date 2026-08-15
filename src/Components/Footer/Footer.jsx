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
import kgLogo from '../../Assets/kawaiigroup.webp';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import ContactInquiry from '../ContactInquiry/ContactInquiry';
import { useLocale } from '../../i18n/LocaleContext';
import './Footer.css';
import { resolveImage } from '../../lib/image';


const Footer = () => {
  const { t, localizedPath } = useLocale();

  const quickLinks = [
    { label: t('nav.home'), href: localizedPath('/') },
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
      <div className="siteFooter__inquiry">
        <ContactInquiry />
      </div>

      <div className="siteFooter__inner">
        <div className="siteFooter__top h-card" itemScope itemType="https://schema.org/Corporation">
          <div className="siteFooter__brand">
            <Link
              href={localizedPath('/')}
              className="siteFooter__logo u-url"
              rel="me"
              itemProp="url"
            >
              <img loading="lazy" decoding="async"
                {...resolveImage(kgLogo)}
                alt="Kawaii Group"
                className="u-photo"
                itemProp="logo"
              />
            </Link>
            <p className="siteFooter__orgName p-name p-org" itemProp="name">
              Kawaii Group Bangladesh
            </p>
            <meta itemProp="legalName" content="Kawaii Group" />
            <meta itemProp="foundingDate" content="1987" />
            <p className="siteFooter__aboutBlurb p-note" itemProp="description">
              {t('footer.aboutBlurb')}
            </p>
            <p className="siteFooter__tagline">{t('footer.tagline')}</p>
            <div className="siteFooter__social">
              <a
                href="https://www.linkedin.com/company/kawaii-group-bd"
                target="_blank"
                rel="noreferrer me"
                aria-label="LinkedIn"
                className="siteFooter__socialLink u-url"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563359894758"
                target="_blank"
                rel="noreferrer me"
                aria-label="Facebook"
                className="siteFooter__socialLink u-url"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://wa.me/8801901850570"
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
              <p className="siteFooter__heading">{t('footer.quickLinks')}</p>
              <ul className="siteFooter__list">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="siteFooter__col siteFooter__col--contact">
              <p className="siteFooter__heading">{t('footer.contactInfo')}</p>
              <ul className="siteFooter__contact">
                <li>
                  <FontAwesomeIcon icon={faPhone} className="siteFooter__icon" />
                  <div>
                    <a href="tel:+8801901850570" className="p-tel" itemProp="telephone">
                      +88 01901850570
                    </a>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="siteFooter__icon" />
                  <a href="mailto:info@kawaiibd.com" className="u-email" itemProp="email">
                    info@kawaiibd.com
                  </a>
                </li>
                <li
                  className="p-adr h-adr"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <FontAwesomeIcon icon={faLocationDot} className="siteFooter__icon" />
                  <a
                    href="https://maps.app.goo.gl/sfL5dbZTL65kB2W19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-street-address"
                    itemProp="streetAddress"
                  >
                    {t('footer.address')}
                  </a>
                  <span className="p-locality" itemProp="addressLocality" hidden>
                    Dhaka
                  </span>
                  <span className="p-postal-code" itemProp="postalCode" hidden>
                    1219
                  </span>
                  <span className="p-country-name" itemProp="addressCountry" hidden>
                    BD
                  </span>
                </li>
              </ul>
            </div>

            <div className="siteFooter__col">
              <p className="siteFooter__heading">{t('footer.servicesTitle')}</p>
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

        <p className="siteFooter__statement">{t('footer.statement')}</p>
      </div>
    </footer>
  );
};

export default Footer;
