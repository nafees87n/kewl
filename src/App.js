import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import One from "./Components/one";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact={true} path="/" component={One} />
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
