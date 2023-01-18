import { Satellite } from "@mui/icons-material";
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
    sancationDate: null,
    nachSponserBank: "",
    IFSC: "",
    MICR: "",
    bankName: "",
    branchName: "",
    draweePlace: "",
    bankAccountNum: "",
    bankAccHolderName: "",
    accountType: "",
    mandateNum: "",
    nachAmt: "",
    mandateAmt: "",
    frequency: "",
    debitType: "",
    fbd: "",
    mandateStartDate: null,
    firstNachBillingDate: null,
    maximumAmt: "",
    mandateValidity: "",
    mandateEndDate: "",
    customerMobileNum: "",
    customerEmailId: "",
  },
};
const NachFilterReducer = createSlice({
  name: "Nach",
  initialState: initialState,
  reducers: {
    updateShowMandate(state, action) {
      state.showMandate = action.payload;
    },
    updateValues(state, action) {
      state.data.customerID = action.payload.customerID;
      state.data.repayApplication = action.payload.repayApplication;
      state.data.repayMode = action.payload.repayMode;
      state.data.emiAmount = action.payload.emiAmt;
      state.data.fileStatus = action.payload.fileStatus;
      state.data.loanAmount = action.payload.loanAmount;
      state.data.disbursementAmount = action.payload.disbursementAmount;
      state.data.sancationDate = action.payload.sancationDate;
      state.data.nachSponserBank = action.payload.nachSponserBank;
      state.data.IFSC = action.payload.IFSC;
      state.data.MICR = action.payload.MICR;
      state.data.bankName = action.payload.bankName;
      state.data.branchName = action.payload.branchName;
      state.data.draweePlace = action.payload.draweePlace;
      state.data.bankAccountNum = action.payload.bankAccountNum;
      state.data.bankAccHolderName = action.payload.bankAccHolderName;
      state.data.accountType = action.payload.accountType;
      state.data.nachAmt = action.payload.nachAmt;
      state.data.mandateAmt = action.payload.emiAmt * 2;
      state.data.frequency = action.payload.frequency;
      state.data.debitType = action.payload.debitType;
      state.data.fbd = action.payload.fbd;
      state.data.mandateStartDate = action.payload.mandateStartDate;
      state.data.firstNachBillingDate = action.payload.firstNachBillingDate;
      state.data.maximumAmt = action.payload.maximumAmt;
      state.data.mandateValidity = action.payload.mandateValidity;
      state.data.mandateEndDate = action.payload.mandateEndDate;
      state.data.customerMobileNum = action.payload.customerMobileNum;
      state.data.customerEmailId = action.payload.customerEmailId;
    },
    resetValues(state, action) {
      state.data.customerID = "";
      state.data.repayApplication = "";
      state.data.repayMode = "";
      state.data.emiAmount = "";
      state.data.fileStatus = "";
      state.data.loanAmount = "";
      state.data.disbursementAmount = "";
      state.data.sancationDate = null;
      state.data.nachSponserBank = "";
      state.data.IFSC = "";
      state.data.MICR = "";
      state.data.bankName = "";
      state.data.branchName = "";
      state.data.draweePlace = "";
      state.data.bankAccountNum = "";
      state.data.bankAccHolderName = "";
      state.data.accountType = "";
      state.data.mandateNum = "";
      state.data.nachAmt = "";
      state.data.mandateAmt = "";
      state.data.frequency = "";
      state.data.debitType = "";
      state.data.fbd = "";
      state.data.mandateStartDate = "";
      state.data.firstNachBillingDate = "";
      state.data.maximumAmt = "";
      state.data.mandateValidity = "";
      state.data.mandateEndDate = "";
      state.data.customerMobileNum = "";
      state.data.customerEmailId = "";
    },
    updateFrequency(state, action) {
      state.data.frequency = action.payload;
    },
    updateDebitType(state, action) {
      state.data.debitType = action.payload;
    },
    updateFBD(state, action) {
      state.data.fbd = action.payload;
    },
    updateMandateStartDate(state, action) {
      state.data.mandateStartDate = action.payload;
    },
    updateFirstNachBillingDate(state, action) {
      state.data.firstNachBillingDate = action.payload;
    },
    updateMandateNum(state, action) {
      state.data.mandateNum = action.payload;
    },
  },
});
export const NachFilterReducerAction = NachFilterReducer.actions;
export default NachFilterReducer.reducer;
