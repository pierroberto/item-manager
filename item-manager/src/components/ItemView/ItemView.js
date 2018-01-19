import React from "react";
import { connect } from "react-redux";
import "./itemview.css";

class ItemView extends React.Component {
  render() {
    console.log("props", this.props);
    return <div className="itemview">works</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
