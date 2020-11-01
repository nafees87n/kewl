import React from 'react';
import { Route, useParams } from 'react-router-dom';
import Chat from './chat';

function Chatroom() {
  const { roomId } = useParams();
  return (
    <div>
      <Chat roomname={roomId} />
      <Route path="/dashboard" />
    </div>
  );
}

export default Chatroom;
