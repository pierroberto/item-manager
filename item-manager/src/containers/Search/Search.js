import React from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "./search.css";
import "./dropdown.css";
import Dashboard from "../../components/Dashboard/Dashboard";

const options = ["Select an option", "title", "price"];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: options[0]
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    console.log("you sele", option.label);
    this.setState({ selected: option });
  }

  render() {
    const defaultOption = this.state.selected;
    return (
      <div className="search">
        <Dashboard />
        <div className="search__container">
          <Dropdown
            className="search__dropdown"
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
