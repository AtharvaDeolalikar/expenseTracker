import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    value: false,
  },
  reducers: {
    showModel: (state) => {
      state.value = true;
    },
    hideModel: (state) => {
      state.value = false;
    },
  },
});

export const { showModel, hideModel } = modelSlice.actions;

export default modelSlice.reducer;
