import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

export default class DashNav extends Component {
  render() {
    return (
      <div class="sidenav">
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Queue">Queue</Link>
        <Link href="#">Services</Link>
        <Link href="#">Clients</Link>
        <Link href="#">Contact</Link>
      </div>
    );
  }
}
