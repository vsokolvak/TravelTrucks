import { createSlice } from "@reduxjs/toolkit";
import { getCemper, getCemperList } from './catalogOps';

const initialState = {
  items: [],
  currentCamper: {},
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "catalog",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getCemperList.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.items = [];
      })
      .addCase(getCemperList.fulfilled, (state, actions) => {
        state.loading = false;
        state.items = actions.payload;
      })
      .addCase(getCemperList.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getCemper.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.currentCamper = {};
      })
      .addCase(getCemper.fulfilled, (state, actions) => {
        state.loading = false;
        state.currentCamper = actions.payload;
      })
      .addCase(getCemper.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default slice.reducer;
