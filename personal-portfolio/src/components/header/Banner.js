import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import '../../style/banner.scss';
import Typical from 'react-typical';
import LazyLoad from 'react-lazyload';

export default function Banner(props) {
    return (
        <div
            className="banner"
            style={{
                backgroundImage:
                    props.theme === 'light'
                        ? "url('/images/banner_light.jpg')"
                        : "url('/images/banner_dark.jpg')",
            }}
        >
            <LazyLoad height={800}>
                <div className="banner-text">
                    <h1>Chao Chun Lai</h1>
                    <div className="education">
                        <Typical
                            wrapper="p"
                            steps={[
                                'BCIT Web Developer Certificate / SFU Econ & CS Graduate',
                            ]}
                        />
                    </div>
                </div>
            </LazyLoad>

            <i>
                <RiArrowDownSLine />
            </i>
        </div>
    );
}
