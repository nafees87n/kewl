import React from 'react';
import { Route, useParams } from 'react-router-dom';
import ChatPage from './chatpage';

function Chatroom() {
  const { roomId } = useParams();

  return (
    <>
      <ChatPage roomname={roomId} />
      <Route path="/dashboard" />
    </>
  );
}

export default Chatroom;
