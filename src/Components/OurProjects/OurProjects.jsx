import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './OurProjects.css';
import projectSvgCorner from '../../Assets/projectSvgCorner.svg';
import OurProjectCard from '../OurProjectCard/OurProjectCard';
import EmblaCarouselArrow from '../EmblaCarouselArrow/EmblaCarouselArrow';

const projects = [
    {
        title: 'JAPAN SSW TRAINING CENTRE',
        subtitle: 'Empowering the Bangladeshi Workforce for Success in Japan',
        description: "The Kawaii Group is committed to addressing Japan's labor shortage by establishing the JAPAN SSW TRAINING CENTRE in Bangladesh. Despite strong bilateral relations, Bangladesh faces challenges in providing practical training and language development for the Japanese job market. This initiative aims to bridge that gap by preparing approximately 50,000 skilled workers over the next decade, enhancing their competitiveness in the Specific Skilled Workers (SSW) sector.",
        image: require('../../Assets/sswTraining.png')
    },
    {
        title: 'Japan Business Tower',
        subtitle: 'Premier Destination for Shopping, Dining, and Business Excellence',
        description: 'The Japan Business Tower at Panchdona is a prime business destination located in the prestigious area of Panchdona More, Narsingdi, covering 42.42 katha (30,542 square feet). This thoughtfully designed complex offers a range of facilities, including a shopping mall with a super shop and food court, modern office spaces, and a cineplex.',
        image: require('../../Assets/jpBusinessCenter.png')
    },
    {
        title: 'Japan Green City',
        subtitle: 'Embrace Japanese Inspired Luxury in Dhaka',
        description: "Japan Green City, Dhaka's premier residential complex, located in the prestigious Vatara-Gulshan area. Offering spacious and well-appointed apartments amidst lush greenery, this environmentally friendly development ensures convenience, connectivity, and a peaceful atmosphere. With top-tier amenities including playgrounds, swimming pools, and a vibrant community spirit, Japan Green City is the ideal choice for families and young couples seeking a safe and prestigious place to live.",
        image: require('../../Assets/JpGreenCity.png')
    },
    {
        title: 'Japan Business Center',
        subtitle: 'For Premier Experience and Business Excellence',
        description: "The Japan Business Center in Vatara, Gulshan, Dhaka, is an iconic development spread across 8 bighas or 3237.49 Tsubo of prime land. This state-of-the-art facility will include a shopping mall, super shop, food court, modern office spaces, a five-star hotel, and essential healthcare amenities like a clinic and gym. It also features a dedicated mosque, ample parking, and a focus on community and green spaces, offering a blend of luxury, convenience, and tranquility in the heart of Dhaka.",
        image: require('../../Assets/jpPachdonaTower.png')
    }
];

const OPTIONS = {
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
};

const AUTOPLAY_INTERVAL = 4000; // 4 seconds

const useInterval = (callback, delay) => {
    const savedCallback = React.useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

const OurProjects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    // Auto-scroll functionality
    const autoplay = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    useInterval(autoplay, AUTOPLAY_INTERVAL);

    return (
        <div className='ourProjectsMain' style={{ backgroundImage: `url(${require('../../Assets/projectBG.png')})` }}>
            <img src={projectSvgCorner} alt="projectSvgCorner" className='projectSvg' />
            <div className='w-full flex flex-col gap-[48px]'>
                <div className='flex items-start justify-between gap-[24px]'>
                    <div className="flex flex-col items-start gap-[24px] flex-1">
                        <div className='ourProjectTitle'>Our Projects</div>
                        <div className='ourProjectDescription'>A glimpse into our upcoming initiatives and innovations</div>
                    </div>
                    <EmblaCarouselArrow
                        onPrevClick={scrollPrev}
                        onNextClick={scrollNext}
                    />
                </div>
                <div className='OurprojectSliderBox' ref={emblaRef}>
                    <div className="embla__container">
                        <OurProjectCard projects={projects} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProjects
