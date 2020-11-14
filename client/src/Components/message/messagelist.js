import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import Messages from './messages';
import { useParams } from 'react-router-dom';

function Messagelist() {
  const [roomMessages, setRoomMessages] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    db.collection('rooms') // message retrieved
      .doc(roomId)
      .collection('messages')
      .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())));
  }, [roomId]);

  let msg = roomMessages.map(({ message, timestamp, username, picture }) => (
    <Messages message={message} timestamp={timestamp} username={username} picture={picture} />
  ));

  return <>{msg}</>;
}

export default Messagelist;
