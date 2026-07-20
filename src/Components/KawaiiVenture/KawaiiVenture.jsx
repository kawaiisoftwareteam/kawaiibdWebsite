import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './KawaiiVenture.css';
import EmblaCarouselArrow from '../EmblaCarouselArrow/EmblaCarouselArrow';
import KawaiiVentureCard from '../KawaiiVentureCard/KawaiiVentureCard';
import ButtonNormal from '../ButtonNormal/ButtonNormal';
import arrow from '../../Assets/kg_button_indicator.svg'
import { NavLink } from 'react-router-dom';

const ventureData = [
    {
      title: "M/S Sanjana International",
      content: [
        "Premier overseas employment agency in Bangladesh",
        "Licensed by the Ministry of Labor and Employment (License No. RL-711)",
        "Connecting skilled Bangladeshi professionals with global opportunities",
      ],
    },
    {
      title: "Achieve Japan",
      content: [
        "17+ years of experience in international education",
        "Specializes in connecting students with universities and workplaces, particularly in Japan",
        "Extensive network of experts providing personalized guidance",
      ],
    },
    // {
    //   title: "Kawaii Fashion Ltd",
    //   content: [
    //     "At the forefront of fashion and textile research and development",
    //     "Features a dedicated buying house for quick response to market demands",
    //     "Partnered with a textile factory for oversight of the entire production process",
    //     "Diverse product range including T-shirts, polo shirts, knit and woven garments",
    //   ],
    // },
    {
      title: "Kawaii Advanced Technology and Solution Ltd",
      content: [
        "Custom software development for SaaS solutions",
        "Specializes in e-commerce, project management, and enterprise solutions",
        "Focus on user-centric design and seamless integration",
        "Established in 2020, simplifying business complexities through technology",
      ],
    },
    {
        title: "Kawaii Advanced Technology and Solution Ltd",
        content: [
          "Custom software development for SaaS solutions",
          "Specializes in e-commerce, project management, and enterprise solutions",
          "Focus on user-centric design and seamless integration",
          "Established in 2020, simplifying business complexities through technology",
        ],
      },
  ];
  

const OPTIONS = {
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
};

const AUTOPLAY_INTERVAL = 3000; 

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

const KawaiiVenture = () => {
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
        <div className='ourventuresMain'>
            <div className='w-full flex flex-col gap-[48px]'>
                <div className='flex items-start justify-between gap-[24px]'>
                    <div className="flex flex-col items-start gap-[24px] flex-1">
                        <div className='ourventureTitle'>Kawaii Ventures</div>
                        <div className='ourventureDescription'>At Kawaii Group, we've built a diverse family of companies, each specialized to meet specific needs in the global market. Our sister concerns work in synergy to provide comprehensive solutions across multiple sectors.</div>
                        <NavLink to="/concerns"><ButtonNormal arrow={arrow} text="Explore Our Ventures"/></NavLink>
                    </div>
                    <EmblaCarouselArrow
                        onPrevClick={scrollPrev}
                        onNextClick={scrollNext}
                    />
                </div>
                <div className='OurventureSliderBox' ref={emblaRef}>
                    <div className="embla__container">
                        <KawaiiVentureCard data={ventureData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KawaiiVenture
