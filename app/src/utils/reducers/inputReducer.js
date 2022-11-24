import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "model",
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

// Action creators are generated for each case reducer function
export const { setInput, resetInput } = inputSlice.actions;

export default inputSlice.reducer;
