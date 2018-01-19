import React from "react";
import { connect } from "react-redux";
import "./itemview.css";

class ItemView extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="itemview">
        <div className="itemview__container">
          <div className="itemview__wrapper">
            <div className="itemview__picture">
              <img src={require(`../../assets/${this.props.picture}`)} />
            </div>
            <div className="itemview__info">
              <div className="itemview__title">{this.props.title}</div>
              <div className="itemview__description">
                {this.props.description}
              </div>
              <div className="itemview__price">{this.props.price}</div>
              <div className="itemview__email">{this.props.email}</div>
            </div>
          </div>
          <div className="itemview__btn" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
