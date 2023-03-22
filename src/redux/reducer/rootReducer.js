import { combineReducers } from "redux";
import { rateReducer } from "./rateReducer";

import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  User: userReducer,
  Rate: rateReducer,
});
