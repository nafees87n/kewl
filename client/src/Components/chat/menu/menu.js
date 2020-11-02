import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Avatar from '@material-ui/core/Avatar';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5'
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    textDecoration:'none',
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:'center',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  listItemIcon:{
    alignItems:"center",
    verticalAlign:"middle"
  },
  link:{
    textDecoration:"none"
  }
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    window.location.href = '/';
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Options
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link to="/dashboard" className={classes.link} >
            <ListItemIcon className={classes.listItemIcon}>
              <HomeIcon fontSize="large" />
              <ListItemText primary="Home" />
            </ListItemIcon>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          {/* <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon> */}
          <Link to="#" className={classes.link}>
            <div className={classes.root}>
              <Avatar>SG</Avatar>
            <ListItemText primary="Profile" />
            </div>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link onClick={logout} className={classes.link}>
            <ListItemIcon className={classes.listItemIcon}>
              <ExitToAppIcon fontSize="large" />
            <ListItemText primary="Log Out" />
            </ListItemIcon>
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
