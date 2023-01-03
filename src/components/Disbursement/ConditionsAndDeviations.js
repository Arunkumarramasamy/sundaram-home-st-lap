import {
  Chip,
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomButton from "../CustomComponents/CustomButton";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import NoDataFound from "../CustomComponents/NoDataFound";
import * as React from "react";

const ConditionsAndDeviations = (props) => {
  const conditionColumns = [
    {
      field: "condition",
      headerName: "Condition",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "date",
      headerName: "Date",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "right",
      editable: false,
    },
  ];

  const deviationColumns = [
    {
      field: "deviation",
      headerName: "Deviation",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "right",
      editable: false,
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

  const conditionRows = [
    {
      id: 1,
      condition: "Legal Approved Date",
      date: new Date(props.losInitialState.legalApprovedDate).toLocaleDateString(),
    },
    {
      id: 2,
      condition: "Technical Approved Date",
      date: new Date(props.losInitialState.technicalApprovedDate).toLocaleDateString(),
    },
    {
      id: 3,
      condition: "Credit Approved Date",
      date: new Date(props.losInitialState.creditApprovedDate).toLocaleDateString(),
    },
    {
      id: 4,
      condition: "RCU Approved Date",
      date: new Date(props.losInitialState.rcuApprovedDate).toLocaleDateString(),
    },
  ];

  const deviationRows = [
    {
      id: 1,
      deviation: "Legal Deviation Status",
      status:  props.losInitialState.legalDeviationStatus,
    },
    {
      id: 2,
      deviation: "Technical Deviation Status",
      status: props.losInitialState.techinicalDeviationStatus,
    },
    {
      id: 3,
      deviation: "Credit Deviation Status",
      status: props.losInitialState.creditDeviationStatus,
    },
  ];

  const loadCardView = (cardHeaderName, rows, noDataMessage, cardMode) => {
    return (
      <React.Fragment>
        <Grid container>
          <Box
            sx={{
              flex: "1 auto",
            }}
          >
            <React.Fragment>
              <Grid container direction="column" sx={{ flex: "1 auto" }}>
                <Card>
                  <CardHeader
                    subheader={cardHeaderName}
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
                      {cardMode === "Conditions" &&
                        rows.map((row, index) => (
                          <Typography padding="1px">
                            {row.condition + " : " + row.date}
                          </Typography>
                        ))}
                      {cardMode === "Deviations" &&
                        rows.map((row, index) => (
                          <Typography padding="1px">
                            {row.deviation + " : " + row.status}
                          </Typography>
                        ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Divider />
            </React.Fragment>
            {rows.length === 0 && (
              <NoDataFound
                message={noDataMessage}
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
      {useMediaQuery("(min-width:1200px)") && (
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={6} xl={3}>
            <CustomDataGrid
              noDataMessage="No Conditions."
              noDataOnFilterMessage="No Conditions on Applied Filter."
              rows={conditionRows}
              columns={conditionColumns}
              pageSize={5}
              pageSizeOptions={[5, 10, 15, 20, 25]}
              hideFooter={true}
              gridHeight={"270px"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={6} xl={3}>
            <CustomDataGrid
              noDataMessage="No Deviations."
              noDataOnFilterMessage="No Deviations on Applied Filter."
              rows={deviationRows}
              columns={deviationColumns}
              pageSize={5}
              pageSizeOptions={[5, 10, 15, 20, 25]}
              hideFooter={true}
              gridHeight={"270px"}
            />
          </Grid>
        </Grid>
      )}
      {useMediaQuery("(max-width:1200px)") && (
        <React.Fragment>
          {loadCardView(
            "Conditions : ",
            conditionRows,
            "No Conditions Found",
            "Conditions"
          )}
          {loadCardView(
            "Deviations : ",
            deviationRows,
            "No Deviations Found",
            "Deviations"
          )}
        </React.Fragment>
      )}

      
    </>
  );
};

export default ConditionsAndDeviations;
