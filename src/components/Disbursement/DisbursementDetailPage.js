import { Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import DisbursementTabsIntegrator from "./DisbursementTabsIntegrator";

var today = new Date();
var todayDate = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

var detailPageInitialState =   {
    "applicationNumber": "",
    "billingDate": todayDate,
    "billingDay": todayDate,
    "dateOfDisb": todayDate,
    "disbAmt": 0,
    "disbNo": 0,
    "disbRequestId": 0,
    "disbursementFavours": [],
    "earlierDisbAmt": 0,
    "editLock": false,
    "effectiveDate": todayDate,
    "emiCommDate": todayDate,
    "firstEmiDueDate": todayDate,
    "paymentMode": "RTGS",
    "remarks": "",
    "requestStatus": "REQUESTED",
    "shflBank": " ",
    "totalDisbAmt": 0,
    "transactionId": 0
};
var losInitialState =   {
    branchNames: [],
    branchName: "Branch Name",
    applicationNumber: "Application Number",
    applicantName: "Applicant Name",
    coApplicantName: "Co Applicant Name",
    customerId: "Customer ID",
    sanctionStatus: "Approved",
    effectiveDate:todayDate,
    applicationDateFromValue: today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
    applicationDateToValue: todayDate,
    applicationDate: todayDate,
    customerType: "New",
    roi: "0",
    loanAmount: "0",
    sanctionedAmount: "0",
    screenModeTitle: "",
    requestNumber: "",
    memoDeductions:"0"
};


const DisbursementDetailPage = (props) => {

  const[loading,setLoading] = useState(true);

  useEffect(() => {
    losInitialState.screenModeTitle=props.screenTitle;
    losInitialState = props.rowClickData ?  props.rowClickData : losInitialState ;
    getScreenData();
   }, []);

  const getScreenData = async () => {
   
    const api = axios.create({
      baseURL: "http://localhost:8080/losCustomer/"
    });
    const response = await api.post("/getCustBankDetailsByAppNum",{"applicationNumber": losInitialState.applicationNumber});
    {response.data.map((row, index) => ( 
      row.isChecked = false
     ))};
    detailPageInitialState.disbursementFavours = response.data 
    setLoading(false);
  };

  return (
    loading  ?  <>
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={true}
  >
    <CircularProgress color="inherit" />
  </Backdrop> 
      <DisbursementTabsIntegrator
        setListVisibility={props.setListVisibility}
        searchStateValues={losInitialState}
        accordianOpenState={props.accordianOpenState}
        mode={props.mode}
        detailPageInitialState={detailPageInitialState}
      />
    </>: 
    <>
      <DisbursementTabsIntegrator
        setListVisibility={props.setListVisibility}
        searchStateValues={losInitialState}
        accordianOpenState={props.accordianOpenState}
        mode={props.mode}
        detailPageInitialState={detailPageInitialState}
      />
    </>
  );
};

export default DisbursementDetailPage;
