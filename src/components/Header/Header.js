import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home"><i className="fas fa-suitcase-rolling"></i> TourPlan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="fw-bold" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/tours">Tours</Nav.Link>
                            {user.email &&
                                <Nav.Link className="fw-bold" as={Link} to="/myOrders">My Orders</Nav.Link>
                            }
                            <Nav.Link className="fw-bold" as={Link} to="/manage">Manage All Orders</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/addService">Add a Service</Nav.Link>
                        </Nav>
                        <Nav>
                            {user.email && <span className="bg-info rounded p-2 fw-bold" style={{ color: 'white' }}> {user.displayName} </span>}
                            {
                                user.email ?
                                    <button onClick={logOut} className="rounded bg-secondary text-white">Log out</button>
                                    :
                                    <Nav.Link className="fw-bold" as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;