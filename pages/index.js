import React from "react";
import Message from "../components/messages";
import InputSend from "../components/inputSend";
import Contacts from "../components/contacts";
import css from "../style.scss";

const Home = () => (
  <div className="container">
    <div className="columns container">
      <div className="column is-3" id="containerContacts">
        <Contacts />
      </div>
      <div className="column " id="containerTalk">
        <Message></Message>
        <InputSend></InputSend>
      </div>
    </div>
  </div>
);

export default Home;
