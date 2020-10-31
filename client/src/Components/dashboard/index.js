import React, { useState, useEffect } from 'react';
import DiscussionRooms from './discussionrooms.js';
import Form from './form.js';
import userInfo from '../userinfo';

// import { Router } from 'express';
// import { Switch } from '@material-ui/core';
// decoupled code => code which acts as a listener (ex- directly connected to db)
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Forum from '@material-ui/icons/Forum';
import AddToQueue from '@material-ui/icons/AddToQueue';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

function Dashboard() {
  // two me error aa rah tha, capital karte hi it was now a component
  const classes = useStyles();
  const [name, setName] = useState('');
  useEffect(() => {
    async function username() {
      const { name } = await userInfo();
      setName(name);
    }
    username();
  }, []);
  const logout = () => {
    window.location.href = '/';
  };
  // const {name} = userInfo();
  // console.log("here it goes",name)
  // console.log(roomMessages);
  console.log(name);
  return (
    <div>
      <Router>
        <div style={{ display: 'flex' }}>
          <Drawer
            style={{ width: '220px' }}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
              <Link to="/two" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Home'} />
                </ListItem>
              </Link>
              <Link to="/two/rooms" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <Forum />
                  </ListItemIcon>
                  <ListItemText primary={'Discussion Rooms'} />
                </ListItem>
              </Link>
              <Link to="/two/createroom" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <AddToQueue />
                  </ListItemIcon>
                  <ListItemText primary={'Create New Room'} />
                </ListItem>
              </Link>
              <Link onClick={logout} className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText primary={'Log Out'} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/two">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Welcome To Kewl
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Kewl is a multi-topic discussion forum wherein you can indulge in real-time
                  discussions on certin topics with like minded people to generate meaningful
                  thoughts on the topic.
                </Typography>
                {/* <Three /> */}
              </Container>
            </Route>
            <Route path="/two/rooms">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Discussion Rooms
                </Typography>
                <DiscussionRooms />
              </Container>
            </Route>
            <Route exact path="/two/createroom">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Create new room
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Fill this request form to create a new room
                </Typography>
                <Form />
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
// creating a collection messages inside collection rooms
export default Dashboard;

// // 3:08 => center karne ki trick

// internal routes hai :
// although page two is /two
