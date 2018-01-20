import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleFavorites } from "../../actions/index.js";
import Favorites from "../../containers/Favorites/Favorites";
import { setButtonType } from "../../actions";

import "./dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = false;
  }
  renderFavorites() {
    if (this.props.toggleFavorites) {
      console.log("it should render");
      return <Favorites />;
    }
  }
  render() {
    console.log("rendering dashboaard", this.props);
    return (
      <div className="dashboard">
        {this.renderFavorites()}
        <div className="dashboard__container">
          <div className="dashboard__logo">
            <div className="dashboard__logoicon">
              <FontAwesome className="dashboard__home" name="home" size="2x" />
            </div>
            <div className="dashboard__logotext">Item Manager</div>
          </div>
          <ul className="dashboard__list">
            <li
              className="dashboard__item"
              onClick={() => this.props.showFavorites(false)}
            >
              <Link className="dashboard__link" to={"/search"}>
                Search
              </Link>
            </li>
            <li
              className="dashboard__item"
              onClick={() => {
                this.props.showFavorites(true);
                this.props.setButtonType("delFavorite");
                this.toggle = !this.toggle;
              }}
            >
              Favorites
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toggleFavorites: state.toggleFavorites,
  buttonType: state.buttonType
});

const mapDispatchToProps = dispatch => ({
  showFavorites: flag => dispatch(toggleFavorites(flag)),
  setButtonType: type => dispatch(setButtonType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
