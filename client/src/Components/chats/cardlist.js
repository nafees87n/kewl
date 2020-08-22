import React,{useState,useEffect} from "react";
import db from "../../firebase.js";
import Card from "./card" ;

const Cardlist = () => {
    // const cardComponent = robots.map((user,i) =>  {
    //     return  < Card key={i} 
    //     id={robots[i].id} 
    //     name={robots[i].name} 
    //     email={robots[i].email} />
    // })

    const [channels,setChannels] = useState([]);
    // const [roomMessages,setRoomMessages] = useState([]);
    // const {roomId} = useParams();
    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => ( // rooms retrievd (for the sidebar)
            setChannels(
                snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    name: doc.data().name
                })))
        ))
        // db.collection("rooms") // message retrieved
        // .doc("1ZlbUtg0OxyeBQWAevHC")
        // .collection("messages")
        // .orderBy("timestamp","asc")
        // .onSnapshot(
        //     (snapshot) => (
        //         setRoomMessages(
        //             snapshot.docs.map(doc => doc.data())
        //         )
        //     )
        // )
    }, [])

    return(
        <div>
            {channels.map(channel => (
              <Card title = {channel.name}/>
            ))}
        </div>
    );  
}
export default Cardlist ; 



// mapping across all different rooms 