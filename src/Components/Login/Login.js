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
import axios from "axios";

import "./Style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(`/api/user/login`, {
        data: {
          username: this.state.username,
          password: this.state.password,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
            <Form onSubmit={this.handleSubmit} noValidate>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Username:</Col>
                <FormControl
                  className="signInInput"
                  type="text"
                  name="Username"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  noValidate
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
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  noValidate
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
            <Button type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
// if status 200 REDIRECT TO DASHBOARD.
// if status 200 match password.
