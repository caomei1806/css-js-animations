import React from "react";
import "./App.scss";
import "../node_modules/boxicons/css/boxicons.min.css";
import { Navbar } from "./componenets/Navbar";
import { Navigation } from "./componenets/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./componenets/Home";
import { Yellow } from "./componenets/Yellow";
import { White } from "./componenets/White";
import { PageNotFound404 } from "./componenets/PageNotFound404";
import { Orange } from "./componenets/Orange";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="content">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/yellow">
              <Yellow />
            </Route>
            <Route path="/white">
              <White />
            </Route>
            <Route path="/orange">
              <Orange />
            </Route>
            <Route path="*" exact>
              <PageNotFound404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
