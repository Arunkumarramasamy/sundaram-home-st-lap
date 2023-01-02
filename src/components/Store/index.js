import { configureStore } from "@reduxjs/toolkit";
import LoginAuth from "./LoginAuth";
import MobileLogin from "./MobileLogin";
import NachStore from "./NachStore";
const store = configureStore({
  reducer: {
    login: LoginAuth,
    mob: MobileLogin,
    nach: NachStore,
  },
});
export default store;
