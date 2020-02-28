export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK_TO_COMPLETED':
      return [action.payload, ...state];
    case 'REMOVE_TASK_FROM_COMPLETED':
      return [...state].filter(task => {
        console.log(task);
        console.log(task.id !== action.payload);
        if (task.id !== action.payload) {
          return task;
        }
      });
    default:
      return state;
  }
};