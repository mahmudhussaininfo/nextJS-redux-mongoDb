import getAllUser from "@/libs/getAllUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const users = await getAllUser();
  return users;
});

export const fetchCreateUser = createAsyncThunk(
  "user/fetchCreateUser",
  async (data) => {
    const response = await axios.post("http://localhost:3000/api/user", data);
    return response.data.user;
  }
);
