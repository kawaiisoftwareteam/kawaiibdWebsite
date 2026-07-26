import React, { useCallback, useEffect, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './KawaiiVenture.css';
import EmblaCarouselArrow from '../EmblaCarouselArrow/EmblaCarouselArrow';
import KawaiiVentureCard from '../KawaiiVentureCard/KawaiiVentureCard';
import ButtonNormal from '../ButtonNormal/ButtonNormal';
import arrow from '../../Assets/kg_button_indicator.svg'
import { NavLink } from 'react-router-dom';
import { useLocale } from '../../i18n/LocaleContext';

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
    const { t, localizedPath } = useLocale();
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

    const ventureData = useMemo(() => {
        const items = t('home.ventures.items') || [];
        return items.map((item) => ({
            title: item.title,
            content: item.bullets || [],
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
        <div className='ourventuresMain'>
            <div className='w-full flex flex-col gap-[48px]'>
                <div className='flex items-start justify-between gap-[24px]'>
                    <div className="flex flex-col items-start gap-[24px] flex-1">
                        <div className='ourventureTitle'>{t('home.ventures.title')}</div>
                        <div className='ourventureDescription'>{t('home.ventures.intro')}</div>
                        <NavLink to={localizedPath('/concerns')}>
                            <ButtonNormal arrow={arrow} text={t('home.ventures.cta')}/>
                        </NavLink>
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
