const initialState = {
  showHelp: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_HELP':
      return { showHelp: state.showHelp ? false : true };
    default:
      return state;
  }
};
