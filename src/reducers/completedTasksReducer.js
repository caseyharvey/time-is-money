export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK_TO_COMPLETED':
      return [action.payload, ...state];
    default:
      return state;
  }
};
