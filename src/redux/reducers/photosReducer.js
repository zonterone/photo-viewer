import { FETCH_MORE_PHOTOS, FETCH_PHOTOS } from "../actions/action";

const initialState = [];

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return [...action.payload];
    case FETCH_MORE_PHOTOS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
