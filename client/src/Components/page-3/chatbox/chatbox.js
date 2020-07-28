import React from "react";
import JoinRoom from "../joinRoom/joinRoom.js"
import Messages from "../messages/messages.js"
import "./chatbox.css"

const Chatbox = () => (
    <div style={{border: "2px solid black"}} className="ContainerChats">
        This is the chat box
        <Messages />
        <div className= "joinroom">
        <JoinRoom />
        </div>
    </div>
);
export default Chatbox;

