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
      companyName: "",
      companyPassword: "",
      companyEmail: "",
      companyPhone: "",
      errors: {
        companyName: "",
        companyPassword: "",
        companyEmail: "",
        companyPhone: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "companyName":
        errors.companyName =
          value.length < 3 || ""
            ? "Company name must be at least 3 characters long!"
            : "";
        break;
      case "companyPassword":
        errors.companyPassword =
          value.length < 3 || ""
            ? "Password must be at least 3 characters long!"
            : "";
        break;
      case "companyEmail":
        errors.companyEmail =
          validEmailRegex.test(value) || "" ? "" : "Email is not valid!";
        break;
      case "companyPhone":
        errors.companyPhone =
          validPhoneRegex.test(value) || "" ? "" : "Phone number is not valid!";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit clicked");
    if (validateForm(this.state.errors)) {
      axios
        .post("/api/user", {
          companyName: this.state.companyName,
          companyPassword: this.state.companyPassword,
          companyEmail: this.state.companyEmail,
          companyPhone: this.state.companyPhone,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        companyName: "",
        companyPassword: "",
        companyEmail: "",
        companyPhone: "",
      });
    } else {
      console.error("Invalid Form");
      this.handleShow();
    }
    // window.location.reload(false);
  };

  render() {
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
                <Col className="regText">Company Name:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="companyName"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.companyName}
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.companyName.length > 0 && (
                  <span className="error">{errors.companyName}</span>
                )}
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Password:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="companyPassword"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.companyPassword}
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.companyPassword.length > 0 && (
                  <span className="error">{errors.companyPassword}</span>
                )}
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Email:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="companyEmail"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.companyEmail}
                  onChange={this.handleChange}
                  pattern=".+@globex.com"
                  noValidate
                />
                {errors.companyEmail.length > 0 && (
                  <span className="error">{errors.companyEmail}</span>
                )}
              </InputGroup>
              <br />
              <InputGroup size="lg">
                <Col className="regText">Phone:</Col>
                <FormControl
                  className="regInput"
                  type="text"
                  name="companyPhone"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={this.state.companyPhone}
                  onChange={this.handleChange}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  noValidate
                />
                {errors.companyPhone.length > 0 && (
                  <span className="error">{errors.companyPhone}</span>
                )}
              </InputGroup>
              <br />
              <Row>
                <Col></Col>
                <Col>
                  <Button href="/Home">Cancel</Button>
                </Col>
                <Col>
                  <Button type="submit" onClick={this.handleSubmit}>
                    Submit
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
