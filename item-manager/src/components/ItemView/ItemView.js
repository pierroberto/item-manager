import React from "react";
import { connect } from "react-redux";
import "./itemview.css";
import { addFavorite } from "../../actions/index.js";
// import Favorites from "../../containers/Favorites/Favorites";
class ItemView extends React.Component {
  // renderFavorites() {
  //   console.log("props in rendinering favorites", this.props.toggleFavorites);
  //   if (this.props.toggleFavorites) {
  //     console.log("it should render");
  //     return <Favorites />;
  //   } else return null;
  // }
  render() {
    console.log("rednering itemview...");
    return (
      <div className="itemview">
        {/* {this.renderFavorites()} */}
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
                <div
                  className={
                    this.props.buttonType
                      ? `itemview__btn itemview__btn-${this.props.buttonType}`
                      : `itemview__btn`
                  }
                  onClick={() => this.props.addFavorite(this.props.item)}
                />
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
  favorites: state.item,
  buttonType: state.buttonType,
  toggleFavorites: state.flag
});

const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
