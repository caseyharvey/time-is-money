export const onInputSubmit = rate => {
  return (dispatch, getState) => {
    const { timerValue } = getState().primaryTimer;
    if (timerValue) {
      dispatch({
        type: 'HOLD_RATE',
        payload: rate
      });
      dispatch({
        type: 'RATE_CHANGE_RESET_MODAL'
      });
    } else {
      dispatch({
        type: 'RATE_HAS_BEEN_SET'
      });
      dispatch({
        type: 'SET_RATE',
        payload: {
          hour: rate,
          minute: rate / 60,
          second: rate / 3600
        }
      });
    }
  };
};

export const togglePrimaryTimer = action => {
  return (dispatch, getState) => {
    const { timerId } = getState().primaryTimer;

    if (action === 'start') {
      if (!getState().rate.perHour) {
        dispatch({
          type: 'RATE_HAS_BEEN_SET'
        });
      } else if (timerId === null) {
        dispatch({
          type: 'INCREMENT_PRIMARY_TIMER'
        });
        const timerId = setInterval(() => {
          dispatch({
            type: 'INCREMENT_PRIMARY_TIMER'
          });
        }, 1000);
        dispatch({
          type: 'SET_PRIMARY_TIMER_RUNNING',
          payload: timerId
        });
      }
    } else if (action === 'stop') {
      if (getState().primaryTimer.stopTimerWarning) {
        dispatch({
          type: 'SET_STOP_TIMER_WARNING'
        });
      }

      clearInterval(timerId);
      dispatch({
        type: 'SET_PRIMARY_TIMER_RUNNING',
        payload: null
      });
    }
  };
};

export const resetPrimaryTimer = () => {
  return dispatch => {
    dispatch({
      type: 'RESET_PRIMARY_TIMER'
    });
    dispatch({
      type: 'RESET_RATE'
    });
    dispatch({
      type: 'PRIMARY_RESET_MODAL'
    });
  };
};

export const newRateTimerReset = () => {
  return (dispatch, getState) => {
    const { holdRate } = getState().rate;
    dispatch({
      type: 'RESET_PRIMARY_TIMER'
    });
    dispatch({
      type: 'RATE_CHANGE_RESET_MODAL'
    });
    dispatch({
      type: 'SET_RATE',
      payload: {
        hour: holdRate,
        minute: holdRate / 60,
        second: holdRate / 3600
      }
    });
  };
};

export const setStopTimerWarning = () => {
  return {
    type: 'SET_STOP_TIMER_WARNING'
  };
};

export const rateHasBeenSet = () => {
  return {
    type: 'RATE_HAS_BEEN_SET'
  };
};

export const togglePrimaryResetModal = () => {
  return {
    type: 'PRIMARY_RESET_MODAL'
  };
};

export const toggleRateChangeResetModal = () => {
  return {
    type: 'RATE_CHANGE_RESET_MODAL'
  };
};
