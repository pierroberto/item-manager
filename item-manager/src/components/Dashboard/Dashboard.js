import React, { Component } from "react";
import "./dashboard.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__container">
          <div className="dashboard__logo">
            <div className="dashboard__logoicon">
              <FontAwesome className="dashboard__home" name="home" size="2x" />
            </div>
            <div className="dashboard__logotext">Item Manager</div>
          </div>
          <ul className="dashboard__list">
            <li className="dashboard__item">
              <Link className="dashboard__link" to={"/search"}>
                Search
              </Link>
            </li>
            <li className="dashboard__item">Favorites</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
