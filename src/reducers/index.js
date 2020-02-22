import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import mainTimerReducer from './mainTimerReducer';
import modalReducer from './modalReducer';
import rateReducer from './rateReducer';

export default combineReducers({
  form: formReducer,
  rate: rateReducer,
  modal: modalReducer,
  mainTimer: mainTimerReducer
});
