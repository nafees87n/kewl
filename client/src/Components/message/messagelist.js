import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import Messages from './messages/messages';
import { useParams } from 'react-router-dom';
// 2:57,3:36

function Messagelist() {
  const [roomMessages, setRoomMessages] = useState([]);
  const { roomId } = useParams();

  useEffect(() => {
    db.collection('rooms') // message retrieved
      .doc(roomId)
      .collection('messages')
      .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((doc) => doc.data())));
  }, [roomId]);
  let msg = roomMessages.map(({ message, timestamp, username }) => (
    <Messages message={message} timestamp={timestamp} username={username} />
  ));
  // console.log("messages >>>>>>>",roomMessages)

  return (
    <>
      {msg}
      {/* {roomMessages.map(({ message, timestamp, username }) => (
        <Messages message={message} timestamp={timestamp} username={username} />
      ))} */}
    </>
  );
}

export default Messagelist;
