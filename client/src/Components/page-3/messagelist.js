import React,{useState,useEffect} from 'react'
import db from "../../firebase.js";
import Messages from "./messages/messages";
import {  
    useParams
  } from "react-router-dom";
// 2:57,3:36

const Messagelist = () => {

    const [roomMessages,setRoomMessages] = useState([]);

    const {roomId} = useParams() ;
    
    useEffect(() => {
    db.collection("rooms") // message retrieved
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp","asc")
        .onSnapshot(
            (snapshot) => (
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                )
            )
        )
    }, [])

    console.log("messages >>>>>>>",roomMessages)

    return (
        <div>
            {roomMessages.map(({message,timestamp,username}) => (
                <Messages 
                message={message} 
                timestamp={timestamp}
                username={username}
                />
            ))}
        </div>
    )
}

export default Messagelist
