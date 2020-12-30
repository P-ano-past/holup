import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./Style.css";

const validEmailRegex = RegExp(
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const validPhoneRegex = RegExp(
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      referrer: null,
      username: "",
      userPassword: "",
      userEmail: "",
      userPhone: "",
      errors: {
        username: "",
        userPassword: "",
        userEmail: "",
        userPhone: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length < 3 || ""
            ? "Username must be at least 3 characters long!"
            : "";
        break;
      case "userPassword":
        errors.userPassword =
          value.length < 3 || ""
            ? "Password must be at least 3 characters long!"
            : "";
        break;
      case "userEmail":
        errors.userEmail =
          validEmailRegex.test(value) || "" ? "" : "Email is not valid!";
        break;
      case "userPhone":
        errors.userPhone =
          validPhoneRegex.test(value) || "" ? "" : "Phone number is not valid!";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      axios
        .post("/api/user", {
          username: this.state.username,
          userPassword: this.state.userPassword,
          userEmail: this.state.userEmail,
          userPhone: this.state.userPhone,
        })
        .then((req) => {
          console.log(req);
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        username: "",
        userPassword: "",
        userEmail: "",
        userPhone: "",
      });
    } else {
      console.error("Invalid Form");
      this.handleShow();
    }

    // window.location.reload(false);
  };

  // handleRedirect = (event) => {
  //   this.setState({ referrer: "/dashboard" });
  // };

  render() {
    const { referrer } = this.state;
    if (referrer) return <Redirect to={referrer} />;

    const { errors } = this.state;

    return (
      <Container className="regCont">
        <Row>
          <Col />
          <Col className="regTitle">
            <h2>Register</h2>
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
                  className="regInput"
                  type="text"
                  name="username"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.username}
                  onChange={this.handleChange}
                  autoComplete="username"
                  noValidate
                />
                {errors.username.length > 0 && (
                  <span className="error">{errors.username}</span>
                )}
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Password:</Col>
                <FormControl
                  className="regInput"
                  type="password"
                  name="userPassword"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.userPassword}
                  autocomplete="current-password"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.userPassword.length > 0 && (
                  <span className="error">{errors.userPassword}</span>
                )}
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Email:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="userEmail"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  autocomplete="email"
                  value={this.state.userEmail}
                  onChange={this.handleChange}
                  pattern=".+@globex.com"
                  noValidate
                />
                {errors.userEmail.length > 0 && (
                  <span className="error">{errors.userEmail}</span>
                )}
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Phone:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="userPhone"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  autocomplete="phone"
                  value={this.state.userPhone}
                  onChange={this.handleChange}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  noValidate
                />
                {errors.userPhone.length > 0 && (
                  <span className="error">{errors.userPhone}</span>
                )}
              </InputGroup>
              <br />
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
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
