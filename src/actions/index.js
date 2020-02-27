export const onInputSubmit = rate => {
  return dispatch => {
    dispatch({
      type: 'SET_RATE',
      payload: {
        hour: rate,
        minute: rate / 60,
        second: rate / 3600
      }
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

export const onTaskSubmit = taskName => {
  return dispatch => {
    dispatch({
      type: 'SET_TASK_NAME',
      payload: taskName
    });
    dispatch({
      type: 'INCREMENT_TASK_TIMER'
    });
    const timerId = setInterval(() => {
      dispatch({
        type: 'INCREMENT_TASK_TIMER'
      });
    }, 1000);
    dispatch({
      type: 'SET_TASK_TIMER_RUNNING',
      payload: timerId
    });
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
