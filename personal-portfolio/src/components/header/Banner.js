import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import '../../style/banner.scss';
import Typical from 'react-typical';

export default function Banner() {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Chao Chun Lai</h1>
                <p>
                    I am{' '}
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'SFU Graduate',
                            3000,
                            'BCIT SSD Student',
                            3000,
                            'Full-Stack Developer',
                            3000,
                            'Designer',
                            3000,
                            'Guitarist',
                            3000,
                        ]}
                    />
                </p>
            </div>

            <i>
                <RiArrowDownSLine />
            </i>
        </div>
    );
}
