import { configureStore } from "@reduxjs/toolkit";
import LoginAuth from "./LoginAuth";
import MobileLogin from "./MobileLogin";
const store = configureStore({
  reducer: {
    login: LoginAuth,
    mob: MobileLogin,
  },
});
export default store;
