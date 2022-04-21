import { combineReducers } from "redux";
import { dataReducer, treatmentReducer } from "./reducer";

const store = combineReducers({
  addTreatment: treatmentReducer,
  addData: dataReducer,
});

export default store;
