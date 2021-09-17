import { SET_TOKEN } from "../actions/action";

const initialState = JSON.parse(localStorage.getItem("token")) || null;

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
