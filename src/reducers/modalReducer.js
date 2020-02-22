const initialState = {
  mainResetModalVisible: false,
  changeHourlyModalVisibility: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MAIN_RESET_MODAL_VISIBILITY':
      return {
        ...state,
        mainResetModalVisible: state.mainResetModalVisible ? false : true
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
