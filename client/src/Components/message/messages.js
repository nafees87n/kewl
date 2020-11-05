import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid,Paper } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    // maxWidth: 5000,
    // maxHeight: 70,
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
    // overflowY: 'auto'
  },
  chatSection: {
    width: '50%',
    backgroundColor: 'red'
    // height: '80vh'
  },
  timestamp:{
  textAlign:'right',
  fontSize:'0.5em',
  marginBottom:'0',
  marginRight:'5px'
  },
  message:{
    margin:'4px 9px'
  }
});

const Messages = ({ message, timestamp, username, picture }) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
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
      <Grid
        container
        direction="row"
        className={classes.root}
        alignItems='center'
        // justify='flex-end'
        alignContent='center'
        style={{ marginTop: '10px',paddingLeft:'5px', marginBottom:'10px' }}
      >
        {/* <Grid item xs={12} >
          <List className={classes.messageArea}>
            <ListItem style={{ width: '100%',position:'relative' }}>
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
        </Grid> */}
        <Grid alignContent='center' item xs={3} md={1}>
          <Avatar style={{align:'center'}} src={picture} />
        </Grid>
        <Grid item xs={8} md={8}>
        <strong>{username}</strong>
          <Grid container component={Paper}>
            <Grid item xs={12} className={classes.message}>{message} </Grid>
            <Grid item xs={12} justify='flex-end' >
              <p className={classes.timestamp}>{new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Messages;
