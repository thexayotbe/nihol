import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userName",
  initialState: {
    selectedUser: {},
  },
  reducers: {
    setSelectedUser(state, { payload }) {
      state.selectedUser = payload;
    },
  },
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
