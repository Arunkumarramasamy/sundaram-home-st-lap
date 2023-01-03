import { Close } from "@mui/icons-material";
import { Alert, Backdrop, CircularProgress, IconButton, Snackbar } from "@mui/material";
import axios from "axios";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DisbursementTabsIntegrator from "./DisbursementTabsIntegrator";

var today = new Date();
var todayDate = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

var detailPageInitialState =   {
    "applicationNumber": "",
    "billingDate": "-1",
    "billingDay": "-1",
    "dateOfDisb": todayDate,
    "disbAmt": 0,
    "disbNo": 1,
    "disbRequestId": 0,
    "disbursementFavours": [],
    "earlierDisbAmt": 0,
    "editLock": false,
    "effectiveDate": todayDate,
    "emiCommDate": "",
    "firstEmiDueDate": "",
    "paymentMode": "RTGS",
    "remarks": "",
    "requestStatus": "REQUEST",
    "screenMode": "CREATE",
    "shflBank": "",
    "totalDisbAmt": 0,
    "rateOfInterest": 0,
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
    rateOfInterest: "0",
    loanAmount: "0",
    sanctionedAmount: "0",
    screenModeTitle: "",
    requestNumber: "",
    memoDeduction:"0"
};

const losCustomerApi = axios.create({
  baseURL: "http://localhost:8080/losCustomer/"
});


const DisbursementDetailPage = (props) => {

  const location = useLocation();

  const navigate = useNavigate();

  const[loading,setLoading] = useState(true);

  const[showSnackBar,setshowSnackBar] = useState(false);

  const errorParameters = {
    currentDisbError : "currentDisbError",
    roiError : "roiError",
    billingDateError : "billingDateError",
    billingDayError : "billingDayError",
    shflBankError : "shflBankError",
    bankAccountError : "bankAccountError",
    overAllError:"overAllError",
  };
  
  const errorInitialState = {
    currentDisbError : [false,"Current Disbursement Amount Cannot be Empty/Zero."],
    roiError : [false,"Rate of Interest Cannot be Empty/Zero."],
    billingDateError : [false,"Please Select Billing Date."],
    billingDayError : [false,"Please Select Billing Day."] , 
    shflBankError : [false,"SHFL Bank Cannot be Empty."],
    bankAccountError : [false,"Please Select Atlease One Bank Account."],
    overAllError : false,
  };


  const errorReducer = (state, action) => {
    switch (action.type) {
      case errorParameters.currentDisbError:
      return { ...state, currentDisbError: action.value };
      case errorParameters.roiError:
      return { ...state, roiError: action.value };
      case errorParameters.billingDateError:
      return { ...state, billingDateError: action.value };
      case errorParameters.billingDayError:
      return { ...state, billingDayError: action.value };
      case errorParameters.shflBankError:
      return { ...state, shflBankError: action.value };
      case errorParameters.bankAccountError:
      return { ...state, bankAccountError: action.value };
      case errorParameters.overAllError:
      return { ...state, overAllError: action.value };
      default:
      return { ...errorInitialState};
      }
  };
 
  const [errorState, errorDispatch] = useReducer(errorReducer, errorInitialState);



  useEffect(() => {
    
    losInitialState = props.rowClickData ?  props.rowClickData : losInitialState ;
    detailPageInitialState.applicationNumber = losInitialState.applicationNumber;
    detailPageInitialState.totalDisbAmt = parseInt(detailPageInitialState.disbAmt)-losInitialState.memoDeduction ;
    if(!(location.state === null)){
        getDisbursementData(location.state);
        losInitialState.screenModeTitle=props.screenTitle;
    } else {
      getCustomerBankDataForCreate(losInitialState.applicationNumber);
    }
   }, []);

  const getCustomerBankDataForCreate = async (applicationNumber) => {

    const response = await losCustomerApi.post("/getCustBankDetailsByAppNum",{"applicationNumber": applicationNumber});
    var counter = 1;
    {response.data.map((row, index) => ( 
      row.isChecked = false,
      row.id = counter++
           ))};
    detailPageInitialState.disbursementFavours = response.data ;
    detailPageInitialState.rateOfInterest = losInitialState.rateOfInterest;
    setLoading(false);
  };


  const getDisbursementData = async (data) => {
    detailPageInitialState = data;
    const tempDisbursementFavours = detailPageInitialState.disbursementFavours;
    const api1 = axios.create({
      baseURL: "http://localhost:8080/losCustomer/"
    });
    const response1 = await api1.post("/getCustBankDetailsByAppNum",{"applicationNumber": data.applicationNumber});
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
    const response = await losCustomerApi.post("/getCustomerDataByAppNum",{"applicationNumber": data.applicationNumber});
    losInitialState = response.data;
    losInitialState.branchNames = [];
    losInitialState.screenModeTitle=props.screenTitle;
    setLoading(false);
  };
  


  const insertDisbursementDataToDB = async (data) => { 
    const api = axios.create({
        baseURL: "http://localhost:8080/disbursement/"
      });
      const response = await api.post("/insertDisbursement",data);
      if(response.status === 200){
        setshowSnackBar(true);
   
    setLoading(false);
    navigate("/stlap/home/disbursementView",{state:response.data});
      }
     };

     const validateCreateRequestData = (data) => {
          var status = true;

          //Validating Current Disbursement Amount Field
          if(data.disbAmt === 0 || data.disbAmt === null || data.disbAmt.trim() === ""){
            errorDispatch({
              type: errorParameters.currentDisbError,
              value: [true,"Current Disbursement Amount Cannot be Empty/Zero."],
            });
            status=false; 
          }  else if(data.disbAmt > props.rowClickData.sanctionAmount){
            errorDispatch({
              type: errorParameters.currentDisbError,
              value: [true,"Current Disbursement Amount Cannot be Greater than Sanction Amount."],
            }); 
            status=false; 
          }  else if(errorState.currentDisbError[0]){
            errorDispatch({
              type: errorParameters.currentDisbError,
              value: [false,"Current Disbursement Amount Cannot be Empty/Zero."],
            });  
          }


           //Validating Rate of Interest Field
           if(data.rateOfInterest === 0 || data.rateOfInterest === null ){
            errorDispatch({
              type: errorParameters.roiError,
              value: [true,"Rate of Interest Cannot be Empty."],
            });
            status=false; 
          } else if(data.rateOfInterest < 18 || data.rateOfInterest > 22){
            errorDispatch({
              type: errorParameters.roiError,
              value: [true,"Rate of Interest should be between 18 & 22."],
            });
            status=false;
          } else if(errorState.roiError[0]){
            errorDispatch({
              type: errorParameters.roiError,
              value: [false,"Rate of Interest Cannot be Empty/Zero."],
            });  
          }

          //Validating Billing  Date Field
          if(data.billingDate === "-1" ){
            errorDispatch({
              type: errorParameters.billingDateError,
              value: [true,"Please Select Billing Date."],
            });
            status=false; 
          } else if(errorState.billingDateError[0]){
            errorDispatch({
              type: errorParameters.billingDateError,
              value: [false,"Please Select Billing Date."],
            });  
          }


          //Validating Billing  Day Field
          if(data.billingDay === "-1" ){
            errorDispatch({
              type: errorParameters.billingDayError,
              value: [true,"Please Select Billing Day."],
            });
            status=false; 
          } else if(errorState.billingDayError[0]){
            errorDispatch({
              type: errorParameters.billingDayError,
              value: [false,"Please Select Billing Day."],
            });  
          }

          //Validating SHFL Bank Field
          if(data.shflBank === 0 || data.shflBank === null || data.shflBank.trim() === ""){
            errorDispatch({
              type: errorParameters.shflBankError,
              value: [true,"SHFL Bank Cannot be Empty."],
            });
            status=false; 
          } else if(errorState.shflBankError[0]){
            errorDispatch({
              type: errorParameters.shflBankError,
              value: [false,"SHFL Bank Cannot be Empty."],
            });  
          }


          //Validating Bank Grid
          if(data.disbursementFavours.length === 0 ){
            errorDispatch({
              type: errorParameters.bankAccountError,
              value: [true,"*No Bank Account Linked For this Application . Please Add Bank Account in Loan Origination System."],
            });
            status=false; 
          } else {
          var bankAccountSelectionCount = 0;
          var totalAmountSelected = 0;
          var netDisbAmt = data.disbAmt - props.rowClickData.memoDeduction;
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
            bankAccountSelectionCount++;
            totalAmountSelected = totalAmountSelected + row.amount ? row.amount : 0;
          }); 

          if(bankAccountSelectionCount === 0){
            errorDispatch({
              type: errorParameters.bankAccountError,
              value: [true,"Please Select Atleast one Bank Account."],
            });
            status=false; 
          } else if(totalAmountSelected < netDisbAmt){
            errorDispatch({
              type: errorParameters.bankAccountError,
              value: [true,"Amount to be Sent is Less than Disbursement Amount."],
            });
            status=false; 
          } else if(totalAmountSelected > netDisbAmt){
            errorDispatch({
              type: errorParameters.bankAccountError,
              value: [true,"Amount to be Sent is Greater than Disbursement Amount."],
            });
            status=false; 
          } else if(errorState.bankAccountError[0]){
            errorDispatch({
              type: errorParameters.bankAccountError,
              value: [false,"Please Select Atleast one Bank Account."],
            });  
          }
        
        } 
          setLoading(status);
          return status;
     };


  const createRequestHandler = (data) => {
    setLoading(true);
    if(validateCreateRequestData(data)){
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
    data.emiCommDate= data.emiCommDate === null ? null : new Date(data.emiCommDate);
    data.firstEmiDueDate= data.firstEmiDueDate === null ? null : new Date(data.firstEmiDueDate);
    data.effectiveDate= new Date(data.effectiveDate);
    insertDisbursementDataToDB(data);
  }
  };

  const handleSnackBarClose = () =>{
      setshowSnackBar(false);
  };

  return (<>
       <Snackbar
        open={showSnackBar}
        autoHideDuration={1000}
        message={"Disbursement Request Created Successfully"}    
        action={
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleSnackBarClose}
            >
              <Close />
            </IconButton>
        }  />
    {loading  ?  <>
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
        createRequestClickHandler = {createRequestHandler}
        errorState={errorState}
      />
    </>: 
    <>
      <DisbursementTabsIntegrator
        setListVisibility={props.setListVisibility}
        searchStateValues={losInitialState}
        accordianOpenState={props.accordianOpenState}
        mode={props.mode}
        detailPageInitialState={detailPageInitialState}
        createRequestClickHandler = {createRequestHandler}
        errorState={errorState}
      />
    </>}
    </>
  );
};

export default DisbursementDetailPage;
