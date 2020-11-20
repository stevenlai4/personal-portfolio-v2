import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Objective from './Objective';
import Education from './Education';
import '../../style/about.scss';

export default function About(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleSelfieFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <section className="about">
            <h1>ABOUT</h1>
            <div className="about-content container">
                <div className="row">
                    <div className="col-lg-4 order-lg-2 col-12">
                        <ReactCardFlip
                            isFlipped={isFlipped}
                            flipDirection="horizontal"
                            infinite="true"
                        >
                            <CardFront
                                theme={props.theme}
                                onThemeChange={props.onThemeChange}
                                handleSelfieFlip={handleSelfieFlip}
                            />
                            <CardBack
                                theme={props.theme}
                                onThemeChange={props.onThemeChange}
                                handleSelfieFlip={handleSelfieFlip}
                            />
                        </ReactCardFlip>
                    </div>
                    <div className="col-lg-4 order-lg-1 col-12">
                        <Objective />
                    </div>
                    <div className="col-lg-4 order-lg-3 col-12">
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    );
}
