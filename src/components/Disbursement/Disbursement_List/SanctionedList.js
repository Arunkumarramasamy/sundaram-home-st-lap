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
import CustomDataGrid from "../../CustomComponents/CustomDataGrid";
import {
  ArrowBack,
  ArrowForward,
  CurrencyRupeeSharp,
  Shortcut,
} from "@mui/icons-material";
import NoDataFound from "../../CustomComponents/NoDataFound";
import { useEffect } from "react";
import dayjs from "dayjs";

const SanctionedList = (props) => {
  const columns = [
    {
      field: "branch",
      headerName: "Branch Name",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "left",
    },
    {
      field: "customerType",
      headerName: "Customer Type",
      headerAlign: "center",
      type: "string",
      width: 140,
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
      field: "applicationNum",
      headerName: "Application Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 244,
      align: "left",
    },
    {
      field: "applicationDate",
      headerName: "Application Date",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      renderCell: (params) => {
        var date = new Date(params.value);
        return (
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            {dayjs(date).format("DD/MM/YYYY")}
          </Typography>
        );
      },
    },
    {
      field: "sanctionAmt",
      headerName: "Approved Amount",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      renderCell: (params) => {
        return (
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <CurrencyRupeeSharp fontSize="small" />{" "}
            </Box>
            <Box>{params.value.toLocaleString("en-IN")}</Box>
          </Typography>
        );
      },
    },
    {
      field: "losStatus",
      headerName: "Status",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "left",
      renderCell: (params) => {
        return loadStatus(params.value);
      },
    },
  ];

  const rowDoubleClickHandler = (event) => {
    const rowStatus = event.row.losStatus;
    if (rowStatus !== "Fully Requested" && rowStatus !== "Fully Disbursed") {
      props.onRowDoubleClick(event.row);
    }
  };

  const cardButtonClickHandler = (row) => {
    const rowStatus = row.losStatus;
    if (rowStatus !== "Fully Requested" && rowStatus !== "Fully Disbursed") {
      props.onRowDoubleClick(row);
    }
  };

  const [page, setPage] = React.useState(1);
  const [rows, setRows] = React.useState([]);
  const [totalPageCount, setTotalPageCount] = React.useState(0);
  const [totalRowsCount, setTotalRowsCount] = React.useState(0);
  const rowsPerPage = 10;

  useEffect(() => {
    setRows(props.data.slice(0, rowsPerPage));
    setTotalPageCount(
      props.data.length % 10 !== 0
        ? Number(Number((props.data.length / 10).toFixed()) + 1)
        : Number(Number((props.data.length / 10).toFixed()))
    );
    setTotalRowsCount(props.data.length);
  }, [props.data]);

  const handlePageChange = (event, newPage) => {
    let offset = (newPage - 1) * rowsPerPage;
    setPage(newPage);
    setRows(props.data.slice(offset, offset + rowsPerPage));
  };
  const gridLazyLoad = (newPage) => {
    if (newPage >= page) {
      setPage(newPage + 1);
      const existrowsLength = rows.length;
      setRows(props.data.slice(0, existrowsLength + rowsPerPage));
    }
  };

  const loadStatus = (value) => {
    return (
      <Chip
        label={value}
        component="div"
        sx={{
          color:
            value === "Approved"
              ? "darkgreen"
              : value === "Cancelled"
              ? "darkred"
              : value === "Modified"
              ? "blueviolet"
              : "#004A92",
          bgcolor:
            value === "Approved"
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

  return (
    <>
      {useMediaQuery("(min-width:1200px)") && (
        <CustomDataGrid
          noDataMessage="No Sanctioned Data."
          noDataOnFilterMessage="No Sanctioned Data on Applied Filter."
          rows={rows}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5]}
          rowDoubleClickHandler={rowDoubleClickHandler}
          gridLazyLoad={gridLazyLoad}
          getRowId={(row) => row.applicationNum}
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
                height: props.accordianOpenState
                  ? window.innerHeight - 600
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
                          row.losStatus !== "Fully Requested" &&
                          row.losStatus !== "Fully Disbursed" ? (
                            <React.Fragment>
                              <IconButton
                                onClick={() => {
                                  cardButtonClickHandler(row);
                                }}
                              >
                                <Shortcut
                                  sx={{ color: "#004A92", fontWeight: 700 }}
                                />
                              </IconButton>
                            </React.Fragment>
                          ) : (
                            <React.Fragment></React.Fragment>
                          )
                        }
                        subheader={
                          "Application Number  : " + row.applicationNum
                        }
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
                        >
                          <Grid
                            container
                            direction="row"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                          >
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">
                                {"Customer Name"}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${row.customerName}`}
                            </Grid>
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">{"Branch"}</Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${row.branch}`}
                            </Grid>
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">
                                {"Customer Type"}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${row.customerType}`}
                            </Grid>
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">
                                {"Sanctioned Loan Amount"}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${row.sanctionAmt}`}
                            </Grid>
                            <Grid item xs={7} md={5}>
                              <Typography padding="1px">
                                {"Application Date"}
                              </Typography>
                            </Grid>
                            <Grid item xs={5} md={7}>
                              {` :  ${dayjs(row.applicationDate).format(
                                "DD/MM/YYYY"
                              )}`}
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
                            {loadStatus(row.losStatus)}
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
                  message={"No Sanctioned Application Found."}
                  imageStyle={{
                    marginTop:
                      props.accordianOpenState && window.innerHeight < 1000
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
