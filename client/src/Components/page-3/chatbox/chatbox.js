import React from 'react';
import { useParams } from 'react-router-dom';
import ChatInput from '../chatInput/chatInput.js';
import Messagelist from '../messagelist.js';
import './chatbox.css';

function Chatbox() {
  const { roomId } = useParams();
  return (
    <div style={{ border: '2px solid black' }} className="ContainerChats">
      <Messagelist />
      <div className="chatInput">
        <ChatInput channelName={roomId} channelId={roomId} />
      </div>
    </div>
  );
}
export default Chatbox;
