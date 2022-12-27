import CustomButton from "../CustomComponents/CustomButton";
import {
  Box,
  Checkbox,
  Chip,
  Grid,
  InputLabel,
  Switch,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import CustomTextField from "../CustomComponents/CustomTextField";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import { useState } from "react";

const DisbursementDetails = (props) => {

  const disabledState = false;

  var today = new Date();

  const columns = [
    {
      field: "isChecked",
      headerName: "",
      headerAlign: "center",
      type: "string",
      width: 50,
      align: "center",
      renderCell: (params) => {
        return (
          <Checkbox checked={params.value} onChange={onCheckBoxEnable(params.row.id)}/>
        );
      },
    },
    {
      field: "accountHolderName",
      headerName: "Account Holder Name",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "center",
    },
    {
      field: "bankName",
      headerName: "Bank Name",
      headerAlign: "center",
      type: "string",
      width: 100,
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
      width: 180,
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
            disabled={!params.row.isChecked}
            required={false}
            label={""}
            id="amount"
            variant="standard"
            value={params.value}
            type="number"
            onChange={onAmountChange(params.row.id)}
            placeholder={!params.row.isChecked ? "Disabled" : "Enter Amount"}
          />
        );
      },
    },
  ];

  const onAmountChange = (id) => (event) => {
    const dataMap1 = [];
    props.detailPageInitialState.disbursementFavours.forEach((value) => {
      const dataMap = {
        ...value,
      };
      if (value.id === id) {
        dataMap.amount = event.target.value;
      }
      dataMap1.push(dataMap);
    });
    props.dispatchEvent({
      type: props.fieldList.disbursementFavours,
      value: dataMap1,
    });
  };

  const onCheckBoxEnable = (id) => (event) => {
    const dataMap1 = [];
    props.detailPageInitialState.disbursementFavours.forEach((value) => {
      const dataMap = {
        ...value,
      };
      if (value.id === id) {
        dataMap.isChecked = !dataMap.isChecked;
      }
      dataMap1.push(dataMap);
    });
    props.dispatchEvent({
      type: props.fieldList.disbursementFavours,
      value: dataMap1,
    });
  };

  return (
    <Box sx={{ marginTop: "0.5rem" }}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Disbursement Number"
            id="disbursementNumber"
            variant="standard"
            value={props.detailPageInitialState.disbNo}
            type="text"
            placeholder="Enter Disbursement Number"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.disbNo,
                value: value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
           value={props.detailPageInitialState.earlierDisbAmt}
            type="text"
            placeholder="Enter Earlier Disbursement Amount"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.earlierDisbAmt,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="Current Disbursement Amount"
            id="currentDisbursementAmount"
            variant="standard"
           value={props.detailPageInitialState.disbAmt}
            type="text"
            placeholder="Enter Current Disbursement Amount"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.disbAmt,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Total Deductions"
            id="deductions"
            variant="standard"
           value={props.losInitialState.memoDeductions}
            type="text"
            placeholder="Enter Total Deductions"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Net Disbursement Amount"
            id="netAmount"
            variant="standard"
           value={props.detailPageInitialState.disbAmt - props.losInitialState.memoDeductions}
            type="text"
            placeholder="Enter Net Disbursement Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={true}
            required={false}
            label="Disbursement Date"
            id="disbursementDate"
            variant="standard"
            value={props.detailPageInitialState.dateOfDisb}
            type="text"
            placeholder=""
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.dateOfDisb,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={true}
            required={false}
            label="Billing Date"
            id="billingDate"
            variant="standard"
            value={props.detailPageInitialState.billingDate}
            type="text"
            placeholder=""
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.billingDate,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState}
            required={false}
            label="Billing Day"
            id="billingDay"
            variant="standard"
            value={props.detailPageInitialState.billingDay}
            type="text"
            placeholder=""
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.billingDay,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState}
            required={false}
            label="ECD"
            id="ecd"
            variant="standard"
            value={props.detailPageInitialState.emiCommDate}
            type="text"
            placeholder=""
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.emiCommDate,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState}
            required={false}
            label="FEDD"
            id="fedd"
            variant="standard"
            value={props.detailPageInitialState.firstEmiDueDate}
            type="text"
            placeholder=""
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.firstEmiDueDate,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Request Number"
            id="requestNumber"
            variant="standard"
           value={props.losInitialState.requestNumber}
            type="text"
            placeholder="Enter Request Number"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Request Status"
            id="status"
            variant="standard"
           value={props.detailPageInitialState.requestStatus}
            type="text"
            placeholder="Enter Status"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.requestStatus,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Payment Mode"
            id="paymentMode"
            variant="standard"
           value={props.detailPageInitialState.paymentMode}
            type="text"
            placeholder="Enter Payment Mode"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.paymentMode,
                value: value,
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={false}
            label="SHFL Bank"
            id="shflBank"
            variant="standard"
           value={props.detailPageInitialState.shflBank}
            type="text"
            placeholder="Enter SHFL Bank"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.shflBank,
                value: value,
              });
            }}
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
            value={props.detailPageInitialState.remarks}
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.remarks,
                value: value,
              });
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
          rows={props.detailPageInitialState.disbursementFavours}
          columns={columns}
          checkboxSelection={false}
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
