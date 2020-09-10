import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';


export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Holup</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
