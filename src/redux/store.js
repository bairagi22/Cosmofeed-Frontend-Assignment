import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSlice, // Use the taskSlice for managing tasks
  },
});

export default store;
