import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  PaginationItem,
  Pagination,
  Alert,
} from "@mui/material";
import GetBranchDetails from "../CustomComponents/GetBranchDetails";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomTextField from "../CustomComponents/CustomTextField";
import "./Accrual.css";
import StlapFooter from "../CustomComponents/StlapFooter";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import AccrualCardItems from "./AccrualCardItems";
import AccrualRemark from "./AccrualRemark";
import axios from "axios";
import { BranchAction } from "../Store/Branch";
import { useDispatch } from "react-redux";
var deductionsInitialState = {
  paidTotal: 0,
  dueTotal: 0,
  deductionTotal: 0,
  waivedTotal: 0,
  totalDeductionsTotal: 0,
};
const AdditionalWaiver = () => {
  const dispatch = useDispatch();
  const [modifiedMaps, setModifiedmap] = React.useState({});
  const [pageSize, setPageSize] = useState(4);
  const [girdVisible, setGridVisible] = useState("none");
  const [applicationSearchDisable, setApplicationSearchDisable] =
    useState(true);
  const [rows, setRows] = React.useState([]);
  const [totalPageCount, setTotalPageCount] = React.useState(0);
  const [totalRowsCount, setTotalRowsCount] = React.useState(0);
  const [branchName, setBranchName] = useState("");
  const rowsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [accordianOpen, setAccordianOpen] = React.useState(true);
  const [gridAlert, setGridAlert] = useState("none");
  const [reason, setReason] = useState("");
  const [historyData, setHistorydata] = useState({});
  const [remark, setRemark] = useState("");
  const [gridData, setGridData] = useState([]);
  const [updateDisable, setUpdateDisable] = useState(true);
  const [deductionsState, setDeductionsState] = useState(
    deductionsInitialState
  );
  const handleSearch = (event) => {
    event.preventDefault();
    if (branchName && applicationNum) {
      getData();
      setGridVisible("block");
    } else {
      branchName ? setBranchNameNotValid(false) : setBranchNameNotValid(true);
      applicationNum
        ? setapplicationNumNotValid(false)
        : setapplicationNumNotValid(true);
      setGridVisible("none");
    }
  };
  const getData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/additionalfee/getFeeData",
        {
          applicationNum: applicationNum,
          type: "waiver",
        }
      );
      setDataRow(response.data.gridData);
      getDataCount(response.data.gridData);
      setGridData(response.data.gridData);
      setReferenceNumber(
        response.data.otherList.referenceNumber
          ? response.data.otherList.referenceNumber + 1
          : 1
      );
      setModifiedmap(getModifiedData(response.data.gridData));
      setReason(response.data.otherList.reason);
      setRemark(response.data.otherList.remark);
      setGridVisible("block");
    } catch {
      setGridVisible("none");
      console.log("Network Error");
    }
  };
  const getDataCount = (gridRows) => {
    let paidTotal1 = 0;
    let dueTotal1 = 0;
    let deductionTotal1 = 0;
    let waivedTotal1 = 0;
    let data = { ...deductionsInitialState };
    gridRows.map((rows) => {
      data = {};
      paidTotal1 = paidTotal1 + rows.received;
      dueTotal1 = dueTotal1 + rows.receiveable + rows.additionalAccrual;
      deductionTotal1 =
        deductionTotal1 +
        rows.additionalAccrual +
        (rows.receiveable -
          rows.received -
          rows.earlyWaiver -
          rows.additionalWaiver);
      waivedTotal1 = waivedTotal1 + rows.earlyWaiver;
      data.paidTotal = paidTotal1;
      data.dueTotal = dueTotal1;
      data.deductionTotal = deductionTotal1 - rows.additionalWaiver;
      data.waivedTotal = waivedTotal1;
      data.totalDeductionsTotal =
        dueTotal1 + deductionTotal1 - paidTotal1 - waivedTotal1;
    });
    setDeductionsState(data);
  };
  const [branchNameNotValid, setBranchNameNotValid] = useState(false);
  const [applicationNumNotValid, setapplicationNumNotValid] = useState(false);
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
    const branchValues = GetBranchDetails();
    setbranchNames(branchValues);
  }, []);
  const getModifiedData = (modifiedData) => {
    let modifiedMap = {};
    modifiedData.forEach(function (key) {
      modifiedMap[key["details"]] = key["additionalWaiver"];
    });
    return modifiedMap;
  };
  const [referenceNumber, setReferenceNumber] = useState(0);
  const [currentDate, setCurrentDate] = useState(
    `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`
  );
  const [applicationNum, setapplicationNum] = useState("");
  const [applicationNumList, setapplicationNumList] = useState([
    // { label: "STLMYL20220001", value: "STLMYL20220001" },
    // { label: "STLMYL20220002", value: "STLMYL20220002" },
    // { label: "STLMYL20220003", value: "STLMYL20220003" },
    // { label: "STLMYL20220004", value: "STLMYL20220004" },
    // { label: "STLMYL20220005", value: "STLMYL20220005" },
    // { label: "STLMYL20220006", value: "STLMYL20220006" },
  ]);
  const onChangeForReferenceEvent = (event, newValue) => {
    if (newValue === null) {
      setapplicationNum("");
      setReferenceNumber("");
      setGridVisible("none");
    } else {
      setapplicationNumNotValid(false);
      setapplicationNum(newValue.label);
    }
  };
  const handleCellChangedEvent = (event) => {
    let tempValue = { ...historyData };
    const dataMap1 = [];
    dataRows.forEach((value) => {
      if (value.details === event.row.details) {
        value.additionalWaiver = event.value;
        tempValue[value.details] = event.value;
      }
      dataMap1.push(value);
    });
    setHistorydata(tempValue);
    setDataRow(dataMap1);
    getDataCount(dataMap1);
    setUpdateDisable(
      JSON.stringify(modifiedMaps) === JSON.stringify(getModifiedData(dataRows))
    );
    if (
      !(
        event.row.receiveable - event.row.received - event.row.earlyWaiver >
        event.value
      )
    ) {
      setGridAlert("flex");
      setUpdateDisable(true);
    } else {
    }
  };
  const getApplicationListData = async (branch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/additionalfee/getApplicationNumber",
        {
          branchName: branch.label,
        }
      );
      setapplicationNumList(response.data);
    } catch {
      setGridVisible("none");
      console.log("Network Error");
    }
  };
  const [branchNames, setbranchNames] = useState([]);
  const searchButtonClickHandler = (event) => {
    // event.preventDefault();
    // props.onSearchButtonClick(branch, trnNo, true);
  };
  const onChangeForBranchEvent = (event, newValue) => {
    setBranchName(newValue);
    getApplicationListData(newValue);
    dispatch(BranchAction.updateInitialLoad(false));
    dispatch(BranchAction.updateHeaderBranchDetails(newValue.label));
    if (newValue === null || newValue === "") {
      setApplicationSearchDisable(true);
      setapplicationNum("");
      setGridVisible("none");
    } else {
      setBranchNameNotValid(false);
      setApplicationSearchDisable(false);
    }
  };

  const clearButtonClickHandler = () => {
    setBranchName("");
    setapplicationNum("");
    setGridVisible("none");
    setReferenceNumber("");
  };

  const [dataRows, setDataRow] = React.useState([]);
  const columns = [
    {
      field: "details",
      headerName: "Fee Description",
      headerAlign: "center",
      type: "number",
      hideable: false,
      sortable: false,
      width: 310,
      align: "left",
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
      align: "right",
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
      field: "earlyWaiver",
      headerName: "Earlier Waiver (₹)",
      headerAlign: "center",
      type: "number",
      width: 190,
      align: "right",
      editable: false,
    },

    {
      field: "outstanding",
      headerName: "Outstanding Amount",
      headerAlign: "center",
      type: "number",
      width: "200",
      editable: false,
      align: "right",
      editable: false,
      valueGetter: (param) => {
        if (
          param.row.receiveable -
            param.row.received -
            param.row.additionalWaiver -
            param.row.earlyWaiver >
          0
        ) {
          return (
            param.row.receiveable -
            param.row.received -
            param.row.additionalWaiver -
            param.row.earlyWaiver
          );
        } else {
          return (
            param.row.receiveable - param.row.received - param.row.earlyWaiver
          );
        }
      },
    },
    {
      field: "additionalWaiver",
      headerName: "Fees to be Waiver(₹)",
      headerAlign: "center",
      type: "number",
      minWidth: 195,
      align: "right",
      editable: true,
      valueGetter: (param) => {
        if (
          param.row.receiveable -
            param.row.received -
            param.row.additionalWaiver -
            param.row.earlyWaiver >
          0
        ) {
          return param.value;
        } else {
          return 0;
        }
      },
    },
  ];
  const handlePageChange = (event, newPage) => {
    let offset = (newPage - 1) * rowsPerPage;
    setPage(newPage);
    setRows(dataRows.slice(offset, offset + rowsPerPage));
  };
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
              sx={{ margin: "8px !important" }}
            >
              <Grid item container spacing={1}>
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
                  {branchNameNotValid && (
                    <p className="error">Please Enter valid Branch Name</p>
                  )}
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <CustomAutoComplete
                    required={false}
                    clearText={() => console.log("log")}
                    disabled={applicationSearchDisable}
                    value={applicationNum}
                    label="Application Number"
                    id="applicantName"
                    variant="standard"
                    onChange={(event, newValue) =>
                      onChangeForReferenceEvent(event, newValue)
                    }
                    // value={applicantName}
                    type="text"
                    placeholder="Application Number"
                    autoCompleteValues={applicationNumList}
                  />
                  {applicationNumNotValid && (
                    <p className="error">
                      Please Enter valid Application Number
                    </p>
                  )}
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
                    value={referenceNumber === 0 ? "" : referenceNumber}
                    // onChange={trnNoChangeHandler}
                    // onChange={(event)=>setReferenceName(event.target.value)}
                  />
                </Grid>

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
                  marginTop: "8px",
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
          {useMediaQuery("(min-width:1200px)") && (
            <AccordianContainer
              id="accord"
              title="Waiver Details"
              initialOpen={true}
              sx={{ marignBottom: "8px !important" }}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                  <label
                    style={{
                      fontWeight: "bold",
                      marginLeft: "8px",
                      color: "#2F7DC4",
                    }}
                  >
                    {"Total Outstanding : "}
                    <span style={{ color: "#2F7DC4" }}>
                      {parseInt(deductionsState.deductionTotal).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </label>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                  <label
                    style={{
                      fontWeight: "bold",
                      marginLeft: "8px",
                      color: "#2F7DC4",
                    }}
                  >
                    {"(Receivable : "}
                    <span style={{ color: "#2F7DC4" }}>
                      {parseInt(deductionsState.dueTotal).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                    {``}
                  </label>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                  <label
                    style={{
                      fontWeight: "bold",
                      marginLeft: "8px",
                      color: "#2F7DC4",
                    }}
                  >
                    {"Received : "}
                    <span style={{ color: "#2F7DC4" }}>
                      {parseInt(deductionsState.paidTotal).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                    {``}
                  </label>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                  <label
                    style={{
                      fontWeight: "bold",
                      marginLeft: "8px",
                      color: "#2F7DC4",
                    }}
                  >
                    {"Early Waived : "}
                    <span style={{ color: "#2F7DC4" }}>
                      {parseInt(deductionsState.waivedTotal).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                    {``}
                  </label>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                  <label
                    style={{
                      fontWeight: "bold",
                      marginLeft: "8px",
                      color: "#2F7DC4",
                    }}
                  >
                    {"Outstanding : "}
                    <span style={{ color: "#2F7DC4" }}>
                      {parseInt(deductionsState.deductionTotal).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                    {`)`}
                  </label>
                </Grid>
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
                  rowHeight={40}
                  headerHeight={48}
                  rows={dataRows}
                  columns={columns}
                  pageSize={pageSize}
                  disableSelectionOnClick
                  autoHeight
                  // onCellEditStart={console.log("ttt")}
                  // onCellKeyDown={(event) => handleCellChangedEvent(event)}
                  onCellEditCommit={(event) => handleCellChangedEvent(event)}
                  getRowClassName={(params) =>
                    params.id % 2
                      ? `super-app-theme--even`
                      : `super-app-theme--odd`
                  }
                  isCellEditable={(param) =>
                    param.row.receiveable -
                      param.row.received -
                      param.row.earlyWaiver !==
                    0
                  }
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
          )}
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
                  <Typography
                    sx={{
                      mr: 2,
                      color: "#004A92",
                      fontWeight: 700,
                      fontFamily: "Roboto",
                    }}
                  >
                    {"Page Max Records : " + rowsPerPage}
                  </Typography>
                )}
                <Typography
                  padding="1px"
                  sx={{
                    color: "#004A92",
                    fontWeight: 700,
                    fontFamily: "Roboto",
                  }}
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
                      screen="waived"
                      setGridAlert={setGridAlert}
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
          <AccrualRemark
            name="Waived By"
            gridData={dataRows}
            refNum={referenceNumber}
            applicationNum={applicationNum}
            refDate={currentDate}
            type="waiver"
            reason={reason}
            remark={remark}
            setReason={setReason}
            setRemark={setRemark}
            historyData={historyData}
            updateDisable={updateDisable}
          ></AccrualRemark>
          <Alert
            sx={{
              display: gridAlert,
              position: "fixed",
              top: "90%",
              left: "40%",
              flexDirection: "row",
            }}
            onClose={() => {
              setGridAlert("none");
              // setUpdateDisable(false);
            }}
            severity="error"
          >
            Additional Waiver amount should not exceed Outstanding amount
          </Alert>
        </div>
      </div>
      <StlapFooter />
    </div>
  );
};
export default AdditionalWaiver;
