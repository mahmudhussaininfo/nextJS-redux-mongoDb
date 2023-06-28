import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todoApi";

//create slice
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    msg: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

//export selector
export const todoSelect = (state) => state.todo;

//export actions
export const {} = todoSlice.actions;

//export
export default todoSlice.reducer;
