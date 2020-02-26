const initialState = {
  timerId: null,
  timerValue: 0,
  timerRunning: false,
  stopTimerWarning: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_TASK_TIMER':
      return { ...state, timerValue: state.timerValue + 1 };
    case 'RESET_TASK_TIMER':
      return { ...initialState };
    case 'SET_TASK_TIMER_RUNNING':
      return {
        ...state,
        timerRunning: state.timerRunning ? false : true,
        timerId: action.payload
      };
    case 'SET_STOP_TIMER_WARNING':
      return {
        ...state,
        stopTimerWarning: state.stopTimerWarning ? false : true
      };
    default:
      return state;
  }
};
