import React, { useState } from "react";
import { Button } from "@material-ui/core";
import db from "../../../firebase";
import firebase from "firebase";
import { useEffect } from "react";
import userInfo from "../../userinfo/userinfo";
function ChatInput({ channelName, channelId }) {
  // 3:48
  const [firstName, setFirstName] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    async function firstname() {
      const { given_name } = await userInfo();
      setFirstName(given_name);
    }
    firstname();
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .doc(new Date().getTime().toString())
        .set(
          {
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: firstName,
          },
          { merge: true }
        );
      setInput("");
    }
  };

  return (
    <div className="joinroom">
      <form>
        <input
          placeholder={`Message here`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {console.log(input)}
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
