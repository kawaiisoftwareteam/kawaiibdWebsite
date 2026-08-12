import React, { useCallback, useEffect, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './OurProjects.css';
import projectSvgCorner from '../../Assets/projectSvgCorner.svg';
import OurProjectCard from '../OurProjectCard/OurProjectCard';
import EmblaCarouselArrow from '../EmblaCarouselArrow/EmblaCarouselArrow';
import { useLocale } from '../../i18n/LocaleContext';

const projectImages = [
    require('../../Assets/sswTraining.webp'),
    require('../../Assets/jpBusinessCenter.webp'),
    require('../../Assets/JpGreenCity.webp'),
    require('../../Assets/jpPachdonaTower.webp'),
];

const OPTIONS = {
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
};

const AUTOPLAY_INTERVAL = 4000;

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
    const { t } = useLocale();
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

    const projects = useMemo(() => {
        const items = t('home.projects.items') || [];
        return items.map((item, index) => ({
            ...item,
            image: projectImages[index],
        }));
    }, [t]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const autoplay = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    useInterval(autoplay, AUTOPLAY_INTERVAL);

    return (
        <div className='ourProjectsMain' style={{ backgroundImage: `url(${require('../../Assets/projectBG.webp')})` }}>
            <img loading="lazy" decoding="async" src={projectSvgCorner} alt="projectSvgCorner" className='projectSvg' />
            <div className='w-full flex flex-col gap-[48px]'>
                <div className='flex items-start justify-between gap-[24px]'>
                    <div className="flex flex-col items-start gap-[24px] flex-1">
                        <div className='ourProjectTitle'>{t('home.projects.title')}</div>
                        <div className='ourProjectDescription'>{t('home.projects.subtitle')}</div>
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
