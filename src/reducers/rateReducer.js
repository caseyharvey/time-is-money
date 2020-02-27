const initialState = {
  perHour: 0,
  perMinute: 0,
  perSecond: 0,
  isRateSet: false,
  showSetRateWarning: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RATE':
      return {
        perHour: action.payload.hour,
        perMinute: action.payload.minute,
        perSecond: action.payload.second,
        isRateSet: true
      };
    case 'SHOW_SET_RATE_WARNING':
      return {
        ...state,
        showSetRateWarning: state.isRateSet ? false : true
      };
    case 'RESET_RATE':
      return { ...initialState };
    default:
      return state;
  }
};
