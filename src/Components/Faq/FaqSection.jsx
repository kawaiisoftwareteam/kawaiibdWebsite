'use client';

import React, { useState } from 'react';
import './FaqSection.css';
import { useLocale } from '../../i18n/LocaleContext';
import { getFaqData } from '../../Data/faqData';
import { getFaqJsonLd } from '../../lib/seo';
import { LdScript } from '../Seo/JsonLd';

export default function FaqSection() {
  const { locale } = useLocale();
  const faqs = getFaqData(locale);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const faqSchema = getFaqJsonLd(faqs);

  const sectionTitles = {
    en: {
      tag: 'Frequently Asked Questions',
      title: 'Common Questions About Kawaii Group',
      subtitle:
        'Everything you need to know about our Japan-Bangladesh joint ventures, talent placement, BIM education, and corporate services.',
    },
    bn: {
      tag: 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী',
      title: 'কাওয়াই গ্রুপ সম্পর্কিত সাধারণ প্রশ্ন',
      subtitle:
        'আমাদের জাপান-বাংলাদেশ যৌথ উদ্যোগ, কর্মী নিয়োগ, BIM শিক্ষা ও কর্পোরেট সেবা সম্পর্কে বিস্তারিত জানুন।',
    },
    ja: {
      tag: 'よくあるご質問',
      title: 'カワイグループに関するFAQ',
      subtitle:
        '日本・バングラデシュ合弁事業、人材紹介・育成、BIM教育、企業向けサービスについてご案内します。',
    },
  };

  const currentText = sectionTitles[locale] || sectionTitles.en;

  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      {faqSchema && <LdScript id="ld-faq-schema" data={faqSchema} />}
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">{currentText.tag}</span>
          <h2 id="faq-title" className="faq-title">
            {currentText.title}
          </h2>
          <p className="faq-subtitle">{currentText.subtitle}</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {isOpen ? (
                        <line x1="5" y1="12" x2="19" y2="12" />
                      ) : (
                        <>
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </>
                      )}
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`faq-answer-wrapper ${isOpen ? 'show' : ''}`}
                >
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
