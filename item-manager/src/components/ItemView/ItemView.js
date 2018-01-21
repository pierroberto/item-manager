import React from "react";
import { connect } from "react-redux";
import {
  addFavorite,
  delFavorite,
  toggleFavorites,
  setButtonType
} from "../../actions/index.js";
import "./itemview.css";

class ItemView extends React.Component {
  showFavorites() {
    if (this.props.buttonType) {
      this.props.delFavorite(this.props.item);
      if (this.props.favorites.length === 1) {
        this.props.setButtonType(null);
        return this.props.showFavorites(false);
      }
      this.props.showFavorites(true);
    } else {
      this.props.addFavorite(this.props.item);
    }
  }

  renderItem(item) {
    const text = item.charAt(0).toUpperCase() + item.slice(1);
    return (
      <div
        className={
          this.props.toggleFavorites ? "itemview__hidden" : `itemview__${item}`
        }
      >
        {`${text} :`} {this.props[item]} {item === "price" ? "$" : null}
      </div>
    );
  }

  renderButton() {
    return (
      <div
        className={
          this.props.buttonType
            ? `itemview__btn itemview__btn-${this.props.buttonType}`
            : `itemview__btn`
        }
        onClick={() => this.showFavorites()}
      />
    );
  }
  render() {
    console.log("rednering itemview...");
    return (
      <div className="itemview">
        <div className="itemview__container">
          <div className="itemview__content">
            <div className="itemview__wrapper">
              <div className="itemview__picture">
                <img
                  className="itemview__picture"
                  src={require(`../../assets/${this.props.picture}`)}
                  alt={this.props.picture}
                />
              </div>
              <div className="itemview__info">
                <div className="itemview__title">{this.props.title}</div>
                {this.renderItem("description")}
                {this.renderItem("price")}
                {this.renderItem("email")}
                {this.renderButton()}
              </div>
            </div>
          </div>
        </div>
        <div className="itemview__separator" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
  favorites: state.favorites,
  buttonType: state.buttonType,
  toggleFavorites: state.toggleFavorites
});

const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item)),
  delFavorite: item => dispatch(delFavorite(item)),
  showFavorites: flag => dispatch(toggleFavorites(flag)),
  setButtonType: type => dispatch(setButtonType(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
