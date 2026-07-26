import React from 'react';
import './CorporateProfileInfo.css';
import { useLocale } from '../../i18n/LocaleContext';

const CorporateProfileInfo = ({ fieldKeys }) => {
    const { t } = useLocale();

    return (
        <div className='flex flex-col gap-6 w-full'>
            <div className='cp_info_text'>{t('corporate.sectionTitle')}</div>
            <div className='flex flex-col'>
                {fieldKeys.map((key) => (
                    <div className='cp_info_row' key={key}>
                        <div className='cp_info_row_text'>{t(`corporate.fields.${key}`)}</div>
                        <div className='cp_info_row_text'>{t(`corporate.values.${key}`)}</div>
                    </div>
                ))}
            </div>
            <div className='absolute right-0 bottom-0 py-0 md:py-6 px-6 md:px-[240px]'>{t('corporate.asOf')}</div>
        </div>
    );
}

export default CorporateProfileInfo;
