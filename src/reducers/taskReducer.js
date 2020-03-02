const initialState = {
  timerId: null,
  timerValue: 0,
  timerRunning: false,
  taskName: '',
  taskDuration: '',
  taskDollarValue: '',
  showTaskTimerWarning: false,
  showCompleteTaskWarning: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASK_NAME':
      return { ...state, taskName: action.payload };
    case 'INCREMENT_TASK_TIMER':
      return {
        ...state,
        timerValue: state.timerValue + 1,
        taskDollarValue: state.timerValue * action.payload
      };
    case 'RESET_TASK_TIMER':
      return { ...initialState };
    case 'SHOW_TASK_TIMER_WARNING':
      return {
        ...state,
        showTaskTimerWarning: state.showTaskTimerWarning ? false : true
      };
    case 'SHOW_COMPLETE_TASK_WARNING':
      return {
        ...state,
        showCompleteTaskWarning: state.showCompleteTaskWarning ? false : true
      };
    case 'UPDATE_TASK_DOLLAR_VALUE':
      return { ...state, taskDollarValue: action.payload };
    case 'SET_TASK_TIMER_RUNNING':
      return {
        ...state,
        timerRunning: state.timerRunning ? false : true,
        timerId: action.payload.timerId,
        taskDuration: action.payload.taskDuration
      };
    default:
      return state;
  }
};
