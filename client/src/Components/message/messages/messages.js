import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 70,
    margin: 'auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  messageArea: {
    // height: '70vh',
    overflowY: 'auto'
  },
  chatSection: {
    width: '50%',
    backgroundColor: 'red'
    // height: '80vh'
  }
});

const Messages = ({ message, timestamp, username }) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  console.log(typeof(timestamp));
  return (
    <>
      {/* <ScrollToBottom className={classes.root}> */}
      {/* <Card className={classes.root}>
          bg={"dark"}
          <CardContent>
            <Typography variant="body2" component="p">
              {message}
              {'    '}
              {username}
              name of the sender and time at which message is sent
              {timestamp} //Error: Objects are not valid as a React child (found: object with keys {seconds, nanoseconds}).
            </Typography>
          </CardContent>
        </Card> */}
      <Grid container className={classes.root}>
        <Grid item xs={9} style={{ width: '100%' }}>
          <List className={classes.messageArea}>
            <ListItem>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary={message}></ListItemText>
                </Grid>
                <Grid container xs={12}>
                  <Grid item xs={6}>
                    <ListItemText
                      secondary={new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    ></ListItemText>
                  </Grid>
                  <Grid item xs={6}>
                    <ListItemText align="right" secondary={username}></ListItemText>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      {/* </ScrollToBottom> */}
    </>
  );
};

export default Messages;
