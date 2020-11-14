import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  sectionDesktop: {
    width: '100%',
    textAlign:'center',
    [theme.breakpoints.up('md')]: {
      width: '50%',
      textAlign:'left'
    }
  }
}));
const Card = ({ title, description }) => {
  const classes = useStyles();
  const classname = `bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5 ${classes.sectionDesktop}`;
  return (
    <Link
      onClick={() => (window.location.href = `/dashboard/rooms/${title}`)}
      className="no-underline link black"
    >
      <div className={classname}>
        <div>
          <h2 className='white'>{title} </h2>

          <h5 className='black'>{description} </h5>
        </div>
      </div>
    </Link>
  );
};
export default Card;

// routes work in the component wherein the routes are defined
// as room/roomId is defined not in app it cannot be accessed from everywhere

/* <Route exact path="/rooms/roomId" component={withRouter(Chatroom)} /> */

// redirect used to directly fetch in certain data
