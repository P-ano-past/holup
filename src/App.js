import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Queue from "./Components/Queue/Queue";
import Registration from "./Components/Registration/Registration";
import Navigation from "./Components/Navbar/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import { UserProvider } from "../src/Components/UserContext/UserContext";
import { Switch, Route } from "react-router-dom";

function App() {
  const user = { name: "bloopie", loggedIn: true };

  return (
    <div className="App">
      <UserProvider value={user}>
        <Navigation fixed="top" />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Registration" exact component={Registration} />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/queue" exact component={Queue} />
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;
