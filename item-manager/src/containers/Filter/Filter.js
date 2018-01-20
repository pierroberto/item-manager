import React from "react";
import { connect } from "react-redux";
import "./filter.css";
import ListView from "../../components/ListView/ListView";

class Filter extends React.Component {
  render() {
    console.log("rednering filter");

    return <div className="filter" />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
