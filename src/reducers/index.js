import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import mainTimerReducer from './mainTimerReducer';
import rateReducer from './rateReducer';

export default combineReducers({
  form: formReducer,
  rate: rateReducer,
  mainTimer: mainTimerReducer
});
