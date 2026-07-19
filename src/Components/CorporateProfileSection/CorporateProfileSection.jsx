import React from 'react'
import './CorporateProfileSection.css'
import CorporateProfileInfo from '../CorporateProfileInfo/CorporateProfileInfo';

const CorporateProfileSection = () => {
    const kawaiiGroupCorporate = {
        "Company Name": "Kawaii Group Limited",
        "Head Office Location": "Suite-2A, House # 11, Block-B, Main Road, Banasree, Rampura, Dhaka-1219",
        "Japan Office Location": "433 Soft Town Aoyama 3-1-24 Jingumae Shibuya-Ku Tokyo 150-0001 Japan.",
        "TEL": "+88 02-55123797, +81 03-4363-5903",
        "Managing Director & Group CEO": "Dewan Samir",
        "Incorporated": 2015,
        "Company Capital": "10 Crore BDT",
        "Number Of Employees": 20,
        "Sister Concerns": "8+"
      };
  return (
    <div className='cp_main relative'>
      <div className='cp_bar'>
      <div className="cp_bar_box"><div className='cp_bar_text'>Corporate Profile</div></div>
      <div className="cp_bar_box"><div className='cp_bar_text'>History</div></div>
      <div className="cp_bar_box"><div className='cp_bar_text'>Senior Management</div></div>
      <div className="cp_bar_box"><div className='cp_bar_text'>Corporate Governance</div></div>
      </div>
      <div className='cp_company_header'>Kawaii Group</div>
      <CorporateProfileInfo corporateData={kawaiiGroupCorporate}/>
    </div>
  )
}

export default CorporateProfileSection
