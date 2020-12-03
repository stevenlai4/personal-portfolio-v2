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
                            steps={['2021 BCIT Web Developer Certificate']}
                        />
                        <Typical
                            wrapper="p"
                            steps={['2020 SFU Economics & CS Graduate']}
                        />
                    </div>
                    {/* <p className="education"></p> */}
                    {/* <p className="typical">
                        I am{' '}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'SFU Graduate',
                                2000,
                                'BCIT SSD Student',
                                2000,
                                'Full-Stack Developer',
                                2000,
                                'Guitarist',
                                2000,
                            ]}
                        />
                    </p> */}
                </div>
            </LazyLoad>

            <i>
                <RiArrowDownSLine />
            </i>
        </div>
    );
}
