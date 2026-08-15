'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import Link from 'next/link';
import { useLocale } from '../../i18n/LocaleContext';

const ContactForm = () => {
    const { t, localizedPath } = useLocale();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({
        success: false,
        error: false,
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ success: false, error: false, message: '' });

        try {
            const result = await emailjs.sendForm(
                'service_4wsiyni',
                'template_xqb7qnc',
                form.current,
                '8yR8EzSDbegPiW8wx'
            );

            if (result.text === 'OK') {
                setStatus({
                    success: true,
                    error: false,
                    message: t('contact.form.success')
                });
                form.current.reset();
            }
        } catch (error) {
            setStatus({
                success: false,
                error: true,
                message: t('contact.form.error')
            });
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact_section_wrapper">
            {/* Watermark Header & Title */}
            <div className="contact_header_container">
                <div className="contact_watermark">{t('contact.inquiry.title') || 'CONTACT'}</div>
                <h1 className="contact_title">{t('contact.header') || 'Get in Touch'}</h1>
                <p className="contact_subtitle">{t('contact.form.lead')}</p>
            </div>

            <div className="contact_intro">
                <p className="contact_intro_text">{t('contact.intro.p1')}</p>
                <p className="contact_intro_text">{t('contact.intro.p2')}</p>
                <h2 className="contact_intro_heading">{t('contact.intro.topicsTitle')}</h2>
                <ul className="contact_intro_list">
                    {(t('contact.intro.topics') || []).map((topic, i) => (
                        <li key={i}>{topic}</li>
                    ))}
                </ul>
                <h3 className="contact_intro_heading">{t('contact.intro.hoursTitle')}</h3>
                <p className="contact_intro_text contact_intro_hours">{t('contact.intro.hoursBd')}</p>
                <p className="contact_intro_text contact_intro_hours">{t('contact.intro.hoursJp')}</p>
                <div className="contact_intro_offices">
                    <div>
                        <h3 className="contact_intro_office_title">{t('contact.inquiry.bd.title')}</h3>
                        <p className="contact_intro_text">{t('contact.inquiry.bd.address')}</p>
                    </div>
                    <div>
                        <h3 className="contact_intro_office_title">{t('contact.inquiry.jp.title')}</h3>
                        <p className="contact_intro_text">{t('contact.inquiry.jp.address')}</p>
                    </div>
                </div>
            </div>

            {/* Main Form Container */}
            <div className="contact_form_card">
                {status.message && (
                    <div className={`status_message ${status.success ? 'status_success' : 'status_error'}`}>
                        {status.message}
                    </div>
                )}

                <form ref={form} onSubmit={handleSubmit} className="contact_form">
                    {/* Row 1: Name */}
                    <div className="form_row">
                        <div className="form_label_col">
                            <label className="form_label" htmlFor="user_name">
                                {t('contact.form.name')}
                            </label>
                            <span className="badge_required">{t('contact.form.required') || 'Required'}</span>
                        </div>
                        <div className="form_input_col">
                            <input
                                id="user_name"
                                type="text"
                                name="user_name"
                                placeholder={t('contact.form.namePlaceholder') || "Example: John Doe"}
                                required
                                className="form_input"
                            />
                        </div>
                    </div>

                    {/* Row 2: Email */}
                    <div className="form_row">
                        <div className="form_label_col">
                            <label className="form_label" htmlFor="user_email">
                                {t('contact.form.email')}
                            </label>
                            <span className="badge_required">{t('contact.form.required') || 'Required'}</span>
                        </div>
                        <div className="form_input_col">
                            <input
                                id="user_email"
                                type="email"
                                name="user_email"
                                placeholder={t('contact.form.emailPlaceholder') || "Example: your@example.com"}
                                required
                                className="form_input"
                            />
                        </div>
                    </div>

                    {/* Row 3: Subject */}
                    <div className="form_row">
                        <div className="form_label_col">
                            <label className="form_label" htmlFor="subject">
                                {t('contact.form.subject')}
                            </label>
                            <span className="badge_required">{t('contact.form.required') || 'Required'}</span>
                        </div>
                        <div className="form_input_col">
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                placeholder={t('contact.form.subjectPlaceholder') || "Example: Business Inquiry"}
                                required
                                className="form_input"
                            />
                        </div>
                    </div>

                    {/* Row 4: Message */}
                    <div className="form_row form_row_textarea">
                        <div className="form_label_col">
                            <label className="form_label" htmlFor="message">
                                {t('contact.form.message')}
                            </label>
                            <span className="badge_required">{t('contact.form.required') || 'Required'}</span>
                        </div>
                        <div className="form_input_col">
                            <textarea
                                id="message"
                                name="message"
                                placeholder={t('contact.form.messagePlaceholder') || "Please enter your message freely."}
                                rows="6"
                                required
                                className="form_input form_textarea"
                            />
                        </div>
                    </div>

                    {/* Privacy Agreement Section */}
                    <div className="privacy_agreement_section">
                        <p className="privacy_review_text">
                            {t('contact.form.privacyReview') || 'Please review the Privacy Policy and check the "I agree" box.'}
                        </p>
                        <div className="privacy_checkbox_row">
                            <input
                                id="checkbox1"
                                type="checkbox"
                                required
                                className="privacy_checkbox"
                            />
                            <label htmlFor="checkbox1" className="privacy_label">
                                {t('contact.form.privacyAgree')}{' '}
                                <Link href={localizedPath('/privacypolicy')} className="privacy_link">
                                    {t('common.privacyPolicy')}
                                </Link>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="form_submit_wrapper">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="submit_btn"
                        >
                            <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.send')}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            {/* Side / Bottom Contact Info Cards */}
            <div className="contact_cards_container">
                <div className="contact_card">
                    <div className="contact_card_icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="contact_card_content">
                        <h3 className="contact_card_title">{t('contact.side.emailTitle')}</h3>
                        <p className="contact_card_body">{t('contact.side.emailBody')}</p>
                        <a href="mailto:info@kawaiibd.com" target="_blank" rel="noreferrer" className="contact_card_link">
                            info@kawaiibd.com
                        </a>
                    </div>
                </div>

                <div className="contact_card">
                    <div className="contact_card_icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="contact_card_content">
                        <h3 className="contact_card_title">{t('contact.side.callTitle')}</h3>
                        <p className="contact_card_body">{t('contact.side.callBody')}</p>
                        <a href="tel:+8801901850570" className="contact_card_link">
                            +88 01901850570
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
