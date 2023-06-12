import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
  },
  reducers: {
    switchProfileModal(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchLocaleModal(state) {
      state.localeModalVisibility = !state.localeModalVisibility;
    },
  },
});

export default modalSlice.reducer;
export const { switchProfileModal, switchLocaleModal } = modalSlice.actions;
