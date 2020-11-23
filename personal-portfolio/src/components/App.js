import '../style/App.scss';
import React, { useState, useEffect } from 'react';
import Separator from './Separator';
import Header from './header/Header';
import About from './about/About';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Project from './project/Project';

function App() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ?? 'light'
    );

    // Hand theme color function
    const handleThemeColor = (newTheme) => {
        setTheme(newTheme);
    };

    // Theme Handler
    const themeHandler = () => {
        const app = document.querySelector('.App');
        const projectCatItems = document.querySelectorAll('.category-item p');

        if (theme === 'light') {
            app.style =
                'color: #000 !important; background-color: #fffaf0 !important;';
            projectCatItems.forEach((projectCatItem) => {
                projectCatItem.style = 'color: #000';
            });
        } else {
            app.style = 'color: #fff !important; background-color: #000;';
            projectCatItems.forEach((projectCatItem) => {
                projectCatItem.style = 'color: #fff';
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
            <Project />
            <Separator theme={theme} />
            <Experience />
        </div>
    );
}

export default App;
