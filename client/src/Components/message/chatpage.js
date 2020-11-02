import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChatNav from './ChatNav';
import userInfo from "../userinfo";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  
}));
// import styles from './styles/styles.module.css';
const ChatPage = ({ roomname }) => {
  const classes = useStyles();
  const [picture,setPicture]=useState('');
  const [name,setName]=useState('');
  useEffect(() => {
    async function info() {
      const { picture,name } = await userInfo();
      setPicture(picture);
      setName(name);
    }
    info();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {/* <Paper className={classes.paper}>xs=12</Paper> */}
        <ChatNav roomname={roomname} picture={picture} username={name} />
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
    </Grid>
  );
};

export default ChatPage;
