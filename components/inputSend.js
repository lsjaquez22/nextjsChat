import React, { useState } from "react";
import axios from "axios";
import css from "../style.scss";

const inputSend = () => {
  const [sendMessage, setsendMessage] = useState("");

  const postMessage = () => {
    if (sendMessage != "") {
      axios({
        method: "post",
        url: "http://167.71.154.9/messages",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name: "Jaquez",
          text: sendMessage
        }
      });
      setsendMessage("");
    }
  };

  return (
    <div className="submitButtons messagesContainer">
      <input
        className="input"
        type="text"
        placeholder="Type a message....."
        onChange={e => setsendMessage(e.target.value)}
        value={sendMessage}
      ></input>
      <button className="button" onClick={postMessage}>
        Send
      </button>
    </div>
  );
};

export default inputSend;
