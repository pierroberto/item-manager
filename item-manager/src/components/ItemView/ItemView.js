import React from "react";
import { connect } from "react-redux";
import "./itemview.css";
import { addFavorite } from "../../actions/index.js";

class ItemView extends React.Component {
  render() {
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
                <div
                  className="itemview__btn"
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
  favorites: state.item
});

const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
