import React from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "./search.css";
import "./dropdown.css";
import db from "../../items.json";
import Dashboard from "../../components/Dashboard/Dashboard";

const options = [
  { label: "Select an option", value: "null" },
  { label: "Title", value: "title" },
  { label: "Price", value: "price" },
  { label: "Description", value: "description" },
  { label: "Email", value: "email" }
];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: options[0]
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    this.setState({ selected: option });
  }

  filterItems(criteria, event) {
    if (!event) return false;
    if (criteria !== "price") {
      return db.items.filter(item => {
        return (
          item[criteria]
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) !== -1
        );
      });
    } else {
      return db.items.filter(item => {
        return Number(item[criteria]) >= Number(event.target.value);
      });
    }
  }

  renderFields(type) {
    switch (type) {
      case "title":
        return (
          <input
            className="search__input"
            type="text"
            placeholder="Search by title..."
            onChange={e => this.filterItems("title", e)}
          />
        );
        break;
      case "description":
        return (
          <input
            className="search__input"
            type="text"
            placeholder="Search by description..."
            onChange={e => this.filterItems("description", e)}
          />
        );
      case "email":
        return (
          <input
            className="search__input"
            type="email"
            placeholder="Search by email..."
            onChange={e => this.filterItems("email", e)}
          />
        );
      case "price":
        return (
          <input
            className="search__input"
            type="text"
            placeholder="Set the minimum price..."
            onChange={e => this.filterItems("price", e)}
          />
        );
      default:
    }
  }

  render() {
    const defaultOption = this.state.selected;
    console.log("rendering...", this.state.selected);
    if (this.state.selected.value !== "null")
      this.filterItems(this.state.selected.value);
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
        <div className="search__container">
          {this.renderFields(this.state.selected.value)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
