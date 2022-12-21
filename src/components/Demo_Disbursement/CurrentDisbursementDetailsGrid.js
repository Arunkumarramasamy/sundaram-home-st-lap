import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import CustomButton from "../CustomComponents/CustomButton";
import axios from "axios";
import Cookies from "js-cookie";

const columns = [
  { field: "id", headerName: "ID", headerAlign: "center", align: "right" },
  {
    field: "amount",
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
    align: "center",
  },
  {
    field: "emiType",
    headerName: "EMI Type",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "entityName",
    headerName: "Entity Name",
    width: 150,
    headerAlign: "center",
    align: "center",
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
    align: "center",
  },
];

let visibility = {
  id: false,
  paymentMode: false,
  emiType: false,
  entityName: false,
  accountNumber: false,
  ifscCode: false,
};
if (window.innerWidth > 700) {
  visibility = {};
}

const CurrentDisbursementDetailsGrid = (props) => {
  const formDataMap = (dataMap) => {
    return {
      accountNumber: dataMap.CurrentDisbursementDetails.accountNumber,
      applicantName: dataMap.BasicInformation.applicantName,
      chequeMode: dataMap.CurrentDisbursementDetails.chequeMode,
      chequePrintAt: dataMap.CurrentDisbursementDetails.chequePrintAt,
      currentDisbursment: dataMap.BasicInformation.currentDisbursementAmount,
      dateOfDisbursment: dataMap.BasicInformation.dateofDisbursment,
      debitAccountDetail: dataMap.CurrentDisbursementDetails.debitAccountType,
      disbursmentCurrent: dataMap.CurrentDisbursementDetails.historyGrid,
      effectiveDate: dataMap.BasicInformation.effectiveRate,
      entityName: dataMap.CurrentDisbursementDetails.entityName,
      favourName: dataMap.CurrentDisbursementDetails.favourName,
      fileNumber: dataMap.BasicInformation.fileNumber,
      ifscCode: dataMap.CurrentDisbursementDetails.ifscCode,
      loanRequestDate: dataMap.BasicInformation.loanrequestDate,
      numberOfDisbursment: dataMap.BasicInformation.numberofDisbursement,
      paymentMode: dataMap.CurrentDisbursementDetails.paymentMode,
      proposalType: dataMap.BasicInformation.proposalType,
      sanctionDate: dataMap.BasicInformation.sanctionedDate,
      totalDisbursmentAmt: dataMap.BasicInformation.totalDisbursementAmount,
    };
  };

  const submitButtonClickHandler = () => {
    try {
      const response = axios
        .get("http://localhost:8080/generateReport", 
        
        {
          responseType: 'blob'
        })
        .then(function (response) {
          const filename = "Disbursment Report";
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.download = `${filename}.pdf`;
          link.href = window.URL.createObjectURL(blob);

          link.click();
          console.log(response);
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
                ...visibility,
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
        <CustomButton variant="contained" onClick={props.back}>
          Back to search
        </CustomButton>
        <CustomButton variant="contained" onClick={submitButtonClickHandler}>
          Submit & Download
        </CustomButton>
      </Box>
    </>
  );
};

export default CurrentDisbursementDetailsGrid;
