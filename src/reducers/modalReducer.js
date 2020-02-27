const initialState = {
  showPrimaryResetModal: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PRIMARY_RESET_MODAL':
      return {
        ...state,
        showPrimaryResetModal: state.showPrimaryResetModal ? false : true
      };
    default:
      return state;
  }
};
