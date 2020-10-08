import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" id="logo">
          Q
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    );
  }
}
