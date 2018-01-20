import * as types from "../actions/types";

const defaultState = {
  list: [],
  favorites: [],
  buttonType: null,
  toggleFavorites: false
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
    default:
      return state;
  }
};
