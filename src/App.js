import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from "./screens/landing";
import { Login } from "./screens/login";
import { Register } from "./screens/register";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
