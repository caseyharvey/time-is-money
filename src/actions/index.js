export const setHourly = rate => {
  return {
    type: "SET_HOURLY",
    payload: rate
  };
};
export const setRatePerSecond = rate => {
  return {
    type: "SET_RATE_PER_SECOND",
    payload: rate
  };
};

export const incrementMainTimer = ratePerSecond => {
  return {
    type: "INCREMENT_TIMER",
    payload: ratePerSecond
  };
};

export const setMainTimerRunning = () => {
  return {
    type: "SET_MAIN_TIMER_RUNNING"
  };
};
