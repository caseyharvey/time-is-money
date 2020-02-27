const initialState = {
  timerId: null,
  timerValue: 0,
  timerRunning: false,
  taskName: '',
  taskDuration: '',
  taskDollarValue: ''
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
