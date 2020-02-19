export default (state = false, action) => {
  switch (action.type) {
    case "SET_MAIN_TIMER_RUNNING":
      return state ? false : true;
    default:
      return state;
  }
};
