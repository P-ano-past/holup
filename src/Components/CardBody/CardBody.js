import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
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

export default class CardBody extends Component {
  state = {
    users: [],
    timers: "bloop",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  };

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

  componentDidMount() {
    axios
      .get("/api/user")
      .then((res) => {
        const users = res.data;
        console.log(users);
        this.setState({ users });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`/api/user/${this.state._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload(false);
  };

  handleEdit(_id, e) {
    console.log(this.state);
    e.preventDefault();
    axios
      .get(`/api/user/${_id}`)
      .then((res) => {
        this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          phone: res.data.phone,
          timers: res.data.timers,
          _id: res.data._id,
        });
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  handleShow = (event) => {
    this.setState({ show: true });
  };

  handleClose = (event) => {
    this.setState({ show: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      axios
        .put(`/api/user/${this.state._id}`, {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phone: this.state.phone,
        })
        .then((res) => {
          console.log(res);
          console.log(this.state._id);
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } else {
      console.error("Invalid Form");
      this.handleShow();
    }
    window.location.reload(false);
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <Card>
          <Card.Body scrollable={true}>
            <Row>
              {/* <Col className="align"></Col> */}
              <Col xs={2} className="contHead">
                First name:
              </Col>
              <Col xs={2} className="contHead">
                Last name:
              </Col>
              <Col xs={2} className="contHead">
                Check-in time:
              </Col>
              <Col xs={3} className="contHead">
                Elapsed time:
              </Col>
            </Row>
            <ListGroup>
              {this.state.users.map((users) => (
                <ListGroupItem>
                  <Row>
                    <Col className="userContent" xs={2}>
                      {users.firstInitial}
                    </Col>
                    <Col className="userContent">{users.lastName}</Col>
                    <Col className="userContent">
                      <b>{users.time}</b>
                      {/* <b>{users.date}</b> */}
                    </Col>
                    <Col className="userContent">
                      <b>{this.state.timers}</b>
                      {/* increment with a ticker and set state. */}
                    </Col>
                    <Col>
                      <Button
                        className="editBtn"
                        type="edit"
                        id={users._id}
                        onClick={(e) => {
                          this.handleShow();
                          this.handleEdit(users._id, e);
                        }}
                      >
                        Edit
                      </Button>
                    </Col>
                    {/* &ensp;
                   &ensp;
                   */}
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
        <Modal
          className="editModal"
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
                    placeholder={this.state.firstName}
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
                    placeholder={this.state.lastName}
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
                    placeholder={this.state.email}
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
                    placeholder={this.state.phone}
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
                  <Button
                    variant="danger"
                    className="deleteBtn"
                    type="delete"
                    onClick={this.handleDelete}
                  >
                    <b>Delete</b>
                  </Button>
                </Modal.Footer>
              </Form>
            </Col>
          </Row>
        </Modal>
      </>
    );
  }
}
