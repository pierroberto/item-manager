import * as types from "../actions/types";

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GENERATE_LIST:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};
