import React from 'react';
import parse from 'html-react-parser';

export default function CompItem(props) {
    return (
        <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
                <img
                    src={props.competition.img}
                    alt={props.competition.title}
                />
            </div>
            <div className="blog-slider__content">
                <span className="blog-slider__code">
                    {props.competition.date}
                </span>
                <div className="blog-slider__title">
                    {props.competition.title}
                </div>
                <div className="blog-slider__subtitle">
                    {props.competition.subtitle}
                </div>
                <div className="blog-slider__text">
                    {parse(props.competition.description)}
                </div>
                <a
                    href={props.competition.url}
                    className="blog-slider__button"
                    target="_blank"
                    rel="noreferrer"
                >
                    VISIT PROJECT
                </a>
            </div>
        </div>
    );
}
