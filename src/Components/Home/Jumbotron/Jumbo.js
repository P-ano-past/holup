import React, { Component } from "react";
import "./Jumbo.css";
import {
  Jumbotron,
  Button,
  InputGroup,
  FormControl,
  Modal,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "./Jumbo.css";
import Clock from "../../Clock/Clock";
import axios from "axios";

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

export default class Jumbo extends Component {
  constructor(props) {
    let getTime = new Date(),
      hours = getTime.getHours() % 12 || 12,
      mins = getTime.getMinutes(),
      time = hours + ":" + mins;

    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      time: time,
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
    this.wrapper = React.createRef();
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 3 || ""
            ? "First name must be at least 3 characters long!"
            : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 3 || ""
            ? "Last name must be at least 3 characters long!"
            : "";
        break;
      case "email":
        errors.email =
          validEmailRegex.test(value) || "" ? "" : "Email is not valid!";
        break;
      case "phone":
        errors.phone =
          validPhoneRegex.test(value) || "" ? "" : "Phone number is not valid!";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.time);
    if (validateForm(this.state.errors)) {
      axios
        .post("/api/user", {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phone: this.state.phone,
          time: this.state.time,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        time: "",
      });
    } else {
      console.error("Invalid Form");
      this.handleShow();
    }
    window.location.reload(false);
  };
  handleShow = (event) => {
    this.setState({ show: true });
    console.log(this.state.time);
    console.log(this.state);
  };

  handleClose = (event, props) => {
    this.setState({ show: false });
  };

  render() {
    const { errors } = this.state;
    return (
      <Jumbotron>
        <h1 className="display-4">
          | <b>Q</b> | The queuing app
        </h1>
        <hr className="my-4" />
        <p className="lead">
          Please feel free to check-in and you will be notified soon!
        </p>
        <h2 className="time">
          Current time: <Clock value={this.state.time} />
        </h2>
        <Button className="checkinBtn" onClick={this.handleShow}>
          Check-In
        </Button>
        <Modal
          className="custom_modal"
          show={this.state.show}
          onHide={this.handleClose}
          ref={this.wrapper}
        >
          {this.props.children}
          <Modal.Header closeButton={this.handleClose}>
            <Modal.Title>Check-In here!</Modal.Title>
          </Modal.Header>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit} noValidate>
                <br />
                <InputGroup size="lg">
                  <FormControl
                    placeholder="First name:"
                    type="text"
                    name="firstName"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    noValidate
                  />
                  {errors.firstName.length > 0 && (
                    <span className="error">{errors.firstName}</span>
                  )}
                </InputGroup>
                <br />
                <InputGroup size="lg">
                  <FormControl
                    placeholder="Last name:"
                    type="text"
                    name="lastName"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.lastName.length > 0 && (
                    <span className="error">{errors.lastName}</span>
                  )}
                </InputGroup>
                <br />
                <InputGroup size="lg">
                  <FormControl
                    placeholder="Email:"
                    type="email"
                    name="email"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={this.state.email}
                    onChange={this.handleChange}
                    pattern=".+@globex.com"
                    required
                  />
                  {errors.email.length > 0 && (
                    <span className="error">{errors.email}</span>
                  )}
                </InputGroup>
                <br />
                <InputGroup size="lg">
                  <FormControl
                    placeholder="Phone:"
                    type="tel"
                    name="phone"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                  {errors.phone.length > 0 && (
                    <span className="error">{errors.phone}</span>
                  )}
                </InputGroup>
                <br />
                <Modal.Footer>
                  <Button type="submit" onClick={this.handleClose}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Form>
            </Col>
          </Row>
        </Modal>
      </Jumbotron>
    );
  }
}

// auto focus on first name, enter button into next section.
