import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

export default () => (
  <Router>
    <Switch>
      <Route path='/'>
        <p>GG</p>
      </Route>
    </Switch>
  </Router>
);
