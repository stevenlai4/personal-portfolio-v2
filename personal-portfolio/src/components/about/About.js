import React from 'react';
import Objective from './Objective';
import '../../style/about.scss';
import { useInView } from 'react-intersection-observer';

export default function About(props) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section id="about" className="about container">
            <h1>ABOUT</h1>
            <div
                ref={ref}
                className={`about-content fade-in ${inView ? 'appear' : ''}`}
            >
                <Objective />
            </div>
        </section>
    );
}
