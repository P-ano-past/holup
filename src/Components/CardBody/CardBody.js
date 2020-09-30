import React, { Component } from "react";
import axios from "axios";

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

  render() {
    return (
      <ul>
        {this.state.users.map((users) => (
          <li>
            {users.firstName} &ensp;
            {users.lastName} &ensp;
            {users.date}
          </li>
        ))}
      </ul>
    );
  }
}
