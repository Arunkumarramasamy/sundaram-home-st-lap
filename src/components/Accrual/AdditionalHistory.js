import { DataGrid } from "@mui/x-data-grid";
import { React } from "react";
import { lighten } from "@mui/material";

const rows = [
  {
    id: 1,
    modified: "File Processing Charges",
    amount: 1000,
    modifiedBy: "Arun",
  },
  {
    id: 2,

    modified: "File Processing Charges",
    amount: 1000,
    modifiedBy: "Raagesh",
  },
  {
    id: 3,

    modified: "File Processing Charges",
    amount: 1000,
    modifiedBy: "Bala",
  },
  {
    id: 4,
    modified: "File Processing Charges",
    amount: 1000,
    modifiedBy: "Vignesh",
  },
  {
    id: 5,
    modified: "File Processing Charges",
    amount: 1000,
    modifiedBy: "Naveen",
  },
];
const columns = [
  {
    field: "id",
    headerName: "S.No",
    headerAlign: "center",
    type: "number",
    hideable: false,
    sortable: false,
    width: 50,
    align: "center",
    editable: false,
  },
  {
    field: "modified",
    headerName: "Modified",
    headerAlign: "center",
    type: "string",
    hideable: false,
    sortable: false,
    width: 300,
    align: "center",
    editable: false,
  },
  {
    field: "amount",
    headerName: "Amount",
    headerAlign: "center",
    type: "number",
    hideable: false,
    sortable: false,
    width: 100,
    align: "right",
    editable: false,
  },
  {
    field: "modifiedBy",
    headerName: "Modified By",
    headerAlign: "center",
    type: "String",
    hideable: false,
    sortable: false,
    width: 100,
    align: "right",
    editable: false,
  },
];
const AdditionalHistory = (props) => {
  return (
    <>
      <h4>{props.title}</h4>
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
          "& .super-app-theme--odd": {
            bgcolor: lighten("#D7D7D7", 0.15),
          },
          "& .super-app-theme--even": {
            bgcolor: lighten("#AAAAAA", 0.15),
          },
        }}
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        autoHeight
        hideFooterPagination
        hideFooterSelectedRowCount
        // onCellEditCommit={(event)=>handleCellChangedEvent(event)}
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
      />
    </>
  );
};
export default AdditionalHistory;
