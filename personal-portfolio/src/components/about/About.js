import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ThemeCard from './ThemeCard';
import Objective from './Objective';
import Education from './Education';
import '../../style/about.scss';

export default function About(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // Create ThemeCard Component function
    const createThemeCard = () => {
        return (
            <ThemeCard
                theme={props.theme}
                onThemeChange={props.onThemeChange}
                handleSelfieFlip={handleCardFlip}
            />
        );
    };

    return (
        <section id="about" className="about container">
            <h1>ABOUT</h1>
            <div className="about-content">
                <div className="row">
                    <div className="col-lg-4 order-lg-2 col-12">
                        <ReactCardFlip
                            isFlipped={isFlipped}
                            flipDirection="horizontal"
                            infinite="true"
                        >
                            {createThemeCard()}
                            {createThemeCard()}
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
