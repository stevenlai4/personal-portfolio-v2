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

    useEffect(() => {
        const app = document.querySelector('.App');
        const navItems = document.querySelectorAll('.nav-item');

        if (theme === 'light') {
            app.style =
                'color: #000 !important; background-color: #fffaf0 !important;';
        } else {
            app.style =
                'color: #fff !important; background-color: #000 !important;';
            navItems.forEach((navItem) => {
                navItem.style = 'color: #fff';
            });
        }
    }, [theme]);

    return (
        <div className="App">
            <Header />
            <About theme={theme} onThemeChange={handleThemeColor} />
            <Separator theme={theme} />
            <Skill />
        </div>
    );
}

export default App;
