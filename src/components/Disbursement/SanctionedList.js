import * as React from "react";
import { Box, Chip, Typography } from "@mui/material";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import { CurrencyRupeeSharp } from "@mui/icons-material";

const SanctionedList = (props) => {
  const columns = [
    {
      field: "branchName",
      headerName: "Branch Name",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
    {
      field: "customerType",
      headerName: "Customer Type",
      headerAlign: "center",
      type: "string",
      width: 140,
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
      field: "applicationNumber",
      headerName: "Application Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 200,
      align: "center",
    },
    {
      field: "applicationDate",
      headerName: "Application Date",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
    },
    {
      field: "approvedAmount",
      headerName: "Approved Amount",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      renderCell: (params) => {
        return (
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <CurrencyRupeeSharp fontSize="small" />{" "}
            </Box>
            <Box>{params.value.toLocaleString("en-IN") + ".00"}</Box>
          </Typography>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
      renderCell: (params) => {
        return (
          <Chip
            label={params.value}
            component="div"
            sx={{ color: "white", bgcolor: "Green", width: "90%" }}
          />
        );
      },
    },
  ];

  const rows = [
    {
      id: "1",
      branchName: "Mylapore",
      customerType: "New",
      customerName: "User1",
      applicationNumber: "STLAP-20220001",
      applicationDate: "01/12/2022",
      approvedAmount: 500000,
      status: "Approved",
    },
    {
      id: "2",
      branchName: "Mylapore",
      customerType: "Old",
      customerName: "User2",
      applicationNumber: "STLAP-20220002",
      applicationDate: "02/12/2022",
      approvedAmount: 150000,
      status: "Approved",
    },
    {
      id: "3",
      branchName: "Royapuram",
      customerType: "Old",
      customerName: "User3",
      applicationNumber: "STLAP-20220003",
      applicationDate: "03/12/2022",
      approvedAmount: 1200000,
      status: "Approved",
    },
    {
      id: "4",
      branchName: "Mylapore",
      customerType: "New",
      customerName: "User4",
      applicationNumber: "STLAP-20220004",
      applicationDate: "04/12/2022",
      approvedAmount: 450000,
      status: "Approved",
    },
    {
      id: "5",
      branchName: "Thousand Lights",
      customerType: "New",
      customerName: "User5",
      applicationNumber: "STLAP-20220005",
      applicationDate: "05/12/2022",
      approvedAmount: 790000,
      status: "Approved",
    },
    {
      id: "6",
      branchName: "Thousand Lights",
      customerType: "Old",
      customerName: "User6",
      applicationNumber: "STLAP-20220006",
      applicationDate: "06/12/2022",
      approvedAmount: 680000,
      status: "Approved",
    },
    {
      id: "7",
      branchName: "Thousand Lights",
      customerType: "Old",
      customerName: "User7",
      applicationNumber: "STLAP-20220007",
      applicationDate: "07/12/2022",
      approvedAmount: 1460000,
      status: "Approved",
    },
    {
      id: "8",
      branchName: "Saidapet",
      customerType: "New",
      customerName: "User8",
      applicationNumber: "STLAP-20220008",
      applicationDate: "08/12/2022",
      approvedAmount: 980000,
      status: "Approved",
    },
    {
      id: "9",
      branchName: "Saidapet",
      customerType: "Old",
      customerName: "User9",
      applicationNumber: "STLAP-20220009",
      applicationDate: "09/12/2022",
      approvedAmount: 790000,
      status: "Approved",
    },
    {
      id: "10",
      branchName: "Madhavaram",
      customerType: "Old",
      customerName: "User10",
      applicationNumber: "STLAP-20220010",
      applicationDate: "10/12/2022",
      approvedAmount: 1300000,
      status: "Approved",
    },
    {
      id: "11",
      branchName: "Madhavaram",
      customerType: "New",
      customerName: "User11",
      applicationNumber: "STLAP-20220011",
      applicationDate: "11/12/2022",
      approvedAmount: 600000,
      status: "Approved",
    },
    {
      id: "12",
      branchName: "Madhavaram",
      customerType: "Old",
      customerName: "User12",
      applicationNumber: "STLAP-20220012",
      applicationDate: "12/12/2022",
      approvedAmount: 200000,
      status: "Approved",
    },
    {
      id: "13",
      branchName: "Minjur",
      customerType: "Old",
      customerName: "User13",
      applicationNumber: "STLAP-20220013",
      applicationDate: "13/12/2022",
      approvedAmount: 850000,
      status: "Approved",
    },
  ];

  const rowDoubleClickHandler = (event) => {
    props.onRowDoubleClick(event.row);
  };

  return (
    <>
      <CustomDataGrid
        noDataMessage="No Sanctioned Data."
        noDataOnFilterMessage="No Sanctioned Data on Applied Filter."
        rows={props.emptyList ? rows : []}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5, 10, 15, 20, 25]}
        rowDoubleClickHandler={rowDoubleClickHandler}
      />
    </>
  );
};
export default SanctionedList;
