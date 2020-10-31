import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Card = ({ title, description }) => {
  let history = useHistory();
  const handleClick = () => {
    history.goBack();
    // history.push(`/rooms/${title}`);
  };
  return (
    <div className="bg-light-blue w-50 dib br3 pa3 ma2 grow bw2 shadow-5 ">
      <div>
        {/* <Link onClick={()=>window.location.href = `/dashboard/rooms/${title}`} className="no-underline link dim white"> */}
        <Link onClick={handleClick} className="no-underline link dim white">
          <h2>{title} </h2>
        </Link>
        <h4>{description} </h4>
      </div>
    </div>
  );
};
export default Card;

// routes work in the component wherein the routes are defined
// as room/roomId is defined not in app it cannot be accessed from everywhere

/* <Route exact path="/rooms/roomId" component={withRouter(Chatroom)} /> */

// redirect used to directly fetch in certain data
