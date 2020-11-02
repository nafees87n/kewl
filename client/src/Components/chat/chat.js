// leave room option also needs to be implemented
import { StylesProvider } from '@material-ui/core';
import React from 'react';
import Chatbox from './chatbox/chatbox.js';
import Menu from './menu/menu.js';
import styles from './styles/styles.module.css';
const Chat = ({ roomname }) => {
  // this.props.roomname
  return (
    <div className={styles.chatPage} 
    // id='outer'
    >
      <div className={styles.headingbar}>
        <strong>{roomname}</strong>
        
      </div>
      {/* <Menu /> */}
      <div id="inner_container">
        <div id="left_inner">
          <Chatbox />
        </div>
      </div>
    </div>
  );
};

export default Chat;

// project name and room name
// hamburger
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
// burger
// menu
// chatbox
// earlier messages
// type-message
// emoticons
// send reference links (normally link text ki tarah hi jaa raha hai )
// report message (option appear afeter a specific action on the message)
// users-display
// acitve
// inactive
// general info display
// content
// links
