export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_TIMER":
      return (state += action.payload);
    default:
      return state;
  }
};
