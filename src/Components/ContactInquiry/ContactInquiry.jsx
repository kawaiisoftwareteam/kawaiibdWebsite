'use client';

import React from 'react';
import Link from 'next/link';
import './ContactInquiry.css';
import { useLocale } from '../../i18n/LocaleContext';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="22,6 12,13 2,6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const FormMailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="22,6 12,13 2,6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactInquiry = () => {
  const { t, localizedPath } = useLocale();

  const getText = (key, fallback) => {
    const val = t(key);
    if (!val || typeof val !== 'string' || val === key) return fallback;
    return val;
  };

  const title = getText('contact.inquiry.title', 'CONTACT');
  const label = getText('contact.inquiry.label', 'inquiry');
  const formBtn = getText('contact.inquiry.formBtn', 'Contact Form');
  const emailHint = getText(
    'contact.inquiry.emailHint',
    'For inquiries via email, please click here.'
  );

  const bdTitle = getText('contact.inquiry.bd.title', 'Bangladesh Office:');
  const jpTitle = getText('contact.inquiry.jp.title', 'Japan Office:');
  const bdAddress = getText(
    'contact.inquiry.bd.address',
    'Suite-2A, House # 11, Block-B, Main Road, Banasree, Rampura, Dhaka-1219'
  );
  const jpAddress = getText(
    'contact.inquiry.jp.address',
    'ITO Daikanyama 1F, 2-17-8 Ebisu-Nishi, Shibuya-ku, Tokyo 150-0021, Japan'
  );

  const offices = [
    {
      key: 'bd',
      title: bdTitle,
      phones: [
        { display: '+88 02-55123797', href: 'tel:+880255123797' },
        { display: '+88 01318304512', href: 'tel:+8801318304512' },
      ],
      email: { display: 'info@kawaiibd.com', href: 'mailto:info@kawaiibd.com' },
      address: bdAddress,
      mapHref: 'https://maps.app.goo.gl/sfL5dbZTL65kB2W19',
    },
    {
      key: 'jp',
      title: jpTitle,
      phones: [{ display: '+81 03-4363-5903', href: 'tel:+81343635903' }],
      email: { display: 'japan@achievejapan.com', href: 'mailto:japan@achievejapan.com' },
      address: jpAddress,
      mapHref: 'https://www.google.com/maps/search/?api=1&query=ITO+Daikanyama,+2-17-8+Ebisu-Nishi,+Shibuya-ku,+Tokyo+150-0021,+Japan',
    },
  ];

  return (
    <section className="contactInquiry" aria-labelledby="contact-inquiry-title">
      <div className="contactInquiry__inner">
        <h2 id="contact-inquiry-title" className="contactInquiry__title">
          {title}
        </h2>

        <div className="contactInquiry__box">
          <p className="contactInquiry__label">{label}</p>

          <div className="contactInquiry__offices">
            {offices.map((office, idx) => (
              <React.Fragment key={office.key}>
                {idx > 0 && (
                  <div className="contactInquiry__divider" aria-hidden="true" />
                )}
                <div className="contactInquiry__office">
                  <h3 className="contactInquiry__officeTitle">{office.title}</h3>

                  <ul className="contactInquiry__details">
                    {office.phones.map((phone) => (
                      <li key={phone.href}>
                        <a className="contactInquiry__detailLink" href={phone.href}>
                          <span className="contactInquiry__detailIcon">
                            <PhoneIcon />
                          </span>
                          <span>{phone.display}</span>
                        </a>
                      </li>
                    ))}
                    <li>
                      <a className="contactInquiry__detailLink" href={office.email.href}>
                        <span className="contactInquiry__detailIcon">
                          <MailIcon />
                        </span>
                        <span>{office.email.display}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="contactInquiry__detailLink contactInquiry__detailLink--address"
                        href={office.mapHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="contactInquiry__detailIcon">
                          <PinIcon />
                        </span>
                        <span>{office.address}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="contactInquiry__cta">
            <p className="contactInquiry__hint">{emailHint}</p>
            <Link
              href={localizedPath('/contact')}
              className="contactInquiry__formBtn"
            >
              <span className="contactInquiry__formIcon">
                <FormMailIcon />
              </span>
              <span>{formBtn}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInquiry;
