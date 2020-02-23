import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import primaryTimerReducer from './primaryTimerReducer';
import modalReducer from './modalReducer';
import rateReducer from './rateReducer';

export default combineReducers({
  form: formReducer,
  rate: rateReducer,
  modal: modalReducer,
  primaryTimer: primaryTimerReducer
});
