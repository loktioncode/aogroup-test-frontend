import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  email: "",
  subject: "",
  message: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    submitData: (state, action) => {
      state.value = action.payload;
      console.log(">>", action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { submitData } = contactSlice.actions;

export default contactSlice.reducer;
