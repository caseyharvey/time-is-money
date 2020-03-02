export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK_TO_COMPLETED':
      return [action.payload, ...state];
    case 'ADD_REMOVE_TASK_ANIMATION':
      return [...state].map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            className: 'completedTaskEntry deleteTaskAnimation'
          };
        } else {
          return task;
        }
      });
    case 'REMOVE_TASK_FROM_COMPLETED':
      return [...state].filter(task => {
        if (task.id !== action.payload) {
          return task;
        }
      });
    default:
      return state;
  }
};
