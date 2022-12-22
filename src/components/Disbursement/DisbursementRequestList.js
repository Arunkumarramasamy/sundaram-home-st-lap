import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { visuallyHidden } from "@mui/utils";
import {
  CancelScheduleSend,
  Edit,
  MoreVert,
  Preview,
} from "@mui/icons-material";
import { Chip, Tooltip } from "@mui/material";
import AdditionalAccrual from "../Accrual/AdditionalAccrual";
import NoDataFound from "../CustomComponents/NoDataFound";
import StlapFooter from "../CustomComponents/StlapFooter";
import FilterCondition from "./FilterCondition";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";

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
  const columns = [
    {
      field: "action",
      headerName: "",
      headerAlign: "center",
      type: "string",
      width: 50,
      align: "center",
      renderCell: (params) => {
        return (
          <React.Fragment>
            {params.value === "Paid" || params.value === "Cancelled" ? (
              <Tooltip title="View">
                <IconButton>
                  <Preview />
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
                  {req_mod_options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={option === "Pyxis"}
                      onClick={handleClose}
                    >
                      {(() => {
                        switch (index) {
                          case 0:
                            return (
                              <IconButton size="small">
                                <Preview fontSize="small" />
                              </IconButton>
                            );
                          case 1:
                            return (
                              <IconButton size="small">
                                <Edit fontSize="small" color="inherit" />
                              </IconButton>
                            );
                          case 2:
                            return (
                              <IconButton size="small">
                                <CancelScheduleSend
                                  fontSize="small"
                                  color="inherit"
                                />
                              </IconButton>
                            );
                        }
                      })()}
                      <Typography
                        color="inherit"
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
        return (
          <Chip
            label={params.value}
            component="div"
            sx={{
              color: "white",
              bgcolor:
                params.value === "Paid"
                  ? "darkgreen"
                  : params.value === "Cancelled"
                  ? "red"
                  : params.value === "Modified"
                  ? "blueviolet"
                  : "blue",
               width:"90%"
            }}
          />
        );
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const req_mod_options = ["View", "Modify", "Cancel"];
  const [rows, setRows] = React.useState(datarows);

  const ITEM_HEIGHT = 48;

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const resetFilterData = (data) => {
    setRows(datarows);
  };

  var today = new Date();

  const initialState = {
    tabIndex: "1",
    applicationNumber: "",
    applicantName: "",
    customerType: " ",
    roi: "",
    loanAmount: "",
    sanctionedAmount: "",
    applicationDateFromValue:
      today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
    applicationDateToValue:
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
    branchName: "",
    applicationDate: "",
  };

  const filterData = (data) => {
    console.log(data);
    let filterrows = [];
    switch (data.tabIndex) {
      case "1":
        // Basic search tab
        if (data.branchName && data.branchName !== "") {
          filterrows = datarows.filter(
            (row) => row.branchName == data.branchName
          );
        }
        if (data.applicationNumber && data.applicationNumber !== "") {
          filterrows = filterrows.filter(
            (row) => row.applicationNumber == data.applicationNumber
          );
        }
        setRows(filterrows);
        break;
      case "2":
        // Basic search tab
        if (data.branchName && data.branchName !== "") {
          filterrows = datarows.filter(
            (row) => row.branchName == data.branchName
          );
        }
        if (data.applicationNumber && data.applicationNumber !== "") {
          filterrows = filterrows.filter(
            (row) => row.applicationNumber == data.applicationNumber
          );
        }
        // few more conditions yet to be added based on fields decided to target need to add to dummy data.
        setRows(filterrows);
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
        initialState={initialState}
        title="Disbursement Information"
        onSearchButtonClick={filterData}
        onClearButtonClick={resetFilterData}
        mode={"Search"}
      />
      <CustomDataGrid
        noDataMessage="No Disbursement Data."
        noDataOnFilterMessage="No Disbursement Data on Applied Filter."
        rows={rows}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5, 10, 15, 20, 25]}
        rowDoubleClickHandler={rowDoubleClickHandler}
      />
      <Box>
        <StlapFooter />
      </Box>
    </React.Fragment>
  );
}
