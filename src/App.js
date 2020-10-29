import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Navigation from "./Components/Navbar/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation fixed="top" />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Registration">
          <Registration />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/Queue">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
