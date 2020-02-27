const initialState = {
  timerId: null,
  timerValue: 0,
  timerRunning: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_PRIMARY_TIMER':
      return { ...state, timerValue: state.timerValue + 1 };
    case 'RESET_PRIMARY_TIMER':
      return { ...initialState };
    case 'SET_PRIMARY_TIMER_RUNNING':
      return {
        ...state,
        timerRunning: state.timerRunning ? false : true,
        timerId: action.payload
      };
    default:
      return state;
  }
};
