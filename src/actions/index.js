export const setRate = rate => {
  return {
    type: 'SET_RATE',
    payload: {
      hour: rate,
      minute: rate / 60,
      second: rate / 3600
    }
  };
};

export const rateHasBeenSet = () => {
  return {
    type: 'RATE_HAS_BEEN_SET'
  };
};

export const incrementMainTimer = () => {
  return {
    type: 'INCREMENT_MAIN_TIMER'
  };
};

export const setMainTimerRunning = () => {
  return {
    type: 'SET_MAIN_TIMER_RUNNING'
  };
};
export const setStopTimerWarning = () => {
  return {
    type: 'SET_STOP_TIMER_WARNING'
  };
};

export const resetMainTimer = () => {
  return {
    type: 'RESET_MAIN_TIMER'
  };
};
