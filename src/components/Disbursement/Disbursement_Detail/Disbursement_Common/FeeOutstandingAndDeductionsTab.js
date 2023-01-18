import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import * as React from "react";
import CustomDataGrid from "../../../CustomComponents/CustomDataGrid";
import NoDataFound from "../../../CustomComponents/NoDataFound";

const FeeOutstandingAndDeductionsTab = (props) => {
  const feeDeductionColumns = [
    {
      field: "details",
      headerName: "Details",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 350,
      align: "left",
    },
    {
      field: "receiveable",
      headerName: "Due Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 235,
      align: "right",
      editable: false,
      renderCell: (params) => {
        return <>{parseInt(params.value).toLocaleString("en-IN")}</>;
      },
    },
    {
      field: "received",
      headerName: "Paid Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 235,
      align: "right",
      editable: false,
      renderCell: (params) => {
        return <>{parseInt(params.value).toLocaleString("en-IN")}</>;
      },
    },
    {
      field: "earlyWaiver",
      headerName: "Waved Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 235,
      align: "right",
      editable: false,
      renderCell: (params) => {
        return <>{parseInt(params.value).toLocaleString("en-IN")}</>;
      },
    },
    {
      field: "deduction",
      headerName: "Deduction",
      headerAlign: "center",
      type: "string",
      width: "235",
      editable: false,
      align: "right",
      renderCell: (params) => {
        var value =
          params.row.receiveable - params.row.received - params.row.earlyWaiver;
        return <>{parseInt(value).toLocaleString("en-IN")}</>;
      },
    },
  ];

  const loadCardView = (rows) => {
    return (
      <React.Fragment>
        <Grid container>
          <Box
            sx={{
              height: props.accordianOpenState
                ? window.innerHeight - 650
                : window.innerHeight - 250,
              overflow: "auto",
              flex: "1 auto",
            }}
          >
            {props.deductionTabValue.gridRows.map((row, index) => (
              <React.Fragment>
                <Grid container direction="column" sx={{ flex: "1 auto" }}>
                  <Card>
                    <CardHeader
                      subheader={row.details + " :"}
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
                        <Typography padding="1px">
                          {"Paid Amount : " +
                            parseInt(row.receiveable).toLocaleString("en-IN")}
                        </Typography>
                        <Typography padding="1px">
                          {"Due Amount : " +
                            parseInt(row.received).toLocaleString("en-IN")}
                        </Typography>
                        <Typography padding="1px">
                          {"Waived Amount : " +
                            parseInt(row.earlyWaiver).toLocaleString("en-IN")}
                        </Typography>
                        <Typography padding="1px">
                          {"Deduction : " +
                            parseInt(
                              row.receiveable - row.received - row.earlyWaiver
                            ).toLocaleString("en-IN")}
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
                message="No Pending Fee Dues."
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
    );
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <label
            style={{ fontWeight: "bold", marginLeft: "8px", color: "#2F7DC4" }}
          >
            {"Total Deductions : "}
            <span style={{ color: "#2F7DC4" }}>
              {parseInt(props.deductionTabValue.deductionTotal).toLocaleString(
                "en-IN"
              )}
            </span>
          </label>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <label
            style={{ fontWeight: "bold", marginLeft: "8px", color: "#2F7DC4" }}
          >
            {"(Paid : "}
            <span style={{ color: "#2F7DC4" }}>
              {parseInt(props.deductionTabValue.paidTotal).toLocaleString(
                "en-IN"
              )}
            </span>
            {``}
          </label>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <label
            style={{ fontWeight: "bold", marginLeft: "8px", color: "#2F7DC4" }}
          >
            {"Due : "}
            <span style={{ color: "#2F7DC4" }}>
              {parseInt(props.deductionTabValue.dueTotal).toLocaleString(
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
            {"Waived : "}
            <span style={{ color: "#2F7DC4" }}>
              {parseInt(props.deductionTabValue.waivedTotal).toLocaleString(
                "en-IN"
              )}
            </span>
            {``}
          </label>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <label
            style={{ fontWeight: "bold", marginLeft: "8px", color: "#2F7DC4" }}
          >
            {"Deduction : "}
            <span style={{ color: "#2F7DC4" }}>
              {parseInt(props.deductionTabValue.deductionTotal).toLocaleString(
                "en-IN"
              )}
            </span>
            {`)`}
          </label>
        </Grid>
      </Grid>
      {useMediaQuery("(min-width:1200px)") && (
        <CustomDataGrid
          noDataMessage="No Outstanding Dues."
          noDataOnFilterMessage="No Outstanding Dues on Applied Filter."
          rows={props.deductionTabValue.gridRows}
          columns={feeDeductionColumns}
          pageSize={5}
          pageSizeOptions={[5, 10, 15, 20, 25]}
        />
      )}
      {useMediaQuery("(max-width:1200px)") &&
        loadCardView(props.deductionTabValue.gridRows)}
    </>
  );
};

export default FeeOutstandingAndDeductionsTab;
