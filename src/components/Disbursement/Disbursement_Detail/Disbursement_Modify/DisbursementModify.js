import { Backdrop, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../../CustomComponents/CustomButton";
import CustomConfirmationDialog from "../../../CustomComponents/CustomConfirmationDialog";
import CustomSnackBar from "../../../CustomComponents/CustomSnackBar";
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

const DisbursementModify = (props) => {
  const [losData, setlosData] = useState({});
  const [billDayValues, setbillDayValues] = useState([]);
  const [deductionTabValue, setdeductionTabValue] = useState({});
  const [deductionTabSaveValue, setdeductionTabSaveValue] = useState({});
  const [loading, setLoading] = useState(true);
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [saveData, setsaveData] = useState([]);
  const [showSnackBar, setshowSnackBar] = useState(false);
  const [snackBarMessage, setsnackBarMessage] = useState("");
  const [dialogMessage, setdialogMessage] = useState(
    "Do You Want to Update this Request?"
  );

  const navigate = useNavigate();
  const location = useLocation();

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

    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);

    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
      // event to call extra for default on component unmount on navigate using sidemenu was below.
      handleTabClosing();
    };
  }, []);

  const handleTabClosing = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/",
    });
    const response = await api.post("/editLockUpdate", {
      disbHeaderKey: disbursementDetailTabValue.disbHeaderKey,
      screenMode: props.screenMode,
    });
  };

  const alertUser = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

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
    let saveData = [];
    response.data.gridData.map((rows) => {
      data = {};
      let saveData1 = {};
      saveData1 = {
        applicationNum: location.state.applicationNum,
        received:
          rows.received + (rows.receiveable - rows.received - rows.earlyWaiver),
        details: rows.details,
      };
      saveData.push(saveData1);
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
    setdeductionTabSaveValue(saveData);
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
          "Current Disbursement Amount Cannot be Less than or Equal to Total Deduction Amount.",
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
      var netDisbAmt = data.totalDisbAmt;
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

  const updateRequestHandler = (disbursementData, losData) => {
    if (validateCreateRequestData(disbursementData, losData)) {
      const dataMap = [];
      disbursementData.disbursementFavours
        .filter((row) => row.isChecked === true)
        .forEach((row) => {
          const dataMap1 = {
            id: row.bankAccountNum,
            applicationNum: row.applicationNum,
            bankAccountNum: row.bankAccountNum,
            createdBy: "",
            createdDate: "",
            disbAmt: row.amount,
            disbHeaderKey: disbursementData.disbHeaderKey,
            disbNum: disbursementData.disbNum,
            lastModifiedBy: "",
            lastModifiedDate: "",
            disbAccountKey: row.disbAccountKey,
          };
          dataMap.push(dataMap1);
        });
      disbursementData.disbursementFavours = dataMap;
      disbursementData.dateOfDisb = new Date(disbursementData.dateOfDisb);
      disbursementData.effectiveDate = new Date(disbursementData.effectiveDate);
      disbursementData.applicantName = losData.customerName;
      disbursementData.branch = losData.branch;
      if (disbursementData.screenMode === "CANCEL") {
        disbursementData.requestStatus = "Cancelled";
        setdialogMessage("Do You Want to Cancel this Request?");
      } else if (disbursementData.screenMode === "APPROVE") {
        disbursementData.requestStatus = "Approved";
        setdialogMessage("Do You Want to Approve this Request?");
      }
      setTimeout(() => {
        const validatedData = [];
        validatedData.push(disbursementData);
        validatedData.push(losData);
        setsaveData(validatedData);
        setshowConfirmation(true);
      }, 300);
    }
  };

  const updateDisbursementDataToDB = async (data, losData) => {
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/",
    });
    const response = await api.post("/updateDisbursement", data);
    if (response.status === 200) {
      if (data.screenMode === "CANCEL") {
        changeLosStatusOnCancel(losData);
        setsnackBarMessage("Disbursement Request Cancelled Successfully.");
      } else if (data.screenMode === "MODIFY") {
        setsnackBarMessage("Disbursement Request Modified Successfully.");
      } else {
        setLosStatus(losData);
        setsnackBarMessage("Disbursement Request Approved Successfully.");
      }
      setshowSnackBar(true);
      setTimeout(() => {
        const dataValue = { ...response.data };
        dataValue.screenMode = props.screenMode;
        navigate("/stlap/home/disbursementView", {
          replace: true,
          state: dataValue,
        });
      }, 600);
    }
  };

  const confirmationOkClickHandler = () => {
    setshowConfirmation(false);
    updateDisbursementDataToDB(saveData[0], saveData[1]);
  };

  const removeEditLock = async (disbHeaderKey, screenMode) => {
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/",
    });
    const response = await api.post("/editLockUpdate", {
      disbHeaderKey: disbHeaderKey,
      screenMode: screenMode,
    });
  };

  const changeLosStatusOnCancel = async (losData) => {
    let updateModel = {};
    if (losData.losStatus === "Fully Requested") {
      updateModel = {
        applicationNum: losData.applicationNum,
        disbNum: losData.disbNum,
        losStatus: losData.disbNum === 1 ? "Sanctioned" : "Partially Disbursed",
      };
    } else if (losData.losStatus === "Partially Requested") {
      updateModel = {
        applicationNum: losData.applicationNum,
        disbNum: losData.disbNum,
        losStatus: losData.disbNum === 1 ? "Sanctioned" : "Partially Disbursed",
      };
    }
    const api1 = axios.create({
      baseURL: "http://localhost:8080/losCustomer/",
    });
    const response1 = await api1.post("/updateCustomerData", updateModel);
  };

  const setLosStatus = async (losData) => {
    let updateModel = {};
    if (losData.losStatus === "Fully Requested") {
      updateModel = {
        applicationNum: losData.applicationNum,
        disbNum: losData.disbNum,
        losStatus: "Fully Disbursed",
      };
    } else if (losData.losStatus === "Partially Requested") {
      updateModel = {
        applicationNum: losData.applicationNum,
        disbNum: 2,
        losStatus: "Partially Disbursed",
      };
    }
    const api1 = axios.create({
      baseURL: "http://localhost:8080/losCustomer/",
    });
    const response1 = await api1.post("/updateCustomerData", updateModel);
    updateDeductionsData();
  };

  const updateDeductionsData = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/additionalfee/",
    });
    const response1 = await api.post(
      "/updateReceivedAmount",
      deductionTabSaveValue
    );
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
              onClick={async () => {
                removeEditLock(
                  disbursementDetailTabValue.disbHeaderKey,
                  props.screenMode
                );
                if (
                  props.screenMode === "MODIFY" ||
                  props.screenMode === "CANCEL"
                ) {
                  navigate("/stlap/home/disbursementList", { replace: true });
                } else {
                  navigate("/stlap/home/disbursementApprovalList", {
                    replace: true,
                  });
                }
              }}
            >
              Back to Search
            </CustomButton>
            {props.screenMode === "MODIFY" ? (
              <CustomButton
                sx={{ height: "2rem", marginLeft: "1%" }}
                variant="contained"
                onClick={() => {
                  const dataValues = { ...disbursementDetailTabValue };
                  updateRequestHandler(dataValues, losData);
                }}
              >
                Update Request
              </CustomButton>
            ) : props.screenMode === "CANCEL" ? (
              <CustomButton
                sx={{ height: "2rem", marginLeft: "1%" }}
                variant="contained"
                onClick={() => {
                  const dataValues = { ...disbursementDetailTabValue };
                  updateRequestHandler(dataValues, losData);
                }}
              >
                Cancel Request
              </CustomButton>
            ) : (
              <CustomButton
                sx={{ height: "2rem", marginLeft: "1%" }}
                variant="contained"
                onClick={() => {
                  const dataValues = { ...disbursementDetailTabValue };
                  updateRequestHandler(dataValues, losData);
                }}
              >
                Approve Request
              </CustomButton>
            )}
          </Box>
          <CustomConfirmationDialog
            dialogOpen={showConfirmation}
            onDialogClose={() => {
              setshowConfirmation(false);
            }}
            dialogTitle={"Confirmation"}
            dialogContent={dialogMessage}
            cancelButtonName={"Cancel"}
            hideCancelButton={false}
            okButtonName={"Yes"}
            onOkClick={confirmationOkClickHandler}
          />
          <CustomSnackBar
            showSnackbar={showSnackBar}
            autoHideDuration={600}
            onClose={() => {
              setshowSnackBar(false);
            }}
            message={snackBarMessage}
            color={"green"}
          />
        </>
      )}{" "}
    </>
  );
};

export default DisbursementModify;
