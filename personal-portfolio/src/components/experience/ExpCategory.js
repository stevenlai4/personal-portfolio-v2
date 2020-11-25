import React from 'react';
import ExpItem from './ExpItem';
import { experiences } from '../../data/experience-data';
import '../../style/experience-category.scss';

export default function ExpCategory(props) {
    // Create experience items in each category
    const createExpItems = () => {
        const filteredExps = experiences.filter(
            (experience) => experience.start_year === props.year
        );

        const result = [];

        for (let i = 0; i < filteredExps.length; i++) {
            result.push(<ExpItem key={i} filteredExp={filteredExps[i]} />);
        }

        return result;
    };

    return (
        <div className="exp-category">
            <div className="timeline">
                <h2 className="year">{props.year}</h2>
                <div className="year-line"></div>
            </div>
            <div className="spacing"></div>
            <div className="exp-item-container">{createExpItems()}</div>
        </div>
    );
}
