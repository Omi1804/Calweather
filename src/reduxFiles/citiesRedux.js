import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    recentSearches: [],
  },
  reducers: {
    addSearch: (state, action) => {
      state.recentSearches = [
        action.payload,
        ...state.recentSearches.filter((city) => city !== action.payload),
      ].slice(0, 4);
    },
  },
});

export const { addSearch } = citiesSlice.actions;

export default citiesSlice.reducer;
