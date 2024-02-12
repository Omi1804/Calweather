import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./citiesRedux";

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});
