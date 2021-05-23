import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import "../App.css";

function Header() {

    return (
        <div className="header">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Vaccinate India <img style={{width:"60px"}} src="vaccine-icon.png" alt="" /></Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Button href="/" inline className="mr-sm-2" variant="outline-light">Submit Form</Button>
                <Button href="/admin" className="mr-sm-2" variant="outline-light">Admin</Button>
            </Navbar>

        </div>
    )
}

export default Header
