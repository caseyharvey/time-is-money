import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ratePerHourReducer from "./ratePerHourReducer";
import mainTimerReducer from "./mainTimerReducer";
import ratePerSecondReducer from "./ratePerSecondReducer";
import mainTimerRunningReducer from "./mainTimerRunningReducer";

export default combineReducers({
  form: formReducer,
  ratePerHour: ratePerHourReducer,
  ratePerSecond: ratePerSecondReducer,
  mainTimerValue: mainTimerReducer,
  mainTimerRunning: mainTimerRunningReducer
});
