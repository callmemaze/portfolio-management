import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Order from "./components/Order";
import SideNav from "./components/SideNav";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <SideNav />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/order" exact component={Order} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
