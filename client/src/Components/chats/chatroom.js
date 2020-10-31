import React from 'react';
import { Route, useParams } from 'react-router-dom';
import Three from '../page-3/three';

function Chatroom() {
  const { roomId } = useParams();
  return (
    <div>
      <Three roomname={roomId} />
      <Route path="/dashboard" />
    </div>
  );
}

export default Chatroom;
