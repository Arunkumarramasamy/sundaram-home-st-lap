import { Close } from "@mui/icons-material";
import { Alert, Backdrop, CircularProgress, IconButton, Snackbar } from "@mui/material";
import axios from "axios";
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
    data.emiCommDate= data.emiCommDate === null ? null : new Date(data.emiCommDate);
    data.firstEmiDueDate= data.firstEmiDueDate === null ? null : new Date(data.firstEmiDueDate);
    data.effectiveDate= new Date(data.effectiveDate);
    insertDisbursementDataToDB(data);
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
      />
    </>}
    </>
  );
};

export default DisbursementDetailPage;
