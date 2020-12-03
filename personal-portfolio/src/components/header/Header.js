import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';

export default function Header(props) {
    return (
        <header>
            <Navigation />
            <Banner theme={props.theme} />
        </header>
    );
}
