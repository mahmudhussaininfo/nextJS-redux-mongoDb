import { createSlice } from "@reduxjs/toolkit";

//create slice
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
  },
  reducers: {
    Inc: (state, { type, payload }) => {
      state.count++;
    },
    Dec: (state, { type, payload }) => {
      state.count--;
    },
  },
  extraReducers: (builder) => {},
});

//export selector
export const selectCount = (state) => state.counter;

//export actions
export const { Inc, Dec } = counterSlice.actions;

//export
export default counterSlice.reducer;
