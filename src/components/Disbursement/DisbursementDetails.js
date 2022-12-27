import CustomButton from "../CustomComponents/CustomButton";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Switch,
  TextareaAutosize,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CustomTextField from "../CustomComponents/CustomTextField";
import CustomDateField from "../CustomComponents/CustomDateField";
import {
  CheckBox,
  CheckBoxOutlineBlank,
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
  CurrencyRupeeSharp,
} from "@mui/icons-material";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import React, { useEffect, useState } from "react";
import NoDataFound from "../CustomComponents/NoDataFound";

const DisbursementDetails = (props) => {
  const rows = [
    {
      id: "1",
      accountHolderName: "User1",
      bankName: "HDFC",
      bankBranch: "Kottivakkam",
      bankAccNumber: "500987421243",
      bankAccType: "Savings",
      bankIfsc: "HDFC0000500",
      amount: 0,
    },
    {
      id: "2",
      accountHolderName: "User1",
      bankName: "CANARA",
      bankBranch: "Royapettah",
      bankAccNumber: "124238685793",
      bankAccType: "Savings",
      bankIfsc: "CNRB0000938",
      amount: 0,
    },
    {
      id: "3",
      accountHolderName: "User1",
      bankName: "ICICI",
      bankBranch: "Kotturpuram",
      bankAccNumber: "424238685793",
      bankAccType: "Savings",
      bankIfsc: "ICIC0001040",
      amount: 0,
    },
    {
      id: "4",
      accountHolderName: "User1",
      bankName: "SBI",
      bankBranch: "Light House",
      bankAccNumber: "324238685793",
      bankAccType: "Savings",
      bankIfsc: "SBHY0021634",
      amount: 0,
    },
    {
      id: "5",
      accountHolderName: "User1",
      bankName: "INDUSIND",
      bankBranch: "Karapakkam",
      bankAccNumber: "624238685793",
      bankAccType: "Savings",
      bankIfsc: "INDB0001653",
      amount: 0,
    },
  ];

  const [rowState, setRowState] = useState(rows);
  const [checked, setChecked] = React.useState({
    id: "",
    value: "",
  });
  const disabledState = false;

  useEffect(() => {
    const allChecked = Array.from({ length: rows.length }, () => false);
    setChecked([...allChecked]);
  }, [rowState]);

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

    setRowState(dataMap1);
  };

  const handleChange = (value, index) => {
    if (index === -1) {
      // means all select check box clicked.
      setRowState([]); // rerender the rows
      const allChecked = Array.from({ length: rows.length }, () => value);
      setChecked([...allChecked]);
      setRowState([...rows]);
    } else {
      let checkedAccounts = [...checked];
      checkedAccounts[index] = value;
      setChecked([...checkedAccounts]);
    }
  };

  const loadActionBtn = (index) => {
    return (
      <React.Fragment>
        <FormControlLabel
          label=""
          labelPlacement="start"
          control={
            <Checkbox
              checked={checked[index]}
              onChange={() => handleChange(!checked[index], index)}
              icon={<CheckBoxOutlineBlank />}
              checkedIcon={<CheckBoxOutlined />}
            />
          }
        />
      </React.Fragment>
    );
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
        {useMediaQuery("(min-width:1200px)") && (
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
              <React.Fragment>
                <FormControlLabel
                  label="Select All Accounts"
                  labelPlacement="start"
                  control={
                    <Checkbox
                      checked={() =>
                        new Set(checked).length === 1
                          ? new Set(checked)[0]
                          : false
                      }
                      indeterminate={() =>
                        new Set(checked).length === 1
                          ? new Set(checked)[0]
                          : false
                      }
                      onChange={(event) =>
                        handleChange(event.target.checked, -1)
                      }
                    />
                  }
                />
              </React.Fragment>
            </Grid>
            <Grid container>
              <Box
                sx={{
                  // height: accordianOpen
                  //   ? window.innerHeight - 540
                  //   : window.innerHeight - 250,
                  // overflow: "auto",
                  flex: "1 auto",
                }}
              >
                {rowState.map((row, index) => (
                  <React.Fragment>
                    <Grid container direction="column" sx={{ flex: "1 auto" }}>
                      <Card>
                        <CardHeader
                          action={loadActionBtn(index)}
                          subheader={row.bankName + "- " + row.bankAccNumber}
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
                              {"Account Holder Name : " + row.accountHolderName}
                            </Typography>
                            <Typography padding="1px">
                              {"Account Number : " + row.bankAccNumber}
                            </Typography>
                            <Typography padding="1px">
                              {"Account Type : " + row.bankAccType}
                            </Typography>
                            <Typography padding="1px">
                              {"Bank  : " + row.bankName}
                            </Typography>
                            <Typography padding="1px">
                              {"Branch : " + row.bankBranch}
                            </Typography>
                            <Typography padding="1px">
                              {"IFSC Code : " + row.bankIfsc}
                            </Typography>
                            <Typography padding="1px">
                              {"Amount to Disbursed : " + row.amount}
                            </Typography>
                            <CustomTextField
                              disabled={false}
                              required={false}
                              label={"Amount to Disbursed : "}
                              id="amount"
                              variant="standard"
                              value={rowState[index].amount}
                              type="number"
                              onChange={() => onAmountChange(row.id)}
                            />
                          </Grid>
                          <Grid
                            container
                            item
                            direction="row"
                            alignItems="flex-end"
                            justifyContent="flex-end"
                          >
                            <Typography sx={{ width: "40%" }}>
                              {/* {loadStatus(row.status)} */}
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
                    message={"No Bank Data."}
                    imageStyle={{
                      marginTop:
                        // accordianOpen && window.innerHeight < 1000
                        //   ? "20px"
                        // :
                        "20%",
                    }}
                  />
                )}
              </Box>
            </Grid>
          </React.Fragment>
        )}
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
