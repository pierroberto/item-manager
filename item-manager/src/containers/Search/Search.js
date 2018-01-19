import React from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "./search.css";
import "./dropdown.css";
import db from "../../items.json";
import Dashboard from "../../components/Dashboard/Dashboard";
import ListView from "../../components/ListView/ListView";
import { generateList } from "../../actions/index.js";
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
    let list = {};
    if (criteria !== "price") {
      list = db.items.filter(item => {
        return (
          item[criteria]
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) !== -1 &&
          event.target.value
        );
      });
    } else {
      list = db.items.filter(item => {
        return (
          Number(item[criteria]) >= Number(event.target.value) &&
          event.target.value
        );
      });
    }
    this.props.refreshList(list);
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

  showList() {
    if (!this.props.list) return null;
    return this.props.list.length ? <ListView /> : null;
  }
  // ================ RENDERING

  render() {
    const defaultOption = this.state.selected;
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
        <div className="search__container">{this.showList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => ({
  refreshList: list => dispatch(generateList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
