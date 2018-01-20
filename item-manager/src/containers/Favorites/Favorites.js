import React from "react";
import { connect } from "react-redux";
import "./favorites.css";
import ListView from "../../components/ListView/ListView";
import { setButtonType } from "../../actions";
import { toggleFavorites } from "../../actions/index.js";

class Favorites extends React.Component {
  render() {
    console.log("rednering favorites");

    return (
      <div
        className="favorites"
        onClick={() => {
          this.props.showFavorites(false);
          this.props.setButtonType(null);
        }}
      >
        <div className="favorites__container">
          <ListView type="favorites" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);