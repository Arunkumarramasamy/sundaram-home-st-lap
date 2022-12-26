import CustomButton from "../CustomComponents/CustomButton";
import {
  Box,
  Chip,
  Grid,
  InputLabel,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import CustomTextField from "../CustomComponents/CustomTextField";
import CustomDateField from "../CustomComponents/CustomDateField";
import { CurrencyRupeeSharp } from "@mui/icons-material";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import { useState } from "react";

const DisbursementDetails = (props) => {
  const rows = [
    {
      id: "1",
      bankName: "HDFC",
      bankBranch: "Kottivakkam",
      bankAccNumber: "500987421243",
      bankAccType: "Savings",
      bankIfsc: "HDFC0000500",
      amount: 0,
    },
    {
      id: "2",
      bankName: "CANARA",
      bankBranch: "Royapettah",
      bankAccNumber: "124238685793",
      bankAccType: "Savings",
      bankIfsc: "CNRB0000938",
      amount: 0,
    },
    {
      id: "3",
      bankName: "ICICI",
      bankBranch: "Kotturpuram",
      bankAccNumber: "424238685793",
      bankAccType: "Savings",
      bankIfsc: "ICIC0001040",
      amount: 0,
    },
    {
      id: "4",
      bankName: "SBI",
      bankBranch: "Light House",
      bankAccNumber: "324238685793",
      bankAccType: "Savings",
      bankIfsc: "SBHY0021634",
      amount: 0,
    },
    {
      id: "5",
      bankName: "INDUSIND",
      bankBranch: "Karapakkam",
      bankAccNumber: "624238685793",
      bankAccType: "Savings",
      bankIfsc: "INDB0001653",
      amount: 0,
    },
  ];

  const [rowState, setRowState] = useState(rows);

  const disabledState = false;

  var today = new Date();

  const columns = [
    {
      field: "bankName",
      headerName: "Bank Name",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
    {
      field: "bankBranch",
      headerName: "Bank Branch",
      headerAlign: "center",
      type: "string",
      width: 140,
      align: "center",
    },
    {
      field: "bankAccNumber",
      headerName: "Bank Account Number",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
    {
      field: "bankAccType",
      headerName: "Bank Account Type",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 200,
      align: "center",
    },
    {
      field: "bankIfsc",
      headerName: "IFSC",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 200,
      align: "center",
    },
    {
      field: "amount",
      headerName: "Amount to be Sent",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      renderCell: (params) => {
        return (
          <CustomTextField
            disabled={false}
            required={false}
            label={""}
            id="amount"
            variant="standard"
            value={params.value}
            type="number"
            onChange={onAmountChange(params.row.id)}
          />
        );
      },
    },
  ];

  const onAmountChange = (id) => (event) => {
    const dataMap1 = [];
    rowState.forEach((value) => {
      const dataMap = {
        ...value,
      };
      if (value.id === id) {
        dataMap.amount = event.target.value;
      }
      dataMap1.push(dataMap);
    });

    setRowState(dataMap1);
  };

  return (
    <Box sx={{ marginTop: "0.5rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Earlier Disbursement Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="Current Disbursement Amount"
            id="currentDisbursementAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Current Disbursement Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="Total Deductions"
            id="deductions"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Total Deductions"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="Net Disbursement Amount"
            id="netAmount"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Net Disbursement Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState}
            required={false}
            label="Disbursement Date"
            id="disbursementDate"
            variant="standard"
            value={
              today.getMonth() +
              1 +
              "/" +
              today.getDate() +
              "/" +
              today.getFullYear()
            }
            type="text"
            placeholder=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState}
            required={false}
            label="Billing Date"
            id="billingDate"
            variant="standard"
            value={
              today.getMonth() +
              1 +
              "/" +
              today.getDate() +
              "/" +
              today.getFullYear()
            }
            type="text"
            placeholder=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState}
            required={false}
            label="ECD"
            id="ecd"
            variant="standard"
            value={
              today.getMonth() +
              1 +
              "/" +
              today.getDate() +
              "/" +
              today.getFullYear()
            }
            type="text"
            placeholder=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="Request Number"
            id="requestNumber"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Request Number"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="Status"
            id="status"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Status"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="Payment Mode"
            id="paymentMode"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter Payment Mode"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="SHFL Bank"
            id="shflBank"
            variant="standard"
            value={""}
            type="text"
            placeholder="Enter SHFL Bank"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <InputLabel required={true}>{"Remarks"}</InputLabel>
          <TextareaAutosize
            style={{
              width: "100%",
              marginTop: "3%",
              borderTop: "0px",
              borderLeft: "0px",
              borderRight: "0px",
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <CustomDataGrid
          noDataMessage="No Bank Data."
          noDataOnFilterMessage="No Bank Data on Applied Filter."
          gridHeight="270px"
          rows={rowState}
          columns={columns}
          checkboxSelection={true}
          pageSize={3}
          pageSizeOptions={[3, 6, 9, 12]}
        />
      </Box>
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
      </Box>{" "}
    </Box>
  );
};

export default DisbursementDetails;
