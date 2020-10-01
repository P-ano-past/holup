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

  handleDelete(id, e) {
    console.log("clicked");
    axios
      .delete(`/api/user/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const users = this.state.users.filter((item) => item.id !== id);
        this.setState({ users });

        // const users = res.data;
        // this.setState({ users });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
                  id={users.id}
                  onClick={(e) => this.handleDelete(users.id, e)}
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
