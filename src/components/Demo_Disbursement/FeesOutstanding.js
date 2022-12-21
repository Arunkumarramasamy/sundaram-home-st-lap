import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import STButton from "../CustomComponents/CustomButton";
import { Box } from "@mui/material";

const FeesOutstanding = (props) => {
  const [pageSize, setPageSize] = React.useState(4);



  const columns = [
    {
      field: "details",
      headerName: "Details",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align:"center",
    },
    {
      field: "due",
      headerName: "Due Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "right",
      editable: false,
    },
    {
      field: "paid",
      headerName: "Paid Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "waited",
      headerName: "Waved Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "deduction",
      headerName: "Deduction",
      headerAlign: "center",
      type: "string",
      width: "200",
      editable: false,
      align:"center",
    },
  ];
    let visibility = {
      due: false,
      paid: false,
      waited: false,
      deduction: false,
    };
    if(window.innerWidth > 700){
      visibility = {};
    }
  return (
    <React.Fragment sx={{ height: "100%" }}>
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          height: "400px",
          borderColor: "white",
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
        rows={props.dataMap.FeeOutstanding.outstandingDues}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[4, 8, 12, 16]}
        disableSelectionOnClick
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
        initialState={{
          columns: {
            columnVisibilityModel: {
             ...visibility
            },
          },
        }}
      />
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <STButton variant="contained" onClick={props.back}>
          Back to search
        </STButton>
      </Box>
    </React.Fragment>
  );
};
export default FeesOutstanding;
