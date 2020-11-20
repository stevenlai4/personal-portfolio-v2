import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../style/navigation.scss';

export default function Navigation() {
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
                    <Nav.Link className="nav-item" href="#home">
                        About
                    </Nav.Link>
                    <Nav.Link className="nav-item" href="#link">
                        Skills
                    </Nav.Link>
                    <Nav.Link className="nav-item" href="#link">
                        Projects
                    </Nav.Link>
                    <Nav.Link className="nav-item" href="#link">
                        Experience
                    </Nav.Link>
                    <Nav.Link className="nav-item" href="#link">
                        Competition
                    </Nav.Link>
                    <Nav.Link className="nav-item" href="#link">
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
