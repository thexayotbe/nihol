import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    logOutModalVisibility: false,
  },
  reducers: {
    switchProfileModal(state) {
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchLocaleModal(state) {
      state.localeModalVisibility = !state.localeModalVisibility;
    },
    switchLogoutModal(state) {
      state.logOutModalVisibility = !state.logOutModalVisibility;
    },
  },
});

export default modalSlice.reducer;
export const { switchProfileModal, switchLocaleModal, switchLogoutModal } =
  modalSlice.actions;
