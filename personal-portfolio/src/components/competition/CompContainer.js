import React, { useEffect } from 'react';
import CompItem from './CompItem';
import competitions from '../../data/competition-data';
import Swiper, { EffectFade, Mousewheel, Pagination } from 'swiper';
import { useInView } from 'react-intersection-observer';
import 'swiper/swiper-bundle.css';
import '../../style/comp-container.scss';

Swiper.use([EffectFade, Mousewheel, Pagination]);

export default function CompContainer(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        new Swiper('.blog-slider', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            mousewheel: {
                invert: false,
            },
            pagination: {
                el: '.blog-slider__pagination',
                clickable: true,
            },
        });
    }, []);

    return (
        <div
            className={`blog-slider fade-in ${inView ? 'appear' : ''}`}
            ref={ref}
            style={{
                backgroundColor: props.theme === 'light' ? '#fff' : '#181818',
                transition: 'background-color 0.8s',
            }}
        >
            <div className="blog-slider__wrp swiper-wrapper">
                {competitions.map((competition, i) => (
                    <CompItem key={i} competition={competition} />
                ))}
            </div>
            <div className="blog-slider__pagination"></div>
        </div>
    );
}
