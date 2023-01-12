import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {};
const NachStore = createSlice({
  name: "Nach",
  initialState: initialState,
  reducers: {},
});
export const NachAction = NachStore.actions;
export default NachStore.reducer;
