import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // Import the task reducer

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
