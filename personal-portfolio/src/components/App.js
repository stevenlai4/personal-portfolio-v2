import '../style/App.scss';
import React, { useState, useEffect } from 'react';
import Separator from './Separator';
import Header from './header/Header';
import About from './about/About';
import Skill from './skill/Skill';

function App() {
    const [theme, setTheme] = useState('light');

    // Hand theme color function
    const handleThemeColor = (newTheme) => {
        setTheme(newTheme);
    };

    // Theme Handler
    const themeHandler = () => {
        const app = document.querySelector('.App');
        const skillPercentages = document.querySelectorAll('.skill-percentage');

        if (theme === 'light') {
            app.style =
                'color: #000 !important; background-color: #fffaf0 !important;';
            skillPercentages.forEach((skillPercentage) => {
                skillPercentage.style = 'color: #000';
            });
        } else {
            app.style = 'color: #fff !important; background-color: #000;';
            skillPercentages.forEach((skillPercentage) => {
                skillPercentage.style = 'color: #c0a062';
            });
        }
    };

    useEffect(() => {
        themeHandler();
    }, [theme]);

    return (
        <div className="App">
            <Header />
            <About theme={theme} onThemeChange={handleThemeColor} />
            <Separator theme={theme} />
            <Skill />
            <Separator theme={theme} />
        </div>
    );
}

export default App;
