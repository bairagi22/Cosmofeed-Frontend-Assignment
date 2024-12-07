import {
    ADD_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    TOGGLE_TASK_STATE,
    SET_FILTERS,
    SET_GROUP_BY,
  } from "./actions";
  
  const initialState = {
    tasks: [],
    filters: { search: "", sortBy: "createdAt", groupBy: null },
  };
  
  export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return { ...state, tasks: [action.payload, ...state.tasks] };
      case UPDATE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? { ...task, ...action.payload } : task
          ),
        };
      case DELETE_TASK:
        return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
      case TOGGLE_TASK_STATE:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload
              ? { ...task, currentState: !task.currentState }
              : task
          ),
        };
      case SET_FILTERS:
        return { ...state, filters: { ...state.filters, ...action.payload } };
      case SET_GROUP_BY:
        return { ...state, filters: { ...state.filters, groupBy: action.payload } };
      default:
        return state;
    }
  };
  