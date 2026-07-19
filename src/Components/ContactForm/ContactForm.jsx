import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { NavLink } from 'react-router-dom';

const ContactForm = () => {
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
                'service_4wsiyni', // Replace with your EmailJS service ID
                'template_xqb7qnc', // Replace with your EmailJS template ID
                form.current,
                '8yR8EzSDbegPiW8wx' // Replace with your EmailJS public key
            );

            if (result.text === 'OK') {
                setStatus({
                    success: true,
                    error: false,
                    message: 'Message sent successfully!'
                });
                form.current.reset();
            }
        } catch (error) {
            setStatus({
                success: false,
                error: true,
                message: 'Failed to send message. Please try again.'
            });
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className='main_contact_form'>
            <div className='flex flex-col md:flex-row p-6 md:p-16 items-center md:items-start justify-center gap-6 md:gap-16 self-stretch rounded-lg bg-gray-50'>
                {/* form section  */}
                <div className='flex flex-col items-start gap-10 flex-1 order-2 md:order-1' >
                    {status.message && (
                        <div className={`mb-4 p-4 rounded-md ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {status.message}
                        </div>
                    )}
                    <div className='contactForm'>Reach out today to start a conversation with our team</div>
                    <form
                        ref={form}
                        onSubmit={handleSubmit}
                        className="flex flex-col justify-center items-start gap-4 self-stretch w-full"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            required
                            className="flex w-full px-5 py-3 items-start gap-2.5 self-stretch rounded-md border border-gray-300 bg-[#FCFCFC] text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="flex w-full px-5 py-3 items-start gap-2.5 self-stretch rounded-md border border-gray-300 bg-[#FCFCFC] text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="flex w-full px-5 py-3 items-start gap-2.5 self-stretch rounded-md border border-gray-300 bg-[#FCFCFC] text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="6"
                            required
                            className="flex w-full px-5 py-3 items-start gap-2.5 self-stretch rounded-md border border-gray-300 bg-[#FCFCFC] text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                        />
                        <div className="flex items-center col-span-full">
                            <input id="checkbox1" type="checkbox"
                                className="w-4 h-4 mr-3" />
                            <label for="checkbox1" className="text-sm text-gray-400">You agree to our friendly <NavLink to="/privacypolicy" className="underline">Privacy Policy</NavLink></label>
                        </div>
                        <div className="button_cta">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn_sub"
                            >
                                <div className="btn_text">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mt-[0.35rem]"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>

                    </form>
                </div>
                {/* call and email section  */}
                <div className='flex p-6 md:p-12 flex-col items-start gap-8 flex-1 rounded-[15px] bg-white order-1 md:order-2'>
                    <div className='flex pb-8 justify-center items-start gap-4 self-stretch border-b border-gray-300 text-[#5F6368]'>
                        <div className="flex w-11 h-11 p-3 flex-col justify-center items-center gap-1.5 rounded-full border border-[#5F6368]">
                            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 flex-shrink-0" /></div>
                        <div className="flex flex-col items-start gap-4 flex-1">
                            <div className='className="flex flex-col items-start gap-1 self-stretch"'>
                                <div className='className="font-segoe text-2xl font-bold leading-[60px]"'>Send Us an Email</div>
                                <div className="text-gray-500 font-normal text-[16px] leading-[24px]">We'd love to hear from you! feel free to reach out to us via mail.</div>
                            </div>
                            <div className='flex p-3 px-6 justify-center items-center gap-0.5 rounded-[3px] bg-[#5F6368]'>
                                <div className='flex items-start'>
                                    <div className='text-white font-normal text-[16px] leading-[22px]'>
                                        <a href="mailto:info@kawaiibd.com" target='_blank' rel="noreferrer">info@kawaiibd.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* call  */}
                    <div className='flex pb-8 justify-center items-start gap-4 self-stretch text-[#5F6368]'>
                        <div className="flex w-11 h-11 p-3 flex-col justify-center items-center gap-1.5 rounded-full border border-[#5F6368]">
                            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 flex-shrink-0" /></div>
                        <div className="flex flex-col items-start gap-4 flex-1">
                            <div className='className="flex flex-col items-start gap-1 self-stretch"'>
                                <div className='className="font-segoe text-2xl font-bold leading-[60px]"'>Give Us a Call</div>
                                <div className="text-gray-500 font-normal text-[16px] leading-[24px]">We're here to help! Don't hesitate to reach out to us by phone.</div>
                            </div>
                            <div className='flex p-3 px-6 justify-center items-center gap-0.5 rounded-[3px] bg-[#5F6368]'>
                                <div className='flex items-start'>
                                    <div className='text-white font-normal text-[16px] leading-[22px]'>
                                        <a href="tel:+880255123797">+88 02-55123797</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
