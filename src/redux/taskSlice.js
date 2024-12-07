import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filters: {
    search: "",
    tab: "All",
    sortBy: "dueDate", // Default sorting by dueDate
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
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setGroupBy: (state, action) => {
      state.groupBy = action.payload;
    },
    toggleTaskState: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.currentState = !task.currentState;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, setFilters, setGroupBy, toggleTaskState, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
