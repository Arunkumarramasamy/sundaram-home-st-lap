import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  approvalData: {
    branch: "",
    applicationNum: "",
    UMRNNumber: "",
    customerId: "",
    customerName: "",
    mandateNumber: "",
    mandateBank: "",
    status: "",
  },
};
const NachApprovalReducer = createSlice({
  name: "verificationModal",
  initialState: initialAuthState,
  reducers: {
    // updatemodalValues(state, action) {
    //   state.modalValue.branch = action.payload.branch;
    //   state.modalValue.UMRNNumber = action.payload.UMRNNumber;
    //   state.modalValue.applicationNum = action.payload.applicationNumber;
    //   state.modalValue.customerId = action.payload.customerID;
    //   state.modalValue.customerName = action.payload.customerName;
    //   state.modalValue.mandateNumber = action.payload.mandateNumber;
    //   state.modalValue.mandateBank = action.payload.mandateBank;
    //   state.modalValue.status = action.payload.status;
    // },
  },
});
export const NachApprovalReducerAction = NachApprovalReducer.actions;
export default NachApprovalReducer.reducer;
