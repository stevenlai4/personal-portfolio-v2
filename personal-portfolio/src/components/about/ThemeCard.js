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
                    width="280px"
                    height="280px"
                    src={`images/${
                        props.theme === 'light' ? 'sun' : 'moon'
                    }.png`}
                    alt="theme pic"
                />

                <img
                    className="selfie"
                    src="images/selfie.jpeg"
                    width="200px"
                    height="200px"
                    alt="selfie"
                    onClick={handleThemeChange}
                />
            </div>
        </LazyLoad>
    );
}
