const initialState = { perHour: 0, perMinute: 0, perSecond: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RATE':
      return {
        perHour: action.payload.hour,
        perMinute: action.payload.minute,
        perSecond: action.payload.second
      };
    default:
      return state;
  }
};
