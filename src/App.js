import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Queue from "./Components/Queue/Queue";
import Registration from "./Components/Registration/Registration";
import Navigation from "./Components/Navbar/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import { UsernameContext } from "./Utils/UserContext/UsernameContext"


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: { username: String, isLoggedIn: "" },
      setProfile: this.setProfile,
    };
  }

  setProfile = (profile) => {
    this.setState({ profile });
  };

  render() {
    return (
        <div className="App">
            <UsernameContext.Provider value={this.state}>
                <Navigation fixed="top" />

                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/Home" exact component={Home} />
                  <Route path="/Login" exact component={Login} />
                  <Route path="/Registration" exact component={Registration} />
                  <Route path="/Dashboard" exact component={Dashboard} />
                  <Route path="/queue" exact component={Queue} />
                </Switch>
            </UsernameContext.Provider> 
        </div>
    )
  }
}