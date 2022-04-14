import { combineReducers } from "redux";
import { treatmentReducer } from "./reducer";

const store = combineReducers({
  addTreatment: treatmentReducer,
});

export default store;
