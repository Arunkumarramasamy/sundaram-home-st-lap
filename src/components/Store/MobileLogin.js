import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  NumberSection: true,
  OTPSection: false,
};
const MobileLogin = createSlice({
  name: "login",
  initialState: initialAuthState,
  reducers: {
    updateNumberSection(state, action) {
      state.NumberSection = action.payload;
    },
    updateOTPSection(state, action) {
      state.OTPSection = action.payload;
    },
  },
});
export const MobileLoginAction = MobileLogin.actions;
export default MobileLogin.reducer;
