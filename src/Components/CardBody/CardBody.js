import React, { Component } from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./Style.css";

export default class CardBody extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("/api/user")
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  handleDelete(_id, e) {
    e.preventDefault();
    axios
      .delete(`/api/user/${_id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.location.reload(false);
  }

  render() {
    return (
      <Card>
        <Card.Body>
          {this.state.users.map((users) => (
            <ListGroup>
              <ListGroupItem>
                {users.firstName} &ensp;
                {users.lastName} &ensp;
                {users.date}
                <Button
                  className="deleteBtn"
                  type="delete"
                  id={users._id}
                  onClick={(e) => this.handleDelete(users._id, e)}
                >
                  X
                </Button>
              </ListGroupItem>
            </ListGroup>
          ))}
        </Card.Body>
      </Card>
    );
  }
}
