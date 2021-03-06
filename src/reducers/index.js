import { combineReducers } from "redux";
import filmReducer from "./filmReducer/reducer";
import loadingReducer from "./loadingReducer/reducer";
import errorReducer from "./errorReducer/reducer";

const rootReducer = combineReducers({
  filmReducer,
  loadingReducer,
  errorReducer
});

export default rootReducer;
