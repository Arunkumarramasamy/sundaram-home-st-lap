import { Backdrop, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../../CustomComponents/CustomButton";
import DisbursementTabIntegrator from "../Disbursement_Common/DisbursementTabIntegrator";

var today = new Date();
var todayDate =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

var disbursementDetailsInitialState = {
  applicationNum: "",
  billingDate: "",
  billDay: "-1",
  dateOfDisb: todayDate,
  disbAmt: 0,
  disbNum: 0,
  transactionKey: 0,
  disbHeaderKey: 0,
  disbursementFavours: [],
  earlierDisbAmt: 0,
  editLock: false,
  effectiveDate: todayDate,
  emiCommDate: "-1",
  firstEmiDueDate: "",
  paymentMode: "RTGS",
  remarks: "",
  approvalRemarks: "",
  requestStatus: "",
  screenMode: "CREATE",
  shflBank: "",
  totalDisbAmt: 0,
  rateOfInterest: 0,
  totalDeductionAmt: 0,
  disbEmiAmt: 0,
};

const DisbursementView = (props) => {
  const [losData, setlosData] = useState({});
  const [billDayValues, setbillDayValues] = useState([]);
  const [deductionTabValue, setdeductionTabValue] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  const screenFields = {
    applicationNum: "applicationNum",
    billingDate: "billingDate",
    billDay: "billDay",
    dateOfDisb: "dateOfDisb",
    disbAmt: "disbAmt",
    disbNum: "disbNum",
    transactionKey: "transactionKey",
    disbHeaderKey: "disbHeaderKey",
    disbursementFavours: "disbursementFavours",
    earlierDisbAmt: "earlierDisbAmt",
    editLock: "editLock",
    effectiveDate: "effectiveDate",
    emiCommDate: "emiCommDate",
    firstEmiDueDate: "firstEmiDueDate",
    paymentMode: "paymentMode",
    remarks: "remarks",
    approvalRemarks: "approvalRemarks",
    requestStatus: "requestStatus",
    shflBank: "shflBank",
    totalDisbAmt: "totalDisbAmt",
    transactionId: "transactionId",
    screenMode: "screenMode",
    rateOfInterest: "rateOfInterest",
    totalDeductionAmt: "totalDeductionAmt",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case screenFields.billingDate:
        return { ...state, billingDate: action.value };
      case screenFields.billDay:
        return { ...state, billDay: action.value };
      case screenFields.dateOfDisb:
        return { ...state, dateOfDisb: action.value };
      case screenFields.disbAmt:
        return { ...state, disbAmt: action.value };
      case screenFields.disbNum:
        return { ...state, disbNum: action.value };
      case screenFields.transactionKey:
        return { ...state, transactionKey: action.value };
      case screenFields.disbursementFavours:
        return { ...state, disbursementFavours: action.value };
      case screenFields.earlierDisbAmt:
        return { ...state, earlierDisbAmt: action.value };
      case screenFields.editLock:
        return { ...state, editLock: action.value };
      case screenFields.effectiveDate:
        return { ...state, effectiveDate: action.value };
      case screenFields.emiCommDate:
        return { ...state, emiCommDate: action.value };
      case screenFields.firstEmiDueDate:
        return { ...state, firstEmiDueDate: action.value };
      case screenFields.paymentMode:
        return { ...state, paymentMode: action.value };
      case screenFields.remarks:
        return { ...state, remarks: action.value };
      case screenFields.approvalRemarks:
        return { ...state, approvalRemarks: action.value };
      case screenFields.requestStatus:
        return { ...state, requestStatus: action.value };
      case screenFields.shflBank:
        return { ...state, shflBank: action.value };
      case screenFields.totalDisbAmt:
        return { ...state, totalDisbAmt: action.value };
      case screenFields.screenMode:
        return { ...state, screenMode: action.value };
      case screenFields.rateOfInterest:
        return { ...state, rateOfInterest: action.value };
      case screenFields.totalDeductionAmt:
        return { ...state, totalDeductionAmt: action.value };
      case "FullMap":
        return { ...action.value };
      // default:
      //   return { ...disbursementDetailsInitialState };
    }
  };

  const [disbursementDetailTabValue, dispatch] = useReducer(
    reducer,
    location.state
  );
  const errorParameters = {
    currentDisbError: "currentDisbError",
    roiError: "roiError",
    ecdError: "ecdError",
    billDayError: "billDayError",
    shflBankError: "shflBankError",
    bankAccountError: "bankAccountError",
    dateOfDisbError: "dateOfDispError",
    overAllError: "overAllError",
    remarksError: "remarksError",
    approvalRemarksError: "approvalRemarksError",
  };

  const errorInitialState = {
    currentDisbError: [
      false,
      "Current Disbursement Amount Cannot be Empty/Zero.",
    ],
    roiError: [false, "Rate of Interest Cannot be Empty/Zero."],
    ecdError: [false, "Please Select Billing Date."],
    billDayError: [false, "Please Select Billing Day."],
    shflBankError: [false, "SHFL Bank Cannot be Empty."],
    bankAccountError: [false, "Please Select Atlease One Bank Account."],
    dateOfDisbError: [false, "Please Select Date of Disbursement"],
    overAllError: false,
    approvalRemarksError: [
      false,
      "Please Enter Approval Remarks less than 4000 characters.",
    ],
    remarksError: [false, "Please Enter Remarks less than 4000 characters."],
  };

  const errorReducer = (state, action) => {
    switch (action.type) {
      case errorParameters.currentDisbError:
        return { ...state, currentDisbError: action.value };
      case errorParameters.roiError:
        return { ...state, roiError: action.value };
      case errorParameters.ecdError:
        return { ...state, ecdError: action.value };
      case errorParameters.billDayError:
        return { ...state, billDayError: action.value };
      case errorParameters.shflBankError:
        return { ...state, shflBankError: action.value };
      case errorParameters.bankAccountError:
        return { ...state, bankAccountError: action.value };
      case errorParameters.dateOfDisbError:
        return { ...state, dateOfDisbError: action.value };
      case errorParameters.overAllError:
        return { ...state, overAllError: action.value };
      case errorParameters.remarksError:
        return { ...state, remarksError: action.value };
      case errorParameters.approvalRemarksError:
        return { ...state, approvalRemarksError: action.value };
      default:
        return { ...errorInitialState };
    }
  };

  const [errorState, errorDispatch] = useReducer(
    errorReducer,
    errorInitialState
  );

  useEffect(() => {
    getBillingDayData();
    getCustomerDataByAppNum();
    getDeductionTabData();
    getCustomerBankData();
    dispatch({
      type: screenFields.screenMode,
      value: props.screenMode,
    });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const getBillingDayData = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/",
    });
    const response = await api.get("/getAllDisbursementBillingDayData");
    setbillDayValues(response.data);
  };

  const getCustomerDataByAppNum = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/losCustomer/",
    });
    const response = await api.post("/getCustomerDataByAppNum", {
      applicationNum: location.state.applicationNum,
    });
    setlosData(response.data);
  };

  const getDeductionTabData = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/additionalfee/",
    });
    const response = await api.post("/getFeeData", {
      applicationNum: location.state.applicationNum,
      type: "accrual",
    });
    let paidTotal1 = 0;
    let dueTotal1 = 0;
    let deductionTotal1 = 0;
    let waivedTotal1 = 0;
    let data = {};
    response.data.gridData.map((rows) => {
      data = {};
      paidTotal1 = paidTotal1 + rows.received;
      dueTotal1 = dueTotal1 + rows.receiveable;
      deductionTotal1 =
        deductionTotal1 + (rows.receiveable - rows.received - rows.earlyWaiver);
      waivedTotal1 = waivedTotal1 + rows.earlyWaiver;
    });
    data.paidTotal = paidTotal1;
    data.dueTotal = dueTotal1;
    data.deductionTotal = deductionTotal1;
    data.waivedTotal = waivedTotal1;
    data.gridRows = response.data.gridData;
    setdeductionTabValue(data);
  };

  const getCustomerBankData = async () => {
    const tempDisbursementFavours =
      disbursementDetailTabValue.disbursementFavours;
    const api = axios.create({
      baseURL: "http://localhost:8080/losCustomer/",
    });
    const response = await api.post("/getCustBankDetailsByAppNum", {
      applicationNum: location.state.applicationNum,
    });
    const tempBankRow = response.data;
    var counter = 1;
    var dataMap = [];
    tempBankRow.map((bankRow) => {
      tempDisbursementFavours.map((insertedBankROw) => {
        if (insertedBankROw.bankAccountNum === bankRow.bankAccountNum) {
          bankRow.isChecked = true;
          bankRow.amount = insertedBankROw.disbAmt;
          bankRow.id = counter++;
          bankRow.disbAccountKey = insertedBankROw.disbAccountKey;
          dataMap.push(bankRow);
        }
      });
    });
    dispatch({
      type: screenFields.disbursementFavours,
      value: dataMap,
    });
  };

  return (
    <>
      {loading ? (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      ) : (
        <>
          <DisbursementTabIntegrator
            losData={losData}
            billDayValues={billDayValues}
            deductionTabValue={deductionTabValue}
            disbursementDetailTabValue={disbursementDetailTabValue}
            screenMode={props.screenMode}
            screenFields={screenFields}
            dispatchEvent={dispatch}
            errorState={errorState}
            screenTitle={props.screenTitle}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomButton
              sx={{ height: "2rem" }}
              variant="contained"
              onClick={() => {
                if (disbursementDetailTabValue.requestStatus === "Approved") {
                  navigate("/stlap/home/disbursementApprovalList");
                } else if (location.state.screenMode === "CREATE") {
                  navigate("/stlap/home/disbursementCreatePortal");
                } else {
                  navigate("/stlap/home/disbursementList");
                }
              }}
            >
              Back to Search
            </CustomButton>
          </Box>
        </>
      )}{" "}
    </>
  );
};

export default DisbursementView;
