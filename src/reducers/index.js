import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import hourlyRateReducer from "./hourlyRateReducer";

export default combineReducers({
  form: formReducer,
  hourlyRate: hourlyRateReducer
});
