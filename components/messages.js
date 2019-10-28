import React, { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../components/chat";
import css from "../style.scss";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get("http://167.71.154.9/messages")
      .then(res => res.data)
      .then(data => setMessages(data));
  });
  return (
    <div className="containerTextMessages">
      <div className="titleGroup">
        <p>
          <b>Aplicaciones Web</b>
        </p>
      </div>

      <div className="textMessages">
        {messages.map(m => (
          <Chat name={m.name} text={m.text} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
