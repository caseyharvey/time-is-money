export default (state = 0, action) => {
  switch (action.type) {
    case "SET_RATE_PER_HOUR":
      return action.payload;
    default:
      return state;
  }
};
