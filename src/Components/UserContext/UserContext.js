import React from "react";

const UserContext = React.createContext();

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

// original code:
// const UserContext = createContext({
//   username: "",
//   updateUsername: () => {},
// });

export default UserContext;

// export class UserProvider extends Component {
//   updateUsername = (newUsername) => {
//     this.setState({ username: newUsername });
//   };

//   state = {
//     username: "user",
//     updateUsername: this.updateUsername,
//   };

//   render() {
//     return (
//       <UserContext.Provider value={this.state}>
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }

// export const UserConsumer = UserContext.Consumer;
