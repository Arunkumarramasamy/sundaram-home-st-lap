import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import STButton from "../CustomComponents/STButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "amout",
    headerName: "Amount",
    width: 150,
    hideable: false,
  },
  {
    field: "paymentMode",
    headerName: "Payment Mode",
    width: 150,
  },
  {
    field: "emiType",
    headerName: "EMI Type",
    width: 150,
  },
  {
    field: "entityName",
    headerName: "Entity Name",
    width: 150,
  },
  {
    field: "accountNumber",
    headerName: "Account Number",
    width: 150,
  },
  {
    field: "ifscCode",
    headerName: "IFSC Code",
    width: 150,
  },
];
const rows = [
  {
    id: 1,
    amout: 10000,
    paymentMode: "Cash",
    emiType: "Fixed Amount",
    entityName: "Tom",
    accountNumber: "182728928282",
    ifscCode: "HDFC000007",
  },
  {
    id: 2,
    amout: 10000,
    paymentMode: "Cash",
    emiType: "Fixed Amount",
    entityName: "Tom",
    accountNumber: "182728928282",
    ifscCode: "HDFC000007",
  },
];

const CurrentDisbursementDetailsGrid = (props) => {
  return (
    <>
      <Box sx={{ height: 210, marginTop: "3rem" }}>
        <DataGrid
          sx={{
            "& div.MuiDataGrid-columnHeaders": {
              backgroundColor: "#2f7dc4",
              color: "white",
            },
            "& button.MuiIconButton-root": {
              color: "white",
            },
          }}
          rows={rows}
          columns={columns}
          rowsPerPageOptions={[4, 8, 12, 16]}
        ></DataGrid>
      </Box>
      <Box
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <STButton
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={props.back}
        >
          Back to search
        </STButton>
        <STButton variant="contained">Submit & Download</STButton>
      </Box>
    </>
  );
};

export default CurrentDisbursementDetailsGrid;
