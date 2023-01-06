import { configureStore } from "@reduxjs/toolkit";
import LoginAuth from "./LoginAuth";
import MobileLogin from "./MobileLogin";
import NachStore from "./NachStore";
import Branch from "./Branch";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
const persistConfig = {
  key: "branch",
  storage,
};
const persistedReducer = persistReducer(persistConfig, Branch);
const store = configureStore({
  reducer: {
    branch: persistedReducer,
    login: LoginAuth,
    mob: MobileLogin,
    nach: NachStore,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
