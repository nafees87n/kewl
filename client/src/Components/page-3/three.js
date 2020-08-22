// leave room option also needs to be implemented
import React,{ Component } from "react";
import GeneralInfo from "./generalInfo/generalInfo.js";
import Chatbox from "./chatbox/chatbox.js";
import Menu from "./menu/menu.js";
import DisplayUsers from "./displayUsers/displayUsers.js";
import "./three.css";

class Three extends Component{
    render(){
        return(
            <div id="outer" >
                <h1 style={{ textAlign : "center"}}>Project Name</h1>
                
                <div id="heading" style={{ textAlign : "center", fontSize: "1.5rem" , border: "2px solid black"}}>
                    RoomName and Username
                    <Menu />
                </div>
                
                <div id="inner_container">
                    <div id= "left_inner">
                        < Chatbox />
                    </div>
                    <div id= "right_inner" >   
                        <div>
                        < GeneralInfo />
                        </div>
                        <div>
                        < DisplayUsers />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Three;

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