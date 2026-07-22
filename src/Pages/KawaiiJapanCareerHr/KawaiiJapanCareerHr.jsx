import React from 'react';
import Cta from '../../Components/CTA/Cta';
import './KawaiiJapanCareerHr.css';
import { 
  FaBuilding, 
  FaBullseye, 
  FaLightbulb, 
  FaLaptopCode, 
  FaIndustry, 
  FaTshirt, 
  FaPills, 
  FaHospital, 
  FaUniversity, 
  FaShoppingBag, 
  FaHeadset,
  FaCheckCircle,
  FaAward,
  FaUsers
} from 'react-icons/fa';

const KawaiiJapanCareerHr = () => {
  const sectors = [
    { name: "Information Technology (IT)", icon: <FaLaptopCode className="sector-icon" />, desc: "Software engineering, cloud infrastructure, AI development, and IT support." },
    { name: "Manufacturing", icon: <FaIndustry className="sector-icon" />, desc: "Industrial engineering, production management, and precision manufacturing." },
    { name: "Garments & Textiles", icon: <FaTshirt className="sector-icon" />, desc: "Textile engineering, sourcing, design, and supply chain management." },
    { name: "Pharmaceuticals", icon: <FaPills className="sector-icon" />, desc: "Chemical research, quality control, pharmaceutical marketing, and logistics." },
    { name: "Healthcare", icon: <FaHospital className="sector-icon" />, desc: "Clinical staff, healthcare administration, medical technology, and support." },
    { name: "Banking & Financial Services", icon: <FaUniversity className="sector-icon" />, desc: "Financial analysis, risk assessment, digital banking, and asset management." },
    { name: "FMCG", icon: <FaShoppingBag className="sector-icon" />, desc: "Brand management, sales distribution, inventory control, and retail planning." },
    { name: "Business Process Outsourcing (BPO)", icon: <FaHeadset className="sector-icon" />, desc: "Customer service, back-office operations, technical support, and call centers." }
  ];

  return (
    <div className="kjchs-page">
      
      {/* 50/50 Split Screen Hero Section */}
      <div className="split-hero">
        {/* Left Side: For Companies */}
        <div className="split-side left-side" style={{ backgroundImage: `url(${require('../../Assets/kawaii.png')})` }}>
          <div className="split-overlay"></div>
          <div className="split-content-box">
            <h1 className="split-title">
              Driving Your Success<br />in Bangladesh
            </h1>
            <button 
              onClick={() => document.getElementById('companies-section').scrollIntoView({ behavior: 'smooth' })}
              className="split-btn"
            >
              For Companies
            </button>
          </div>
        </div>

        {/* Right Side: For Job Seekers */}
        <div className="split-side right-side" style={{ backgroundImage: `url(${require('../../Assets/career_support.png')})` }}>
          <div className="split-overlay"></div>
          <div className="split-content-box">
            <h1 className="split-title">
              Career Support for Job Seekers<br />in Bangladesh
            </h1>
            <button 
              onClick={() => document.getElementById('candidates-section').scrollIntoView({ behavior: 'smooth' })}
              className="split-btn"
            >
              For Job Seekers
            </button>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="kjchs-overview-sec py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="overview-container bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="overview-text flex-1">
            <span className="badge-jp-bd">Japan–Bangladesh HR Bridge</span>
            <h2 className="section-title mt-4 text-[#0C0C0C] font-bold text-3xl md:text-4xl leading-tight">
              Bridging Talent & Strategic Growth
            </h2>
            <p className="overview-desc mt-6 text-gray-600 text-lg leading-relaxed text-justify">
              In Bangladesh, Kawaii Japan Career & HR Solutions is a renowned career matching and HR solutions company. 
              As a joint venture between Japan and Bangladesh and one of the sister concerns of the Kawaii Group, we specialize in 
              developing and delivering tailored workforce solutions. Acting as a strategic bridge, we connect top talent 
              with growing organizations.
            </p>
            <p className="overview-desc mt-4 text-gray-600 text-lg leading-relaxed text-justify">
              We began the journey of our company in 2025 with a clear objective: to connect talent with the right opportunities 
              and support organizations in building strong, capable teams. We have established connections with over 60 companies till now, 
              focusing on quality, transparency, trust, and long-term relationships.
            </p>
          </div>
          <div className="overview-stats flex-shrink-0 w-full lg:w-80 grid grid-cols-1 gap-6">
            <div className="stat-card p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <span className="stat-num text-4xl font-extrabold text-[#BE1E2D] block">60+</span>
              <span className="stat-lbl text-sm text-gray-500 block mt-2">Partner Companies connected</span>
            </div>
            <div className="stat-card p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center">
              <span className="stat-num text-4xl font-extrabold text-[#0C0C0C] block">2025</span>
              <span className="stat-lbl text-sm text-gray-500 block mt-2">Founded Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section className="kjchs-about-sec py-16 bg-gradient-to-b from-gray-50 to-white px-6 md:px-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="about-graphic flex-1 w-full lg:order-2 flex justify-center">
            <div className="border border-white/10 bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md w-full border border-gray-100 relative">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#FFE9E9] rounded-2xl flex items-center justify-center shadow-lg">
                <FaAward className="text-[#BE1E2D] text-2xl" />
              </div>
              <h3 className="font-bold text-xl text-[#0C0C0C] mb-4">Japanese Work Standards</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify mb-6">
                We are the first HR company in Bangladesh to adopt and implement Japanese technology-driven systems, focusing heavily on:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFE9E9] flex items-center justify-center shrink-0">
                    <span className="text-[#BE1E2D] font-bold text-xs">1</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Ethics & Integrity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <span className="text-[#0c0c0c] font-bold text-xs">2</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Strict Professional Discipline</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFE9E9] flex items-center justify-center shrink-0">
                    <span className="text-[#BE1E2D] font-bold text-xs">3</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Operational Efficiency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                    <span className="text-[#0c0c0c] font-bold text-xs">4</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Mutual Respect & Respect</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text flex-1 lg:order-1">
            <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">About Us</span>
            <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">Bridging Talent and Organizations</h2>
            <div className="h-1 w-16 bg-[#BE1E2D] mt-4 mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed text-justify mb-4">
              We founded Kawaii Japan Career & HR Solutions BD with the belief that recruitment is not just about filling positions, but rather it is about creating the right match between people and organizations. We provide services with equal attention and priority to both employers and job seekers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              We take the time to understand both employers and candidates, because we believe that every organization is unique and every individual has unique potential. We provide the full range of solutions related to recruitment, staffing, HR, IT, legal, and sustainability that a company needs.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="kjchs-vision-mission py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="vision-card bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-start">
            <div className="icon-wrapper bg-[#FFE9E9] p-4 rounded-2xl mb-6">
              <FaBullseye className="text-2xl text-[#BE1E2D]" />
            </div>
            <h3 className="card-title text-2xl font-bold text-[#0C0C0C]">Our Vision</h3>
            <p className="card-text text-gray-600 mt-4 leading-relaxed text-justify">
              Our goal is to become a trusted human resources and career solutions partner not only in Bangladesh but globally. We want to be known as the best for creating meaningful and lasting connections between organizations and talent.
            </p>
          </div>

          {/* Mission */}
          <div className="mission-card bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-start">
            <div className="icon-wrapper bg-gray-100 p-4 rounded-2xl mb-6">
              <FaLightbulb className="text-2xl text-[#0C0C0C]" />
            </div>
            <h3 className="card-title text-2xl font-bold text-[#0C0C0C]">Our Mission</h3>
            <p className="card-text text-gray-600 mt-4 leading-relaxed text-justify">
              Our mission is to provide reliable and customized HR solutions that help organizations grow and individuals develop their careers. We strive to maintain transparency, professionalism, and consistency in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Section: FOR COMPANIES / EMPLOYERS */}
      <section id="companies-section" className="kjchs-detail-section py-20 bg-gray-50 border-t border-gray-100 px-6 md:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="flex-1">
              <span className="badge-jp-bd">For Employers</span>
              <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-4">Driving Your Success in Bangladesh</h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify mt-6">
                We help organizations in building strong, efficient, and effective teams. Our goal is to reduce hiring time, improve candidate quality, and support business growth through reliable workforce solutions.
              </p>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <img 
                src={require('../../Assets/kawaii.png')} 
                alt="Corporate Success" 
                className="w-full max-w-lg rounded-3xl shadow-lg object-cover h-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#0c0c0c] mb-6 border-b pb-4">Our Services</h3>
              <ul className="space-y-4">
                {[
                  "End-to-end recruitment and talent acquisition",
                  "Permanent, temporary, and contract staffing solutions",
                  "Executive search and mid-level hiring",
                  "HR consulting and organizational development",
                  "IT-enabled HR systems and workforce solutions",
                  "Legal and compliance support",
                  "Sustainable workforce planning"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <FaCheckCircle className="text-[#BE1E2D] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-[#0c0c0c] mb-3">Our Expertise</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  We understand that every organization has unique and different hiring needs and requirements. Our expertise lies in identifying the candidates who not only meet the job requirements but also fit the company’s culture and long-term goals. We work across a variety of industries and focus on maintaining a well-organized and efficient recruitment process.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-[#0c0c0c] mb-3">Our Philosophy</h3>
                <blockquote className="border-l-4 border-[#BE1E2D] pl-4 italic text-sm text-gray-600">
                  "We believe that the success of an organization depends on the quality of its employees. That's why we focus on building strong connections between companies by finding the right talent."
                </blockquote>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0c0c0c] mb-4">Our Working Process</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
                Our process is designed to make the hiring process simple and effective.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFE9E9] text-[#BE1E2D] font-bold text-sm flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0C0C0C]">Understanding Requirements</h4>
                    <p className="text-xs text-gray-500 mt-1">We study your specific requirements, such as skills, experience, and organizational culture.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFE9E9] text-[#BE1E2D] font-bold text-sm flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0C0C0C]">Source & Select</h4>
                    <p className="text-xs text-gray-500 mt-1">We carefully source and select candidates, ensuring that only the most suitable profiles are presented.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFE9E9] text-[#BE1E2D] font-bold text-sm flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0C0C0C]">Interview & Onboarding</h4>
                    <p className="text-xs text-gray-500 mt-1">After coordinating interviews and assisting in selection, we follow up regularly to ensure a smooth onboarding.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0c0c0c] mb-4">Why Choose Us</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
                Employers choose Kawaii Japan Career & HR Solutions BD as it is the first HR company to adopt and follow Japanese technology-driven systems.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Our main focus is quality and reliability, not quantity. We do not believe in sending a large number of candidates; rather, we focus on delivering the right candidates who match the requirements. We provide comprehensive manpower solutions across operational, technical, and managerial levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Section: FOR CANDIDATES / JOB SEEKERS */}
      <section id="candidates-section" className="kjchs-detail-section py-20 bg-white border-t border-gray-100 px-6 md:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="flex-1 lg:order-2">
              <span className="badge-jp-bd">For Job Seekers</span>
              <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-4">Career Support for Job Seekers in Bangladesh</h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify mt-6">
                We support individuals in building successful and meaningful careers. We ensure that candidates are placed in roles that match their skills, goals, and long-term career aspirations.
              </p>
            </div>
            <div className="flex-1 w-full lg:order-1 flex justify-center">
              <img 
                src={require('../../Assets/career_support.png')} 
                alt="Candidate Guidance" 
                className="w-full max-w-lg rounded-3xl shadow-lg object-cover h-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#0c0c0c] mb-6 border-b pb-4">Our Services</h3>
              <ul className="space-y-4">
                {[
                  "Career matching with top companies",
                  "Access to verified and quality job opportunities",
                  "Career guidance and professional support",
                  "CV and resume development",
                  "Interview preparation",
                  "Skill-based job placement across industries",
                  "Transparent and structured recruitment process",
                  "Continuous support throughout the hiring journey"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <FaCheckCircle className="text-[#BE1E2D] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-[#0c0c0c] mb-3">Our Expertise</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  We understand that every individual has different skills, interests, career goals, and strengths. Our expertise lies in guiding candidates toward opportunities that match their skills, interests, and long-term aspirations. We focus on helping job seekers, providing step-by-step guidelines.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100 flex-1">
                <h3 className="text-lg font-bold text-[#0c0c0c] mb-3">Our Philosophy</h3>
                <blockquote className="border-l-4 border-[#BE1E2D] pl-4 italic text-sm text-gray-600">
                  "We believe that every individual has potential and that the right opportunity can shape their future. Our philosophy is to guide and support candidates in such a way that helps them grow with confidence."
                </blockquote>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0c0c0c] mb-4">Our Working Process</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6">
                The main goal of our process is to help you move forward with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFE9E9] text-[#BE1E2D] font-bold text-sm flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0C0C0C]">Understand Background</h4>
                    <p className="text-xs text-gray-500 mt-1">We start by understanding your background, skills, interests, and career goals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFE9E9] text-[#BE1E2D] font-bold text-sm flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0C0C0C]">CV Optimization & Mock Interviews</h4>
                    <p className="text-xs text-gray-500 mt-1">We guide you to optimize your CV and prepare you for interviews to present yourself effectively.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFE9E9] text-[#BE1E2D] font-bold text-sm flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0C0C0C]">Onboarding & Support</h4>
                    <p className="text-xs text-gray-500 mt-1">We stay in touch even after you join the job to ensure you adapt well to your new role.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#0c0c0c] mb-4">Why Choose Us</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify mb-4">
                Job seekers choose us because we provide real guidance and support. We take the time to understand your goals and help you get on the right track.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                From freshers to experienced, we guide each candidate with equal importance and care. We focus on realistic steps rather than making unrealistic promises, increasing your chances of success. We remain updated always as per market demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Sectors Grid */}
      <section className="kjchs-sectors py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">Serving Sectors</span>
          <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">Sectors We Serve</h2>
          <div className="h-1 w-16 bg-[#BE1E2D] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto">
            We serve a diverse range of industries at Kawaii Japan Career & HR Solutions BD. Our experience across these sectors enables us to identify the right talent based on industry-specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sec, idx) => (
            <div key={idx} className="sector-card bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-[#FFE9E9] transition-all duration-300 flex flex-col group">
              <div className="sector-icon-box mb-4 p-3 rounded-xl bg-gray-50 group-hover:bg-[#FFE9E9] text-[#BE1E2D] transition-colors duration-300 w-fit">
                {sec.icon}
              </div>
              <h3 className="sector-title font-bold text-sm text-[#0C0C0C] mb-2 group-hover:text-[#BE1E2D] transition-colors duration-300">
                {sec.name}
              </h3>
              <p className="sector-desc text-xs text-gray-500 leading-relaxed text-justify">
                {sec.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="kjchs-achievements py-16 bg-gradient-to-b from-white to-gray-50 px-6 md:px-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">Milestones</span>
          <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">Our Achievements</h2>
          <div className="h-1 w-16 bg-[#BE1E2D] mx-auto mt-4 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="achievement-card bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
              <div className="w-12 h-12 rounded-full bg-[#FFE9E9] flex items-center justify-center mx-auto mb-4 text-[#BE1E2D]">
                <FaBuilding className="text-xl" />
              </div>
              <span className="block text-4xl font-extrabold text-[#BE1E2D]">60+</span>
              <span className="block text-sm font-bold text-[#0C0C0C] mt-2">Corporate Partnerships</span>
              <p className="text-xs text-gray-500 mt-1">Successfully built partnerships with over 60 local and international companies.</p>
            </div>
            
            <div className="achievement-card bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-[#0c0c0c]">
                <FaUsers className="text-xl" />
              </div>
              <span className="block text-4xl font-extrabold text-[#0C0C0C]">Growing</span>
              <span className="block text-sm font-bold text-[#0C0C0C] mt-2">Talent Network</span>
              <p className="text-xs text-gray-500 mt-1">Establishing a growing network of employers and job seekers.</p>
            </div>

            <div className="achievement-card bg-white p-8 rounded-3xl shadow-lg border border-gray-50">
              <div className="w-12 h-12 rounded-full bg-[#FFE9E9] flex items-center justify-center mx-auto mb-4 text-[#BE1E2D]">
                <FaAward className="text-xl" />
              </div>
              <span className="block text-4xl font-extrabold text-[#BE1E2D]">Pioneer</span>
              <span className="block text-sm font-bold text-[#0C0C0C] mt-2">Japanese Ethics</span>
              <p className="text-xs text-gray-500 mt-1">Built on a strong foundation of ethics, discipline, and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <Cta 
        title="Ready to Build a Strong Team or Elevate Your Career?" 
        text="Whether you are an employer seeking skilled talent or a job seeker pursuing international pathways, let's connect."
        backgroundImage={require('../../Assets/bonding.png')} 
      />
    </div>
  );
};

export default KawaiiJapanCareerHr;
