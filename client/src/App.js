import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Components/homepage/Homepage";
import Dashboard from "./Components/dashboard";
import Three from "./Components/page-3/three";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Loading } from "./Components/homepage/Loading";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <ProtectedRoute
            exact={true}
            path="/dashboard"
            component={Dashboard}
          />
          {/* <Route
          exact={true}
          path="/two"
          component={two}
        />*/}
          <Route exact={true} path="/login/redirect" component={Loading} />
          <Route exact={true} path="/three" component={Three} />
        </Switch>
      </Router>
    );
  }
}

export default App;
