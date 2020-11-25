import React from 'react';
import ExpCategory from './ExpCategory';
import { years } from '../../data/experience-data';
import '../../style/experience.scss';

export default function Experience() {
    const createExpCategory = (year, i) => {
        return <ExpCategory key={i} year={year} />;
    };

    return (
        <div className="experience container">
            <h1>EXPERIENCE</h1>
            {years.map(createExpCategory)}
        </div>
    );
}
