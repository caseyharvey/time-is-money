export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_MAIN_TIMER":
      return state + 1;
    case "RESET_MAIN_TIMER":
      return 0;
    default:
      return state;
  }
};
