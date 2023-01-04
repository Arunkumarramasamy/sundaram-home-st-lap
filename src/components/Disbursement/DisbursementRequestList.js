import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  CancelScheduleSend,
  Edit,
  MoreVert,
  Preview,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import {
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
  Pagination,
  PaginationItem,
  TablePagination,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import StlapFooter from "../CustomComponents/StlapFooter";
import FilterCondition from "./FilterCondition";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import { display } from "@mui/system";
import NoDataFound from "../CustomComponents/NoDataFound";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DisbursementRequestListService } from "./DisbursementRequestListService";

export default function DisbursementRequestList(props) {

  const columns = [
    {
      field: "requestNumber",
      headerName: "Request Number",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
      hideable: false,
    },
    {
      field: "branchName",
      headerName: "Disbursement Branch",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
    {
      field: "applicationNumber",
      headerName: "Application Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 200,
      align: "center",
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "center",
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
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      type: "string",
      width: 60,
      align: "center",
      hideable: false,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return <LoadActionBtn record={params.row} setResponseData={setResponseData} setopenViewConfirmation={setopenViewConfirmation}/>;
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
    applicationNumber: "",
    customerName: "",
    coApplicantName: "",
    customerId: "",
    sanctionStatus: "",
    effectiveDate:
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    applicationDateFromValue:
      today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
    applicationDateToValue:
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    applicationDate:
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    customerType: "-1",
    rateOfInterest: "",
    loanAmount: "",
    sanctionAmount: "",

    disbursementDateFromValue:
      today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
    disbursementDateToValue:
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    disbursementStatus: "",
    referenceNumber: "",
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
    const [openViewConfirmation,setopenViewConfirmation] = React.useState(false);
    const [responseData,setResponseData] = React.useState({});
  
  const rowsPerPage = 10;
  const service = new DisbursementRequestListService();
  const navigate = useNavigate();


  const closeDialogHandler = () =>{
    setopenViewConfirmation(false);
    navigate("/stlap/home/disbursementView",{state:responseData});
  };

  const cancelClickHandler = () =>{
    setopenViewConfirmation(false);
  };
 

  useEffect(() => {
    let dataMap = {};
    async function getAllData() {
      const allLosData = await service.getAllData();
      allLosData.data.map((losCustomerRow) => {
        dataMap[losCustomerRow.applicationNumber] = losCustomerRow;
      });
    }
    async function getAllDisbursementData() {
      const allDisRequestList = await service.getAllDisbursementData();
      getDisbursementData(allDisRequestList, dataMap);
    }
    getAllData();
    getAllDisbursementData();
  }, [datarows]);

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
              : "#004A92",
          bgcolor:
            value === "Paid"
              ? "lightgreen"
              : value === "Cancelled"
              ? "lightsalmon"
              : value === "Modified"
              ? "yellow"
              : "lightskyblue",
          width: "90%",
        }}
      />
    );
  };

  const handlePageChange = (event, newPage) => {
    let offset = (newPage - 1) * rowsPerPage;
    setPage(newPage);
    setRows(datarows.slice(offset, offset + rowsPerPage));
  };

  const resetFilterData = (data) => {
    setRows(datarows.slice(0, rowsPerPage));
    setTotalPageCount(
      datarows.length % 10 !== 0
        ? Number(Number((datarows.length / 10).toFixed()) + 1)
        : Number(Number((datarows.length / 10).toFixed()))
    );
    setTotalRowsCount(datarows.length);
    setPage(1);
  };

  const filterData = (data) => {
    let filterrows = [];
    switch (data.tabIndex) {
      case "2":
        // Basic search tab
        if (data.branchName && data.branchName !== "") {
          filterrows = datarows.filter(
            (row) => row.branchName === data.branchName
          );
        }
        if (data.applicationNumber && data.applicationNumber !== "") {
          filterrows = filterrows.filter(
            (row) => row.applicationNumber === data.applicationNumber
          );
        }
        if (data.applicantName && data.applicantName !== "") {
          filterrows = filterrows.filter(
            (row) => row.customerName === data.applicantName
          );
        }
        if (data.referenceNumber && data.referenceNumber !== "") {
          filterrows = filterrows.filter(
            (row) => row.requestNumber === data.referenceNumber
          );
        }
        if (data.disbursementStatus && data.disbursementStatus !== "") {
          filterrows = filterrows.filter(
            (row) => row.status === data.disbursementStatus
          );
        }
        // few more conditions yet to be added based on fields decided to target need to add to dummy data.
        setRows(filterrows);
        setTotalPageCount(
          filterrows.length % 10 !== 0
            ? Number(Number((filterrows.length / 10).toFixed()) + 1)
            : Number(Number((filterrows.length / 10).toFixed()))
        );
        setTotalRowsCount(filterrows.length);
        setPage(1);
        break;
      default:
        break;
    }
  };

  const rowDoubleClickHandler = (event) => {
    props.onRowDoubleClick(event.row);
  };

  const gridLazyLoad = (newPage) => {
    if (newPage >= page) {
      setPage(newPage + 1);
      const existrowsLength = rows.length;
      setRows(datarows.slice(0, existrowsLength + rowsPerPage));
    }
  };

  const updateStateData = () => {
    const loadBranchNames = [
      ...Array.from(new Set(datarows.map((row) => row.branchName))).map(
        (branch) => {
          return {
            label: branch,
          };
        }
      ),
    ];
    setTotalBranchNames(loadBranchNames);
    filterConditionState.branchNames = loadBranchNames;
    filterConditionState.disbursementList = [...datarows];
    setFilterConditionState({ ...filterConditionState });
    setRows(datarows.slice(0, rowsPerPage));
    setTotalPageCount(
      datarows.length % 10 !== 0
        ? Number(Number((datarows.length / 10).toFixed()) + 1)
        : Number(Number((datarows.length / 10).toFixed()))
    );
    setTotalRowsCount(datarows.length);
  };

  const getDisbursementData = (response, dataMap) => {
    let counter = 1;
    let tempDataRows = [];
    response.data.map((disbursementRow) => {
      const dataMap1 = {
        id: counter++,
        requestNumber: dataMap[disbursementRow.applicationNumber].requestNumber,
        branchName: dataMap[disbursementRow.applicationNumber].branch,
        customerName: dataMap[disbursementRow.applicationNumber].customerName,
        applicationNumber: disbursementRow.applicationNumber,
        applicationDate:
          dataMap[disbursementRow.applicationNumber].applicationDate,
        approvedAmount:
          dataMap[disbursementRow.applicationNumber].sanctionAmount,
        status: disbursementRow.requestStatus,
        customerType: dataMap[disbursementRow.applicationNumber].customerType,
        modifiedUser: disbursementRow.lastModifiedBy,
        modifiedDate: disbursementRow.lastModifiedDate,
        action: disbursementRow.requestStatus,
        disbursementDate: disbursementRow.dateOfDisb,
        disbRequestId: disbursementRow.disbRequestId,
      };
      tempDataRows.push(dataMap1);
    });
    setdatarows(tempDataRows);
    updateStateData();
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
          <Typography>This Record is Being Edited by Other User.<br />Click OK to Navigate to View Screen.</Typography>
        </DialogTitle>

        <DialogActions>
          <Button  autoFocus onClick={closeDialogHandler}>
            OK
          </Button>
          <Button  onClick={cancelClickHandler}>
            Cancel
          </Button>

        </DialogActions>
      </Dialog>
      <FilterCondition
        initialState={filterConditionState}
        title="Disbursement Information"
        onSearchButtonClick={filterData}
        onClearButtonClick={resetFilterData}
        setAccordianOpen={setAccordianOpen}
        mode={"Search"}
        disDetailPage={false}
        initialOpen={true}
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
              {rows.map((row, index) => (
                <React.Fragment>
                  <Grid container direction="column" sx={{ flex: "1 auto" }}>
                    <Card>
                      <CardHeader
                        action={
                          <React.Fragment>
                            {<LoadActionBtn record={row} />}
                          </React.Fragment>
                        }
                        subheader={
                          "Application Number : " + row.applicationNumber
                        }
                        subheaderTypographyProps={{
                          color: "#004A92",
                          fontWeight: "700",
                        }}
                        sx={{
                          textAlign: "left",
                          padding: "16px 16px 0px 16px !important",
                        }}
                      />
                      <CardContent>
                        <Grid
                          container
                          item
                          direction="column"
                          alignItems="flex-start"
                          justifyContent="flex-start"
                        >
                          <Typography padding="1px">
                            {"Request Number : " + row.requestNumber}
                          </Typography>
                          <Typography padding="1px">
                            {"Disbursement Branch : " + row.branchName}
                          </Typography>
                          <Typography padding="1px">
                            {"Customer Name : " + row.customerName}
                          </Typography>
                          <Typography padding="1px">
                            {"Last Modified : " + row.modifiedUser}
                          </Typography>
                          <Typography padding="1px">
                            {"Last Modified Time : " + row.modifiedDate}
                          </Typography>
                        </Grid>
                        <Grid
                          container
                          item
                          direction="row"
                          alignItems="flex-end"
                          justifyContent="flex-end"
                        >
                          <Typography sx={{ width: "40%" }}>
                            {loadStatus(row.status)}
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
  const open = Boolean(anchorEl);
  const req_mod_options = ["View", "Modify", "Cancel"];
  const navigate = useNavigate();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const loadDetailPage = async (record, url, mode) => {
    const response = await service.getDisbursementData({
      disbRequestId: record.disbRequestId,
      screenMode: mode,
    });
    if(response.data.editLock && mode !== "VIEW"){
      props.setResponseData(response.data);
      props.setopenViewConfirmation(true);
    } else {
      navigate(url, { state: response.data });
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
    }
  };

  const ITEM_HEIGHT = 48;
  return (
    <React.Fragment>
      {record.status === "Paid" || record.status === "Cancelled" ? (
        <Tooltip title="View">
          <IconButton onClick={() => handleIconClick("View", record)}>
            <Preview sx={{ color: "#004A92", fontWeight: 700 }} />
          </IconButton>
        </Tooltip>
      ) : (
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
      )}
    </React.Fragment>
  );
};
