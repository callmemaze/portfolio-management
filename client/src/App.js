import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Order from "./components/Order";
import SideNav from "./components/SideNav";
import Auth from "./components/Auth/Auth";
import PrivateRoute from "./components/PrivateRoutes";
const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/order" exact component={Order} />
          <Route path="/auth" exact component={Auth}></Route>
          <Redirect to="/" exact></Redirect>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
