import React from 'react';
import {
    AiTwotonePhone,
    AiFillFacebook,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillGithub,
} from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import '../style/footer.scss';

export default function footer() {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="footer">
            <button className="back-to-top" onClick={scrollTop}>
                <i>
                    <IoIosArrowUp />
                </i>
            </button>
            <div className="footer-left">
                <a href="tel:778-855-1817">
                    <i>
                        <AiTwotonePhone />
                    </i>
                    778-855-1817
                </a>
                <a href="mailto:steven_lai4@hotmail.com">
                    <i>
                        <GrMail />
                    </i>
                    steven_lai4@hotmail.com
                </a>
                <a
                    href="https://www.google.ca/maps/place/Coquitlam,+BC/@49.2851173,-122.8266314,12z/data=!3m1!4b1!4m5!3m4!1s0x548678c85ac25e9f:0x595768762eee76cf!8m2!3d49.2837626!4d-122.7932065"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i>
                        <MdLocationOn />
                    </i>
                    Coquitlam, BC
                </a>
            </div>
            <div className="footer-right">
                <ul className="social-media">
                    <li>
                        <a
                            className="github"
                            href="https://github.com/stevenlai4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i>
                                <AiFillGithub />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="linkedin"
                            href="https://www.linkedin.com/in/chao-chun-lai-661497193/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i>
                                <AiFillLinkedin />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="facebook"
                            href="https://www.facebook.com/profile.php?id=731539987"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i>
                                <AiFillFacebook />
                            </i>
                        </a>
                    </li>
                    <li>
                        <a
                            className="instagram"
                            href="https://www.instagram.com/stevenlai4/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i>
                                <AiFillInstagram />
                            </i>
                        </a>
                    </li>
                </ul>
                <p className="copyright">CHAOCHUNLAI &#169;2020</p>
            </div>
        </div>
    );
}
