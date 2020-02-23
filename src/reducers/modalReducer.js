const initialState = {
  primaryResetModalVisible: false,
  changeHourlyModalVisibility: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PRIMARY_RESET_MODAL_VISIBILITY':
      return {
        ...state,
        primaryResetModalVisible: state.primaryResetModalVisible ? false : true
      };
    case 'CHANGE_HOURLY_MODAL_VISIBILITY_TOGGLE':
      return {
        ...state,
        changeHourlyModalVisibility: state.changeHourlyModalVisibility
          ? false
          : true
      };
    default:
      return state;
  }
};
