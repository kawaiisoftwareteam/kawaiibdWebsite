import React, { useState } from 'react';
import './AboutFirst.css';
import aboutSection1 from "../../Assets/aboutFirst1.jpeg";
import aboutSection2 from "../../Assets/aboutFirst2.jpeg";
import aboutSection3 from "../../Assets/aboutSection3.jpg";
import ButtonNormal from '../ButtonNormal/ButtonNormal';
import download from '../../Assets/kg_download.svg';
import ButtonTransparent from '../ButtonTransparent/ButtonTransparent';
import KgModal from '../KgModal/KgModal';

const AboutFirst = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='relative'>
            <div className='flex flex-col items-center gap-6 self-stretch bg-white md:px-60 md:py-40 px-0 py-6'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-8 self-stretch'>
                    <div className="grid grid-cols-2 gap-8 order-2 md:order-1 p-6 md:p-0">
                        {/* Images */}
                        <div className="w-58 md:w-64 h-[222.5px] relative overflow-hidden rounded-xl group">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                src={aboutSection1} />
                        </div>
                        <div className="row-span-2 w-58 md:w-64 h-[477px] relative overflow-hidden rounded-xl group">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                src={aboutSection3} />
                        </div>
                        <div className="w-58 md:w-64 h-[222.5px] relative overflow-hidden rounded-xl group">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                src={aboutSection2} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center text-justify md:text-left items-center md:items-start px-8 gap-9 flex-1 self-stretch order-1 md:order-2'>
                        <div className='aboutFirstTitle'>Shaping Tomorrow, Today: The Kawaii Group Story</div>
                        <div className='aboutFirstDes'>
                            Kawaii Group was founded with one core idea: to create opportunities. Whether it's helping businesses thrive or guiding individuals to new career paths, we are passionate about making a difference.
                        </div>
                        <div className="flex justify-between items-center gap-6">
                            <ButtonTransparent text="Corporate Profile" bgclass="#3A3A3A" link="/corporateprofile" />
                            <button onClick={openModal}>
                                <ButtonNormal arrow={download} text="Download Profile" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <KgModal isOpen={isModalOpen} onClose={closeModal}>
                <div className="modal-header">
                    Choose your Kawaii Group Profile Language Preferences
                </div>
                <a href="https://docs.google.com/presentation/d/1vESsR45YrEVYTRLRwMRPwhgHUHC_ncq8iEoCuzImmUs/export/pptx" className="modal-button" onClick={closeModal}>English</a>
                <a href="https://docs.google.com/presentation/d/1-9JvagzMb9jqS4ThcC92mGDEo58KNwShXO8O3C7CRIA/export/pptx" className="modal-button" onClick={closeModal}>日本語 (Japanese)</a>
            </KgModal>
        </div>
    );
};

export default AboutFirst;