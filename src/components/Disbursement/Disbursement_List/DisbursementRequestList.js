import {
  ArrowBack,
  ArrowForward,
  CancelScheduleSend,
  Edit,
  MoreVert,
  Preview,
  VerifiedOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  PaginationItem,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import dayjs from "dayjs";
import * as React from "react";
import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomDataGrid from "../../CustomComponents/CustomDataGrid";
import GetBranchDetails from "../../CustomComponents/GetBranchDetails";
import NoDataFound from "../../CustomComponents/NoDataFound";
import StlapFooter from "../../CustomComponents/StlapFooter";
import { DisbursementRequestListService } from "./DisbursementRequestListService";
import FilterCondition from "./FilterCondition";

export default function DisbursementRequestList(props) {
  const columns = [
    {
      field: "requestNumber",
      headerName: "Request Number",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "left",
      hideable: false,
    },
    {
      field: "branch",
      headerName: "Disbursement Branch",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "left",
    },
    {
      field: "applicationNum",
      headerName: "Application Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 200,
      align: "left",
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "left",
    },
    {
      field: "disbursementStatus",
      headerName: "Status",
      headerAlign: "center",
      type: "string",
      width: 158,
      align: "left",
      renderCell: (params) => {
        return loadStatus(params.value);
      },
    },
    {
      field: "disbursementDate",
      headerName: "Disbursement Date",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "right",
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      type: "string",
      width: 100,
      align: "center",
      hideable: false,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <LoadActionBtn
            record={params.row}
            setResponseData={setResponseData}
            setopenViewConfirmation={setopenViewConfirmation}
            listScreenMode={listScreenMode}
          />
        );
      },
    },
  ];

  var today = new Date();

  const initialState = {
    tabIndex: "2",
    disbursementList: [],
    sanctionList: [],
    branchNames: [],
    branch: "",
    applicationNum: "",
    customerName: "",
    coApplicantName: "",
    customerId: "",
    sanctionStatus: "",
    effectiveDate: dayjs(
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
    ).format("DD/MM/YYYY"),
    applicationDateFromValue: dayjs(
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
    ).format("DD/MM/YYYY"),
    applicationDateToValue: dayjs(
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
    ).format("DD/MM/YYYY"),
    applicationDate: null,
    customerType: "-1",
    rateOfInterest: "",
    loanAmt: "",
    sanctionAmt: "",

    disbursementDateFromValue: null,
    disbursementDateToValue: dayjs(
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
    ).format("DD/MM/YYYY"),
    disbursementStatus: "",
    requestNumber: "",
    screenModeTitle: "",
  };

  const [datarows, setdatarows] = React.useState([]);
  const [accordianOpen, setAccordianOpen] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [rows, setRows] = React.useState([]);
  const [totalPageCount, setTotalPageCount] = React.useState(0);
  const [totalRowsCount, setTotalRowsCount] = React.useState(0);
  const [branchNames, setTotalBranchNames] = React.useState([]);
  const [filterConditionState, setFilterConditionState] =
    React.useState(initialState);
  const [openViewConfirmation, setopenViewConfirmation] = React.useState(false);
  const [responseData, setResponseData] = React.useState({});
  const [listScreenMode, setListScreenMode] = React.useState(props.mode);

  const rowsPerPage = 10;
  const service = new DisbursementRequestListService();
  const navigate = useNavigate();
  const location = useLocation();

  const closeDialogHandler = () => {
    setopenViewConfirmation(false);
    const dataValue = { ...responseData };
    dataValue.screenMode = props.screenMode;
    navigate("/stlap/home/disbursementView", {
      state: dataValue,
    });
  };

  const cancelClickHandler = () => {
    setopenViewConfirmation(false);
  };

  const setRowsData = (totalTempRows) => {
    filterConditionState.disbursementList = [...totalTempRows];
    setFilterConditionState({ ...filterConditionState });
    if (JSON.stringify(totalTempRows) !== JSON.stringify(datarows)) {
      updateStateData(totalTempRows);
    }
  };

  useEffect(() => {
    const loadBranchNames = GetBranchDetails();
    setTotalBranchNames(loadBranchNames);
    async function getAllDisbursementData() {
      filterConditionState.branchNames = loadBranchNames;
      let filterCondition = {};
      createFilterCondition(filterCondition, filterConditionState);
      const allDisRequestList = await service.getAllDisbursementData(
        filterCondition
      );
      const totalTempRows = getDisbursementData(allDisRequestList.data.content);
      setRowsData(totalTempRows);
    }
    getAllDisbursementData();
  }, [listScreenMode]);

  useLayoutEffect(() => {
    if (!(location.state === null)) {
      filterConditionState.branch = location.state.branch;
      updateFilterAutoFill(location.state, true);
      setFilterConditionState({ ...filterConditionState });
      // filter the data also, isbackfromdetailpage is true.
      filterData(location.state, true);
      // once back filter retain make location state back to null;
      location.state = null;
    }
  }, [datarows, listScreenMode]);

  const loadStatus = (value) => {
    return (
      <Chip
        label={value}
        component="div"
        sx={{
          color:
            value === "Paid"
              ? "darkgreen"
              : value === "Cancelled"
              ? "darkred"
              : value === "Modified"
              ? "blueviolet"
              : value === "Approved"
              ? "white"
              : "#004A92",
          bgcolor:
            value === "Paid"
              ? "lightgreen"
              : value === "Cancelled"
              ? "lightsalmon"
              : value === "Modified"
              ? "yellow"
              : value === "Approved"
              ? "darkgreen"
              : "lightskyblue",
          width: "90%",
        }}
      />
    );
  };

  const handlePageChange = (event, newPage) => {
    let offset = (newPage - 1) * rowsPerPage;
    setPage(newPage);
    setRows([...datarows].slice(offset, offset + rowsPerPage));
  };

  const createFilterCondition = (filterCondition, filterConditionStateData) => {
    filterCondition.applicationNum = filterConditionStateData.applicationNum;
    filterCondition.branch = filterConditionStateData.branch;
    filterCondition.applicantName = filterConditionStateData.customerName;
    filterCondition.requestNumber = filterConditionStateData.requestNumber;
    filterCondition.disbursementStatus =
      filterConditionStateData.disbursementStatus;
    filterCondition.disbursementDate =
      filterConditionStateData.disbursementDateFromValue;
    filterCondition.offset = 0;
    filterCondition.pageSize = 100;
  };

  const resetFilterData = async (isBackfromDetailPage) => {
    filterConditionState.branch = "";
    updateFilterAutoFill(initialState, isBackfromDetailPage);
    filterConditionState.disbursementDateFromValue = null;
    setFilterConditionState({ ...filterConditionState });
    let filterCondition = {};
    createFilterCondition(filterCondition, initialState);
    const allDisRequestList = await service.getAllDisbursementData(
      filterCondition
    );
    const totalTempRows = getDisbursementData(allDisRequestList.data.content);
    setRowsData(totalTempRows);
    setPage(1);
  };

  const filterData = (data, isBackfromDetailPage) => {
    let filterrows = [];
    if (isBackfromDetailPage) {
      // reset the autofill & retain back later.
      updateFilterAutoFill(initialState, isBackfromDetailPage);
    }

    // Basic search tab
    if (data.branch && data.branch !== "") {
      filterrows = [...datarows].filter((row) => row.branch === data.branch);
      filterConditionState.branch = data.branch;
    } else {
      filterConditionState.branch = "";
    }
    if (data.applicationNum && data.applicationNum !== "") {
      filterrows = filterrows.filter(
        (row) => row.applicationNum === data.applicationNum
      );
      filterConditionState.applicationNum = data.applicationNum;
    } else {
      filterConditionState.applicationNum = "";
    }
    const applicantName = isBackfromDetailPage
      ? data.applicantName
      : data.customerName;
    if (applicantName && applicantName !== "") {
      filterrows = filterrows.filter(
        (row) => row.customerName === applicantName
      );
      filterConditionState.customerName = applicantName;
    } else {
      filterConditionState.customerName = "";
    }
    if (data.requestNumber && data.requestNumber !== "") {
      filterrows = filterrows.filter(
        (row) => row.requestNumber === data.requestNumber
      );
      // since this filter is for sancation list, so 1  requestNumber number has only one record.
      if (filterrows.length === 1) {
        updateFilterAutoFill(filterrows[0], isBackfromDetailPage);
      }
    } else {
      updateFilterAutoFill(initialState, isBackfromDetailPage);
    }
    if (data.disbursementStatus && data.disbursementStatus !== "") {
      filterrows = filterrows.filter(
        (row) => row.disbursementStatus === data.disbursementStatus
      );
      filterConditionState.disbursementStatus = data.disbursementStatus;
    } else {
      filterConditionState.disbursementStatus = "";
    }

    let disbursementDate = !isBackfromDetailPage
      ? data.disbursementDateFromValue
      : data.disbursementDate;
    disbursementDate = disbursementDate
      ? dayjs(disbursementDate).format("DD/MM/YYYY")
      : disbursementDate;
    if (disbursementDate && disbursementDate !== "") {
      filterrows = filterrows.filter(
        (row) => row.disbursementDate === disbursementDate
      );
      filterConditionState.disbursementDateFromValue = disbursementDate;
    } else {
      filterConditionState.disbursementDateFromValue = null;
    }

    // few more conditions yet to be added based on fields decided to tarequestNumrget need to add to dummy data.
    setRows(filterrows);
    setFilterConditionState({ ...filterConditionState });
    setTotalPageCount(
      filterrows.length % 10 !== 0
        ? Number(Number((filterrows.length / 10).toFixed()) + 1)
        : Number(Number((filterrows.length / 10).toFixed()))
    );
    setTotalRowsCount(filterrows.length);
    setPage(1);
  };

  const updateFilterAutoFill = (data, isBackfromDetailPage) => {
    // this method updates or removes other fields auto fill data to retain back
    filterConditionState.applicationNum = data.applicationNum;
    filterConditionState.customerName = data.customerName;
    filterConditionState.requestNumber = data.requestNumber;
    filterConditionState.disbursementStatus = data.disbursementStatus;
    const disbursementDate = dayjs(
      !isBackfromDetailPage
        ? data.disbursementDateFromValue
        : data.disbursementDate
    ).format("DD/MM/YYYY");
    filterConditionState.disbursementDateFromValue = disbursementDate;
  };

  const rowDoubleClickHandler = (event) => {
    props.onRowDoubleClick(event.row);
  };

  const gridLazyLoad = (newPage) => {
    if (newPage >= page) {
      setPage(newPage + 1);
      const existrowsLength = rows.length;
      setRows([...datarows].slice(0, existrowsLength + rowsPerPage));
    }
  };

  const updateStateData = (tempDataRows) => {
    setRows([...tempDataRows].slice(0, rowsPerPage));
    setTotalPageCount(
      tempDataRows.length % 10 !== 0
        ? Number(Number((tempDataRows.length / 10).toFixed()) + 1)
        : Number(Number((tempDataRows.length / 10).toFixed()))
    );
    setTotalRowsCount(tempDataRows.length);
  };

  const getDisbursementData = (disbreqlist) => {
    let counter = 1;
    let tempDataRows = [];
    disbreqlist.map((disbursementRow) => {
      const dataMap1 = {
        id: counter++,
        requestNumber: String(disbursementRow.transactionKey),
        branch: disbursementRow.branch,
        customerName: disbursementRow.applicantName,
        applicationNum: disbursementRow.applicationNum,
        applicationDate: disbursementRow.applicationDate,
        approvedAmount: disbursementRow.sanctionAmt,
        disbursementStatus: disbursementRow.requestStatus,
        customerType: disbursementRow.customerType,
        modifiedUser: disbursementRow.lastModifiedBy,
        modifiedDate: disbursementRow.lastModifiedDate,
        action: disbursementRow.requestStatus,
        disbursementDate: dayjs(new Date(disbursementRow.dateOfDisb)).format(
          "DD/MM/YYYY"
        ),
        disbHeaderKey: disbursementRow.disbHeaderKey,
      };
      tempDataRows.push(dataMap1);
    });
    const totalDataRows =
      listScreenMode === "REQUESTLIST"
        ? [...tempDataRows].filter(
            (row) => row.disbursementStatus !== "Approved"
          )
        : [...tempDataRows].filter(
            (row) => row.disbursementStatus !== "Cancelled"
          );
    setdatarows(totalDataRows);
    return totalDataRows;
  };

  const loadDataonBranchChange = async (branchValue) => {
    if (branchValue) {
      // before response reset the rows also to empty.
      setdatarows([]);
      setRows([]);
      const disreqlist = await service.getDisbursementDataByBranch({
        branch: branchValue,
      });
      const totalTempRows = getDisbursementData(disreqlist.data);
      setRowsData(totalTempRows);
    } else {
      // when it was null was like reset filter, so retain the last set of data rows with all DB hit.
      resetFilterData(false);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={openViewConfirmation}
        onClose={closeDialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography>
            This Record is Being Edited by Other User.
            <br />
            Click OK to Navigate to View Screen.
          </Typography>
        </DialogTitle>

        <DialogActions>
          <Button autoFocus onClick={closeDialogHandler}>
            OK
          </Button>
          <Button onClick={cancelClickHandler}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <FilterCondition
        initialState={filterConditionState}
        title="Disbursement Information"
        onSearchButtonClick={(data) => filterData(data, false)}
        onClearButtonClick={() => resetFilterData(false)}
        setAccordianOpen={setAccordianOpen}
        mode={"Search"}
        disDetailPage={false}
        initialOpen={true}
        onBranchChange={loadDataonBranchChange}
      />
      {useMediaQuery("(min-width:1200px)") && (
        <CustomDataGrid
          noDataMessage="No Disbursement Data."
          noDataOnFilterMessage="No Disbursement Data on Applied Filter."
          rows={rows}
          columns={columns}
          // loading={rows.length === 0}
          pageSize={5}
          pageSizeOptions={[5]}
          rowDoubleClickHandler={rowDoubleClickHandler}
          gridLazyLoad={gridLazyLoad}
        />
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
              sx={{ color: "#004A92", fontWeight: 700, fontFamily: "Roboto" }}
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
              {rows.map((row, index) => (
                <React.Fragment>
                  <Grid container direction="column" sx={{ flex: "1 auto" }}>
                    <Card>
                      <CardHeader
                        action={
                          <React.Fragment>
                            {
                              <LoadActionBtn
                                record={row}
                                setResponseData={setResponseData}
                                setopenViewConfirmation={
                                  setopenViewConfirmation
                                }
                                listScreenMode={listScreenMode}
                              />
                            }
                          </React.Fragment>
                        }
                        subheader={"Application Number : " + row.applicationNum}
                        subheaderTypographyProps={{
                          color: "#004A92",
                          fontWeight: "700",
                          fontFamily: "Roboto",
                        }}
                        sx={{
                          textAlign: "left",
                          padding: "16px 16px 0px 16px !important",
                        }}
                      />
                      <CardContent sx={{ fontFamily: "Roboto" }}>
                        <Grid
                          container
                          item
                          direction="column"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                          sx={{ fontFamily: "Roboto" }}
                        >
                          <Grid
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                          >
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">
                                {"Request Number"}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${row.requestNumber}`}
                            </Grid>
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">
                                {"Disbursement Branch"}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${row.branch}`}
                            </Grid>
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">
                                {"Customer Name"}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${row.customerName}`}
                            </Grid>
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">
                                {"Disbursement Date"}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${row.disbursementDate}`}
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          direction="row"
                          alignItems="flex-end"
                          justifyContent="flex-end"
                        >
                          <Typography sx={{ width: "40%" }}>
                            {loadStatus(row.disbursementStatus)}
                          </Typography>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Divider />
                </React.Fragment>
              ))}
              {rows.length === 0 && (
                <NoDataFound
                  message={"No Disbursement Record Found."}
                  imageStyle={{
                    marginTop:
                      accordianOpen && window.innerHeight < 1000
                        ? "20px"
                        : "20%",
                  }}
                />
              )}
            </Box>
          </Grid>
        </React.Fragment>
      )}
      <Box>
        <StlapFooter />
      </Box>
    </React.Fragment>
  );
}

const LoadActionBtn = (props) => {
  const service = new DisbursementRequestListService();
  const [record, setRecord] = React.useState(props.record);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [listScreenMode, setListScreenMode] = React.useState(
    props.listScreenMode
  );
  const open = Boolean(anchorEl);
  const req_mod_options = ["View", "Modify", "Cancel"];
  const navigate = useNavigate();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useLayoutEffect(() => {
    console.log("layout effect");
    console.log(props.record);
  }, [props.record]);

  useEffect(() => {
    console.log("effect");
    console.log(props.record);
  }, [props.record]);

  const loadDetailPage = async (record, url, mode) => {
    const response = await service.getDisbursementData({
      disbHeaderKey: record.disbHeaderKey,
      screenMode: mode,
    });
    if (response.data.editLock && mode !== "VIEW") {
      props.setResponseData(response.data);
      props.setopenViewConfirmation(true);
    } else {
      const dataValue = { ...response.data };
      dataValue.screenMode = props.screenMode;
      navigate(url, {
        state: dataValue,
      });
    }
  };

  const handleIconClick = (value, record) => {
    handleClose();
    switch (value) {
      case "View":
        loadDetailPage(record, "/stlap/home/disbursementView", "VIEW");
        break;
      case "Modify":
        loadDetailPage(record, "/stlap/home/disbursementModify", "MODIFY");
        break;
      case "Cancel":
        loadDetailPage(record, "/stlap/home/disbursementCancel", "CANCEL");
        break;
      case "Approve":
        loadDetailPage(record, "/stlap/home/disbursementApprove", "APPROVE");
    }
  };

  const ITEM_HEIGHT = 48;
  return (
    <React.Fragment>
      {record.disbursementStatus === "Paid" ||
      record.disbursementStatus === "Cancelled" ||
      record.disbursementStatus === "Approved" ? (
        <Tooltip title="View">
          <IconButton onClick={() => handleIconClick("View", record)}>
            <Preview sx={{ color: "#004A92", fontWeight: 700 }} />
          </IconButton>
        </Tooltip>
      ) : (
        <React.Fragment>
          {listScreenMode === "REQUESTLIST" ? (
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
                  <MoreVert sx={{ color: "#004A92", fontWeight: 700 }} />
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
                {req_mod_options.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={() => handleIconClick(option, record)}
                  >
                    <IconButton size="small">
                      {(() => {
                        switch (index) {
                          case 0:
                            return (
                              <Preview
                                fontSize="small"
                                sx={{ color: "#004A92", fontWeight: 700 }}
                              />
                            );
                          case 1:
                            return (
                              <Edit
                                fontSize="small"
                                sx={{ color: "#004A92", fontWeight: 700 }}
                              />
                            );
                          case 2:
                            return (
                              <CancelScheduleSend
                                fontSize="small"
                                sx={{ color: "#004A92", fontWeight: 700 }}
                              />
                            );
                        }
                      })()}
                    </IconButton>
                    <Typography
                      color="#004A92"
                      variant="inherit"
                      component="div"
                      fontSize="14px"
                      fontWeight="inherit"
                    >
                      {option}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ) : (
            <Tooltip title="Approve">
              <IconButton onClick={() => handleIconClick("Approve", record)}>
                <VerifiedOutlined sx={{ color: "#004A92", fontWeight: 700 }} />
              </IconButton>
            </Tooltip>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
