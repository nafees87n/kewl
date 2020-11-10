import React from 'react';
import { Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Forum from '@material-ui/icons/Forum';
import AddToQueue from '@material-ui/icons/AddToQueue';
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function DashbaordDrawer({ name, picture }) {
  const classes = useStyles();
  const logout = () => {
    window.location.href = '/';
  };
  const MobileView = (
    <div className={classes.sectionMobile}>
      <List>
        <ListItem>
          <ListItemIcon>
            <Avatar src={picture} />
          </ListItemIcon>
          {/* <ListItemText primary={name} color="white" /> */}
        </ListItem>
        <Link to="/dashboard" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {/* <ListItemText primary={'Home'} /> */}
          </ListItem>
        </Link>
        <Link to="/dashboard/rooms" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Forum />
            </ListItemIcon>
            {/* <ListItemText primary={'Discussion Rooms'} /> */}
          </ListItem>
        </Link>
        <Link to="/dashboard/createroom" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <AddToQueue />
            </ListItemIcon>
            {/* <ListItemText primary={'Create New Room'} /> */}
          </ListItem>
        </Link>
        <Link onClick={logout} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            {/* <ListItemText primary={'Log Out'} /> */}
          </ListItem>
        </Link>
      </List>
    </div>
  );
  return (
    <Drawer
      style={{ width: '15vw' }}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.sectionDesktop}>
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar src={picture} />
            </ListItemIcon>
            <ListItemText primary={name} color="white" />
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
      </div>
      {MobileView}
    </Drawer>
  );
}

export default DashbaordDrawer;
