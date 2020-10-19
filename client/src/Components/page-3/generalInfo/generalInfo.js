import React from 'react';
// import './InfoBar.css';
import { makeStyles } from '@material-ui/core/styles';

import { List, ListItem, ListItemText, Link, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

function GeneralInfo() {
  const classes = useStyles();
  return (
    <div className="Info" style={{ border: '2px solid black' }}>
      <Container>
        <Typography variant="body1" gutterBottom>
          General Info about the room set up by the creator
        </Typography>

        {/* <Link to="/" className={classes.link}>
      <ListItem button>
        <ListItemText primary={"Link submitted by the creator"} />
      </ListItem>
    </Link> */}

        <Link component="button" variant="body2">
          {' '}
          Link submitted by the creator
        </Link>
      </Container>
    </div>
  );
}

export default GeneralInfo;

// autocomplete => for creating new groups
// AppBar
// card /paper=> for groups
// drawer
// filled-input
// list
// menu -> hamburger
