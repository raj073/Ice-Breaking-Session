import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark shadow" className="p-3">
                <Container>
                    <Nav.Link>
                        <NavLink className="text-decoration-none text-white" to="/">
                            <h3>Ice Breaking Session</h3>
                        </NavLink>
                    </Nav.Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className="gap-2">

                            <Nav.Link>
                                <NavLink className="text-decoration-none text-white" to="/">
                                    Home
                                </NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <Link className="text-decoration-none text-white" to="/statistics">
                                    Statistics
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link className="text-decoration-none text-white" to="/blog">
                                    Blog
                                </Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;