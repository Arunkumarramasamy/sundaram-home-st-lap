import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import STButton from "../CustomComponents/STButton";
import axios from "axios";

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

const submitButtonClickHandler = () =>{
  try {
    const response = axios.post("http://localhost:8080/authenticate", {
      dataMap: props.dataMap,
      token: "Check"
    });
    console.log(response);

  } catch (e) {
     console.log("Error Occured");
  }
}


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
