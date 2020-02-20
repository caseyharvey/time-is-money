export default (state = false, action) => {
  switch (action.type) {
    case "WARNING_TIMER_IS_RUNNING":
      return state ? false : true;
    default:
      return state;
  }
};
