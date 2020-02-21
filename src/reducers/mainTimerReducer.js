const initialState = {
  timerValue: 0,
  timerRunning: false,
  stopTimerWarning: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_MAIN_TIMER':
      return { ...state, timerValue: state.timerValue + 1 };
    case 'RESET_MAIN_TIMER':
      return { ...state, timerRunning: false, timerValue: 0 };
    case 'SET_MAIN_TIMER_RUNNING':
      return {
        ...state,
        timerRunning: state.timerRunning ? false : true
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
