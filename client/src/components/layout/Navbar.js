import React from "react";

import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="name-box">
        <h1 className="title">Task Manager</h1>
      </div>
      <form className="search-box">
        <input className="search" type="search" />
      </form>
    </div>
  );
};

export default Navbar;
