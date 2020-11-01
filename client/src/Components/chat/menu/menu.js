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
    '& > *': {
      margin: theme.spacing(1)
    }
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
          <ListItemIcon>
            <HomeIcon fontSize="large" />
          </ListItemIcon>
          <Link to="/two" className={classes.link}>
            <ListItemText primary="Home" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          {/* <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon> */}
          <div className={classes.root}>
            <Avatar>SG</Avatar>
          </div>
          <Link to="#" className={classes.link}>
            <ListItemText primary="Profile" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="large" />
          </ListItemIcon>
          <Link onClick={logout} className={classes.link}>
            <ListItemText primary="Log Out" />
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
