import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import CustomTextField from "../CustomComponents/CustomTextField";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Edit, MoreVert, Preview } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomDateField from "../CustomComponents/CustomDateField";
import { useState } from "react";

const ParameterMaintenance = () => {
  const rows = [
    {
      id: "1",
      parameterName: "Minimum Disbursement Amount",
      parameterDatatype: "Integer",
      parameterValue: 100000,
      effectiveStartDate: "01/01/2021",
      effectiveEndDate: "10/06/2022",
      action: "1",
    },
    {
      id: "2",
      parameterName: "Payment Mode",
      parameterDatatype: "String",
      parameterValue: "RTGS",
      effectiveStartDate: "11/11/2022",
      effectiveEndDate: "11/12/2021",
      action: "2",
    },
    {
      id: "3",
      parameterName: "Maximum Allowable Cash Receipt",
      parameterDatatype: "Integer",
      parameterValue: 10000,
      effectiveStartDate: "10/11/2021",
      effectiveEndDate: "12/03/2022",
      action: "2",
    },
  ];
  const columns = [
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <Tooltip title="More Actions">
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleMenuClick}
              >
                <MoreVert />
              </IconButton>
            </Tooltip>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "100px",
                },
              }}
            >
              {options.map((option, index) => (
                <MenuItem key={option} onClick={handleClose}>
                  <IconButton size="small" sx={{ color: "#004A92" }}>
                    {(() => {
                      switch (index) {
                        case 0:
                          return <Preview fontSize="small" />;
                        case 1:
                          return <Edit fontSize="small" color="inherit" />;
                      }
                    })()}
                  </IconButton>
                  <Typography
                    variant="inherit"
                    component="div"
                    fontSize="14px"
                    fontWeight="inherit"
                    sx={{ color: "#004A92", fontWeight: "520" }}
                  >
                    {option}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
        );
      },
    },
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
      renderCell: (params) => {
        return params.value.toLocaleString("en-IN");
      },
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
  ];
  /** Show Dialog Handlers */
  const [Dialogopen, setDialogOpen] = React.useState(false);
  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  /**More Action Config */
  const options = ["View", "Modify"];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  /**Grid Button Click Handler */
  const editButtonHandler = () => {};

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
          marginBottom: "5px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{ backgroundColor: "#004a92", color: "#fff", ":hover": "red" }}
          onClick={handleClickDialogOpen}
          onMouseOver={({ target }) => {
            target.style.backgroundColor = "#004a92";
            target.style.color = "#fff";
          }}
        >
          Add
        </Button>
        {/* <Tooltip title="Add">
          <span>
            <IconButton
              sx={{ color: "#004A92" }}
              aria-label="edit"
              size="large"
              onClick={handleClickDialogOpen}
            >
              <AddBoxIcon />
            </IconButton>
          </span>
        </Tooltip> */}
      </Box>
      <Box>
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            minHeight: "280px",
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
      <Dialog open={Dialogopen} onClose={handleDialogClose}>
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
              <CustomDropDown
                label="Parameter Data Type"
                variant="standard"
                dropDownValue={[
                  { value: 0, text: "String" },
                  { value: 1, text: "Integer" },
                  { value: 2, text: "Float" },
                  { value: 3, text: "Double" },
                ]}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomDateField
                label="Effective Start Date"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomDateField label="Effective End Date" variant="standard" />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField label="Parameter Value" variant="standard" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ backgroundColor: "#004a92", color: "#fff", ":hover": "red" }}
            onClick={handleDialogClose}
            onMouseOver={({ target }) => {
              target.style.backgroundColor = "#004a92";
              target.style.color = "#fff";
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{ backgroundColor: "#004a92", color: "#fff", ":hover": "red" }}
            onClick={handleDialogClose}
            onMouseOver={({ target }) => {
              target.style.backgroundColor = "#004a92";
              target.style.color = "#fff";
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ParameterMaintenance;
