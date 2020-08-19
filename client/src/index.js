import React, { useState } from "react";

import { render } from "react-dom";

import Navbar from "./components/layout/Navbar";

import Logs from "./components/logs/Logs";
import Rewards from "./components/rewards/Rewards";

import "./style.css";

const App = () => {
  const [showLogs, toggleLogs] = useState(true);

  return (
    <div className="app">
      <Navbar />
      <div className="route-box">
        <div className="route-toggler">
          <div
            className="log-toggler"
            style={{
              borderBottom: `4px solid ${showLogs ? "teal" : "#f8f8f8"}`,
            }}
            onClick={() => toggleLogs(true)}
          >
            Logs
          </div>
          <div
            className="rewards-toggler"
            style={{
              borderBottom: `4px solid ${!showLogs ? "teal" : "#f8f8f8"}`,
            }}
            onClick={() => toggleLogs(false)}
          >
            Rewards
          </div>
        </div>
        {showLogs ? <Logs /> : <Rewards />}
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
