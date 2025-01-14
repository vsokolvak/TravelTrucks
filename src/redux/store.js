import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from './filters/filtersSlice';
import catalogSlice from "./catalog/catalogSlice";

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    filters: filtersSlice,
  },
});
