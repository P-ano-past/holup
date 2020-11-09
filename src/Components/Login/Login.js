import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "./Style.css";

export default class Login extends Component {
  render() {
    return (
      <Container className="signInCont">
        <Row>
          <Col />
          <Col>
            <h2 id="signInText">Sign-In</h2>
          </Col>
          <Col />
        </Row>
        <Row>
          <Col>
            <Form>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Username:</Col>
                <FormControl
                  className="signInInput"
                  type="text"
                  name="Username"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  // value={""}
                  // onChange={""}
                  NoValidate
                />
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Password:</Col>
                <FormControl
                  className="signInInput"
                  type="text"
                  name="Password"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  // value={""}
                  // onChange={""}
                  NoValidate
                />
              </InputGroup>
              <br />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col />
          <Col>
            <Button href="/Home">Cancel</Button>
          </Col>
          <Col>
            <Button type="submit" onClick={this.handleRedirect}>
              Submit
            </Button>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
