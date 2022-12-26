import CustomButton from "../CustomComponents/CustomButton";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
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
import { useState } from "react";
import NoDataFound from "../CustomComponents/NoDataFound";
import * as React from "react";

const FeesOutstanding = (props) => {
  // const[paidTotal,setPaidTotal] = useState(0);
  // const[dueTotal,setDueTotal] = useState(0);
  // const[waivedTotal,setWaivedTotal] = useState(0);
  // const[deductionTotal,setDeductionTotal] = useState(0);

  let paidTotal = 0;
  let dueTotal = 0;
  let waivedTotal = 0;
  let deductionTotal = 0;

  const columns = [
    {
      field: "details",
      headerName: "Details",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "due",
      headerName: "Due Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "right",
      editable: false,
      renderCell: (params) => {
        return <>{params.value}</>;
      },
    },
    {
      field: "paid",
      headerName: "Paid Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "waited",
      headerName: "Waved Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "deduction",
      headerName: "Deduction",
      headerAlign: "center",
      type: "string",
      width: "200",
      editable: false,
      align: "center",
    },
  ];

  const rows = [
    {
      id: 7,
      details: "Mod Charges",
      due: 450,
      paid: 450,
      waited: 80,
      deduction: 0,
    },
    {
      id: 8,
      details: "Legal Charges",
      due: 3000,
      paid: 2500,
      waited: 500,
      deduction: 0,
    },
    {
      id: 9,
      details: "Technical Assistance Charges",
      due: 5000,
      paid: 5000,
      waited: 0,
      deduction: 0,
    },
    {
      id: 10,
      details: "Documentation Charges",
      due: 80,
      paid: 80,
      waited: 0,
      deduction: 0,
    },
    {
      id: 11,
      details: "File Processing Charges",
      due: 1000,
      paid: 1000,
      waited: 0,
      deduction: 0,
    },
    {
      id: 1,
      details: "Application Fee",
      due: 10000,
      paid: 7000,
      waited: 3000,
      deduction: 3000,
    },
    {
      id: 2,
      details: "Prepayment Charge",
      due: 100000,
      paid: 50000,
      waited: 50000,
      deduction: 0,
    },
    {
      id: 3,
      details: "Partial prepayment charge",
      due: 30000,
      paid: 30000,
      waited: 0,
      deduction: 0,
    },
    {
      id: 4,
      details: "Late Fee charge",
      due: 250,
      paid: 0,
      waited: 250,
      deduction: 250,
    },
    {
      id: 5,
      details: "Recovery Charge",
      due: 2000,
      paid: 2000,
      waited: 2000,
      deduction: 0,
    },
    {
      id: 6,
      details: "Insurance Premium Charge",
      due: 784,
      paid: 784,
      waited: 0,
      deduction: 0,
    },

    {
      id: 12,
      details: "Other Charges",
      due: 0,
      paid: 0,
      waited: 0,
      deduction: 0,
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
            {rows.map((row, index) => (
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
                          {"Paid Amount : " + row.paid}
                        </Typography>
                        <Typography padding="1px">
                          {"Due Amount : " + row.due}
                        </Typography>
                        <Typography padding="1px">
                          {"Waived Amount : " + row.waited}
                        </Typography>
                        <Typography padding="1px">
                          {"Deduction : " + row.deduction}
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
      <div>
        <div style={{ display: 'flex', float: 'left', textAlign: 'start', marginTop: '5px', marginBottom: '11px' }}>
          <label style={{ fontWeight: 'bold', marginLeft: '8px' }}>{'Total Deductions : '}<span style={{ color: 'Green' }}>{dueTotal+deductionTotal-paidTotal-waivedTotal}</span></label>
          <label style={{ fontWeight: 'bold', marginLeft: '8px' }}>{'(Paid : '}<span style={{ color: 'blue' }}>{paidTotal}</span>{`,`}</label>
          <label style={{ fontWeight: 'bold', marginLeft: '8px' }}>{'Due : '}<span style={{ color: 'red' }}>{dueTotal}</span>{`,`}</label>
          <label style={{ fontWeight: 'bold', marginLeft: '8px' }}>{'Waived : '}<span style={{ color: 'saddlebrown' }}>{waivedTotal}</span>{`,`}</label>
          <label style={{ fontWeight: 'bold', marginLeft: '8px' }}>{'Deduction : '}<span style={{ color: 'Purple' }}>{deductionTotal}</span>{`)`}</label>
        </div>
      </div>
      {useMediaQuery("(min-width:1200px)") && (
        <CustomDataGrid
          noDataMessage="No Outstanding Dues."
          noDataOnFilterMessage="No Outstanding Dues on Applied Filter."
          rows={rows}
          columns={columns}
          pageSize={5}
          pageSizeOptions={[5, 10, 15, 20, 25]}
        />
      )}
      {useMediaQuery("(max-width:1200px)") && loadCardView(rows)}

      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomButton variant="contained" sx={{ marginTop: "2%" }}>
          Create Request
        </CustomButton>
        <CustomButton
          variant="contained"
          sx={{ marginTop: "2%", marginLeft: "1%" }}
          onClick={() => {
            props.setListVisibility(true);
          }}
        >
          Back to search
        </CustomButton>
      </Box>
    </>
  );
};

export default FeesOutstanding;
