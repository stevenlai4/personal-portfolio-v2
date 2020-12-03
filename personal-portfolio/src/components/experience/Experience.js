import React from 'react';
import ExpCategory from './ExpCategory';
import { years } from '../../data/experience-data';
import '../../style/experience.scss';

export default function Experience(props) {
    const createExpCategory = (year, i) => {
        return <ExpCategory key={i} year={year} theme={props.theme} />;
    };

    return (
        <section id="experience" className="experience container">
            <h1>EXPERIENCE</h1>
            {years.map(createExpCategory)}
        </section>
    );
}
