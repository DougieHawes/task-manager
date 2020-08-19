import React from "react";

const RewardItem = ({ name, value }) => (
  <div className="reward-item">
    <div className="details-box">
      <h3 className="item-name">{name}</h3>
      <p className="item-value">{value}</p>
    </div>
    <div className="button-box">
      <button className="item-button">GET</button>
    </div>
  </div>
);

export default RewardItem;
