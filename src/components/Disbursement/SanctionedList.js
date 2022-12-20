import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const SanctionedList = (props) => {
  const [pageSize, setPageSize] = React.useState(5);



  const columns = [
    {
      field: "branchName",
      headerName: "Branch Name",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align:"center",
    },
    {
        field: "branchName",
        headerName: "Branch Name",
        headerAlign: "center",
        type: "string",
        hideable: false,
        sortable: false,
        width: 250,
        align:"center",
    },
    {
        field: "branchName",
        headerName: "Branch Name",
        headerAlign: "center",
        type: "string",
        hideable: false,
        sortable: false,
        width: 250,
        align:"center",
    },
    {
        field: "branchName",
        headerName: "Branch Name",
        headerAlign: "center",
        type: "string",
        hideable: false,
        sortable: false,
        width: 250,
        align:"center",
    },
    {
        field: "branchName",
        headerName: "Branch Name",
        headerAlign: "center",
        type: "string",
        hideable: false,
        sortable: false,
        width: 250,
        align:"center",
      },
       {
      field: "branchName",
      headerName: "Branch Name",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align:"center",
    },
    {
        field: "branchName",
        headerName: "Branch Name",
        headerAlign: "center",
        type: "string",
        hideable: false,
        sortable: false,
        width: 250,
        align:"center",
      },
  ];


  const rows = [
    {
      id: 7,
      details: "Mod Charges",
      due: "450",
      paid: "450",
      waited: "80",
      deduction: "Nill",
    }
  ];

  
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
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15, 20]}
        disableSelectionOnClick
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
      />
    </React.Fragment>
  );
};
export default SanctionedList;