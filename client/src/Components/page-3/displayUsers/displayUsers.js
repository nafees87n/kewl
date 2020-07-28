import React from "react";

import { makeStyles } from "@material-ui/core/styles"
import PersonIcon from '@material-ui/icons/Person';

import {
  List, ListItem,
  ListItemText, ListItemIcon,
  Container, Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function DisplayUsers() {
    const classes = useStyles();
    return (
        <div className="Info" style={{textAlign : "center"}}>

    USERS:
    <List>
      <ListItem>
      <ListItemIcon>
            <PersonIcon />
      </ListItemIcon>
        <ListItemText primary={"User1"} />
      </ListItem>

      <ListItem>
      <ListItemIcon>
            <PersonIcon />
      </ListItemIcon>
        <ListItemText primary={"User2"} />
      </ListItem>
      
      <ListItem>
      <ListItemIcon>
            <PersonIcon />
      </ListItemIcon>
        <ListItemText primary={"User3"} />
      </ListItem>
      
      <ListItem>
      <ListItemIcon>
            <PersonIcon />
      </ListItemIcon>
        <ListItemText primary={"User4"} />
      </ListItem>
    </List>
    </div>
    );
  }


export default DisplayUsers;



// const DisplayUsers = () =>(
//     <div className="Info" >
//     USERS :-
//     <List>
//     <Link to="/" className={classes.link}>
//       <ListItem button>
//         <ListItemText primary={"Home"} />
//       </ListItem>
//     </Link>
//     <Link to="/about" className={classes.link}>
//       <ListItem button>
//         <ListItemText primary={"About"} />
//       </ListItem>
//     </Link>
//     </List>
//     </div>
// )