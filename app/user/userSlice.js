import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userApi";

//create slice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    msg: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

//export selector
export const selectUser = (state) => state.user;

//export actions
export const {} = userSlice.actions;

//export
export default userSlice.reducer;
