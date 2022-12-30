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
    "disbAmt": 400000,
    "disbNo": 1,
    "disbRequestId": 0,
    "disbursementFavours": [],
    "earlierDisbAmt": 0,
    "editLock": false,
    "effectiveDate": todayDate,
    "emiCommDate": todayDate,
    "firstEmiDueDate": todayDate,
    "paymentMode": "RTGS",
    "remarks": "VALUE CHECK",
    "requestStatus": "REQUEST",
    "screenMode": "CREATE",
    "shflBank": "HDFC",
    "totalDisbAmt": 0,
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
    memoDeduction:"0"
};


const DisbursementDetailPage = (props) => {

  const[mode,setMode] = useState(props.mode);

  const[loading,setLoading] = useState(true);

  useEffect(() => {
    
    losInitialState = props.rowClickData ?  props.rowClickData : losInitialState ;
    losInitialState.screenModeTitle=props.screenTitle;
    detailPageInitialState.applicationNumber = losInitialState.applicationNumber;
    detailPageInitialState.totalDisbAmt = parseInt(detailPageInitialState.disbAmt)-losInitialState.memoDeduction ;
    getScreenData();
   }, []);

  const getScreenData = async () => {
   
    const api = axios.create({
      baseURL: "http://localhost:8080/losCustomer/"
    });
    const response = await api.post("/getCustBankDetailsByAppNum",{"applicationNumber": losInitialState.applicationNumber});
    var counter = 1;
    {response.data.map((row, index) => ( 
      row.isChecked = false,
      row.id = counter++
           ))};
    detailPageInitialState.disbursementFavours = response.data 
    setLoading(false);
  };

  const insertDisbursementData = async (data) => { 
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/"
    });
    const response = await api.post("/insertDisbursement",data);
    detailPageInitialState = response.data;
    const tempDisbursementFavours = detailPageInitialState.disbursementFavours;
    const api1 = axios.create({
      baseURL: "http://localhost:8080/losCustomer/"
    });
    const response1 = await api1.post("/getCustBankDetailsByAppNum",{"applicationNumber": losInitialState.applicationNumber});
    const tempBankRow = response1.data ;
    var counter = 1;
    var dataMap = [];
    tempBankRow.map((bankRow)=>{
      tempDisbursementFavours.map((insertedBankROw)=>{
            if(insertedBankROw.bankAccNumber === bankRow.bankAccountNumber ){
              bankRow.isChecked = true;
              bankRow.amount = insertedBankROw.disbAmount;
              bankRow.id = counter++;
              dataMap.push(bankRow);
            }
      });
    });
    detailPageInitialState.disbursementFavours = dataMap;
    losInitialState.screenModeTitle = "Disbursement Request View" ;
    setMode("VIEW");
    setLoading(false);
  };


  const createRequestHandler = (data) => {
    setLoading(true);
      const dataMap=[];
    data.disbursementFavours.filter((row)=> row.isChecked === true
    ).forEach((row)=>{
      const dataMap1 = {
        "id": row.bankAccountNumber,
        "applicationNumber": row.applicationNumber,
        "bankAccNumber": row.bankAccountNumber,
        "createdBy": "",
        "createdDate": "",
        "disbAmount": row.amount,
        "disbRequestId": data.disbRequestId,
        "distNo": data.disbNo,
        "lastModifiedBy": "",
        "lastModifiedDate": "",
      };
      dataMap.push(dataMap1);
    });
    data.disbursementFavours = dataMap;
    data.dateOfDisb = new Date(data.dateOfDisb);
    data.billingDate= new Date(data.billingDate);
    data.billingDay= new Date(data.billingDay);
    data.emiCommDate= new Date(data.emiCommDate);
    data.firstEmiDueDate= new Date(data.firstEmiDueDate);
    data.effectiveDate= new Date(data.effectiveDate);
        insertDisbursementData(data);
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
        mode={mode}
        detailPageInitialState={detailPageInitialState}
        createRequestClickHandler = {createRequestHandler}
      />
    </>: 
    <>
      <DisbursementTabsIntegrator
        setListVisibility={props.setListVisibility}
        searchStateValues={losInitialState}
        accordianOpenState={props.accordianOpenState}
        mode={mode}
        detailPageInitialState={detailPageInitialState}
        createRequestClickHandler = {createRequestHandler}
      />
    </>
  );
};

export default DisbursementDetailPage;
