import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import $ from 'jquery';
import '../../style/navigation.scss';

export default function Navigation() {
    const handleScrollToSection = (e) => {
        const sectionLowerCase = e.target.innerHTML.toLowerCase();

        $('html, body').animate(
            {
                scrollTop: $(`#${sectionLowerCase}`).offset().top,
            },
            1500
        );
    };

    return (
        <Navbar fixed="top" expand="lg">
            <Navbar.Brand className="d-lg-block d-none" href="#home">
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
