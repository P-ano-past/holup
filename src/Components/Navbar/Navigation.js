import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Style.css";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar className="color-nav" variant="dark">
        <Navbar.Brand href="#home" id="logo">
          Q
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    );
  }
}
