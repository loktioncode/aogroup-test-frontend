import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice";
import photosReducer from "./workThunk";


export const store = configureStore({
  reducer: {
    contact: contactReducer,
    photos: photosReducer
  },
});
