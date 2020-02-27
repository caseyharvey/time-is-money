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
    }
  };
};

export const resetPrimaryTimer = () => {
  return (dispatch, getState) => {
    clearInterval(getState().primaryTimer.timerId);
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
    const seconds = ('0' + (timerValue % 60)).slice(-2);
    const minutes = ('0' + (Math.floor(timerValue / 60) % 60)).slice(-2);
    const hours = ('0' + (Math.floor(timerValue / 3600) % 24)).slice(-2);
    dispatch({
      type: 'SET_TASK_TIMER_RUNNING',
      payload: {
        timerId: null,
        taskDuration: `${hours}:${minutes}:${seconds}`
      }
    });
    const key = getState().completedTasks.length + 1;
    const { taskName, taskDuration, taskDollarValue } = getState().taskTimer;
    dispatch({
      type: 'ADD_TASK_TO_COMPLETED',
      payload: {
        key: key,
        name: taskName,
        duration: taskDuration,
        dollarValue: taskDollarValue.toFixed(2)
      }
    });
    dispatch({
      type: 'RESET_TASK_TIMER'
    });
  };
};

export const updateTaskDollarValue = dollarValue => {
  return {
    type: 'UPDATE_TASK_DOLLAR_VALUE',
    payload: dollarValue
  };
};

// export const toggleTaskTimer = action => {
//   return (dispatch, getState) => {
//     const { timerId } = getState().taskTimer;

//     if (action === 'start' && getState().primaryTimer.timerRunning) {
//       if (!getState().rate.perHour) {
//         dispatch({
//           type: 'HAS_RATE_BEEN_SET'
//         });
//       } else if (timerId === null) {
//         dispatch({
//           type: 'INCREMENT_TASK_TIMER'
//         });
//         const timerId = setInterval(() => {
//           dispatch({
//             type: 'INCREMENT_TASK_TIMER'
//           });
//         }, 1000);
//         dispatch({
//           type: 'SET_TASK_TIMER_RUNNING',
//           payload: timerId
//         });
//       }
//     } else if (action === 'stop') {
//       if (getState().taskTimer.stopTimerWarning) {
//         dispatch({
//           type: 'SET_STOP_TIMER_WARNING'
//         });
//       }
//       clearInterval(timerId);
//       dispatch({
//         type: 'SET_TASK_TIMER_RUNNING',
//         payload: null
//       });
//     }
//   };
// };
