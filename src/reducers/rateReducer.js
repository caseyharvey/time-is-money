const initialState = {
  perHour: 0,
  perMinute: 0,
  perSecond: 0,
  holdRate: 0,
  hasRateBeenSet: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RATE':
      return {
        perHour: action.payload.hour,
        perMinute: action.payload.minute,
        perSecond: action.payload.second
      };
    case 'HAS_RATE_BEEN_SET':
      return { ...state, hasRateBeenSet: state.hasRateBeenSet ? false : true };
    case 'RESET_RATE':
      return { ...initialState };
    case 'HOLD_RATE':
      return { ...state, holdRate: action.payload };
    default:
      return state;
  }
};
