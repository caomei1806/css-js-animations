import React from "react";
import "./App.scss";
import { Navbar } from "./componenets/Navbar";
import { Navigation } from "./componenets/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Yellow } from "./componenets/Yellow";
import { White } from "./componenets/White";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="content">
          <Navbar />
          <Switch>
            <Route path="/yellow">
              <Yellow />
            </Route>
            <Route path="/white">
              <White />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
