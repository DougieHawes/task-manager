import React, { useState, useEffect } from "react";

import data from "../../db.json";

import RewardItem from "./RewardItem";

import "./style.css";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="rewards">
      <div className="reward-items">
        {data.rewards.map((reward) => (
          <RewardItem name={reward.name} value={reward.value} />
        ))}
      </div>
    </div>
  );
};

export default Rewards;
