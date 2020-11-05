import React, { useState, useEffect } from 'react';
import DiscussionRooms from './discussionrooms.js';
import Form from './CreateRoom.js';
import userInfo from '../userinfo';
import DashboardDrawer from './DashboardDrawer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

function Dashboard() {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  useEffect(() => {
    async function username() {
      const { name,picture } = await userInfo();
      setName(name);
      setPicture(picture);
    }
    username();
  }, []);

  return (
    <div >
      <Router>
        <div style={{ display: 'flex' }}>
          <DashboardDrawer name={name} picture={picture} />
          {/* drawer imported */}
          <Switch>
            <Route exact path="/dashboard">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Welcome To Kewl
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Kewl is a multi-topic discussion forum wherein you can indulge in real-time
                  discussions on certin topics with like minded people to generate meaningful
                  thoughts on the topic.
                </Typography>
              </Container>
            </Route>
            <Route exact path="/dashboard/rooms">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Discussion Rooms
                </Typography>
                <DiscussionRooms />
              </Container>
            </Route>
            <Route exact path="/dashboard/createroom">
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
            {/* <Route exact path="/dashboard/rooms/:roomid" component={withRouter(Chatroom)} /> */}
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
