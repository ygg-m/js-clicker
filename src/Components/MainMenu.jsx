import React from "react";
import { HiMinusSm } from "react-icons/hi";

export const MainMenu = () => {
  return (
    <div id="main-menu" className="main-menu-container">
      <div className="header">
        <button className="btn-header"></button>
        <p className="header-text">Basic Info</p>
        <button className="btn-header">-</button>
      </div>
      <div className="body">
        <div className="flex space-between">
          <div className="name">Ygg M'oraes</div>
          <div className="job">Swordman</div>
        </div>
      </div>
    </div>
  );
};
