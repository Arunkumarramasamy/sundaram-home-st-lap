import {
  Box,
  Button,
  Grid,
  lighten,
  TextareaAutosize,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import InfoIcon from "@mui/icons-material/Info";
import "./Accrual.css";
import StlapFooter from "../CustomComponents/StlapFooter";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import AdditionalHistory from "./AdditionalHistory";
import HistoryIcon from "@mui/icons-material/History";

const AdditionalWaiver = () => {
  const [pageSize, setPageSize] = useState(4);
  const [girdVisible, setGridVisible] = useState("none");
  const [branchValue, setBranchValue] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [openHistoryDialog, setOpenHistoryDialog] = useState(false);
  const [applicationSearchDisable, setApplicationSearchDisable] =
    useState(true);
  const [branchName, setBranchName] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    setGridVisible("block");
  };

  const [referenceNumber, setReferenceNumber] = useState("");
  const [currentDate, setCurrentDate] = useState(
    `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`
  );
  const [applicationNumber, setApplicationNumber] = useState("");
  const applicationNumberList = [
    { label: "Application1234", value: "ReferenceNumber_0001" },
    { label: "Application1235", value: "ReferenceNumber_0002" },
    { label: "Application1236", value: "ReferenceNumber_0003" },
    { label: "Application1237", value: "ReferenceNumber_0004" },
    { label: "Application1238", value: "ReferenceNumber_0005" },
    { label: "Application1239", value: "ReferenceNumber_0006" },
  ];
  const onChangeForReferenceEvent = (event, newValue) => {
    if (newValue === null) {
      setApplicationNumber("");
      setReferenceNumber("");
      setGridVisible("none");
    } else {
      setApplicationNumber(newValue.label);
      setReferenceNumber(newValue.value);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const branchNames = [
    { label: "Mylapore", value: "" },
    { label: "Royapettah", value: "" },
    { label: "Light House", value: "" },
    { label: "Chennai", value: "" },
    { label: "Tambaram", value: "" },
    { label: "Egmore", value: "" },
  ];
  const handleCellChangedEvent = (event) => {
    console.log(event.value);
  };
  const searchButtonClickHandler = (event) => {
    // event.preventDefault();
    // props.onSearchButtonClick(branch, trnNo, true);
  };
  const onChangeForBranchEvent = (event, newValue) => {
    setBranchName(newValue);
    if (newValue === null || newValue === "") {
      setApplicationSearchDisable(true);
      setReferenceNumber("");
      setApplicationNumber("");
      setGridVisible("none");
    } else {
      setApplicationSearchDisable(false);
    }
  };
  const handleHistoryDialog = () => {
    handleOpen(true);
  };
  const clearButtonClickHandler = () => {
    setBranchName("");
  };
  const resonValue = [
    { value: "1", text: "Reverse Payment" },
    { value: "2", text: "intrest increases" },
    { value: "3", text: "intrest reduced" },
  ];

  const rows = [
    {
      id: 1,
      details: "Mod Charges",
      receiveable: 5000,
      received: 0,
      due: 5000,
      paid: 2000,
      waived: 500,
    },
    {
      id: 2,
      details: "Legal Charges",
      receiveable: 7000,
      received: 7000,
      due: 0,
      paid: 0,
      waived: 0,
    },
    {
      id: 3,
      details: "Technical Assistance Charges",
      due: 3000,
      receiveable: 3000,
      paid: 3000,
      received: 0,
      waived: 0,
    },
    {
      id: 4,
      details: "Documentation Charges",
      due: 25000,
      receiveable: 25000,
      paid: 10000,
      received: 0,
      waived: 3000,
    },
    {
      id: 5,
      details: "File Processing Charges",
      due: 1000,
      receiveable: 1000,
      paid: 500,
      received: 500,
      waived: 500,
    },
    {
      id: 6,
      details: "Application Fee",
      due: 8000,
      receiveable: 8000,
      received: 8000,
      paid: 0,
      waived: 0,
    },
    {
      id: 7,
      details: "Prepayment Charge",
      due: 1000,
      receiveable: 1000,
      paid: 1000,
      received: 1000,
      waived: 0,
    },
    {
      id: 8,
      details: "Partial prepayment charge",
      due: 20000,
      received: 10000,
      receiveable: 30000,
      paid: 5000,
      waived: 5000,
    },
    {
      id: 9,
      details: "Late Fee charge",
      due: 250,
      receiveable: 500,
      received: 250,
      paid: 250,
      waived: 0,
    },
    {
      id: 10,
      details: "Recovery Charge",
      due: 300,
      paid: 300,
      receiveable: 0,
      received: 300,
      waived: 50,
    },
    {
      id: 11,
      details: "Insurance Premium Charge",
      due: 7000,
      paid: 7000,
      received: 7000,
      receiveable: 0,
      waived: 0,
    },
  ];
  const columns = [
    {
      field: "details",
      headerName: "Fee Description",
      headerAlign: "center",
      type: "number",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
      editable: false,
    },
    {
      field: "receiveable",
      headerName: "Amount Receivable",
      headerAlign: "center",
      type: "number",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
      editable: false,
    },
    {
      field: "received",
      headerName: "Amout Received(₹)",
      headerAlign: "center",
      type: "number",
      width: 150,
      align: "right",
      editable: false,
    },
    {
      field: "paid",
      headerName: "Early Waived (₹)",
      headerAlign: "center",
      type: "number",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "waived",
      headerName: "Additional Waiver(₹)",
      headerAlign: "center",
      type: "number",
      width: 190,
      align: "right",
      editable: true,
    },
    {
      field: "deduction",
      headerName: "Outstanding Amout",
      headerAlign: "center",
      type: "number",
      width: "200",
      editable: false,
      align: "center",
      editable: false,
      valueGetter: (param) => param.row.due - param.row.paid - param.row.waived,
    },
  ];

  let visibility = {
    due: false,
    paid: false,
    waived: false,
    deduction: false,
  };
  if (window.innerWidth > 700) {
    visibility = {};
  }

  return (
    <div>
      <div style={{ minHeight: "calc(100vh - 120px)" }}>
        <Grid
          container
          spacing={2}
          // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
          sx={{
            width: "calc(100% - 8px)",
            margin: "unset",
          }}
        >
          <AccordianContainer
            id="accord"
            title="Fee Waiver Details"
            initialOpen={true}
          >
            <Box
              id="accord-box"
              component="form"
              validate="true"
              onSubmit={searchButtonClickHandler}
            >
              <Grid item container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <CustomAutoComplete
                    required={true}
                    label="Branch Name"
                    id="applicantName"
                    variant="standard"
                    value={branchName}
                    onChange={(event, newValue) =>
                      onChangeForBranchEvent(event, newValue)
                    }
                    type="text"
                    placeholder="Branch Name"
                    autoCompleteValues={branchNames}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <CustomAutoComplete
                    required={true}
                    clearText={() => console.log("log")}
                    disabled={applicationSearchDisable}
                    value={applicationNumber}
                    label="Application Number"
                    id="applicantName"
                    variant="standard"
                    onChange={(event, newValue) =>
                      onChangeForReferenceEvent(event, newValue)
                    }
                    // value={applicantName}
                    type="text"
                    placeholder="Application Number"
                    autoCompleteValues={applicationNumberList}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <CustomTextField
                    disabled={true}
                    label="Reference Number"
                    id="refno"
                    type="text"
                    placeholder="Reference Number"
                    required={false}
                    variant="standard"
                    value={referenceNumber}
                    // onChange={trnNoChangeHandler}
                    // onChange={(event)=>setReferenceName(event.target.value)}
                  />
                </Grid>
                <Grid xs={0} sm={0} md={0} lg={3} xl={3}></Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <CustomTextField
                    required={false}
                    disabled={true}
                    label="Reference Date"
                    id="refdate"
                    value={currentDate}
                    type="text"
                    placeholder=""
                    variant="standard"
                    // type="text"
                    // onChange={()=>set}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{ fontWeight: "bold" }}
                  variant="contained"
                  type="submit"
                  onClick={(event) => handleSearch(event)}
                >
                  Search
                </Button>
                <Button
                  sx={{
                    marginLeft: "1rem",
                    color: "white",
                    backgroundColor: "black",
                    fontWeight: "bold",
                  }}
                  onMouseOver={({ target }) => {
                    target.style.backgroundColor = "black";
                    target.style.color = "white";
                  }}
                  variant="contained"
                  onClick={() => clearButtonClickHandler()}
                >
                  Clear
                </Button>
              </Box>
            </Box>
          </AccordianContainer>
        </Grid>
        <div
          style={{
            display: girdVisible,
            width: "calc(100% - 8px)",
            paddingTop: "8px",
          }}
        >
          <AccordianContainer
            id="accord"
            title="Waiver Details"
            initialOpen={true}
          >
            <Grid
              container
              spacing={2}
              // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
              sx={{
                width: "calc(100% - 8px)",
                margin: "unset",
                display: girdVisible,
                backgroundColor: "#fff",
              }}
            >
              <DataGrid
                sx={{
                  boxShadow: 2,
                  border: 2,
                  minHeight: "280px",
                  borderColor: "white",
                  "& .MuiDataGrid-columnHeaders": {
                    color: "white",
                    fontFamily: "Roboto",
                    backgroundColor: "#727dff",
                  },
                }}
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                disableSelectionOnClick
                autoHeight
                // onCellEditCommit={(event)=>handleCellChangedEvent(event)}
                getRowClassName={(params) =>
                  params.id % 2
                    ? `super-app-theme--even`
                    : `super-app-theme--odd`
                }
                isCellEditable={(params) => params.row.paid !== 0}
                initialState={{
                  columns: {
                    columnVisibilityModel: {
                      ...visibility,
                    },
                  },
                }}
              />
            </Grid>
            <Grid
              container
              spacing={2}
              // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
              sx={{
                width: "calc(100% - 8px)",
                margin: "unset",
                display: girdVisible,
                backgroundColor: "#fff",
              }}
            >
              <Box sx={{ width: "100%", marginTop: "16px" }}>
                <Grid
                  container
                  spacing={2}
                  // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
                >
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                    <CustomDropDown
                      id="1"
                      label="Reason "
                      value="1"
                      defaultValue="1"
                      required={true}
                      dropDownValue={resonValue}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                    <CustomTextField
                      required={false}
                      disabled={true}
                      label="Waived By"
                      id="refdate"
                      value="Accurver"
                      type="text"
                      placeholder=""
                      variant="standard"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
                >
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Typography id="accrual-waiver-remark" required={true}>
                      Remarks
                    </Typography>
                    <TextareaAutosize
                      maxRows={4}
                      required={true}
                      aria-label="maximum height"
                      style={{
                        width: "100%",
                        height: "100px",
                        borderRadius: "4px",
                        resize: " none;",
                        outline: "none",
                      }}
                    />
                  </Grid>
                </Grid>
                <div style={{ padding: "8px", direction: "rtl" }}>
                  <Button variant="contained" sx={{ fontWeight: "bold" }}>
                    Update
                  </Button>
                  <Button
                    onClick={handleHistoryDialog}
                    variant="contained"
                    sx={{ marginRight: "8px", fontWeight: "bold" }}
                  >
                    <HistoryIcon />
                  </Button>
                  <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <AdditionalHistory title="Waived History" />
                      </Box>
                    </Modal>
                  </Grid>
                </div>
              </Box>
            </Grid>
          </AccordianContainer>
        </div>
      </div>
      <StlapFooter />
    </div>
  );
};
export default AdditionalWaiver;
