import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import primaryTimerReducer from './primaryTimerReducer';
import taskReducer from './taskReducer';
import modalReducer from './modalReducer';
import rateReducer from './rateReducer';

export default combineReducers({
  form: formReducer,
  rate: rateReducer,
  modal: modalReducer,
  taskTimer: taskReducer,
  primaryTimer: primaryTimerReducer
});
