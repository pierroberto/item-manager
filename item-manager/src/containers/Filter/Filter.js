import React from "react";
import { connect } from "react-redux";
import { filterList } from "../../actions/index.js";

import "./filter.css";

class Filter extends React.Component {
  checkListType() {
    return this.props.toggleFavorites ? "favorites" : "list";
  }

  filterBy(criteria) {
    const type = this.checkListType();
    let list;
    switch (criteria) {
      case "price":
        list = this.props[type].sort((a, b) => {
          return Number(a.price) - Number(b.price);
        });
        this.props.filterList(null);
        this.props.filterList(list);
        break;
      default:
        list = this.props[type].sort((a, b) => {
          return (
            a[criteria].toLowerCase().charCodeAt(0) -
            b[criteria].toLowerCase().charCodeAt(0)
          );
        });
        this.props.filterList(null);
        this.props.filterList(list);
        break;
    }
  }
  render() {
    console.log("rendering filter...");
    return (
      <div className="filter">
        <div className="filter__container">
          <ul className="filter__list">
            <li className="filter__item" onClick={() => this.filterBy("title")}>
              Title
            </li>
            <li className="filter__item" onClick={() => this.filterBy("price")}>
              Price
            </li>
            <li className="filter__item" onClick={() => this.filterBy("email")}>
              Email
            </li>
            <li
              className="filter__item"
              onClick={() => this.filterBy("description")}
            >
              Description
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
  favorites: state.favorites,
  toggleFavorites: state.toggleFavorites,
  filterList: state.filterList
});

const mapDispatchToProps = dispatch => ({
  filterList: list => dispatch(filterList(list))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
