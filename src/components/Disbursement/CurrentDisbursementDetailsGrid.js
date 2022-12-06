import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import STButton from "../CustomComponents/STButton";
import axios from "axios";
import Cookies from "js-cookie";

const columns = [
  { field: "id", headerName: "ID",headerAlign: "center",align: "right", },
  {
    field: "amout",
    headerName: "Amount",
    width: 150,
    hideable: false,
    headerAlign: "center",
    align: "right",
  },
  {
    field: "paymentMode",
    headerName: "Payment Mode",
    width: 150,
    headerAlign: "center",
    align:"center",
  },
  {
    field: "emiType",
    headerName: "EMI Type",
    width: 150,
    headerAlign: "center",
    align:"center",
  },
  {
    field: "entityName",
    headerName: "Entity Name",
    width: 150,
    headerAlign: "center",
    align:"center",
  },
  {
    field: "accountNumber",
    headerName: "Account Number",
    width: 150,
    headerAlign: "center",
    align: "right",
  },
  {
    field: "ifscCode",
    headerName: "IFSC Code",
    width: 150,
    headerAlign: "center",
    align:"center",
  },
];

let visibility = {
  id: false,
  paymentMode: false,
  emiType: false,
  entityName: false,
  accountNumber: false,
  ifscCode: false
};
if(window.innerWidth > 700){
  visibility = {};
}

const CurrentDisbursementDetailsGrid = (props) => {

  const dataMap = {
    // "accountNumber": props.dataMap.CurrentDisbursementDetails.accountNumber,
    // "applicantName": props.dataMap.BasicInformation.applicantName,
    // "chequeMode": props.dataMap.CurrentDisbursementDetails.chequeMode,
    // "chequePrintAt": props.dataMap.CurrentDisbursementDetails.chequePrintAt,
    // "currentDisbursment":  props.dataMap.BasicInformation.currentDisbursementAmount,
    // "dateOfDisbursment":  props.dataMap.BasicInformation.dateofDisbursment,
    // "debitAccountDetail": props.dataMap.CurrentDisbursementDetails.debitAccountType,
    // "disbursmentCurrent": props.dataMap.CurrentDisbursementDetails.historyGrid,
    // "effectiveDate":  props.dataMap.BasicInformation.effectiveRate,
    // "entityName": props.dataMap.CurrentDisbursementDetails.entityName,
    // "favourName": props.dataMap.CurrentDisbursementDetails.favourName,
    // "fileNumber":  props.dataMap.BasicInformation.fileNumber,
    // "ifscCode": props.dataMap.CurrentDisbursementDetails.ifscCode,
    // "loanRequestDate":  props.dataMap.BasicInformation.loanrequestDate,
    // "numberOfDisbursment": 0,
    // "paymentMode": props.dataMap.CurrentDisbursementDetails.paymentMode,
    // "proposalType": props.dataMap.BasicInformation.proposalType,
    // "sanctionDate": props.dataMap.BasicInformation.sanctionedDate,
    // "totalDisbursmentAmt":props.dataMap.BasicInformation.totalDisbursementAmount
    "accountNumber": "string",
    "applicantName": "string",
    "chequeMode": "string",
    "chequePrintAt": "string",
    "currentDisbursment": 0,
    "dateOfDisbursment": "string",
    "debitAccountDetail": "string",
    "disbursmentCurrent": [
      {
        "accountNumber": "string",
        "amount": 0,
        "emiType": "string",
        "entityName": "string",
        "id": 0,
        "ifscCode": "string",
        "paymentMode": "string"
      }
    ],
    "effectiveDate": "string",
    "entityName": "string",
    "favourName": "string",
    "fileNumber": "string",
    "ifscCode": "string",
    "loanRequestDate": "string",
    "numberOfDisbursment": 0,
    "paymentMode": "string",
    "proposalType": "string",
    "sanctionDate": "string",
    "totalDisbursmentAmt": 0
  }

const submitButtonClickHandler = () =>{

   
  try {
    const response = axios.post("http://localhost:8080/generateReport", {
      dataMap: dataMap
        }, {
      headers: {
        'Authorization':'Bearer '+ Cookies.get('Token')
      }
    });
    console.log(response);

  } catch (e) {
     console.log("Error Occured");
  }
};


  return (
    <>
      <Box sx={{ height: 210, marginTop: "3rem" }}>
        <DataGrid
          sx={{
            "& .MuiDataGrid-row:hover": {
              color: "#004A92",
              backgroundColor: "#B8E4F4",
            },
            "& .MuiDataGrid-columnHeaders": {
              color: "white",
              fontFamily: "Roboto",
              backgroundColor: "#7f7f7f",
            },
          }}
          rows={props.dataMap.CurrentDisbursementDetails.historyGrid}
          columns={columns}
          rowsPerPageOptions={[4, 8, 12, 16]}
          initialState={{
            columns: {
              columnVisibilityModel: {
               ...visibility
              },
            },
          }}
        ></DataGrid>
      </Box>
      <Box
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <STButton variant="contained" onClick={props.back}>
          Back to search
        </STButton>
        <STButton variant="contained" onClick={submitButtonClickHandler}>Submit & Download</STButton>
      </Box>
    </>
  );
};

export default CurrentDisbursementDetailsGrid;
