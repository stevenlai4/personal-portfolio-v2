import React from 'react';
import ExpItem from './ExpItem';
import { experiences } from '../../data/experience-data';
import { useInView } from 'react-intersection-observer';
import '../../style/experience-category.scss';

export default function ExpCategory(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    // Create experience items in each category
    const createExpItems = () => {
        const filteredExps = experiences.filter(
            (experience) => experience.start_year === props.year
        );

        const result = [];

        for (let i = 0; i < filteredExps.length; i++) {
            result.push(
                <ExpItem
                    key={i}
                    filteredExp={filteredExps[i]}
                    theme={props.theme}
                />
            );
        }

        return result;
    };

    return (
        <div className="exp-category">
            <div className="timeline">
                <h2 className="year">{props.year}</h2>
                <div
                    ref={ref}
                    className={`year-line increase-height ${
                        inView ? 'appear' : ''
                    }`}
                ></div>
            </div>
            <div className="spacing"></div>
            <div className="exp-item-container">{createExpItems()}</div>
        </div>
    );
}
