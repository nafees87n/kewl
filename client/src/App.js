import React from 'react';
import './App.css';
import './Components/chat/chat.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Components/homepage';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/dashboard';
import Chatroom from './Components/chat';
import { Loading } from './Components/homepage/Loading';
import 'tachyons';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login/redirect" component={Loading} />
        <ProtectedRoute exact path="/dashboard/rooms/:roomId" component={Chatroom} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
