import * as types from "../actions/types";

const defaultState = {
  list: [],
  favorites: [],
  buttonType: null,
  toggleFavorites: false,
  filterList: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GENERATE_LIST:
      return {
        ...state,
        list: action.list
      };
    case types.ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.item, ...state.favorites]
      };
    case types.DEL_BUTTON:
      return {
        ...state,
        buttonType: action.buttonType
      };
    case types.TOGGLE_FAVORITES:
      return {
        ...state,
        toggleFavorites: action.toggleFavorites
      };
    case types.FILTER_LIST:
      return {
        ...state,
        filterList: action.filterList
      };
    case types.DEL_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => {
          console.log("item", item, "action", action.item);
          return (
            item.title !== action.item.title &&
            item.description !== action.item.description &&
            item.price !== action.item.price &&
            item.email !== action.item.email
          );
        })
      };
    default:
      return state;
  }
};
