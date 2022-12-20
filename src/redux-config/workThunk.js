import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { photosAPI } from "./services";

const initialState = {
  all_photos: [],
  loading: "done",
  error: "",
};

export const fetchPhotos = createAsyncThunk(
  "work/fetchPhotos",
  async (thunkAPI) => {
    const res = await photosAPI();
    return res;
  }
);

export const fetchPhotosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPhotos.fulfilled]: (state, { payload }) => {
      state.all_photos = payload;
      state.loading = "done";
    },
    [fetchPhotos.pending]: (state) => {
      state.loading = "pending";
    },
    [fetchPhotos.rejected]: (state, { error }) => {
      state.loading = "done";
      state.error = error;
    },
  },
});

export default fetchPhotosSlice.reducer;

