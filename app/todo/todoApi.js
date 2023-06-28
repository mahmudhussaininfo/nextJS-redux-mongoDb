import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get Todos
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get("http://localhost:3000/api/todo");
  return response.data.todos;
});

//post Todos
export const fetchCreateTodos = createAsyncThunk(
  "todo/fetchCreateTodos",
  async (data) => {
    const response = await axios.post("http://localhost:3000/api/todo", data);
    return response.data.todo;
  }
);
