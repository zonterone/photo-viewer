import { combineReducers } from "redux";
import { photoReducer } from "./photosReducer";
import { tokenReducer } from "./tokenReducer";
import { photosTitleReducer } from "./photosTitleReducer";
import { pageReducer } from "./pageReducer";

export const rootReducer = combineReducers({
  photos: photoReducer,
  token: tokenReducer,
  title: photosTitleReducer,
  page: pageReducer,
});
