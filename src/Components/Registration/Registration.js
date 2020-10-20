import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap";
import "./Style.css";

export default class Registration extends Component {
  handleChange() {
    console.log("handleChange");
  }
  handleSubmit() {
    console.log("submit clicked");
  }

  render() {
    return (
      <Container className="regCont">
        <Row>
          <Col />
          <Col className="regTitle"> REGISTER, YA NUT!</Col>
          <Col />
        </Row>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit} noValidate>
              <br />
              <InputGroup size="lg">
                <Col className="regText">User name:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="userName"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  //   value={this.state.userName}
                  onChange={this.handleChange}
                  noValidate
                />
              </InputGroup>
              <InputGroup size="lg">
                <Col className="regText">Password:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="password"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  //   value={this.state.password}
                  onChange={this.handleChange}
                  noValidate
                />
              </InputGroup>
              <InputGroup size="lg">
                <Col className="regText">Email:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="email"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  //   value={this.state.email}
                  onChange={this.handleChange}
                  noValidate
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
