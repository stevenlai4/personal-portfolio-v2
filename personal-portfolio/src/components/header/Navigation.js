import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import $ from 'jquery';
import '../../style/navigation.scss';

export default function Navigation() {
    const [navbar, setNavbar] = useState(false);

    const handleScrollToSection = (e) => {
        const sectionLowerCase = e.target.innerHTML.toLowerCase();
        const navbarHeight = Number(
            $('.navbar').css('height').replace('px', '')
        );

        $('.navbar-collapse').removeClass('show');

        $('html, body').animate(
            {
                scrollTop:
                    $(`#${sectionLowerCase}`).offset().top - navbarHeight,
            },
            1500
        );
    };

    const handleNavbarBg = () => {
        const headerBottom =
            $('header').position().top + $('header').outerHeight(true);

        if (window.scrollY >= headerBottom) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', handleNavbarBg);

    return (
        <Navbar className={navbar ? 'active' : ''} fixed="top" expand="lg">
            <Navbar.Brand className="d-lg-block d-none" href="#">
                <img
                    src="images/logo-light.png"
                    width="75"
                    height="75"
                    className="d-inline-block align-top navbrand"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle
                className="nav-toggle ml-auto navbar-dark"
                aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-items ml-auto">
                    <Nav.Link
                        className="nav-item"
                        href="#about"
                        onClick={handleScrollToSection}
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        className="nav-item"
                        href="#skill"
                        onClick={handleScrollToSection}
                    >
                        Skill
                    </Nav.Link>
                    <Nav.Link
                        className="nav-item"
                        href="#project"
                        onClick={handleScrollToSection}
                    >
                        Project
                    </Nav.Link>
                    <Nav.Link
                        className="nav-item"
                        href="#experience"
                        onClick={handleScrollToSection}
                    >
                        Experience
                    </Nav.Link>
                    <Nav.Link
                        className="nav-item"
                        href="#competition"
                        onClick={handleScrollToSection}
                    >
                        Competition
                    </Nav.Link>
                    <Nav.Link
                        className="nav-item"
                        href="#contact"
                        onClick={handleScrollToSection}
                    >
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
