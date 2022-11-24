import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    value: {
      category: "",
      amount: 0,
    },
  },
  reducers: {
    setInput: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    resetInput: (state) => {
      state.value = { category: "", amount: 0 };
    },
  },
});

export const { setInput, resetInput } = inputSlice.actions;

export default inputSlice.reducer;
