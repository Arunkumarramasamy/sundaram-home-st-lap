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
      width: 160,
      align: "right",
      editable: false,
      renderCell: (params) => {
        return <>{params.value}</>;
      },
    },
    {
      field: "received",
      headerName: "Paid Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "right",
      editable: false,
      renderCell: (params) => {
        return <>{params.value}</>;
      },
    },
    {
      field: "earlyWaiver",
      headerName: "Waved Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "right",
      editable: false,
      renderCell: (params) => {
        return <>{params.value}</>;
      },
    },
    {
      field: "deduction",
      headerName: "Deduction",
      headerAlign: "center",
      type: "string",
      width: "230",
      editable: false,
      align: "right",
      renderCell: (params) => {
        var value =
          params.row.receiveable - params.row.received - params.row.earlyWaiver;
        return value;
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
                          {"Paid Amount : " + row.receiveable}
                        </Typography>
                        <Typography padding="1px">
                          {"Due Amount : " + row.received}
                        </Typography>
                        <Typography padding="1px">
                          {"Waived Amount : " + row.earlyWaiver}
                        </Typography>
                        <Typography padding="1px">
                          {"Deduction : " +
                            (row.receiveable - row.received - row.earlyWaiver)}
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
            style={{ fontWeight: "bold", marginLeft: "8px", color: "Green" }}
          >
            {"Total Deductions : "}
            <span style={{ color: "Green" }}>
              {props.deductionTabValue.deductionTotal}
            </span>
          </label>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <label
            style={{ fontWeight: "bold", marginLeft: "8px", color: "blue" }}
          >
            {"(Paid : "}
            <span style={{ color: "blue" }}>
              {props.deductionTabValue.paidTotal}
            </span>
            {``}
          </label>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <label
            style={{ fontWeight: "bold", marginLeft: "8px", color: "red" }}
          >
            {"Due : "}
            <span style={{ color: "red" }}>
              {props.deductionTabValue.dueTotal}
            </span>
            {``}
          </label>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <label
            style={{
              fontWeight: "bold",
              marginLeft: "8px",
              color: "saddlebrown",
            }}
          >
            {"Waived : "}
            <span style={{ color: "saddlebrown" }}>
              {props.deductionTabValue.waivedTotal}
            </span>
            {``}
          </label>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
          <label
            style={{ fontWeight: "bold", marginLeft: "8px", color: "Purple" }}
          >
            {"Deduction : "}
            <span style={{ color: "Purple" }}>
              {props.deductionTabValue.deductionTotal}
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
