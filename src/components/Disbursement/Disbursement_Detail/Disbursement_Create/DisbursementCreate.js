import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../../CustomComponents/CustomButton";
import CustomConfirmationDialog from "../../../CustomComponents/CustomConfirmationDialog";
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

const DisbursementCreate = (props) => {
  const [losData, setlosData] = useState({});
  const [billDayValues, setbillDayValues] = useState([]);
  const [deductionTabValue, setdeductionTabValue] = useState({});
  const [loading, setLoading] = useState(true);
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [showGeneratedNumber, setshowGeneratedNumber] = useState(false);
  const [saveData, setsaveData] = useState([]);
  const [requestNumber, setrequestNumber] = useState(0);
  let firstDisbData = null;

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
    listChange: "listChange",
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
      case screenFields.disbHeaderKey:
        return { ...state, disbHeaderKey: action.value };
      case screenFields.listChange:
        return { ...action.value };
      default:
        return { ...disbursementDetailsInitialState };
    }
  };

  const [disbursementDetailTabValue, dispatch] = useReducer(
    reducer,
    disbursementDetailsInitialState
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
    if (response.status === 200) {
      setlosData(response.data);
      dispatch({
        type: screenFields.disbNum,
        value: response.data.disbNum,
      });
      if (response.data.disbNum === 1) {
        dispatch({
          type: screenFields.disbAmt,
          value: response.data.sanctionAmt,
        });
        getDeductionTabData();
      } else {
        const api1 = axios.create({
          baseURL: "http://localhost:8080/disbursement/",
        });
        const response1 = await api1.post("/getFirstDisbByAppNum", {
          applicationNum: location.state.applicationNum,
        });
        if (response1.status === 200) {
          let secondDispAmt =
            response.data.sanctionAmt - response1.data[0].disbAmt;
          dispatch({
            type: screenFields.disbAmt,
            value: secondDispAmt,
          });
          dispatch({
            type: screenFields.earlierDisbAmt,
            value: response1.data[0].disbAmt,
          });
          dispatch({
            type: screenFields.billDay,
            value: response1.data[0].billDay,
          });
          dispatch({
            type: screenFields.billingDate,
            value: response1.data[0].billingDate,
          });
          dispatch({
            type: screenFields.emiCommDate,
            value: response1.data[0].emiCommDate,
          });
          dispatch({
            type: screenFields.firstEmiDueDate,
            value: response1.data[0].firstEmiDueDate,
          });
          dispatch({
            type: screenFields.disbHeaderKey,
            value: response1.data[0].disbHeaderKey,
          });
          dispatch({
            type: screenFields.transactionKey,
            value: response1.data[0].transactionKey,
          });
          firstDisbData = response1.data[0];
          getDeductionTabData();
        }
      }
    }
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
    if (!(firstDisbData === null)) {
      dispatch({
        type: screenFields.totalDeductionAmt,
        value: data.deductionTotal - firstDisbData.totalDeductionAmt,
      });
    } else {
      dispatch({
        type: screenFields.totalDeductionAmt,
        value: data.deductionTotal,
      });
    }
    setdeductionTabValue(data);
  };

  const getCustomerBankData = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/losCustomer/",
    });

    const response = await api.post("/getCustBankDetailsByAppNum", {
      applicationNum: location.state.applicationNum,
    });
    const dataMap = response.data;
    var counter = 1;
    {
      dataMap.map((row, index) => {
        row.isChecked = false;
        row.amount = 0;
        row.id = counter++;
      });
    }

    dispatch({
      type: screenFields.disbursementFavours,
      value: dataMap,
    });
  };

  const validateCreateRequestData = (data, losData) => {
    var status = true;

    //Validating Current Disbursement Amount Field
    if (
      data.disbAmt === 0 ||
      data.disbAmt === null ||
      data.disbAmt === "" ||
      data.disbAmt === "0" ||
      data.disbAmt === "00"
    ) {
      errorDispatch({
        type: errorParameters.currentDisbError,
        value: [true, "Current Disbursement Amount Cannot be Empty/Zero."],
      });
      status = false;
    } else if (data.disbAmt > losData.sanctionAmt) {
      errorDispatch({
        type: errorParameters.currentDisbError,
        value: [
          true,
          "Current Disbursement Amount Cannot be Greater than Sanction Amount.",
        ],
      });
      status = false;
    } else if (data.totalDisbAmt <= 0) {
      errorDispatch({
        type: errorParameters.currentDisbError,
        value: [
          true,
          "Net Disbursement Amount Cannot be Less than Zero or Equal to Zero.",
        ],
      });
      status = false;
    } else if (errorState.currentDisbError[0]) {
      errorDispatch({
        type: errorParameters.currentDisbError,
        value: [false, "Current Disbursement Amount Cannot be Empty/Zero."],
      });
    }

    //Validation Date of Disbursement
    if (data.dateOfDisb === 0 || data.dateOfDisb === null) {
      errorDispatch({
        type: errorParameters.dateOfDisbError,
        value: [true, "Date of Disbursement Cannot be Empty."],
      });
      status = false;
    } else if (errorState.dateOfDisbError[0]) {
      errorDispatch({
        type: errorParameters.dateOfDisbError,
        value: [false, "Date of Disbursement Cannot be Empty."],
      });
    }

    //Validating ECD Field
    if (data.emiCommDate === "-1") {
      errorDispatch({
        type: errorParameters.ecdError,
        value: [true, "Please Select ECD Date."],
      });
      status = false;
    } else if (errorState.ecdError[0]) {
      errorDispatch({
        type: errorParameters.ecdError,
        value: [false, "Please Select ECD Date."],
      });
    }

    //Validating Billing  Day Field
    if (data.billDay === "-1") {
      errorDispatch({
        type: errorParameters.billDayError,
        value: [true, "Please Select Billing Day."],
      });
      status = false;
    } else if (errorState.billDayError[0]) {
      errorDispatch({
        type: errorParameters.billDayError,
        value: [false, "Please Select Billing Day."],
      });
    }

    // validating remarks fields length.
    if (data.remarks && String(data.remarks).length > 4000) {
      errorDispatch({
        type: errorParameters.remarksError,
        value: [true, "Please Enter Remarks less than 4000 Characters."],
      });
      status = false;
    } else if (
      data.approvalRemarks &&
      String(data.approvalRemarks).length > 4000
    ) {
      errorDispatch({
        type: errorParameters.approvalRemarksError,
        value: [
          true,
          "Please Enter Approval Remarks less than 4000 Characters.",
        ],
      });
      status = false;
    }

    //Validating Bank Grid
    if (data.disbursementFavours.length === 0) {
      errorDispatch({
        type: errorParameters.bankAccountError,
        value: [
          true,
          "*No Bank Account Linked For this Application . Please Add Bank Account in Loan Origination System.",
        ],
      });
      status = false;
    } else {
      var bankAccountSelectionCount = 0;
      var totalAmountSelected = 0;
      var netDisbAmt = data.disbAmt - data.totalDeductionAmt;
      data.disbursementFavours
        .filter((row) => row.isChecked === true)
        .forEach((row) => {
          bankAccountSelectionCount++;
          totalAmountSelected =
            totalAmountSelected + row.amount ? row.amount : 0;
        });

      if (bankAccountSelectionCount === 0) {
        errorDispatch({
          type: errorParameters.bankAccountError,
          value: [true, "Please Select Atleast one Bank Account."],
        });
        status = false;
      } else if (totalAmountSelected < netDisbAmt) {
        errorDispatch({
          type: errorParameters.bankAccountError,
          value: [true, "Amount to be Sent is Less than Disbursement Amount."],
        });
        status = false;
      } else if (totalAmountSelected > netDisbAmt) {
        errorDispatch({
          type: errorParameters.bankAccountError,
          value: [
            true,
            "Amount to be Sent is Greater than Disbursement Amount.",
          ],
        });
        status = false;
      } else if (errorState.bankAccountError[0]) {
        errorDispatch({
          type: errorParameters.bankAccountError,
          value: [false, "Please Select Atleast one Bank Account."],
        });
      }
    }
    return status;
  };

  const createRequestHandler = (data, losData) => {
    data.totalDisbAmt = data.disbAmt - data.totalDeductionAmt;
    if (validateCreateRequestData(data, losData)) {
      const dataMap = [];
      data.disbursementFavours
        .filter((row) => row.isChecked === true)
        .forEach((row) => {
          const dataMap1 = {
            id: row.bankAccountNum,
            applicationNum: row.applicationNum,
            bankAccountNum: row.bankAccountNum,
            createdBy: "",
            createdDate: "",
            disbAmt: row.amount,
            disbHeaderKey: data.disbHeaderKey,
            disbNum: data.disbNum,
            lastModifiedBy: "",
            lastModifiedDate: "",
            disbAccountKey: "",
          };
          dataMap.push(dataMap1);
        });
      data.disbursementFavours = dataMap;
      data.dateOfDisb = new Date(data.dateOfDisb);
      data.effectiveDate = new Date(data.effectiveDate);
      data.applicantName = losData.customerName;
      data.branch = losData.branch;
      data.applicationNum = losData.applicationNum;
      data.requestStatus = "Requested";
      const validatedData = [];
      validatedData.push(data);
      validatedData.push(losData);
      setsaveData(validatedData);
      setshowConfirmation(true);
    }
  };

  const updateSecondDisbursementData = async (data, losData) => {
    data.requestStatus = "Requested";
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/",
    });
    const response = await api.post("/updateDisbursement", data);
    if (response.status === 200) {
      const updateModel = {
        applicationNum: losData.applicationNum,
        disbNum: 2,
        losStatus: "Fully Requested",
      };
      const api1 = axios.create({
        baseURL: "http://localhost:8080/losCustomer/",
      });
      const response1 = await api1.post("/updateCustomerData", updateModel);
      setTimeout(() => {
        navigate("/stlap/home/disbursementCreatePortal");
      }, 600);
    }
  };

  const insertDisbursementDataToDB = async (data, losData) => {
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/",
    });
    const response = await api.post("/insertDisbursement", data);
    if (response.status === 200) {
      let updateModel = {};
      if (data.disbAmt === losData.sanctionAmt) {
        updateModel = {
          applicationNum: losData.applicationNum,
          disbNum: 1,
          losStatus: "Fully Requested",
        };
      } else if (data.disbNum === 1) {
        updateModel = {
          applicationNum: losData.applicationNum,
          disbNum: 2,
          losStatus: "Partially Requested",
        };
      } else if (data.disbNum === 2) {
        updateModel = {
          applicationNum: losData.applicationNum,
          disbNum: 2,
          losStatus: "Fully Requested",
        };
      }
      const api1 = axios.create({
        baseURL: "http://localhost:8080/losCustomer/",
      });
      const response1 = await api1.post("/updateCustomerData", updateModel);
      if (response1.status === 200) {
        setshowGeneratedNumber(true);
        setrequestNumber(response.data.transactionKey);
      }
    }
  };

  const confirmationOkClickHandler = () => {
    setshowConfirmation(false);
    if (saveData[1].disbNum === 2) {
      updateSecondDisbursementData(saveData[0], saveData[1]);
    } else {
      insertDisbursementDataToDB(saveData[0], saveData[1]);
    }
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
            screenMode="CREATE"
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
                navigate("/stlap/home/disbursementCreatePortal");
              }}
            >
              Back to Search
            </CustomButton>

            <CustomButton
              sx={{ height: "2rem", marginLeft: "1%" }}
              variant="contained"
              onClick={() => {
                const dataValues = { ...disbursementDetailTabValue };
                createRequestHandler(dataValues, losData);
              }}
            >
              Create Request
            </CustomButton>
          </Box>
          <CustomConfirmationDialog
            dialogOpen={showConfirmation}
            onDialogClose={() => {
              setshowConfirmation(false);
            }}
            dialogTitle={"Confirmation"}
            dialogContent={"Do You Really want to Create Request ?"}
            cancelButtonName={"Cancel"}
            hideCancelButton={false}
            okButtonName={"Yes"}
            onOkClick={confirmationOkClickHandler}
          />
          <CustomConfirmationDialog
            dialogOpen={showGeneratedNumber}
            onDialogClose={() => {
              setshowGeneratedNumber(false);
              // const dataValue = { ...disbursementDetailTabValue };
              // dataValue.screenMode = props.screenMode;
              // navigate("/stlap/home/disbursementView", {
              //   state: dataValue,
              // });
              navigate("/stlap/home/disbursementCreatePortal");
            }}
            dialogTitle={
              <Typography sx={{ color: "green" }}>"Save Success!"</Typography>
            }
            dialogContent={"Generated Request Number is :" + requestNumber}
            hideCancelButton={true}
            okButtonName={"OK"}
            onOkClick={() => {
              setshowGeneratedNumber(false);
              // const dataValue = { ...disbursementDetailTabValue };
              // dataValue.screenMode = props.screenMode;
              // navigate("/stlap/home/disbursementView", {
              //   state: dataValue,
              // });
              navigate("/stlap/home/disbursementCreatePortal");
            }}
          />
        </>
      )}{" "}
    </>
  );
};

export default DisbursementCreate;
