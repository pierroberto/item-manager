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

export const setButtonType = buttonType => {
  return {
    type: types.DEL_BUTTON,
    buttonType
  };
};

export const toggleFavorites = toggleFavorites => {
  return {
    type: types.TOGGLE_FAVORITES,
    toggleFavorites
  };
};
