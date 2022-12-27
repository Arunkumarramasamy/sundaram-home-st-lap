import {
  Box,
  Button,
  Grid,
  lighten,
  Modal,
  Typography,
  useMediaQuery,
  Card,
  CardHeader,
  Divider,
  CardContent,
  PaginationItem,
  Pagination,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import InfoIcon from "@mui/icons-material/Info";
import "./Accrual.css";
import StlapFooter from "../CustomComponents/StlapFooter";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import AdditionalHistory from "./AdditionalHistory";
import HistoryIcon from "@mui/icons-material/History";
import {
  CancelScheduleSend,
  Edit,
  MoreVert,
  Preview,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";

import AccrualCardItems from "./AccrualCardItems";
import AccrualRemark from "./AccrualRemark";

const AdditionalAccrual = () => {
  const [totalPageCount, setTotalPageCount] = React.useState(0);
  const [totalRowsCount, setTotalRowsCount] = React.useState(0);
  const [branchName, setBranchName] = useState("");
  const [rows, setRows] = React.useState([]);
  const rowsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [accordianOpen, setAccordianOpen] = React.useState(true);
  const [pageSize, setPageSize] = useState(4);
  const [girdVisible, setGridVisible] = useState("none");
  const [applicationSearchDisable, setApplicationSearchDisable] =
    useState(true);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [openHistoryDialog, setOpenHistoryDialog] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`
  );
 
  const [applicationNumber, setApplicationNumber] = useState("");
  const onChangeCardItems = (row, value) => {
    row["waived"] = value;
    setDataRow((oldArray) => [...oldArray, row]);
  };
  useEffect(() => {
    setRows(dataRows.slice(0, rowsPerPage));
    setTotalPageCount(
      dataRows.length % 10 !== 0
        ? Number(Number((dataRows.length / 10).toFixed()) + 1)
        : Number(Number((dataRows.length / 10).toFixed()))
    );
    setTotalRowsCount(dataRows.length);
  }, []);
  const resonValue = [
    { value: "1", text: "Reverse Payment" },
    { value: "2", text: "intrest increases" },
    { value: "3", text: "intrest reduced" },
  ];
  const applicationNumberList = [
    { label: "Application1234", value: "ReferenceNumber_0001" },
    { label: "Application1235", value: "ReferenceNumber_0002" },
    { label: "Application1236", value: "ReferenceNumber_0003" },
    { label: "Application1237", value: "ReferenceNumber_0004" },
    { label: "Application1238", value: "ReferenceNumber_0005" },
    { label: "Application1239", value: "ReferenceNumber_0006" },
  ];
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
  const handleHistoryDialog = () => {
    handleOpen(true);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    setGridVisible("block");
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
  const searchButtonClickHandler = (event) => {
    // event.preventDefault();
    // props.onSearchButtonClick(branch, trnNo, true);
  };
  const clearButtonClickHandler = () => {
    setBranchName("");
  };

  const [dataRows, setDataRow] = React.useState([
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
  ]);
  const handlePageChange = (event, newPage) => {
    let offset = (newPage - 1) * rowsPerPage;
    setPage(newPage);
    setRows(dataRows.slice(offset, offset + rowsPerPage));
  };
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
      headerName: "Early Accrual(₹)",
      headerAlign: "center",
      type: "number",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "waived",
      headerName: "Additional Accrual(₹)",
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
      valueGetter: (param) => param.row.due - param.row.paid + param.row.waived,
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
            title="Fee Accural Details"
            initialOpen={true}
          >
            <Box
              id="accord-box"
              component="form"
              validate="true"
              onSubmit={searchButtonClickHandler}
            >
              <form>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                    <CustomAutoComplete
                      required={true}
                      label="Branch Name"
                      id="branchName"
                      variant="standard"
                      value={branchName}
                      onInputChange={(event, newValue) =>
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
                      label="Application Number"
                      id="applicantName"
                      variant="standard"
                      value={applicationNumber}
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
              </form>
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
            title="Accrual Details"
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
                    backgroundColor: "#004A92",
                  },
                }}
                rows={dataRows}
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
          </AccordianContainer>
         
          {useMediaQuery("(max-width:1200px)") && (
            <React.Fragment>
              <Grid
                container
                item
                direction="row"
                alignItems="flex-end"
                justifyContent="flex-end"
                sx={{ height: "60px", bgcolor: "white" }}
              >
                {totalRowsCount > 10 && (
                  <Typography sx={{ mr: 2, color: "#004A92", fontWeight: 700 }}>
                    {"Page Max Records : " + rowsPerPage}
                  </Typography>
                )}
                <Typography
                  padding="1px"
                  sx={{ color: "#004A92", fontWeight: 700 }}
                >
                  {"Total Records : " + totalRowsCount}
                </Typography>
                <Pagination
                  count={totalPageCount}
                  color="primary"
                  onChange={handlePageChange}
                  page={page}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{ previous: ArrowBack, next: ArrowForward }}
                      {...item}
                    />
                  )}
                />
              </Grid>
              <Grid container>
                <Box
                  sx={{
                    height: accordianOpen
                      ? window.innerHeight - 540
                      : window.innerHeight - 250,
                    overflow: "auto",
                    flex: "1 auto",
                  }}
                >
                  {dataRows.map((row, index) => (
                    <AccrualCardItems
                      value={row}
                      index={index}
                      onChange={onChangeCardItems}
                    ></AccrualCardItems>
                  ))}
                  {/* {rows.length === 0 && (
                    <NoDataFound
                      message={"No Disbursement Record Found."}
                      imageStyle={{
                        marginTop:
                          accordianOpen && window.innerHeight < 1000
                            ? "20px"
                            : "20%",
                      }}
                    />
                  )} */}
                </Box>
              </Grid>
            </React.Fragment>
          )}
          <AccrualRemark></AccrualRemark>
        </div>
      </div>
      <StlapFooter />
    </div>
  );
};
export default AdditionalAccrual;
