import React from 'react';
import './CorporateProfileInfo.css';

const CorporateProfileInfo = ({ corporateData }) => {
    return (
        <div className='flex flex-col gap-6 w-full'>
            <div className='cp_info_text'>Corporate Profile</div>
            <div className='flex flex-col'>
                {Object.entries(corporateData).map(([key, value], index) => (
                    <div className='cp_info_row' key={index}>
                        <div className='cp_info_row_text'>{key}</div> {/* This will display the key */}
                        <div className='cp_info_row_text'>{value}</div> {/* This will display the value */}
                    </div>
                ))}
            </div>
            <div className='absolute right-0 bottom-0 py-0 md:py-6 px-6 md:px-[240px]'>As of fiscal year ended July 2024.</div>
        </div>
    );
}

export default CorporateProfileInfo;