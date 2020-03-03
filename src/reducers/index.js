import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import helpReducer from './helpReducer';
import rateReducer from './rateReducer';
import taskReducer from './taskReducer';
import modalReducer from './modalReducer';
import primaryTimerReducer from './primaryTimerReducer';
import completedTasksReducer from './completedTasksReducer';

export default combineReducers({
  help: helpReducer,
  form: formReducer,
  rate: rateReducer,
  modal: modalReducer,
  taskTimer: taskReducer,
  primaryTimer: primaryTimerReducer,
  completedTasks: completedTasksReducer
});
