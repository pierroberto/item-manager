import React from "react";
import { connect } from "react-redux";
import ItemView from "../ItemView/ItemView";
import "./listview.css";
import id from "uniquid";
import Pagination from "react-js-pagination";
import Filter from "../../containers/Filter/Filter";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.selectPage(this.props.list);
  }

  selectPage(fullList, type) {
    if (this.props.filterList && type === "list")
      fullList = this.props.filterList;
    let pageList = [];
    for (
      let i = 5 * this.state.activePage - 5;
      i < 5 * this.state.activePage;
      i++
    ) {
      if (fullList[i]) pageList.push(fullList[i]);
    }
    return this.renderItems(pageList);
  }

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
    switch (this.props.type) {
      case "list":
        return this.selectPage(this.props.list, "list");
      case "favorites":
        return this.selectPage(this.props.favorites, "favorites");
      default:
        break;
    }
  }

  renderFilter() {
    if (!this.props.list.length) return null;
    if (this.props.toggleFavorites) return <Filter title={true} />;
    return <Filter title={true} description={true} price={true} email={true} />;
  }

  renderPagination() {
    if (!this.props.list.length) return null;
    return (
      <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={5}
        totalItemsCount={
          this.props.type === "list"
            ? this.props.list.length
            : this.props.favorites.length
        }
        pageRangeDisplayed={5}
        onChange={e => this.handlePageChange(e)}
        innerClass="listview__list"
        itemClass="listview__item"
        linkClass="listview__link"
        activeClass="listview__item-active"
      />
    );
  }

  render() {
    return (
      <div className="listview">
        {this.renderFilter()}
        {this.checkType()}
        {this.renderPagination()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list,
  favorites: state.favorites,
  filterList: state.filterList,
  toggleFavorites: state.toggleFavorites
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
