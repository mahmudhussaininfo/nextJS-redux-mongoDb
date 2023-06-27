import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/counter/counterSlice.js";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});

//export
export default Store;
