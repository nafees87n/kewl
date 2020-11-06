import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Components/homepage';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/dashboard';
import Chatroom from './Components/message';
import { Loading } from './Components/homepage/Loading';
import 'tachyons';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

const App = ()=>{
  return(
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login/redirect" component={Loading} />
        <ProtectedRoute exact path="/dashboard/rooms/:roomId" component={Chatroom} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
