import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], // List of tasks
  filters: {
    search: "",
    tab: "All",
    sortBy: "createdAt", // Default sorting criterion (can be changed to 'dueDate')
  },
  groupBy: "None", // Default grouping criterion
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Add a new task with dueDate
      const { id, title, description, dueDate, createdAt = new Date() } = action.payload;
      state.tasks.push({ id, title, description, dueDate, createdAt, currentState: false });
    },
    updateTask: (state, action) => {
      // Update task properties, including dueDate
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
