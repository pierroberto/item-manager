import React from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "./search.css";
import Dashboard from "../../components/Dashboard/Dashboard";

const options = ["title", "price"];
const defaultOption = options[0];

class Search extends React.Component {
  render() {
    console.log("rendering ...", this.props);
    return (
      <div className="search">
        <Dashboard />
        <div className="">Search does work</div>
        <Dropdown
          className="search__dropdown"
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
