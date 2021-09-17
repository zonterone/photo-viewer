import { SET_PHOTOS_LIST_TITLE } from "../actions/action";

const initialState = "";

export const photosTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS_LIST_TITLE:
      return action.payload;
    default:
      return state;
  }
};
