import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ScrollToBottom from "react-scroll-to-bottom";
import { useState, useEffect } from "react";
import userInfo from '../../userinfo/userinfo'
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Messages = ({ message, timestamp,username }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <ScrollToBottom className="messages">
        <Card className={classes.root}>
          {/* bg={"dark"} */}
          <CardContent>
            <Typography variant="body2" component="p">
              {message}
              {"    "}
              {username}
              {/* name of the sender and time at which message is sent */}
              {/* {timestamp} //Error: Objects are not valid as a React child (found: object with keys {seconds, nanoseconds}). */}
            </Typography>
          </CardContent>
        </Card>
      </ScrollToBottom>
    </div>
  );
};

export default Messages;
