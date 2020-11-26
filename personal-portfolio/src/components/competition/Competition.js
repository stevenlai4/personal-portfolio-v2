import React from 'react';
import CompContianer from './CompContainer';
import '../../style/competition.scss';

export default function Competition(props) {
    return (
        <section id="competition" className="competition container">
            <h1>COMPETITION</h1>
            <CompContianer theme={props.theme} />
        </section>
    );
}
