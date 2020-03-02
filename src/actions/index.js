export const onInputSubmit = rate => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_RATE',
      payload: {
        hour: rate,
        minute: rate / 60,
        second: rate / 3600
      }
    });
    if (!getState().primaryTimer.timerRunning) {
      dispatch({
        type: 'SHOW_SET_RATE_WARNING'
      });
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
      dispatch({
        type: 'SHOW_TASK_TIMER'
      });
    }
  };
};

export const resetPrimaryTimer = () => {
  return (dispatch, getState) => {
    clearInterval(getState().primaryTimer.timerId);
    clearInterval(getState().taskTimer.timerId);
    dispatch({
      type: 'RESET_TASK_TIMER'
    });
    dispatch({
      type: 'SET_PRIMARY_TIMER_RUNNING',
      payload: null
    });
    dispatch({
      type: 'RESET_PRIMARY_TIMER'
    });
    dispatch({
      type: 'RESET_RATE'
    });
    dispatch({
      type: 'PRIMARY_RESET_MODAL'
    });
    dispatch({
      type: 'SHOW_TASK_TIMER'
    });
    dispatch({
      type: 'RESET_COMPLETED_TASKS'
    });
  };
};

export const onTaskSubmit = taskName => {
  return (dispatch, getState) => {
    const ratePerSecond = getState().rate.perSecond;
    dispatch({
      type: 'SET_TASK_NAME',
      payload: taskName
    });
    dispatch({
      type: 'INCREMENT_TASK_TIMER',
      payload: ratePerSecond
    });
    const timerId = setInterval(() => {
      dispatch({
        type: 'INCREMENT_TASK_TIMER',
        payload: ratePerSecond
      });
    }, 1000);
    dispatch({
      type: 'SET_TASK_TIMER_RUNNING',
      payload: {
        timerId: timerId
      }
    });
  };
};

export const stopTask = () => {
  return (dispatch, getState) => {
    clearInterval(getState().taskTimer.timerId);

    const timerValue = getState().taskTimer.timerValue;
    const seconds = timerValue % 60;
    const minutes = Math.floor(timerValue / 60) % 60;
    const hours = Math.floor(timerValue / 3600) % 24;
    const finalDuration = `${
      hours < 1 ? '' : hours + (hours === 1 ? ' hour' : ' hours')
    } 
    ${minutes < 1 ? '' : minutes + (minutes === 1 ? ' minute' : ' minutes')} 
    ${seconds < 1 ? '' : seconds + (seconds === 1 ? ' second' : ' seconds')}`;

    dispatch({
      type: 'SET_TASK_TIMER_RUNNING',
      payload: {
        timerId: null,
        taskDuration: finalDuration
      }
    });

    const ID = () => {
      return (
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    };
    let id = ID();

    const ratePerHour = getState().rate.perHour;
    const { taskName, taskDuration, taskDollarValue } = getState().taskTimer;

    dispatch({
      type: 'ADD_TASK_TO_COMPLETED',
      payload: {
        id: id,
        name: taskName,
        duration: taskDuration,
        ratePerHour: ratePerHour.toFixed(2),
        dollarValue: taskDollarValue.toFixed(2),
        className: 'completedTaskEntry completeTaskAnimation'
      }
    });
    dispatch({
      type: 'SHOW_TASK_TIMER_WARNING'
    });
    dispatch({
      type: 'SHOW_COMPLETE_TASK_WARNING'
    });
    dispatch({
      type: 'RESET_TASK_TIMER'
    });
  };
};

export const removeTaskFromCompleted = id => {
  return dispatch => {
    dispatch({
      type: 'ADD_REMOVE_TASK_ANIMATION',
      payload: id
    });
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_TASK_FROM_COMPLETED',
        payload: id
      });
    }, 250);
  };
};

export const togglePrimaryResetModal = () => {
  return {
    type: 'PRIMARY_RESET_MODAL'
  };
};
export const toggleSetRateWarning = () => {
  return {
    type: 'SHOW_SET_RATE_WARNING'
  };
};
export const toggleTaskTimerWarning = () => {
  return {
    type: 'SHOW_TASK_TIMER_WARNING'
  };
};
export const toggleCompleteTaskWarning = () => {
  return {
    type: 'SHOW_COMPLETE_TASK_WARNING'
  };
};
