import React, { useState, useEffect } from "react";

import data from "../../db.json";

import LogItem from "./LogItem";

import "./style.css";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="logs">
      {data.logs.map((log) => (
        <LogItem
          message={log.message}
          doer={log.doer}
          date={log.date}
          attention={log.attention}
        />
      ))}
    </div>
  );
};

export default Logs;
