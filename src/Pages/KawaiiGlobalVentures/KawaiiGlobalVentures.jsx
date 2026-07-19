import React from 'react';
import HeaderContact from '../../Components/HeaderContact/HeaderContact';
import Cta from '../../Components/CTA/Cta';
import './KawaiiGlobalVentures.css';
import { 
  FaHandshake, 
  FaUserGraduate, 
  FaLaptopCode, 
  FaGlobe, 
  FaChartLine, 
  FaBuilding, 
  FaBullseye, 
  FaLightbulb, 
  FaUserTie, 
  FaAward, 
  FaShieldAlt, 
  FaSync 
} from 'react-icons/fa';

const KawaiiGlobalVentures = () => {
  const services = [
    {
      icon: <FaHandshake className="service-icon text-[#BE1E2D]" />,
      title: "Business & Investment Consultancy",
      description: "Providing strategic entry guides, investment match-making, market intelligence, and regulatory facilitation for companies navigating the Japan-Bangladesh corridor."
    },
    {
      icon: <FaUserGraduate className="service-icon text-[#BE1E2D]" />,
      title: "Human Resource Development & International Workforce Solutions",
      description: "Bridging the skill gap by training and preparing talented professionals from Bangladesh to excel in Japanese and international enterprise environments."
    },
    {
      icon: <FaUserGraduate className="service-icon text-[#BE1E2D]" />,
      title: "Education, Language Training & Global Learning",
      description: "Delivering certified Japanese language programs, cultural workshops, and academic alignment to prepare students and professionals for international success."
    },
    {
      icon: <FaLaptopCode className="service-icon text-[#BE1E2D]" />,
      title: "Technology & Digital Transformation",
      description: "Facilitating tech exchange, collaborative software engineering projects, offshore development teams, and integration of cutting-edge Japanese technological standards."
    },
    {
      icon: <FaGlobe className="service-icon text-[#BE1E2D]" />,
      title: "International Trade & Business Facilitation",
      description: "Streamlining export-import structures, trade partnerships, logistics solutions, and administrative clearances between Japan, Bangladesh, and global trade channels."
    },
    {
      icon: <FaChartLine className="service-icon text-[#BE1E2D]" />,
      title: "Strategic Projects & Industry Support",
      description: "Offering end-to-end support for large-scale infrastructure projects, public-private partnerships, and industrial alignments that foster mutual economic growth."
    }
  ];

  const leaders = [
    {
      name: "Junji Ueda",
      role: "Chairman",
      region: "Japan",
      initials: "JU",
      description: "Providing executive oversight and fostering high-level relationships with Japanese corporate leaders and government stakeholders."
    },
    {
      name: "S. M. Zillur Rahman",
      role: "Vice Chairman",
      region: "Bangladesh",
      initials: "ZR",
      description: "Guiding the strategic framework and local collaboration partnerships across industrial and business sectors in Bangladesh."
    },
    {
      name: "Dewan Samir",
      role: "Managing Director",
      region: "Bangladesh",
      initials: "DS",
      description: "Driving the corporate strategy, execution of joint ventures, and alignment with the broader Kawaii Group vision."
    },
    {
      name: "Iqbal Hossain",
      role: "CEO",
      region: "Bangladesh",
      initials: "IH",
      description: "Managing daily operational activities, client relationships, and business development across all core service divisions."
    },
    {
      name: "Md. Shafi Uddin",
      role: "CFO",
      region: "Bangladesh",
      initials: "SU",
      description: "Directing the financial strategies, compliance, joint venture structuring, and budget management systems."
    }
  ];

  return (
    <div className="kgvl-page">
      <HeaderContact 
        text="Kawaii Global Ventures" 
        backgroundImage={require('../../Assets/sisterconcernCover.png')} 
      />

      {/* Overview Hero Section */}
      <section className="kgvl-overview-sec py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="overview-container bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
          <div className="overview-text flex-1">
            <span className="badge-jp-bd">Japan–Bangladesh Joint Venture</span>
            <h2 className="section-title mt-4 text-[#0C0C0C] font-bold text-3xl md:text-4xl leading-tight">
              Bridging Opportunities Across Borders
            </h2>
            <p className="overview-desc mt-6 text-gray-600 text-lg leading-relaxed text-justify">
              Kawaii Global Ventures Limited is a premier Japan–Bangladesh joint venture established under the Companies Act, 1994. 
              We act as a strategic catalyst promoting business partnerships, investments, human resource development, 
              education, technology exchange, and international collaboration between Bangladesh, Japan, and global markets.
            </p>
            <div className="overview-stats grid grid-cols-2 gap-6 mt-8">
              <div className="stat-card p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="stat-num text-3xl font-extrabold text-[#BE1E2D]">1994</span>
                <span className="stat-lbl text-xs text-gray-500 block mt-1">Established under Companies Act</span>
              </div>
              <div className="stat-card p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="stat-num text-3xl font-extrabold text-[#0C0C0C]">6+</span>
                <span className="stat-lbl text-xs text-gray-500 block mt-1">Core Professional Services</span>
              </div>
            </div>
          </div>
          <div className="overview-graphic flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src={require('../../Assets/jpBusinessCenter.png')} 
                alt="Tokyo Business Center" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Global Business Hub</h3>
                <p className="text-gray-200 text-xs mt-1">Connecting the business landscapes of Dhaka and Tokyo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="kgvl-vision-mission py-16 bg-gradient-to-b from-gray-50 to-white px-6 md:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="vision-card bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
            <div className="icon-wrapper bg-[#FFE9E9] p-4 rounded-2xl mb-6">
              <FaBullseye className="text-2xl text-[#BE1E2D]" />
            </div>
            <h3 className="card-title text-2xl font-bold text-[#0C0C0C]">Our Vision</h3>
            <p className="card-text text-gray-600 mt-4 leading-relaxed text-justify">
              To become a leading Bangladesh–Japan partnership platform for business growth, investment, education, 
              technology transfer, and sustainable economic cooperation.
            </p>
          </div>

          {/* Mission */}
          <div className="mission-card bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
            <div className="icon-wrapper bg-gray-100 p-4 rounded-2xl mb-6">
              <FaLightbulb className="text-2xl text-[#0C0C0C]" />
            </div>
            <h3 className="card-title text-2xl font-bold text-[#0C0C0C]">Our Mission</h3>
            <p className="card-text text-gray-600 mt-4 leading-relaxed text-justify">
              To connect people, organizations, and opportunities through consultancy, workforce development, 
              education support, business facilitation, and international collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="kgvl-services py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">What We Offer</span>
          <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">Core Services</h2>
          <div className="h-1 w-16 bg-[#BE1E2D] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card bg-white p-8 rounded-3xl shadow-md hover:shadow-xl border border-gray-100 hover:border-[#FFE9E9] transition-all duration-300 flex flex-col group">
              <div className="service-icon-box mb-6 p-4 rounded-2xl bg-gray-50 group-hover:bg-[#FFE9E9] transition-colors duration-300 w-fit">
                {svc.icon}
              </div>
              <h3 className="service-title font-bold text-lg text-[#0C0C0C] mb-3 group-hover:text-[#BE1E2D] transition-colors duration-300">
                {svc.title}
              </h3>
              <p className="service-desc text-sm text-gray-600 leading-relaxed text-justify flex-1">
                {svc.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Board */}
      <section className="kgvl-leadership py-16 bg-gradient-to-b from-white to-gray-50 px-6 md:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-subtitle-red text-sm font-bold uppercase tracking-wider text-[#BE1E2D] block">Executive Board</span>
            <h2 className="section-title text-[#0C0C0C] font-bold text-3xl md:text-4xl mt-2">Leadership Team</h2>
            <div className="h-1 w-16 bg-[#BE1E2D] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
            {leaders.map((leader, idx) => (
              <div key={idx} className="leader-card bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col items-center text-center transition-all duration-300">
                <div className="leader-avatar w-16 h-16 rounded-full bg-gradient-to-tr from-[#BE1E2D] to-red-500 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-inner">
                  {leader.initials}
                </div>
                <h4 className="leader-name font-bold text-[#0C0C0C] text-base leading-tight">
                  {leader.name}
                </h4>
                <p className="leader-role text-xs font-semibold text-[#BE1E2D] mt-1">
                  {leader.role}
                </p>
                {leader.region && (
                  <span className="leader-region text-[10px] text-gray-400 bg-gray-100 py-0.5 px-2 rounded-full mt-2">
                    {leader.region}
                  </span>
                )}
                <p className="leader-desc text-[11px] text-gray-500 mt-4 leading-relaxed border-t border-gray-50 pt-3">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="kgvl-commitment py-16 px-6 md:px-32 max-w-7xl mx-auto">
        <div className="commitment-box bg-gradient-to-r from-[#0C0C0C] to-[#2A2A2A] text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          {/* Decorative design assets */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BE1E2D]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="commitment-text flex-1 z-10">
            <span className="text-[#BE1E2D] uppercase font-bold tracking-widest text-xs">Our Commitment</span>
            <h2 className="text-3xl font-extrabold mt-3">Professionalism, Transparency, and Innovation</h2>
            <p className="text-gray-300 mt-6 text-sm leading-relaxed text-justify">
              We are committed to delivering sustainable value for businesses, professionals, students, investors, 
              and institutions across Japan and Bangladesh. By adhering to the highest standards of governance and 
              leveraging cross-border alliances, we turn collaboration into tangible success.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <FaAward className="text-[#BE1E2D] text-lg" />
                <span className="text-xs font-medium">Uncompromised Value</span>
              </div>
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-[#BE1E2D] text-lg" />
                <span className="text-xs font-medium">Full Transparency</span>
              </div>
              <div className="flex items-center gap-3">
                <FaSync className="text-[#BE1E2D] text-lg" />
                <span className="text-xs font-medium">Continuous Innovation</span>
              </div>
              <div className="flex items-center gap-3">
                <FaUserTie className="text-[#BE1E2D] text-lg" />
                <span className="text-xs font-medium">Expert Leadership</span>
              </div>
            </div>
          </div>
          <div className="commitment-icon-graphic lg:w-1/3 flex justify-center z-10">
            <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center w-64 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-[#BE1E2D] flex items-center justify-center mx-auto mb-4">
                <FaBuilding className="text-white text-lg" />
              </div>
              <h4 className="font-bold text-sm">Kawaii Global Ventures</h4>
              <p className="text-gray-400 text-xs mt-1">Joint Venture Entity</p>
              <div className="h-[1px] bg-white/10 my-4"></div>
              <span className="text-[10px] text-[#BE1E2D] bg-[#BE1E2D]/10 py-1 px-3 rounded-full font-bold">
                ESTD. COMPANIES ACT 1994
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <Cta 
        title="Looking for a Strategic Partner in Japan-Bangladesh Collaboration?" 
        text="Whether you are an investor, enterprise, or training institute, let's explore opportunities together."
        backgroundImage={require('../../Assets/bonding.png')} 
      />
    </div>
  );
};

export default KawaiiGlobalVentures;
