import React from "react";
import { connect } from "react-redux";
import {
  addFavorite,
  delFavorite,
  toggleFavorites
} from "../../actions/index.js";
import "./itemview.css";

class ItemView extends React.Component {
  renderButton() {
    return (
      <div
        className={
          this.props.buttonType
            ? `itemview__btn itemview__btn-${this.props.buttonType}`
            : `itemview__btn`
        }
        onClick={() => {
          if (this.props.buttonType) {
            this.props.delFavorite(this.props.item);
            this.props.showFavorites(true);
          } else {
            this.props.addFavorite(this.props.item);
          }
        }}
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
                <div className="itemview__description">
                  {this.props.description}
                </div>
                <div className="itemview__price">
                  Price: {this.props.price} $
                </div>
                <div className="itemview__email">Email: {this.props.email}</div>
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
  favorites: state.item,
  buttonType: state.buttonType,
  toggleFavorites: state.toggleFavorites
});

const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item)),
  delFavorite: item => dispatch(delFavorite(item)),
  showFavorites: flag => dispatch(toggleFavorites(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
