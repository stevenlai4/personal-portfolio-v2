import '../style/App.scss';
import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import ThemeCard from './ThemeCard';
import Separator from './Separator';
import Header from './header/Header';
import About from './about/About';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Project from './project/Project';
import Competition from './competition/Competition';
import Contact from './contact/Contact';
import Footer from './Footer';

function App(props) {
    //States
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');
    const [isFlipped, setIsFlipped] = useState(false);

    // Handle theme color function
    const handleThemeColor = (newTheme) => {
        setTheme(newTheme);
    };

    // Handle card flip
    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // Create ThemeCard Component function
    const createThemeCard = () => {
        return (
            <ThemeCard
                theme={theme}
                onThemeChange={setTheme}
                handleSelfieFlip={handleCardFlip}
            />
        );
    };

    // Theme Handler
    const themeHandler = () => {
        const app = document.querySelector('.App');
        const skillCircles = document.querySelectorAll('.skill-circle');
        const expItems = document.querySelectorAll('.exp-item');

        if (theme === 'light') {
            // General
            app.style =
                'color: #000 !important; background-color: #fffaf7 !important;';
            // Skill
            skillCircles.forEach((skillCircle) => {
                skillCircle.style =
                    'background-color: #fff; border: none; color: #c0a062;';
            });

            // Experience
            expItems.forEach((expItem) => {
                expItem.style =
                    'color: #000; background-color: #fff; border: none;';
            });
        } else {
            // General
            app.style = 'color: #fff !important; background-color: #181818;';

            // Skill
            skillCircles.forEach((skillCircle) => {
                skillCircle.style =
                    'background-color: #181818; border: 1px solid #fffaf7; color: #c0a062;';
            });

            // Experience
            expItems.forEach((expItem) => {
                expItem.style =
                    'color: #fff; background-color: #181818; border: 1px solid #fff;';
            });
        }
    };

    useEffect(() => {
        themeHandler();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return (
        <div className="App">
            <Header theme={theme} />
            <About theme={theme} onThemeChange={handleThemeColor} />
            <Separator theme={theme} />
            <Skill />
            <Separator theme={theme} />
            <Project theme={theme} />
            <Separator theme={theme} />
            <Experience theme={theme} />
            <Separator theme={theme} />
            <Competition theme={theme} />
            <Separator theme={theme} />
            <Contact theme={theme} />
            <Footer />
            <ReactCardFlip
                isFlipped={isFlipped}
                flipDirection="horizontal"
                infinite="true"
            >
                {createThemeCard()}
                {createThemeCard()}
            </ReactCardFlip>
        </div>
    );
}

export default App;
