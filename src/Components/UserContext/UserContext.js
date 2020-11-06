import React, { Component, createContext } from "react";

const UserContext = createContext({
  username: "",
  updateUsername: () => {},
});

export class UserProvider extends Component {
  updateUsername = (newUsername) => {
    this.setState({ username: newUsername });
  };

  state = {
    username: "user",
    updateUsername: this.updateUsername,
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
