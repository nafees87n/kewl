import React from "react";
import Chatroom from "./chatroom1";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

const Card = ({ title, description }) => {
  const raiseInvoiceClicked = () => {
    var title1 = title.replace(/\s/g, "");
    window.location.href = `/room/${title1}`;
  };

  return (
    <div className="bg-light-blue w-50 dib br3 pa3 ma2 grow bw2 shadow-5 ">
      <div>
        <Link
          onClick={raiseInvoiceClicked}
          className="no-underline link dim white"
        >
          <h2>{title} </h2>
        </Link>
        <h4>{description} </h4>
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
          <Route
            exact
            path="two/rooms/roomId"
            component={withRouter(Chatroom)}
          />
        </Switch>
      </Router>
    </div>
  );
};
export default Card;

// routes work in the component wherein the routes are defined
// as room/roomId is defined not in app it cannot be accessed from everywhere


  /* <Route exact path="/rooms/roomId" component={withRouter(Chatroom)} /> */

// redirect used to directly fetch in certain data
