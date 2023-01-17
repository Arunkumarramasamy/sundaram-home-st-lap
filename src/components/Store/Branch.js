import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  branches: [],
  isLogin: false,
  userName: "",
};
const Branch = createSlice({
  name: "branch",
  initialState: initialAuthState,
  reducers: {
    updateBranch(state, action) {
      state.branches = action.payload;
    },
    updateLoginStatus(state, action) {
      state.isLogin = action.payload;
    },
    updateUserName(state, action) {
      state.userName = action.payload;
    },
  },
});
export const BranchAction = Branch.actions;
export default Branch.reducer;
