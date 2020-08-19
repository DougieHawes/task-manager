import React from "react";

const LogItem = ({ message, doer, date, attention }) => (
  <div className="log-item">
    <div className="column-one">
      <h3 className="item-message">{message}</h3>
      <p className="item-doer">{doer}</p>
    </div>
    <div className="column-two">
      <h3 className="item-date">{date}</h3>
      <i
        className="fas fa-eye item-attention"
        style={{ color: `${attention ? "green" : "red"}` }}
      ></i>
    </div>
    <div className="column-three">
      <button className="item-button">DONE</button>
    </div>
  </div>
);

export default LogItem;
