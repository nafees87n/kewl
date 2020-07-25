import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact={true} path="/" component={Homepage} />
        {/* <Route
          exact={true}
          path="/two"
          component={two}
          />
          <Route
          exact={true}
          path="/three"
          component={three}
          /> */}
      </Router>
    );
  }
}

export default App;