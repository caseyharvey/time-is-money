export const setRatePerHour = rate => {
  return {
    type: "SET_RATE_PER_HOUR",
    payload: rate
  };
};
export const setRatePerSecond = rate => {
  return {
    type: "SET_RATE_PER_SECOND",
    payload: rate
  };
};

export const incrementMainTimer = () => {
  return {
    type: "INCREMENT_MAIN_TIMER"
  };
};

export const setMainTimerRunning = () => {
  return {
    type: "SET_MAIN_TIMER_RUNNING"
  };
};
export const setStopTimerWarning = () => {
  return {
    type: "WARNING_TIMER_IS_RUNNING"
  };
};

export const resetMainTimer = () => {
  return {
    type: "RESET_MAIN_TIMER"
  };
};
