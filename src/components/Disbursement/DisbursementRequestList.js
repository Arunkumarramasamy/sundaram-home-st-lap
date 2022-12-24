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
  Card,
  CardContent,
  CardHeader,
  Chip,
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

export default function DisbursementRequestList(props) {
  const datarows = [
    {
      id: "1",
      requestNumber: "DR-DEC2022-00001",
      branchName: "Mylapore",
      customerName: "User1",
      applicationNumber: "STLAP-20220001",
      applicationDate: "01/12/2022",
      approvedAmount: "500000",
      status: "Cancelled",
      customerType: "New",
      modifiedUser: "CPC_User_10",
      modifiedDate: "Dec 04 2022 16:10:35",
      action: "Cancelled",
    },
    {
      id: "14",
      requestNumber: "DR-DEC2022-00011",
      branchName: "Mylapore",
      customerName: "User1",
      applicationNumber: "STLAP-20220001",
      applicationDate: "01/12/2022",
      approvedAmount: "500000",
      status: "Requested",
      customerType: "New",
      modifiedUser: "CPC_User_10",
      modifiedDate: "Dec 04 2022 16:10:35",
      action: "Requested",
    },
    {
      id: "2",
      requestNumber: "DR-DEC2022-00401",
      branchName: "Mylapore",
      customerName: "User2",
      applicationNumber: "STLAP-20220002",
      applicationDate: "01/12/2022",
      approvedAmount: "500000",
      status: "Paid",
      action: "Paid",
      customerType: "New",
      modifiedUser: "CPC_User_40",
      modifiedDate: "Dec 04 2022 14:10:22",
    },
    {
      id: "3",
      requestNumber: "DR-DEC2022-01001",
      branchName: "Royapuram",
      customerType: "Old",
      customerName: "User3",
      applicationNumber: "STLAP-20220003",
      applicationDate: "03/12/2022",
      approvedAmount: "1200000",
      status: "Requested",
      action: "Requested",
      modifiedUser: "CPC_User_10",
      modifiedDate: "Dec 04 2022 16:10:22",
    },
    {
      id: "4",
      requestNumber: "DR-DEC2022-00561",
      branchName: "Mylapore",
      customerType: "New",
      customerName: "User4",
      applicationNumber: "STLAP-20220004",
      applicationDate: "04/12/2022",
      approvedAmount: "450000",
      status: "Modified",
      action: "Modified",
      modifiedUser: "CPC_User_20",
      modifiedDate: "Dec 06 2022 10:10:58",
    },
    {
      id: "5",
      requestNumber: "DR-DEC2022-00901",
      branchName: "Thousand Lights",
      customerType: "New",
      customerName: "User5",
      applicationNumber: "STLAP-20220005",
      applicationDate: "05/12/2022",
      approvedAmount: "790000",
      status: "Cancelled",
      action: "Cancelled",
      modifiedUser: "CPC_User_09",
      modifiedDate: "Dec 09 2022 12:10:48",
    },
    {
      id: "6",
      requestNumber: "DR-DEC2022-00101",
      branchName: "Thousand Lights",
      customerType: "Old",
      customerName: "User6",
      applicationNumber: "STLAP-20220006",
      applicationDate: "06/12/2022",
      approvedAmount: "680000",
      status: "Requested",
      action: "Requested",
      modifiedUser: "CPC_User_16",
      modifiedDate: "Dec 10 2022 10:10:29",
    },
    {
      id: "7",
      requestNumber: "DR-DEC2022-00451",
      branchName: "Thousand Lights",
      customerType: "Old",
      customerName: "User7",
      applicationNumber: "STLAP-20220007",
      applicationDate: "07/12/2022",
      approvedAmount: "1460000",
      status: "Modified",
      action: "Modified",
      modifiedUser: "CPC_User_19",
      modifiedDate: "Dec 04 2022 16:10:09",
    },
    {
      id: "8",
      requestNumber: "DR-DEC2022-001261",
      branchName: "Saidapet",
      customerType: "New",
      customerName: "User8",
      applicationNumber: "STLAP-20220008",
      applicationDate: "08/12/2022",
      approvedAmount: "980000",
      status: "Requested",
      action: "Requested",
      modifiedUser: "CPC_User_23",
      modifiedDate: "Dec 09 2022 15:10:20",
    },
    {
      id: "9",
      requestNumber: "DR-DEC2022-001345",
      branchName: "Saidapet",
      customerType: "Old",
      customerName: "User9",
      applicationNumber: "STLAP-20220009",
      applicationDate: "09/12/2022",
      approvedAmount: "790000",
      status: "Cancelled",
      action: "Cancelled",
      modifiedUser: "CPC_User_10",
      modifiedDate: "Dec 12 2022 17:10:19",
    },
    {
      id: "10",
      requestNumber: "DR-DEC2022-001659",
      branchName: "Madhavaram",
      customerType: "Old",
      customerName: "User10",
      applicationNumber: "STLAP-20220010",
      applicationDate: "10/12/2022",
      approvedAmount: "1300000",
      status: "Paid",
      action: "Paid",
      modifiedUser: "CPC_User_20",
      modifiedDate: "Dec 14 2022 16:10:23",
    },
    {
      id: "11",
      requestNumber: "DR-DEC2022-000931",
      branchName: "Madhavaram",
      customerType: "New",
      customerName: "User11",
      applicationNumber: "STLAP-20220011",
      applicationDate: "11/12/2022",
      approvedAmount: "600000",
      status: "Requested",
      action: "Requested",
      modifiedUser: "CPC_User_30",
      modifiedDate: "Dec 14 2022 12:10:29",
    },
    {
      id: "12",
      requestNumber: "DR-DEC2022-000430",
      branchName: "Madhavaram",
      customerType: "Old",
      customerName: "User12",
      applicationNumber: "STLAP-20220012",
      applicationDate: "12/12/2022",
      approvedAmount: "200000",
      status: "Modified",
      action: "Modified",
      modifiedUser: "CPC_User_09",
      modifiedDate: "Dec 15 2022 16:10:45",
    },
    {
      id: "13",
      requestNumber: "DR-DEC2022-000129",
      branchName: "Minjur",
      customerType: "Old",
      customerName: "User13",
      applicationNumber: "STLAP-20220013",
      applicationDate: "13/12/2022",
      approvedAmount: "850000",
      status: "Cancelled",
      action: "Cancelled",
      modifiedUser: "CPC_User_04",
      modifiedDate: "Dec 06 2022 11:10:25",
    },
  ];

  const loadStatus = (value) => {
    return (
      <Chip
        label={value}
        component="div"
        sx={{
          color: "white",
          bgcolor:
            value === "Paid"
              ? "darkgreen"
              : value === "Cancelled"
              ? "red"
              : value === "Modified"
              ? "blueviolet"
              : "blue",
          width: "90%",
        }}
      />
    );
  };

  const loadActionBtn = (value) => {
    return (
      <React.Fragment>
        {value === "Paid" || value === "Cancelled" ? (
          <Tooltip title="View">
            <IconButton>
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
                  onClick={handleClose}
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
  const columns = [
    {
      field: "action",
      headerName: "",
      headerAlign: "center",
      type: "string",
      width: 50,
      align: "center",
      renderCell: (params) => {
        return loadActionBtn(params.value);
      },
    },
    {
      field: "requestNumber",
      headerName: "Request Number",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
    {
      field: "branchName",
      headerName: "Disbursement Branch",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "center",
    },
    {
      field: "applicationNumber",
      headerName: "Application Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 150,
      align: "center",
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      headerAlign: "center",
      type: "string",
      width: 150,
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
      field: "modifiedUser",
      headerName: "Last Modified User",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
    {
      field: "modifiedDate",
      headerName: "Last Modified Time",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
  ];

  var today = new Date();

  const initialState = {
    tabIndex: "2",
    disbursementList: [],
    branchNames: [],
    applicationNumber: "",
    applicantName: "",
    customerType: "-1",
    roi: "",
    loanAmount: "",
    sanctionedAmount: "",
    applicationDateFromValue:
      today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
    applicationDateToValue:
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    branchName: "",
    applicationDate:
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    disbursementDateFromValue:
      today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
    disbursementDateToValue:
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    disbursementStatus: "",
    referenceNumber: "",
  };

  const [accordianOpen, setAccordianOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const req_mod_options = ["View", "Modify", "Cancel"];
  const [page, setPage] = React.useState(1);
  const [rows, setRows] = React.useState([]);
  const [totalPageCount, setTotalPageCount] = React.useState(0);
  const [totalRowsCount, setTotalRowsCount] = React.useState(0);
  const [branchNames, setTotalBranchNames] = React.useState([]);
  const [filterConditionState, setFilterConditionState] =
    React.useState(initialState);
  const rowsPerPage = 10;

  const ITEM_HEIGHT = 48;

  useEffect(() => {
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
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
    console.log(data);
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

  return (
    <React.Fragment>
      <FilterCondition
        initialState={filterConditionState}
        title="Disbursement Information"
        onSearchButtonClick={filterData}
        onClearButtonClick={resetFilterData}
        setAccordianOpen={setAccordianOpen}
        mode={"Search"}
        disDetailPage={false}
      />
      {useMediaQuery("(min-width:1200px)") && (
        <CustomDataGrid
          noDataMessage="No Disbursement Data."
          noDataOnFilterMessage="No Disbursement Data on Applied Filter."
          rows={rows}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5, 10, 15, 20, 25]}
          rowDoubleClickHandler={rowDoubleClickHandler}
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
                        action={loadActionBtn(row.status)}
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
