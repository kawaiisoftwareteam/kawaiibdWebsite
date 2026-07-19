import React, { useRef, useState, useEffect } from 'react';
import './Slider.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import sliderImage1 from '../../Assets/slider_image_1.jpg';
import sliderImage2 from '../../Assets/slider_image_2.png';
import sliderImage3 from '../../Assets/slider_image_3.png';
import sliderImage4 from '../../Assets/slider_image_4.png';
import { Link } from 'react-router-dom';

const slideImages = [
    {
        url: sliderImage1,
        copyHead1: 'Your Global',
        copyHead2: 'Growth Partner',
        copyDes: 'Empowering businesses with diverse Japanese expertise on a global scale',
        button: 'Partner with us',
        link: '/contact'
    },
    {
        url: sliderImage2,
        copyHead1: 'A 35-Year Legacy of',
        copyHead2: 'Japan-Bangladesh Business Excellence',
        copyDes: 'With roots in Japan and Bangladesh, we offer integrated solutions that drive growth worldwide',
        button: 'Know our story',
        link: '/about'
    },
    {
        url: sliderImage3,
        copyHead1: 'Driving Success',
        copyHead2: 'Across Diverse Industries',
        copyDes: 'From human resources to Japanese language training, fashion, engineering, and beyond, we deliver tailored solutions for every industry.',
        button: 'Explore our expertise',
        link: '/concerns'
    },
    {
        url: sliderImage4,
        copyHead1: 'Innovation Begins Here,',
        copyHead2: 'Growth Follows',
        copyDes: 'Where Bangladesh meets Japan, and innovative ideas meet powerful execution.',
        button: 'Lets build success together',
        link: '/contact'
    }
];

const Slider = () => {
    const fadeRef = useRef(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        if (!isMobile) return;
        setTouchEnd(null);
        setTouchStart(e.touches[0].clientX);
    };

    const onTouchMove = (e) => {
        if (!isMobile) return;
        setTouchEnd(e.touches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!isMobile) return;
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            fadeRef.current.goNext();
            setActiveIndex((prev) => (prev + 1) % slideImages.length);
        }
        if (isRightSwipe) {
            fadeRef.current.goBack();
            setActiveIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
        }
    };

    const handlePrevious = () => {
        fadeRef.current.goBack();
        setActiveIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
    };

    const handleNext = () => {
        fadeRef.current.goNext();
        setActiveIndex((prev) => (prev + 1) % slideImages.length);
    };

    return (
        <div className="heroSlider"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <Fade 
                ref={fadeRef} 
                indicators={false}
                duration={3000}
                transitionDuration={500}
                onChange={index => setActiveIndex(index)}
            >
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div className='heroSlide' style={{backgroundImage: `url(${slideImage.url})` }}>
                            <div className="heroOverlay"></div>
                            <div className='heroCopyBox'>
                                <span className='heroSpanStyle heroHeaderText'>{slideImage.copyHead1}</span>
                                <span className='heroSpanStyle heroHeaderText'>{slideImage.copyHead2}</span>
                                <span className='heroSpanStyle heroDesText'>{slideImage.copyDes}</span>
                                <Link to={slideImage.link} className='heroButton'>
                                    <div className='heroBtnWrap'>
                                        <div className='heroBtnText'>{slideImage.button}</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z" fill="white"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Fade>
            {!isMobile && (
                <div className='heroPrevNext'>
                    <div className='sliderArrowDirection' onClick={handlePrevious}>
                        <div className='herosliderArrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M31.8839 8.36612C32.372 8.85427 32.372 9.64573 31.8839 10.1339L18.0178 24L31.8839 37.8661C32.372 38.3543 32.372 39.1457 31.8839 39.6339C31.3957 40.122 30.6043 40.122 30.1161 39.6339L15.3661 24.8839C14.878 24.3957 14.878 23.6043 15.3661 23.1161L30.1161 8.36612C30.6043 7.87796 31.3957 7.87796 31.8839 8.36612Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className='sliderArrowDirection' onClick={handleNext}>
                        <div className='herosliderArrow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d="M16.1161 39.6339C15.628 39.1457 15.628 38.3543 16.1161 37.8661L29.9822 24L16.1161 10.1339C15.628 9.64573 15.628 8.85427 16.1161 8.36612C16.6043 7.87796 17.3957 7.87796 17.8839 8.36612L32.6339 23.1161C33.122 23.6043 33.122 24.3957 32.6339 24.8839L17.8839 39.6339C17.3957 40.122 16.6043 40.122 16.1161 39.6339Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            {isMobile && (
                <div className='heroMobileSlide'>
                    {slideImages.map((_, index) => (
                        <div 
                            key={index} 
                            className={index === activeIndex ? 'heroActiveRectangle' : 'heroActiveCircle'}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Slider