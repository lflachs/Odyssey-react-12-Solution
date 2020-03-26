import React, { Component } from "react";

function TabSelector({ onTabChange, activeId }) {
  return (
    <div className="TabSelector">
      <button
        id="home"
        onClick={onTabChange}
        className={activeId === "home" ? "active" : ""}
      >
        Home
      </button>
      <button
        id="about"
        onClick={onTabChange}
        className={activeId === "about" ? "active" : ""}
      >
        About
      </button>
      <button
        id="contact"
        onClick={onTabChange}
        className={activeId === "contact" ? "active" : ""}
      >
        Contact
      </button>
    </div>
  );
}

export default TabSelector;
