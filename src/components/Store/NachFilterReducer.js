import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMandate: false,
  data: {
    customerID: "",
    repayApplication: "",
    repayMode: "",
    emiAmount: "",
    fileStatus: "",
    loanAmount: "",
    disbursementAmount: "",
    sancationDate: "",
    nachSponserBank: "",
    IFSC: "",
    MICR: "",
    bankName: "",
    branchName: "",
    draweePlace: "",
    bankAccountNumber: "",
    accountHolderName: "",
    accountType: "",
    mandateNumber: "",
    nachAmount: "",
    mandateAmount: "",
    frequency: "",
    debitType: "",
    fbd: "",
    mandateStartDate: "",
    firstNachBillingDate: "",
    maximumAmount: "",
    mandateValidity: "",
    mandateEndDate: "",
    status: "",
    customerMobileNumber: "",
    customerEmail: "",
  },
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
