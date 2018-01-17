import React, { Component } from "react";
import "./dashboard.css";
var FontAwesome = require("react-fontawesome");

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__container">
          <div className="dashboard__logo">
            <div className="dashboard__logoicon">
              <FontAwesome className="dashboard__home" name="rocket" />
            </div>
            <div className="dashboard__logotext">Item Manager</div>
          </div>
          <ul className="dashboard__list">
            <li className="dashboard__item">Search</li>
            <li className="dashboard__item">Favorites</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
