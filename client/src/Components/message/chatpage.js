import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ChatNav from './ChatNav';
import userInfo from '../userinfo';
import MessageList from './messagelist';
import ChatInput from './chatInput';
import { Container } from '@material-ui/core';
import ScrollToBottom from 'react-scroll-to-bottom';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     // maxWidth: 500,
//     // maxHeight: 600
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary
//   }
// }));
// import styles from './styles/styles.module.css';
const ChatPage = ({ roomname }) => {
  // const classes = useStyles();
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    async function info() {
      const { picture, name } = await userInfo();
      setPicture(picture);
      setName(name);
    }
    info();
  }, []);
  return (
    <div style={{ background: 'pink' }}>
      <Grid
        container
        spacing={0}
        style={{
          margin: 0,
          width: '100%',
          maxHeight: '100vh'
        }}
      >
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
          <ChatNav roomname={roomname} picture={picture} username={name} />
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid
          item
          xs={10}
          style={{
            paddingTop: 15,
            paddingBottom: 8,
            width: '100%',
            height: '89.5vh'
          }}
        >
          <Grid
            container
            spacing={0}
            style={{
              margin: 0,
              width: '100%',
              maxHeight: '86.7vh'
            }}
          >
            <Grid item xs={12} style={{ backgroundColor: '#ffe6f2' }}>
              {/* <Paper className={classes.paper}>xs=12</Paper> */}

              <ScrollToBottom>
                <Container style={{ maxHeight: '76.4vh', height: '76.4vh', width: '100%' }}>
                  <MessageList />
                </Container>
              </ScrollToBottom>
            </Grid>
            <Grid item xs={12}>
              {/* <Paper className={classes.paper}>xs=12</Paper> */}
              <ChatInput channelId={roomname} picture={picture} fullname={name} />
            </Grid>
          </Grid>
          {/* <Container style={{ maxHeight: '85.7vh', backgroundColor: '#ffe6f2' }}>
            <ScrollToBottom>
              {/* <Typography component="div" style={{  }}>
              <MessageList />
               </Typography>
            </ScrollToBottom>
            <div>
              <ChatInput channelName={roomname} channelId={roomname} />
            </div>
          </Container> */}
        </Grid>

        {/* <Grid item xs={1}></Grid> */}
      </Grid>
    </div>
  );
};

export default ChatPage;
