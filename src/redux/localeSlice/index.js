import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: "localeSlice",
  initialState: {
    lang: "uzLotin",
  },
  reducers: {
    changelang(state, action) {
      state.lang = action.payload;
    },
  },
});

export default localeSlice.reducer;

export const { changelang } = localeSlice.actions;
