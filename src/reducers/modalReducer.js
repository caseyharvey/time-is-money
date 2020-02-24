const initialState = {
  showPrimaryResetModal: false,
  showRateChangeResetModal: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRIMARY_RESET_MODAL':
      return {
        ...state,
        showPrimaryResetModal: state.showPrimaryResetModal ? false : true
      };
    case 'RATE_CHANGE_RESET_MODAL':
      return {
        ...state,
        showRateChangeResetModal: state.showRateChangeResetModal ? false : true
      };
    default:
      return state;
  }
};
