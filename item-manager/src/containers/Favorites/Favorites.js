import React from "react";
import { connect } from "react-redux";
import "./favorites.css";
import ListView from "../../components/ListView/ListView";
import { setButtonType } from "../../actions";
import { toggleFavorites } from "../../actions/index.js";

class Favorites extends React.Component {
  render() {
    console.log("rendering favorites...");
    return (
      <div className="favorites">
        <div
          className="favorites__exit"
          onClick={() => {
            this.props.showFavorites(false);
            this.props.setButtonType(null);
          }}
        />
        <div className="favorites__container">
          <ListView type="favorites" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
  toggleFavorites: state.toggleFavorites,
  buttonType: state.buttonType,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  showFavorites: flag => dispatch(toggleFavorites(flag)),
  setButtonType: type => dispatch(setButtonType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
