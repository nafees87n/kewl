import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Components/homepage/Homepage";
import Dashboard from "./Components/dashboard";
<<<<<<< HEAD
import Three from "./Components/three";
import Two from "./Components/two";
=======
import Three from "./Components/page-3/three";
>>>>>>> bb4888f79a2a5d3d500f4ecb89c9038aeecea550
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
          <Route
          exact={true}
          path="/two"
          component={Two}
        />
          <Route exact={true} path="/login/redirect" component={Loading} />
          <Route exact={true} path="/three" component={Three} />
        </Switch>
      </Router>
    );
  }
}

export default App;
