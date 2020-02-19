import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import hourlyRateReducer from "./hourlyRateReducer";
import timerReducer from "./timerReducer";
import ratePerSecondReducer from "./ratePerSecondReducer";
import mainTimerRunningReducer from "./mainTimerRunningReducer";

export default combineReducers({
  form: formReducer,
  hourlyRate: hourlyRateReducer,
  ratePerSecond: ratePerSecondReducer,
  currentTimer: timerReducer,
  mainTimerRunning: mainTimerRunningReducer
});
