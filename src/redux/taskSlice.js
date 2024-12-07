import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], // List of tasks
  filters: {
    search: "",
    tab: "All",
  },
  groupBy: "None", // Default grouping criteria
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskState: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, currentState: !task.currentState }
          : task
      );
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setGroupBy: (state, action) => {
      state.groupBy = action.payload; // Update the grouping criteria
    },
  },
});

export const {
  addTask,
  updateTask,
  deleteTask,
  toggleTaskState,
  setFilters,
  setGroupBy,
} = taskSlice.actions;

export default taskSlice.reducer;
