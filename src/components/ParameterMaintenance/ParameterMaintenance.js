import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import CustomTextField from "../CustomComponents/CustomTextField";
import Grid from "@mui/material/Grid";
const rows = [
  {
    id: "1",
    parameterName: "Minimum Disbursement Amount",
    parameterDatatype: "Integer",
    parameterValue: "76529",
    effectiveStartDate: "11/12/2021",
    effectiveEndDate: "11/12/2021",
  },
  {
    id: "2",
    parameterName: "Minimum Disbursement Amount",
    parameterDatatype: "Integer",
    parameterValue: "76529",
    effectiveStartDate: "11/11/2022",
    effectiveEndDate: "11/12/2021",
  },
];
const columns = [
  {
    field: "parameterName",
    headerName: "Parameter Name",
    editable: "true",
    headerAlign: "center",
    align: "center",
    width: 350,
  },
  {
    field: "parameterDatatype",
    headerName: "Parameter Data Type",
    headerAlign: "center",
    align: "center",
    width: 160,
  },
  {
    field: "parameterValue",
    headerName: "Parameter Value",
    headerAlign: "center",
    align: "center",
    width: 160,
  },
  {
    field: "effectiveStartDate",
    headerName: "Effective Start Date",
    headerAlign: "center",
    align: "center",
    width: 160,
  },
  {
    field: "effectiveEndDate",
    headerName: "Effective End Date",
    headerAlign: "center",
    align: "center",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    headerAlign: "center",
    align: "center",
    width: 160,
  },
];
const ParameterMaintenance = () => {
  /** Show Dialog Handlers */
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <h4> Parameter Maintenance</h4>
      <Box
        sx={{
          marginTop: "5px",
          marginBottom: "2px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Tooltip title="Add">
          <span>
            <IconButton
              sx={{ color: "#004A92" }}
              aria-label="edit"
              size="large"
              onClick={handleClickOpen}
            >
              <AddBoxIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
      <Box>
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            minHeight: "200px",
            borderColor: "white",
            "& .MuiDataGrid-columnHeaders": {
              color: "white",
              fontFamily: "Roboto",
              backgroundColor: "#004A92",
            },
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <h4>Create Parameter</h4>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Parameter Name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                label="Parameter Data Type"
                variant="standard"
                type="text"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomTextField label="Parameter Value" variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                label="Effective Start Date"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField label="Effective End Date" variant="standard" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ParameterMaintenance;
