import { Box, Checkbox, Grid } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import CustomDataGrid from "../../CustomComponents/CustomDataGrid";
import CustomDateField from "../../CustomComponents/CustomDateField";
import CustomDropDown from "../../CustomComponents/CustomDropDown";
import CustomTextField from "../../CustomComponents/CustomTextField";

const DisbursementDetailsTab = (props) => {
  const [ecdValues, setecdValues] = useState([]);

  const disableAllFields = props.screenMode === "VIEW";

  var today = new Date();

  const getECDValues = () => {
    var option1 = dayjs(
      new Date(
        Number(Number(today.getMonth()) + 2) +
          "/" +
          1 +
          "/" +
          today.getFullYear()
      )
    ).format("DD/MM/YYYY");
    var option2 = dayjs(
      new Date(
        Number(Number(today.getMonth()) + 3) +
          "/" +
          1 +
          "/" +
          today.getFullYear()
      )
    ).format("DD/MM/YYYY");
    const dataMap = [
      { value: option1, text: option1 },
      { value: option2, text: option2 },
    ];
    setecdValues(dataMap);
  };

  const onbillDayChange = (event) => {
    var value = event.target.value;
    props.dispatchEvent({
      type: props.screenFields.billDay,
      value: value,
    });
    setBillingDate(value, props.disbursementDetailTabValue.emiCommDate);
  };

  const onECDChange = (event) => {
    var value = event.target.value;
    props.dispatchEvent({
      type: props.screenFields.emiCommDate,
      value: value,
    });
    var dateSplit = value.split("/");
    var lastdate = new Date(dateSplit[2], dateSplit[1], 0).getDate();
    props.dispatchEvent({
      type: props.screenFields.firstEmiDueDate,
      value: dayjs(
        new Date(dateSplit[1] + "/" + lastdate + "/" + dateSplit[2])
      ).format("DD/MM/YYYY"),
    });
    setBillingDate(props.disbursementDetailTabValue.billDay, value);
  };

  const setBillingDate = (billDay, ecd) => {
    if (billDay !== "-1" && ecd !== "-1") {
      var value = dayjs(
        new Date(billDay + ecd.substring(ecd.indexOf("/")))
      ).format("MM/DD/YYYY");
      props.dispatchEvent({
        type: props.screenFields.billingDate,
        value: value,
      });
    }
  };

  const onCheckBoxEnable = (bankAccountNum) => (event) => {
    const dataMap1 = [];
    props.disbursementDetailTabValue.disbursementFavours.forEach((value) => {
      const dataMap = {
        ...value,
      };
      if (value.bankAccountNum === bankAccountNum) {
        dataMap.isChecked = !dataMap.isChecked;
      }
      dataMap1.push(dataMap);
    });
    props.dispatchEvent({
      type: props.screenFields.disbursementFavours,
      value: dataMap1,
    });
  };

  const onAmountChange = (bankAccountNum) => (event) => {
    const dataMap1 = [];
    props.disbursementDetailTabValue.disbursementFavours.forEach((value) => {
      const dataMap = {
        ...value,
      };
      if (value.bankAccountNum === bankAccountNum) {
        dataMap.amount = event.target.value.replaceAll(",", "");
      }
      dataMap1.push(dataMap);
    });
    props.dispatchEvent({
      type: props.screenFields.disbursementFavours,
      value: dataMap1,
    });
  };

  const setBankAmount = () => {
    const dataMap = [...props.disbursementDetailTabValue.disbursementFavours];
    if (dataMap.length != 0) {
      dataMap[0].isChecked = true;
      dataMap[0].amount =
        props.disbursementDetailTabValue.disbAmt -
        props.disbursementDetailTabValue.totalDeductionAmt;
    }
    props.dispatchEvent({
      type: props.screenFields.disbursementFavours,
      value: dataMap,
    });
  };

  useEffect(() => {
    getECDValues();
    if (props.screenMode === "CREATE") {
      setBankAmount();
    }
  }, [props.disbursementDetailTabValue.disbursementFavours]);

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
          <Checkbox
            disabled={disableAllFields || props.screenMode === "APPROVE"}
            checked={params.value}
            onChange={onCheckBoxEnable(params.row.bankAccountNum)}
          />
        );
      },
    },
    {
      field: "accHoldrName",
      headerName: "Account Holder Name",
      headerAlign: "center",
      type: "string",
      width: 200,
      align: "left",
    },
    {
      field: "bankName",
      headerName: "Bank Name",
      headerAlign: "center",
      type: "string",
      width: 100,
      align: "left",
    },
    {
      field: "bankBranchName",
      headerName: "Bank Branch",
      headerAlign: "center",
      type: "string",
      width: 140,
      align: "left",
    },
    {
      field: "bankAccountNum",
      headerName: "Bank Account Number",
      headerAlign: "center",
      type: "string",
      width: 180,
      align: "left",
    },
    {
      field: "bankAccountType",
      headerName: "Bank Account Type",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 200,
      align: "left",
    },
    {
      field: "ifscCode",
      headerName: "IFSC",
      headerAlign: "center",
      type: "string",
      hideable: false,
      width: 200,
      align: "left",
    },
    {
      field: "amount",
      headerName: "Amount",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      renderCell: (params) => {
        return (
          <CustomTextField
            disabled={
              !params.row.isChecked ||
              disableAllFields ||
              props.screenMode === "APPROVE"
            }
            required={false}
            label={""}
            id="amount"
            variant="standard"
            value={
              params.value === undefined
                ? 0
                : parseInt(params.value).toLocaleString("en-IN")
            }
            type="text"
            placeholder={"Enter Amount"}
            onChange={onAmountChange(params.row.bankAccountNum)}
          />
        );
      },
    },
  ];

  return (
    <Box sx={{ marginTop: "-1%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Disbursement Number"
            id="disbursementNumber"
            variant="standard"
            value={props.disbursementDetailTabValue.disbNum}
            type="text"
            placeholder="Enter Disbursement Number"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Earlier Disbursement Amount"
            id="earlierDisbursementAmount"
            variant="standard"
            value={parseInt(
              props.disbursementDetailTabValue.earlierDisbAmt
            ).toLocaleString("en-IN")}
            type="text"
            placeholder="Enter Earlier Disbursement Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disableAllFields || props.screenMode === "APPROVE"}
            required={false}
            label="Current Disbursement Amount"
            id="currentDisbursementAmount"
            variant="standard"
            value={
              props.disbursementDetailTabValue.disbAmt === ""
                ? 0
                : parseInt(
                    props.disbursementDetailTabValue.disbAmt
                  ).toLocaleString("en-IN")
            }
            type="text"
            placeholder="Enter Current Disbursement Amount"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.screenFields.disbAmt,
                value: event.target.value.replaceAll(",", ""),
              });
              props.dispatchEvent({
                type: props.screenFields.totalDisbAmt,
                value:
                  parseInt(event.target.value.replaceAll(",", "")) -
                  props.disbursementDetailTabValue.totalDeductionAmt,
              });
              const dataMap1 = [
                ...props.disbursementDetailTabValue.disbursementFavours,
              ];
              dataMap1[0].amount =
                event.target.value.replaceAll(",", "") -
                props.disbursementDetailTabValue.totalDeductionAmt;
              props.dispatchEvent({
                type: props.screenFields.disbursementFavours,
                value: dataMap1,
              });
            }}
          />
          {props.errorState.currentDisbError[0] && (
            <p className="error">{props.errorState.currentDisbError[1]}</p>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Total Deductions"
            id="deductions"
            variant="standard"
            value={parseInt(
              props.disbursementDetailTabValue.totalDeductionAmt
            ).toLocaleString("en-IN")}
            type="text"
            placeholder="Enter Total Deductions"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Net Current Disbursement Amount"
            id="netAmount"
            variant="standard"
            value={parseInt(
              props.disbursementDetailTabValue.disbAmt -
                props.disbursementDetailTabValue.totalDeductionAmt
            ).toLocaleString("en-IN")}
            type="text"
            placeholder="Enter Net Disbursement Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Balance Amount"
            id="balanceAmount"
            variant="standard"
            value={parseInt(
              props.losData.sanctionAmt -
                props.disbursementDetailTabValue.earlierDisbAmt -
                props.disbursementDetailTabValue.disbAmt
            ).toLocaleString("en-IN")}
            type="text"
            placeholder="Enter Balance Amount"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disableAllFields || props.screenMode === "APPROVE"}
            required={false}
            label="Disbursement Date"
            id="disbursementDate"
            variant="standard"
            value={props.disbursementDetailTabValue.dateOfDisb}
            type="text"
            placeholder=""
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.screenFields.dateOfDisb,
                value: event,
              });
            }}
          />
          {props.errorState.dateOfDisbError[0] && (
            <p className="error">{props.errorState.dateOfDisbError[1]}</p>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            disabled={disableAllFields || props.screenMode === "APPROVE"}
            required={false}
            label="Billing Day"
            id="billDay"
            variant="standard"
            type="text"
            placeholder="Select Billing Day"
            dropDownValue={props.billDayValues}
            value={props.disbursementDetailTabValue.billDay}
            onChange={onbillDayChange}
          />
          {props.errorState.billDayError[0] && (
            <p className="error">{props.errorState.billDayError[1]}</p>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            disabled={disableAllFields || props.screenMode === "APPROVE"}
            required={false}
            label="ECD"
            id="ecd"
            variant="standard"
            type="text"
            placeholder="Select ECD Date"
            dropDownValue={ecdValues}
            value={props.disbursementDetailTabValue.emiCommDate}
            onChange={onECDChange}
          />
          {props.errorState.ecdError[0] && (
            <p className="error">{props.errorState.ecdError[1]}</p>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Billing Date"
            id="billingDate"
            variant="standard"
            value={props.disbursementDetailTabValue.billingDate}
            type="text"
            placeholder="Billing Date"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="FEDD"
            id="fedd"
            variant="standard"
            value={props.disbursementDetailTabValue.firstEmiDueDate}
            type="text"
            placeholder="Select FEDD Date"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Request Number"
            id="requestNumber"
            variant="standard"
            value={props.disbursementDetailTabValue.transactionKey}
            type="text"
            placeholder="Request Number"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Request Status"
            id="status"
            variant="standard"
            value={props.disbursementDetailTabValue.requestStatus}
            type="text"
            placeholder="Status"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Payment Mode"
            id="paymentMode"
            variant="standard"
            value={props.disbursementDetailTabValue.paymentMode}
            type="text"
            placeholder="Enter Payment Mode"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disableAllFields || props.screenMode === "APPROVE"}
            required={false}
            label="Remarks"
            id="remarks"
            variant="standard"
            value={props.disbursementDetailTabValue.remarks}
            type="text"
            placeholder="Enter Remarks"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.screenFields.remarks,
                value: event.target.value,
              });
            }}
          />
        </Grid>

        {props.screenMode === "APPROVE" ||
        props.disbursementDetailTabValue.requestStatus === "Approved" ? (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={disableAllFields}
              required={false}
              label="Approval Remarks"
              id="approvalRemarks"
              variant="standard"
              value={props.disbursementDetailTabValue.approvalRemarks}
              type="text"
              placeholder="Enter Remarks"
              onChange={(event, value) => {
                props.dispatchEvent({
                  type: props.screenFields.approvalRemarks,
                  value: event.target.value,
                });
              }}
            />
          </Grid>
        ) : null}
      </Grid>
      <Box
        sx={{
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {props.errorState.bankAccountError[0] && (
          <p className="error">{props.errorState.bankAccountError[1]}</p>
        )}
        <CustomDataGrid
          noDataMessage="No Bank Data."
          noDataOnFilterMessage="No Bank Data on Applied Filter."
          gridHeight="270px"
          rows={props.disbursementDetailTabValue.disbursementFavours}
          columns={columns}
          checkboxSelection={false}
          pageSize={3}
          pageSizeOptions={[3, 6, 9, 12]}
          getRowId={(row) => {
            return row.bankAccountNum;
          }}
        />
      </Box>
    </Box>
  );
};

export default DisbursementDetailsTab;
