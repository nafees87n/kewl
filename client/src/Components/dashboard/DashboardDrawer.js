import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Forum from '@material-ui/icons/Forum';
import AddToQueue from '@material-ui/icons/AddToQueue';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));
function DashbaordDrawer({name}) {
  const classes = useStyles();
  const logout = () => {
    window.location.href = '/';
  };
  return (
    <Drawer
      style={{ width: '220px' }}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={name} color='white'  />
        </ListItem>
        <Link to="/dashboard" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>
        <Link to="/dashboard/rooms" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Forum />
            </ListItemIcon>
            <ListItemText primary={'Discussion Rooms'} />
          </ListItem>
        </Link>
        <Link to="/dashboard/createroom" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <AddToQueue />
            </ListItemIcon>
            <ListItemText primary={'Create New Room'} />
          </ListItem>
        </Link>
        <Link onClick={logout} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={'Log Out'} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default DashbaordDrawer;
