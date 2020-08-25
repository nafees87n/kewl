import React from "react";
import JoinRoom from "../joinRoom/joinRoom.js"
import Messagelist from "../messagelist.js"
import "./chatbox.css"

const Chatbox = () => (
    <div style={{border: "2px solid black"}} className="ContainerChats">
        This is the chat box
        <Messagelist />
        <div className= "joinroom">
        <JoinRoom />
        </div>
    </div>
);
export default Chatbox;

