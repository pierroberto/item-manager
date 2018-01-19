import * as types from "./types";

export const generateList = list => {
  return {
    type: types.GENERATE_LIST,
    list
  };
};

export const addFavorite = item => {
  return {
    type: types.ADD_FAVORITE,
    item
  };
};
