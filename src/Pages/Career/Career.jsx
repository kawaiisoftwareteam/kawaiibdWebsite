import React, { useState } from 'react';
import './Career.css';
import { FaQrcode, FaExternalLinkAlt, FaPaperPlane, FaUserGraduate } from 'react-icons/fa';
import careerBannerBg from '../../Assets/career_banner_bg.png';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScxaTYfsYRfxgzFLqBdYQSMEc8wrtqrFolZdrO0clkU2QISQg/viewform";
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLScxaTYfsYRfxgzFLqBdYQSMEc8wrtqrFolZdrO0clkU2QISQg/viewform?embedded=true";
const QR_CODE_API = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(GOOGLE_FORM_URL)}`;

const Career = () => {
  const [iframeLoading, setIframeLoading] = useState(true);

  return (
    <div className="career-page-container">
      {/* Top Hero Section with Large Typography */}
      <section 
        className="career-hero"
        style={{ backgroundImage: `url(${careerBannerBg})` }}
      >
        <div className="career-hero-overlay"></div>
        <div className="career-hero-content">
          <span className="career-badge">
            <FaUserGraduate className="inline-block mr-2" /> JOIN OUR TEAM
          </span>
          <h1 className="career-main-title">
            CAREER APPLICATION
          </h1>
          <p className="career-sub-title">
            Fill out the form below or scan the QR code to submit your application.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="career-main-wrapper">
        <div className="career-content-grid">
          
          {/* QR Code & Quick Action Sidebar */}
          <aside className="career-qr-card">
            <div className="qr-card-inner">
              <div className="qr-icon-header">
                <FaQrcode className="text-3xl text-[#BE1E2D]" />
                <h3 className="qr-card-title">Apply via Smartphone</h3>
              </div>
              
              <div className="qr-image-container">
                <img 
                  src={QR_CODE_API} 
                  alt="Scan QR Code to Open Google Form" 
                  className="qr-code-img"
                  loading="lazy"
                />
              </div>

              <div className="qr-card-instructions">
                <p className="qr-scan-text">
                  Scan this QR code using your mobile phone camera to open the application form directly.
                </p>
              </div>

              <a 
                href={GOOGLE_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="direct-form-btn"
              >
                <span>Open Form in New Tab</span>
                <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </div>
          </aside>

          {/* Embedded Google Form Section */}
          <main className="career-form-card">
            <div className="form-card-header">
              <h2 className="form-section-heading">Application Form</h2>
              <span className="form-status-tag">
                <FaPaperPlane className="mr-1 text-xs" /> Official Form
              </span>
            </div>

            <div className="iframe-wrapper">
              {iframeLoading && (
                <div className="iframe-loader">
                  <div className="spinner"></div>
                  <p className="loader-text">Loading Form...</p>
                </div>
              )}
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                title="Career Application Google Form"
                className="google-form-iframe"
                onLoad={() => setIframeLoading(false)}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Career;
