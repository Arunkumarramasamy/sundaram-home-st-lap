import { DataGrid } from "@mui/x-data-grid";
import { lighten, Stack } from "@mui/material";
import NoDataFound from "../CustomComponents/NoDataFound";
import { useState } from "react";

const CustomDataGrid = (props) => {
  const [pageSize, setPageSize] = useState(props.pageSize);

  const NoRowsOverlay = () => {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        <NoDataFound message={props.noDataMessage} />
      </Stack>
    );
  };

  const NoResultsOverlay = () => {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        <NoDataFound message={props.noDataOnFilterMessage} />
      </Stack>
    );
  };

  return (
    <DataGrid
      sx={{
        boxShadow: 2,
        border: 2,
        height: props.gridHeight ? props.gridHeight : "400px",
        width: props.gridWidth ? props.gridWidth : "100%",
        borderColor: "white",
        "& .MuiDataGrid-row:hover": {
          color: "#004A92",
          backgroundColor: "#B8E4F4",
        },
        "& .MuiDataGrid-columnHeaders": {
          color: "white",
          fontFamily: "Roboto",
          backgroundColor: "#004A92",
        },
      }}
      rows={props.rows}
      columns={props.columns}
      pageSize={pageSize}
      headerHeight={48}
      rowHeight={40}
      // loading={props.loading}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      onPageChange={props.gridLazyLoad}
      rowsPerPageOptions={props.pageSizeOptions}
      disableSelectionOnClick
      getRowClassName={(params) =>
        params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
      }
      onRowDoubleClick={props.rowDoubleClickHandler}
      components={{ NoRowsOverlay, NoResultsOverlay }}
      hideFooter={props.hideFooter ? true : false}
      checkboxSelection={
        props.checkboxSelection ? props.checkboxSelection : false
      }
      getRowId={props.getRowId}
    />
  );
};

export default CustomDataGrid;
