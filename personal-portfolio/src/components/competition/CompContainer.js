import React, { useEffect } from 'react';
import CompItem from './CompItem';
import competitions from '../../data/competition-data';
import Swiper, { EffectFade, Mousewheel, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import '../../style/comp-container.scss';

Swiper.use([EffectFade, Mousewheel, Pagination]);

export default function CompContainer(props) {
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
            className="blog-slider"
            style={{
                backgroundColor: props.theme === 'light' ? '#fff' : '#000',
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
