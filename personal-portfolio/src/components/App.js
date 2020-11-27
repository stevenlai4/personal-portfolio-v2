import '../style/App.scss';
import React, { useState, useEffect } from 'react';
import Separator from './Separator';
import Header from './header/Header';
import About from './about/About';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Project from './project/Project';
import Competition from './competition/Competition';
import Contact from './contact/Contact';
import Footer from './Footer';
import { TraceSpinner } from 'react-spinners-kit';

function App() {
    //States
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ?? 'light'
    );
    const [isLoading, setIsLoading] = useState(true);

    // Hand theme color function
    const handleThemeColor = (newTheme) => {
        setTheme(newTheme);
    };

    // Theme Handler
    const themeHandler = () => {
        const app = document.querySelector('.App');
        const skillCircles = document.querySelectorAll('.skill-circle');
        const expTimelines = document.querySelectorAll('.timeline .year-line');
        const expItems = document.querySelectorAll('.exp-item');

        if (theme === 'light') {
            // General
            app.style =
                'color: #000 !important; background-color: #fffaf0 !important;';

            // Skill
            skillCircles.forEach((skillCircle) => {
                skillCircle.style = 'background-color: #fff; border: none; ';
            });

            // Experience
            expTimelines.forEach((expTimeline) => {
                expTimeline.style = 'color: #000';
            });
            expItems.forEach((expItem) => {
                expItem.style =
                    'color: #000; background-color: #fff; border: none;';
            });
        } else {
            // General
            app.style = 'color: #fff !important; background-color: #000;';

            // Skill
            skillCircles.forEach((skillCircle) => {
                skillCircle.style =
                    'background-color: #000; border: 1px solid #fff; ';
            });

            // Experience
            expTimelines.forEach((expTimeline) => {
                expTimeline.style = 'color: #c0a062';
            });
            expItems.forEach((expItem) => {
                expItem.style =
                    'color: #fff; background-color: #000; border: 1px solid #fff;';
            });
        }
    };

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 4000);
    }, []);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => themeHandler, 4000);
        } else {
            themeHandler();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return isLoading ? (
        <div className="loading-bg">
            <TraceSpinner size={80} frontColor="#c0a062" loading={isLoading} />
        </div>
    ) : (
        <div className="App">
            <Header />
            <About theme={theme} onThemeChange={handleThemeColor} />
            <Separator theme={theme} />
            <Skill />
            <Separator theme={theme} />
            <Project theme={theme} />
            <Separator theme={theme} />
            <Experience />
            <Separator theme={theme} />
            <Competition theme={theme} />
            <Separator theme={theme} />
            <Contact theme={theme} />
            <Footer />
        </div>
    );
}

export default App;
