import React from 'react';
import LazyLoad from 'react-lazyload';

export default function ThemeCard(props) {
    const handleThemeChange = () => {
        if (props.theme === 'light') {
            props.handleSelfieFlip();
            props.onThemeChange('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            props.handleSelfieFlip();
            props.onThemeChange('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <LazyLoad height={200}>
            <div className="theme-card">
                <img
                    className="theme-pic"
                    width="50px"
                    height="50px"
                    src={`images/${
                        props.theme === 'light' ? 'sun' : 'moon'
                    }.png`}
                    alt="theme pic"
                    onClick={handleThemeChange}
                />
            </div>
        </LazyLoad>
    );
}
