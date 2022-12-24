import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import {
  ArrowBack,
  ArrowForward,
  CurrencyRupeeSharp,
  Shortcut,
} from "@mui/icons-material";
import NoDataFound from "../CustomComponents/NoDataFound";
import { useEffect } from "react";

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

  const datarows = [
    {
      id: "1",
      branchName: "Mylapore",
      customerType: "New",
      customerName: "User1",
      applicationNumber: "STLAP-20220001",
      applicationDate: "01/12/2022",
      approvedAmount: 500000,
      status: "Cancelled",
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

  const [accordianOpen, setAccordianOpen] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [rows, setRows] = React.useState([]);
  const [totalPageCount, setTotalPageCount] = React.useState(0);
  const [totalRowsCount, setTotalRowsCount] = React.useState(0);
  const rowsPerPage = 10;

  useEffect(() => {
    setRows(datarows.slice(0, rowsPerPage));
    setTotalPageCount(
      datarows.length % 10 !== 0
        ? Number(Number((datarows.length / 10).toFixed()) + 1)
        : Number(Number((datarows.length / 10).toFixed()))
    );
    setTotalRowsCount(datarows.length);
  }, []);

  const handlePageChange = (event, newPage) => {
    let offset = (newPage - 1) * rowsPerPage;
    setPage(newPage);
    setRows(datarows.slice(offset, offset + rowsPerPage));
  };

  const loadStatus = (value) => {
    return (
      <Chip
        label={value}
        component="div"
        sx={{
          color: "white",
          bgcolor:
            value === "Approved"
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

  return (
    <>
      {useMediaQuery("(min-width:1200px)") && (
        <CustomDataGrid
          noDataMessage="No Sanctioned Data."
          noDataOnFilterMessage="No Sanctioned Data on Applied Filter."
          rows={props.emptyList ? rows : []}
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
                        action={
                          <IconButton onClick={rowDoubleClickHandler}>
                            <Shortcut
                              sx={{ color: "#004A92", fontWeight: 700 }}
                            />
                          </IconButton>
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
                            {"Customer Name : " + row.customerName}
                          </Typography>
                          <Typography padding="1px">
                            {"Branch : " + row.branchName}
                          </Typography>
                          <Typography padding="1px">
                            {"Customer Type : " + row.customerType}
                          </Typography>

                          <Typography padding="1px">
                            {"Sancationed Loan Amount : " + row.approvedAmount}
                          </Typography>
                          <Typography padding="1px">
                            {"Application Date : " + row.applicationDate}
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
    </>
  );
};
export default SanctionedList;
