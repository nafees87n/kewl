import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ScrollToBottom from 'react-scroll-to-bottom';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Messages() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <ScrollToBottom className="messages">
    <Card className={classes.root}  >
      {/* bg={"dark"} */}
      <CardContent>
        <Typography variant="body2" component="p">
          this is the first message
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" component="p">
          this is the second message
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.root}>
    <CardContent>
      <Typography variant="body2" component="p">
        this is the third message
      </Typography>
    </CardContent>
  </Card>
  </ScrollToBottom>
    </div>
  );
}

export default Messages;
