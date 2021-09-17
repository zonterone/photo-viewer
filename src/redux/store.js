import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(
  rootReducer,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);
