import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import db from '../../firebase';
const useStyles = makeStyles((theme) => ({
  inputBox: {
    border: 'none',
    width: '94%',
    borderBottom: '1px solid black',
    height: '6vh',
    marginLeft: '2vw',
    marginTop: '1vh'
  },
  sendButton: {
    margin: '0',
    padding: '0',
    marginTop: '1.75vh'
  }
}));
function ChatInput({ channelId, picture, fullname }) {
  // 3:48
  const classes = useStyles();
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .doc(new Date().getTime().toString())
        .set(
          {
            message: input,
            timestamp: new Date().getTime(),
            username: fullname.split(' ')[0],
            picture: picture
          },
          { merge: true }
        );
      setInput('');
    }
  };

  return (
    <form className={classes.form} noValidate autoComplete="off" fullWidth>
      <Grid direction="row" container alignItems="flex-start">
        <Grid item xs={1}></Grid>
        <Grid item xs={8}>
          <input
            className={classes.inputBox}
            placeholder={`Message here`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Button className={classes.sendButton} type="submit" onClick={sendMessage}>
            <SendIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ChatInput;
