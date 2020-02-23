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

export const incrementPrimaryTimer = () => {
  return {
    type: 'INCREMENT_PRIMARY_TIMER'
  };
};

export const setPrimaryTimerRunning = () => {
  return {
    type: 'SET_PRIMARY_TIMER_RUNNING'
  };
};
export const setStopTimerWarning = () => {
  return {
    type: 'SET_STOP_TIMER_WARNING'
  };
};

export const resetPrimaryTimer = () => {
  return {
    type: 'RESET_PRIMARY_TIMER'
  };
};

export const togglePrimaryResetModalVisibility = () => {
  return {
    type: 'TOGGLE_PRIMARY_RESET_MODAL_VISIBILITY'
  };
};
export const changeHourlyModalVisibilityToggle = () => {
  return {
    type: 'CHANGE_HOURLY_MODAL_VISIBILITY_TOGGLE'
  };
};
