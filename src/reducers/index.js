import { combineReducers } from "redux";
import hourlyRateReducer from "./hourlyRateReducer";

export default combineReducers({
  hourlyRate: hourlyRateReducer
});
