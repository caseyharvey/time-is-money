const initialState = {
  timerId: null,
  timerValue: 0,
  timerRunning: false,
  taskName: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TASK_NAME':
      return { ...state, taskName: action.payload };
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
    default:
      return state;
  }
};
