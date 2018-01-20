import React from "react";
import { connect } from "react-redux";
import ItemView from "../ItemView/ItemView";
import "./listview.css";
import id from "uniquid";
class ListView extends React.Component {
  renderItems(list) {
    return list.map(item => {
      return (
        <ItemView
          key={id()}
          title={item.title}
          description={item.description}
          price={item.price}
          email={item.email}
          picture={item.image}
          item={item}
        />
      );
    });
  }

  checkType() {
    console.log("type of list", this.props.type);
    switch (this.props.type) {
      case "list":
        return this.renderItems(this.props.list);
      case "favorites":
        return this.renderItems(this.props.favorites);
      default:
        break;
    }
  }

  render() {
    console.log("rendering listview...");
    return <div className="listview">{this.checkType()}</div>;
  }
}

const mapStateToProps = state => ({
  list: state.list,
  favorites: state.favorites,
  toggleFavorites: state.flag
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
