'use client';

import React, { useState } from 'react';
import './AboutFirst.css';
import aboutSection1 from "../../Assets/aboutFirst1.webp";
import aboutSection2 from "../../Assets/aboutFirst2.webp";
import aboutSection3 from "../../Assets/aboutSection3.webp";
import ButtonNormal from '../ButtonNormal/ButtonNormal';
import download from '../../Assets/kg_download.svg';
import ButtonTransparent from '../ButtonTransparent/ButtonTransparent';
import KgModal from '../KgModal/KgModal';
import { useLocale } from '../../i18n/LocaleContext';

const getSrc = (img) => (typeof img === 'string' ? img : img?.src || img);

const AboutFirst = () => {
    const { t, localizedPath } = useLocale();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='relative'>
            <div className='flex flex-col items-center gap-6 self-stretch bg-white md:px-60 md:py-40 px-0 py-6'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-8 self-stretch'>
                    <div className="grid grid-cols-2 gap-8 order-2 md:order-1 p-6 md:p-0">
                        <div className="w-58 md:w-64 h-[222.5px] relative overflow-hidden rounded-xl group">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                src={getSrc(aboutSection1)} />
                        </div>
                        <div className="row-span-2 w-58 md:w-64 h-[477px] relative overflow-hidden rounded-xl group">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                src={getSrc(aboutSection3)} />
                        </div>
                        <div className="w-58 md:w-64 h-[222.5px] relative overflow-hidden rounded-xl group">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                src={getSrc(aboutSection2)} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center text-justify md:text-left items-center md:items-start px-8 gap-9 flex-1 self-stretch order-1 md:order-2'>
                        <div className='aboutFirstTitle'>{t('about.first.title')}</div>
                        <div className='aboutFirstDes'>
                            {t('about.first.body')}
                        </div>
                        <div className="flex justify-between items-center gap-6">
                            <ButtonTransparent text={t('about.first.corporateProfile')} bgclass="#3A3A3A" link={localizedPath('/corporateprofile')} />
                            <button onClick={openModal}>
                                <ButtonNormal arrow={download} text={t('about.first.download')} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <KgModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="modal-header">
                    {t('about.first.modalTitle')}
                </div>
                <a href="https://docs.google.com/presentation/d/1vESsR45YrEVYTRLRwMRPwhgHUHC_ncq8iEoCuzImmUs/export/pptx" className="modal-button" onClick={closeModal}>{t('about.first.english')}</a>
                <a href="https://docs.google.com/presentation/d/1-9JvagzMb9jqS4ThcC92mGDEo58KNwShXO8O3C7CRIA/export/pptx" className="modal-button" onClick={closeModal}>{t('about.first.japanese')}</a>
            </KgModal>
        </div>
    );
};

export default AboutFirst;
