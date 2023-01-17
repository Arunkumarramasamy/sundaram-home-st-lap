import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import dayjs from "dayjs";
import * as React from "react";
import CustomDataGrid from "../../../CustomComponents/CustomDataGrid";
import NoDataFound from "../../../CustomComponents/NoDataFound";

const ConditionsAndDeviationsTab = (props) => {
  const conditionColumns = [
    {
      field: "condition",
      headerName: "Condition",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "left",
    },
    {
      field: "date",
      headerName: "Approved Date",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "left",
      editable: false,
    },
    {
      field: "status",
      headerName: "Deviation Status",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
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

  const conditionRows = [
    {
      id: 1,
      condition: "Legal ",
      date: dayjs(new Date(props.losData.legalApprovedDate)).format(
        "DD/MM/YYYY"
      ),
      status: props.losData.legalDeviationStatus,
    },
    {
      id: 2,
      condition: "Technical ",
      date: dayjs(new Date(props.losData.technicalApprovedDate)).format(
        "DD/MM/YYYY"
      ),
      status: props.losData.techinicalDeviationStatus,
    },
    {
      id: 3,
      condition: "Credit ",
      date: dayjs(new Date(props.losData.creditApprovedDate)).format(
        "DD/MM/YYYY"
      ),
      status: props.losData.creditDeviationStatus,
    },
  ];

  const loadCardView = (rows, noDataMessage, cardMode) => {
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
                          <>
                            <h4>{row.condition}</h4>
                            <Typography padding="1px">
                              {"Approved Date" + " : " + row.date}
                              <br />
                              {"Deviation Status" + " : " + row.status}
                            </Typography>
                          </>
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
        <Box sx={{ width: "100%", alignContent: "center" }}>
          <CustomDataGrid
            noDataMessage="No Conditions."
            noDataOnFilterMessage="No Conditions on Applied Filter."
            rows={conditionRows}
            columns={conditionColumns}
            pageSize={5}
            pageSizeOptions={[5, 10, 15, 20, 25]}
            hideFooter={true}
            gridHeight={"270px"}
            gridWidth={"60%"}
          />
        </Box>
      )}
      {useMediaQuery("(max-width:1200px)") && (
        <React.Fragment>
          {loadCardView(conditionRows, "No Conditions Found", "Conditions")}
        </React.Fragment>
      )}
    </>
  );
};

export default ConditionsAndDeviationsTab;
