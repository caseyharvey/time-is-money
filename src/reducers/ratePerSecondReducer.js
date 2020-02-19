export default (state = null, action) => {
  switch (action.type) {
    case "SET_RATE_PER_SECOND":
      return action.payload;
    default:
      return state;
  }
};
