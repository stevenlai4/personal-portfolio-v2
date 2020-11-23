import React from 'react';
import years from '../../data/experience-data';
import '../../style/experience.scss';

export default function Experience() {
    const createExpCategory = (year) => {};

    return (
        <div className="experience">
            <h1>EXPERIENCE</h1>
            {years.map(createExpCategory)}
        </div>
    );
}
