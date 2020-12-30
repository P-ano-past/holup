import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Style.css";

export default class Navigation extends Component {
  handleLogin() {
    console.log("Login btn clicked");
  }

  handleRegistration() {
    console.log("Registration btn clicked");
  }

  render() {
    return (
      <Navbar className="color-nav" variant="dark">
        <Navbar.Brand href="/" id="logo">
          | Q |
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Button className="navbtn" href="/Login" onClick={this.handleLogin}>
          Sign In
        </Button>
        <Button
          className="navbtn"
          href="/Registration"
          onClick={this.handleRegistration}
        >
          Register
        </Button>
      
      </Navbar>
    );
  }
}
