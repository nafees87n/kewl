import React from 'react';
import Chatroom from './chatroom1';
import {
    BrowserRouter as Router,  Switch, Route, Link} from "react-router-dom";

const Card = ({title}) => {
    return (
        <div className= "bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <div>
                <Link to="/room/roomId">
                <h2>{title} </h2>
                </Link>
                </div>
                {/* <Router>
                <h2> HEY !!! </h2> */}
                <Switch>
                    <Route exact path="/rooms/:roomId" component="Chatroom ">
                    <h2> HEY !!! </h2> 
                    <Chatroom />
                    </Route>
                    </Switch>
                {/* </Router> */}
        </div>
    );
} 
export default Card;