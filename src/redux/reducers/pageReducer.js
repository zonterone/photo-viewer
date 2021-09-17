import { NEXT_PAGE, RESET_PAGE } from "../actions/action";

const initialState = 2;

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return state + 1;
    case RESET_PAGE:
      return 2;
    default:
      return state;
  }
};
