import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
    logOutModalVisibility: false,
    addModalVisibility: false,
    userModalVisibility: false,
    bookedUserModalVisibility: false,
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

    switchUserModalVisibility(state) {
      state.userModalVisibility = !state.userModalVisibility;
    },
    switchBookedModalVisibility(state) {
      state.bookedUserModalVisibility = !state.bookedUserModalVisibility;
    },
  },
});

export default modalSlice.reducer;
export const {
  switchProfileModal,
  switchLocaleModal,
  switchLogoutModal,
  switchAddModalVisibility,
  switchUserModalVisibility,
  switchBookedModalVisibility,
} = modalSlice.actions;
