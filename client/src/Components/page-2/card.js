import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width : 200,
    height : 250,
    margin : 10,
    backgroundColor : 'pink',
    
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

export default function SimpleCard({headline}) {
  const classes = useStyles();
  return (
    <div className='y'>
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" align="center" color="primary">
          <div>
            {headline}
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  </div>
  );
}
