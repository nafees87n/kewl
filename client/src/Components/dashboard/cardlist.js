import React, { useState, useEffect } from 'react';
import db from '../../firebase.js';
import Card from './card';

const Cardlist = () => {
  const [channels, setChannels] = useState([]);
  // const [roomMessages,setRoomMessages] = useState([]);
  // const {roomId} = useParams();
  useEffect(() => {
    db.collection('rooms').onSnapshot((
      snapshot // rooms retrievd (for the sidebar)
    ) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description
        }))
      )
    );
    
  }, []);

  return (
    <div>
      {channels.map((channel) => (
        <Card title={channel.name} description={channel.description} />
      ))}
    </div>
  );
};
export default Cardlist;
