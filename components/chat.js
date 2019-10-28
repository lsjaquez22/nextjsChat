import React, { useEffect, useState } from "react";
import css from "../style.scss";

const chat = props => {
  return (
    <div>
      {props.name == "Jaquez" && (
        <div className="containerMyChats">
          <div className="myMessage">
            <h4>
              <b>{props.name}</b>
            </h4>
            <p>{props.text}</p>
          </div>
        </div>
      )}
      {props.name != "Jaquez" && (
        <div className="containerChats">
          <div className="myMessage">
            <h4>
              <b>{props.name}</b>
            </h4>
            <p>{props.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default chat;
