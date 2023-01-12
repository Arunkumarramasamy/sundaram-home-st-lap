import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMandate: false,
};
const NachFilterReducer = createSlice({
  name: "Nach",
  initialState: initialState,
  reducers: {
    updateShowMandate(state, action) {
      state.showMandate = action.payload;
    },
  },
});
export const NachFilterReducerAction = NachFilterReducer.actions;
export default NachFilterReducer.reducer;
