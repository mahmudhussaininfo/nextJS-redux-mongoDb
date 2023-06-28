import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/counter/counterSlice.js";
import userReducer from "@/app/user/userSlice.js";
import todoReducer from "@/app/todo/todoSlice";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todo: todoReducer,
  },
  devTools: true,
});

//export
export default Store;
