import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
var today = new Date();
var todayDate =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
const initialState = {
  disablingState: true,
  data: {
    branch: "",
    applicationNumber: "",
    applicantCustomer: "",
    bankName: "",
    branchName: "",
    micr: "",
    accountType: "",
    bankAccountNumber: "",
    accountHolderName: "",
    emiAmount: "",
    nachAmount: "",
    mandateAmount: "",
    frequency: "",
    fbd: "",
    mandateStartDate: todayDate,
    firstNachBillingDate: todayDate,
    mandateValidity: "",
    mandateEndDate: "",
    maximumAmount: "",
    customerMobileNumber: "",
    customerEmailId: "",
    status: "",
    mandateNumber: "",
  },
};
const NachStore = createSlice({
  name: "Nach",
  initialState: initialState,
  reducers: {
    updateDisablingState(state, action) {
      state.disablingState = action.payload;
    },
    updateCustomerDataFromMaster(state, action) {
      state.data = {
        ...state.data,
        branch: action.payload.branch,
        applicationNumber: action.payload.applicationNumber,
        applicantCustomer: action.payload.applicantCustomer,
        bankName: action.payload.bankName,
        branchName: action.payload.branchName,
        micr: action.payload.micr,
        accountType: action.payload.accountType,
        bankAccountNumber: action.payload.bankAccountNumber,
        accountHolderName: action.payload.accountHolderName,
        emiAmount: action.payload.emiAmount,
        nachAmount: action.payload.nachAmount,
        mandateAmount: action.payload.emiAmount * 2,
        mandateValidity: action.payload.mandateValidity,
        mandateEndDate: action.payload.mandateEndDate,
        maximumAmount: action.payload.maximumAmount,
        customerMobileNumber: action.payload.customerMobileNumber,
        customerEmailId: action.payload.customerEmailId,
        status: action.payload.status,
        mandateNumber: action.payload.mandateNumber,
      };
    },
    updateFrequency(state, action) {
      state.data.frequency = action.payload;
    },
    updateFbd(state, action) {
      state.data.fbd = action.payload;
    },
    updateMandateStartDate(state, action) {
      state.data.mandateStartDate = action.payload;
    },
    updateNachBillingDate(state, action) {
      state.data.firstNachBillingDate = action.payload;
    },
  },
});
export const NachAction = NachStore.actions;
export default NachStore.reducer;
