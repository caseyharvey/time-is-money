import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import mainTimerReducer from "./mainTimerReducer";
import ratePerHourReducer from "./ratePerHourReducer";
import ratePerSecondReducer from "./ratePerSecondReducer";
import mainTimerRunningReducer from "./mainTimerRunningReducer";
import warningTimerIsRunningReducer from "./warningTimerIsRunningReducer";

export default combineReducers({
  form: formReducer,
  ratePerHour: ratePerHourReducer,
  mainTimerValue: mainTimerReducer,
  ratePerSecond: ratePerSecondReducer,
  mainTimerRunning: mainTimerRunningReducer,
  warningTimerIsRunning: warningTimerIsRunningReducer
});
