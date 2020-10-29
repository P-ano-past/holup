import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashNav from "./DashNav/DashNav";
import "./Style.css";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <DashNav />
        <Container>
          <Row>
            <Col>This is the Dashboard</Col>
          </Row>
        </Container>
      </>
    );
  }
}

//Registration and Sign-in page should redirect to dashboard.
// There should be a link or something that looks like:
// localhost:300x/user/:user_ID/dashboard/whatever else after this point.
