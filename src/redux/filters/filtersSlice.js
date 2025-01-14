import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: '',
  equipment: [],
  type: ''
};

const slice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filtersChange( state , actyons) {
      state.location = actyons.payload.location;
      state.equipment = actyons.payload.equipment;
      state.type = actyons.payload.type;
    },
  },
});

export const { filtersChange } = slice.actions;

export default slice.reducer