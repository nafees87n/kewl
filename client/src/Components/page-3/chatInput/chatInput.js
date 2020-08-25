import React,{useState} from "react";
import { Button } from '@material-ui/core';
import db from "../../../firebase"
function ChatInput({channelName,channelId}) {
// 3:48
    const [input,setInput] = useState('');

    const sendMessage =e =>{
        e.preventDefault();

        if(channelId){
            db
            .collection('rooms')
            .doc(channelId)
            .collection('messages')(
                {message: input}
            )
        }
    }

    return(
        <div className= "joinroom">
        <form>
            <input 
            placeholder={`Message here`} 
            value = {input}
            onChange= { e=> setInput(e.target.value)}
            />
            <Button type="submit" onclick={sendMessage}>SEND</Button>
        </form>
    </div>
    )
    }

export default ChatInput;