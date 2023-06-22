import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    logOutModalVisibility: false,
    addModalVisibility: false,
    emptyRoomModalVisibility: false,
    userModalVisibility: false,
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
    switchAddModalVisibility(state) {
      state.addModalVisibility = !state.addModalVisibility;
    },
    switchEmptyModalVisibility(state) {
      state.emptyRoomModalVisibility = !state.emptyRoomModalVisibility;
    },
    switchUserModalVisibility(state) {
      state.userModalVisibility = !state.userModalVisibility;
    },
  },
});

export default modalSlice.reducer;
export const {
  switchProfileModal,
  switchLocaleModal,
  switchLogoutModal,
  switchAddModalVisibility,
  switchEmptyModalVisibility,
  switchUserModalVisibility,
} = modalSlice.actions;
