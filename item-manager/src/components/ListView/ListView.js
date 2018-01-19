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
  render() {
    return <div className="listview">{this.renderItems(this.props.list)}</div>;
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
