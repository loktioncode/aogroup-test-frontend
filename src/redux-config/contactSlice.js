import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    submitData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { submitData } = contactSlice.actions;
export default contactSlice.reducer;
