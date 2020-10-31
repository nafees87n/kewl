import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Homepage from './Components/homepage';
import Dashboard from './Components/dashboard';
import Chatroom from './Components/chats/chatroom';
// import ProtectedRoute from './Components/ProtectedRoute';
import { Loading } from './Components/homepage/Loading';
import DiscussionRooms from './Components/dashboard/discussionrooms';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/two" component={Dashboard} />
          <Route path="/two/rooms" component={DiscussionRooms} />
          <Route exact path="/login/redirect" component={Loading} />
          <Route exact path="/room/:roomId" component={withRouter(Chatroom)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
