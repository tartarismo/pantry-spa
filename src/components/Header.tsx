import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header:React.FC = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"><i className="fas fa-utensils"></i> Pantry</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/storage">Storage</Nav.Link>
                    <Nav.Link href="/menu">Menu'</Nav.Link>
                    <Nav.Link href="/shopping-list">Shopping List</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/logout">
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}