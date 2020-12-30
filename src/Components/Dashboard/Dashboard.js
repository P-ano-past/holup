import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import DashNav from "./DashNav/DashNav";
import { UserConsumer } from "../../Utils/UserContext/UsernameContext";
import "./Style.css";

export default class Dashboard extends Component {
  render() {
    // const { id } = this.props.match.params;
    return (
      <>
        <DashNav />
        <Container>
          <Row>
            <Col>
              <UserConsumer>
                {(props) => {
                  return <h2>Hello there {props.name} !</h2>;
                }}
              </UserConsumer>
            </Col>
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
