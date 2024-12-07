export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK_STATE = "TOGGLE_TASK_STATE";
export const SET_FILTERS = "SET_FILTERS";
export const SET_GROUP_BY = "SET_GROUP_BY";

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const updateTask = (task) => ({ type: UPDATE_TASK, payload: task });
export const deleteTask = (taskId) => ({ type: DELETE_TASK, payload: taskId });
export const toggleTaskState = (taskId) => ({
  type: TOGGLE_TASK_STATE,
  payload: taskId,
});
export const setFilters = (filters) => ({ type: SET_FILTERS, payload: filters });
export const setGroupBy = (groupBy) => ({ type: SET_GROUP_BY, payload: groupBy });
