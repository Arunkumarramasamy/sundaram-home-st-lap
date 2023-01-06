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
import CustomDropDown from "../CustomComponents/CustomDropDown";
import axios from "axios";
import dayjs from "dayjs";


const DisbursementDetails = (props) => {
  const[losInitialState,setlosInitialState] = useState(props.losInitialState);
  const [ecdValues,setecdValues] = useState([]);
  const [billDayValues,setbillDayValues] = useState([]);

  const [allCheckedValues, setChecked] = React.useState([
    ...Array.from({ length: props.detailPageInitialState.disbursementFavours.length }, () => false),
  ]);
  const disabledState = props.detailPageInitialState.screenMode !== "CREATE";
  const disableForView = props.detailPageInitialState.screenMode === "VIEW" || props.detailPageInitialState.screenMode === "APPROVE"; 

  const getbillDayValues = async () =>{
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/"
    });
    const response = await api.get("/getAllDisbursementBillingDayData");
    setbillDayValues(response.data);
  };

  useEffect(() => {
    getbillDayValues();
    let allChecked = [];
    props.detailPageInitialState.disbursementFavours.forEach((row,index)=>{
      allChecked.push((row.isChecked || index === 0)? true:false);
    });
    setChecked([...allChecked]);
    var option1 =dayjs(new Date(Number(Number(today.getMonth()) + 2)   + "/" + 1 + "/" + today.getFullYear())).format('DD/MM/YYYY');
    var option2 =dayjs(new Date(Number(Number(today.getMonth()) + 3)   + "/" + 1 + "/" + today.getFullYear())).format('DD/MM/YYYY');
    const dataMap = [
      {value:option1 ,text:option1},
      {value:option2 ,text:option2},
    ];
    setecdValues(dataMap);
    if(props.detailPageInitialState.screenMode === "CREATE"){
      var value = losInitialState.sanctionAmount - props.detailPageInitialState.earlierDisbAmt;
      var netDisb = parseInt(value)-props.detailPageInitialState.totalDeductionAmt;
      props.dispatchEvent({
        type: props.fieldList.disbAmt,
        value: value,
      });
      props.dispatchEvent({
        type: props.fieldList.totalDisbAmt,
        value: netDisb,
      });
       if(props.detailPageInitialState.disbursementFavours.length !== 0){
        props.detailPageInitialState.disbursementFavours[0].isChecked = true;
        props.detailPageInitialState.disbursementFavours[0].amount = netDisb;
      }
    }
  }, []);

  var today = new Date();

  
  const onbillDayChange = (event) => {
    
    var value = event.target.value;
    props.dispatchEvent({
      type: props.fieldList.billDay,
      value: value,
    });
    setBillingDate(value,props.detailPageInitialState.emiCommDate);
  };


  const onECDChange = (event) => {
    
    var value = event.target.value;
    props.dispatchEvent({
      type: props.fieldList.emiCommDate,
      value: value,
    });
    var dateSplit = value.split("/");
    var lastdate = new Date(dateSplit[2], dateSplit[1], 0).getDate();
    props.dispatchEvent({
      type: props.fieldList.firstEmiDueDate,
      value: dayjs(new Date(dateSplit[1]  + "/" + lastdate+ "/" + dateSplit[2])).format('DD/MM/YYYY'),
    });
    setBillingDate(props.detailPageInitialState.billDay,value);
  };

  const setBillingDate = (billDay,ecd) =>{
    if(billDay !== "-1" && ecd !== "-1"){
      var value = dayjs(new Date(billDay + ecd.substring(ecd.indexOf("/")))).format("MM/DD/YYYY");
      props.dispatchEvent({
        type: props.fieldList.billingDate,
        value: value,
      });
    }
  }
  

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
          disabled={disabledState && (disableForView || props.detailPageInitialState.screenMode==="CANCEL")}
            checked={params.value}
            onChange={onCheckBoxEnable(params.row.bankAccountNumber)}
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
      field: "bankAccountNumber",
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
            disabled={!params.row.isChecked || disabledState && (disableForView || props.detailPageInitialState.screenMode==="CANCEL")}
            required={false}
            label={""}
            id="amount"
            variant="standard"
            value={params.value === undefined ? 0 :   parseInt(params.value).toLocaleString("en-IN")}
            type="text"
            onChange={onAmountChange(params.row.bankAccountNumber)}
            placeholder={!params.row.isChecked ? "Disabled" : "Enter Amount"}
          />
        );
      },
    },
  ];

  const onAmountChange = (bankAccountNumber) => (event) => {
    const dataMap1 = [];
    props.detailPageInitialState.disbursementFavours.forEach((value) => {
      const dataMap = {
        ...value,
      };
      if (value.bankAccountNumber === bankAccountNumber) {
        dataMap.amount = event.target.value.replaceAll(",","");
      }
      dataMap1.push(dataMap);
    });
    props.dispatchEvent({
      type: props.fieldList.disbursementFavours,
      value: dataMap1,
    });
    //setRowState(dataMap1);
  };

  const onCheckBoxEnable = (bankAccountNumber) => (event) => {
    const dataMap1 = [];
    props.detailPageInitialState.disbursementFavours.forEach((value) => {
      const dataMap = {
        ...value,
      };
      if (value.bankAccountNumber === bankAccountNumber) {
        dataMap.isChecked = !dataMap.isChecked;
      }
      dataMap1.push(dataMap);
    });
    props.dispatchEvent({
      type: props.fieldList.disbursementFavours,
      value: dataMap1,
    });
    //setRowState(dataMap1);
  };

  const onCheckBoxChange = (checkedValue, record) => {
    const allChecked = [...allCheckedValues];
    allChecked[Number(record.id) - 1] = checkedValue;
    setChecked(allChecked);
    const existrows = [...props.detailPageInitialState.disbursementFavours];
    existrows
      .filter((row) => row.id === record.id)
      .forEach((value) => {
        value.isChecked = checkedValue;
      });
    // setRowState(existrows);
    props.dispatchEvent({
      type: props.fieldList.disbursementFavours,
      value: existrows,
    });
  };

  const onCardViewAmountChange = (event, index, record) => {
    const existrows = [...props.detailPageInitialState.disbursementFavours];
    existrows
      .filter((row) => row.id === record.id)
      .forEach((value) => {
        value.isChecked = !value.isChecked;
        value.amount = event.target.value;
      });
    //setRowState(existrows);
    props.dispatchEvent({
      type: props.fieldList.disbursementFavours,
      value: existrows,
    });
  };

  const handleMainCheckBoxChange = (checkedValue) => {
    const allChecked = Array.from({ length: props.detailPageInitialState.disbursementFavours.length }, () => checkedValue);
    setChecked([...allChecked]);
    const existrows = [...props.detailPageInitialState.disbursementFavours];
    existrows.forEach((value) => {
      value.isChecked = checkedValue;
    });
    //setRowState(existrows);
    props.dispatchEvent({
      type: props.fieldList.disbursementFavours,
      value: existrows,
    });
  };

  return (
    <Box sx={{marginTop:"-1%"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Disbursement Number"
            id="disbursementNumber"
            variant="standard"
            value={props.detailPageInitialState.disbNum}
            type="text"
            placeholder="Enter Disbursement Number"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.disbNum,
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
            value={parseInt(props.detailPageInitialState.earlierDisbAmt).toLocaleString("en-IN")}
            type="text"
            placeholder="Enter Earlier Disbursement Amount"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.earlierDisbAmt,
                value: parseInt(event.target.value.replaceAll(",","")),
              });
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState && disableForView}
            required={true && !(disabledState && disableForView)}
            label="Current Disbursement Amount"
            id="currentDisbursementAmount"
            variant="standard"
            value={props.detailPageInitialState.disbAmt === "" ? 0 :   parseInt(props.detailPageInitialState.disbAmt).toLocaleString("en-IN")}
            type="text"
            placeholder="Enter Current Disbursement Amount"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.disbAmt,
                value: event.target.value.replaceAll(",",""),
              });
              props.dispatchEvent({
                type: props.fieldList.totalDisbAmt,
                value: parseInt(event.target.value.replaceAll(",",""))-props.detailPageInitialState.totalDeductionAmt,
              });
              const dataMap1=[...props.detailPageInitialState.disbursementFavours];
              dataMap1[0].amount = parseInt(event.target.value.replaceAll(",",""))-props.detailPageInitialState.totalDeductionAmt;
              props.dispatchEvent({
                type: props.fieldList.disbursementFavours,
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
            value={parseInt(props.detailPageInitialState.totalDeductionAmt).toLocaleString("en-IN")}
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
            value={parseInt(props.detailPageInitialState.totalDisbAmt).toLocaleString("en-IN")}
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
            value={parseInt((props.losInitialState.sanctionAmount)-(props.detailPageInitialState.earlierDisbAmt)-(props.detailPageInitialState.disbAmt)).toLocaleString("en-IN")}
            type="text"
            placeholder="Enter Balance Amount"
          />
        </Grid>

        {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <CustomTextField
                  disabled={disabledState}
                  required={true}
                  label="Rate of Interest(%)"
                  id="rateOfInterest"
                  variant="standard"
                  value={props.detailPageInitialState.rateOfInterest}
                  type="number"
                  placeholder="Enter Rate of Interest."
                  onChange={(event) => {
                    props.dispatchEvent({
                      type: props.fieldList.rateOfInterest,
                      value: event.target.value,
                    });
                  }}
                />
                {props.errorState.roiError[0] && (
                  <p className="error">{props.errorState.roiError[1]}</p>
                )}
                </Grid> */}

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDateField
            disabled={disabledState &&  disableForView}
            required={true && !(disabledState &&  disableForView)}
            label="Disbursement Date"
            id="disbursementDate"
            variant="standard"
            value={props.detailPageInitialState.dateOfDisb}
            type="text"
            placeholder=""
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.dateOfDisb,
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
                  disabled={disabledState &&  disableForView}
                  required={true && !(disabledState &&  disableForView)}
            label="Billing Day"
            id="billDay"
            variant="standard"
            type="text"
            placeholder="Select Billing Day"
            dropDownValue={billDayValues}
            value={props.detailPageInitialState.billDay}
            onChange={onbillDayChange}
          />
          {props.errorState.billDayError[0] && (
            <p className="error">{props.errorState.billDayError[1]}</p>
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            disabled={disabledState}
                  required={true && !(disabledState)}
            label="ECD"
            id="ecd"
            variant="standard"
            type="text"
            placeholder="Select ECD Date"
            dropDownValue={ecdValues}
            value={props.detailPageInitialState.emiCommDate}
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
            value={props.detailPageInitialState.billingDate}
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
            value={props.detailPageInitialState.firstEmiDueDate}
            type="text"
            placeholder=""
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={true}
            required={false}
            label="Request Number"
            id="requestNumber"
            variant="standard"
            value={props.detailPageInitialState.transactionKey}
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
            value={props.detailPageInitialState.requestStatus}
            type="text"
            placeholder="Status"
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

        {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            disabled={disabledState}
            required={true}
            label="SHFL Bank"
            id="shflBank"
            variant="standard"
            value={props.detailPageInitialState.shflBank}
            type="text"
            placeholder="Enter SHFL Bank"
            onChange={(event, value) => {
              props.dispatchEvent({
                type: props.fieldList.shflBank,
                value: event.target.value,
              });
            }}
          />
          {props.errorState.shflBankError[0] && (
                  <p className="error">{props.errorState.shflBankError[1]}</p>
                )}
        </Grid> */}

        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <InputLabel           sx={{ color: "#004A92", fontWeight: 600 }}>{"Remarks"}</InputLabel>
          <TextareaAutosize
          disabled = {disabledState && disableForView}
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
                value: event.target.value,
              });
            }}
          />
        </Grid>

        {props.detailPageInitialState.requestStatus==="Approved" &&
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <InputLabel           sx={{ color: "#004A92", fontWeight: 600 }}>{"Approval Remarks"}</InputLabel>
            <TextareaAutosize
        disabled = {true}
              style={{
                width: "100%",
                marginTop: "3%",
                borderTop: "0px",
                borderLeft: "0px",
                borderRight: "0px",
              }}
              value={props.detailPageInitialState.approvalRemarks}
            />
      </Grid> }

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
        {useMediaQuery("(min-width:1200px)") && (
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
              {props.detailPageInitialState.disbursementFavours.length > 0 && (
                <React.Fragment>
                  <FormControlLabel
                    label="Select All Accounts"
                    labelPlacement="start"
                    control={
                      <Checkbox
                      disabled={disabledState && (disableForView || props.detailPageInitialState.screenMode==="CANCEL")}
                        checked={
                          [...new Set(allCheckedValues)].length === 1
                            ? [...new Set(allCheckedValues)][0]
                              ? true
                              : false
                            : true
                        }
                        indeterminate={
                          [...new Set(allCheckedValues)].length === 1
                            ? [...new Set(allCheckedValues)][0]
                              ? false
                              : false
                            : true
                        }
                        onChange={(event) =>
                          handleMainCheckBoxChange(event.target.checked)
                        }
                      />
                    }
                  />
                </React.Fragment>
              )}
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
                {props.detailPageInitialState.disbursementFavours.map((row, index) => (
                    <React.Fragment>
                    <Grid container direction="column" sx={{ flex: "1 auto" }}>
                        <Card>
                          <CardHeader
                            action={
                              <React.Fragment>
                                {
                                  <LoadActionBtn
                                    record={row}
                                    checked={allCheckedValues[index]}
                                    checkBoxChange={onCheckBoxChange}
                                  disabledState = {disabledState && (disableForView || props.detailPageInitialState.screenMode==="CANCEL")} 
                                  />
                                }
                              </React.Fragment>
                            }
                          subheader={row.bankName + "- " + row.bankAccountNumber}
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
                                {"Account Holder Name : " + row.accHoldrName}
                              </Typography>
                              <Typography padding="1px">
                                {"Account Number : " + row.bankAccountNumber}
                              </Typography>
                              <Typography padding="1px">
                                {"Account Type : " + row.bankAccountType}
                              </Typography>
                              <Typography padding="1px">
                                {"Bank  : " + row.bankName}
                              </Typography>
                              <Typography padding="1px">
                                {"Branch : " + row.bankBranchName}
                              </Typography>
                              <Typography padding="1px">
                                {"IFSC Code : " + row.ifscCode}
                              </Typography>
                              <Typography padding="1px">
                                {"Amount to Disbursed : " + row.amount}
                              </Typography>
                              <CustomTextField
                              disabled={!allCheckedValues[index] || disabledState && (disableForView || props.detailPageInitialState.screenMode==="CANCEL")}
                                required={false}
                                label={"Amount to Disbursed : "}
                                id="amount"
                                variant="standard"
                                value={row.amount}
                                type="number"
                                onChange={(event) =>
                                  onCardViewAmountChange(event, index, row)
                                }
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
                {props.detailPageInitialState.disbursementFavours.length === 0 && (
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

    </Box>
  );
};

export default DisbursementDetails;

const LoadActionBtn = (props) => {
  const [record, setRecord] = React.useState(props.record);
  const [checkedValue, setChecked] = React.useState(false);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.checkBoxChange(event.target.checked, record);
  };
  return (
    <React.Fragment>
      <FormControlLabel
        label=""
        labelPlacement="start"
        control={
          <Checkbox
            disabled={props.disabledState}
            checked={checkedValue}
            onChange={handleChange}
            icon={<CheckBoxOutlineBlank />}
            checkedIcon={<CheckBoxOutlined />}
          />
        }
      />
    </React.Fragment>
  );
};
