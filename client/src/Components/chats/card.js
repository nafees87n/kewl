import React from 'react';
import Chatroom from './chatroom1';
import {  
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
    useParams
  } from "react-router-dom";


const Card = ({ title }) => {

  const raiseInvoiceClicked=()=>{
    var title1 = title.replace(/\s/g,''); 
    window.location.href=`/room/${title1}`;
  }

  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <Link onClick={raiseInvoiceClicked}>
          <h2>{title} </h2>
        </Link>
      </div>
      {/* <Router> */}
        {/* <h2> HEY !!! </h2> */}
        {/* <Switch> */}
          {/* <Route exact path="/rooms/roomId" component={withRouter(Chatroom)} /> */}
            {/* <h2> HEY !!! </h2>
            <Chatroom />
          </Route>
        </Switch> */}
      {/* </Router> */}
      <Router>
        <Switch>
        <Route exact path="/rooms/roomId" component={withRouter(Chatroom)} />
        </Switch>
      </Router>
    </div>
  );
};
export default Card;


// routes work in the component wherein the routes are defined
// as room/roomId is defined not in app it cannot be accessed from everywhere

{/* <Route exact path="/rooms/roomId" component={withRouter(Chatroom)} /> */}
// redirect used to directly fetch in certain data