import * as types from "../actions/types";

const defaultState = {
  list: [],
  favorites: []
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
    default:
      return state;
  }
};
