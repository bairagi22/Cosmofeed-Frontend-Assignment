import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  tasks: [],
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
    // Add task action
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setGroupBy: (state, action) => {
      state.groupBy = action.payload; // Update the grouping criteria
    },
    // New reducer for toggling task state (completed/incomplete)
    toggleTaskState: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.currentState = !task.currentState;
      }
    },
    // New reducer for deleting a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, setFilters, setGroupBy, toggleTaskState, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
