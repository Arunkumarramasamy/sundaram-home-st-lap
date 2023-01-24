import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  touchHandler: {
    frequency: false,
    debitType: false,
    fbd: false,
    mandateStartDate: false,
    firstNachBillingDate: false,
  },
};
const NachStore = createSlice({
  name: "Nach",
  initialState: initialState,
  reducers: {
    updateFrequencyTouchHandler(state, action) {
      state.touchHandler.frequency = action.payload;
    },
    updateDebitTypeTouchHandler(state, action) {
      state.touchHandler.debitType = action.payload;
    },
    updateFbdTouchHandler(state, action) {
      state.touchHandler.fbd = action.payload;
    },
    updateMandateStartDateTouchHandler(state, action) {
      state.touchHandler.mandateStartDate = action.payload;
    },
    updateFirstNachBillingDateTouchHandler(state, action) {
      state.touchHandler.firstNachBillingDate = action.payload;
    },
  },
});
export const NachAction = NachStore.actions;
export default NachStore.reducer;
