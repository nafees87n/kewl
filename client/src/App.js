import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Homepage from "./Components/homepage/Homepage";
import Dashboard from "./Components/dashboard";
// import Three from "./Components/page-3/three";
import Two from "./Components/two";
import Chatroom from "./Components/chats/chatroom1";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Loading } from "./Components/homepage/Loading";
import DiscussionRooms from "./Components/chats/discussionrooms";
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
          <Route exact={false} path="/two" component={Two} />
          <Route exact={false} path="/two/rooms" component={DiscussionRooms} />
          <Route exact={true} path="/login/redirect" component={Loading} />
          {/* <Route exact={true} path="/three" component={Three} /> */}
          <Route exact path="/room/:roomId" component={withRouter(Chatroom)}>
            {/* <h2> this is an individual chat room !!! </h2> */}
            <Chatroom />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
