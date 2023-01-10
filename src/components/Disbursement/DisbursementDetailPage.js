import { Close } from "@mui/icons-material";
import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DisbursementRequestListService } from "./DisbursementRequestListService";
import DisbursementTabsIntegrator from "./DisbursementTabsIntegrator";

var today = new Date();
var todayDate =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

var detailPageInitialState = {
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

var losInitialState = {
  branchNames: [],
  branchName: "Branch Name",
  applicationNum: "Application Number",
  applicantName: "Applicant Name",
  coApplicantName: "Co Applicant Name",
  customerId: "Customer ID",
  sanctionStatus: "Approved",
  effectiveDate: todayDate,
  applicationDateFromValue:
    today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
  applicationDateToValue: todayDate,
  applicationDate: todayDate,
  customerType: "New",
  rateOfInterest: "0",
  loanAmt: "0",
  sanctionAmt: "0",
  screenModeTitle: "",
  requestNumber: "",
  memoDeduction: "0",
};

var deductionsInitialState = {
  paidTotal: 0,
  dueTotal: 0,
  deductionTotal: 0,
  waivedTotal: 0,
  gridRows: [],
};

const losCustomerApi = axios.create({
  baseURL: "http://localhost:8080/losCustomer/",
});

const DisbursementDetailPage = (props) => {
  const location = useLocation();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [showSnackBar, setshowSnackBar] = useState(false);
  const [snackBarMsg, setsnackBarMsg] = useState("Empty SnackBar");
  const [openReferenceDialog, setopenReferenceDialog] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [losData, setLosData] = useState({});
  const [urnContent, seturnContent] = useState("");
  const [deductionsState, setDeductionsState] = useState(
    deductionsInitialState
  );

  const service = new DisbursementRequestListService();

  const closeDialogHandler = () => {
    setopenReferenceDialog(false);
    navigate("/stlap/home/disbursementView", { state: responseData });
  };

  const errorParameters = {
    currentDisbError: "currentDisbError",
    roiError: "roiError",
    ecdError: "ecdError",
    billDayError: "billDayError",
    shflBankError: "shflBankError",
    bankAccountError: "bankAccountError",
    dateOfDisbError: "dateOfDispError",
    overAllError: "overAllError",
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
      default:
        return { ...errorInitialState };
    }
  };

  const [errorState, errorDispatch] = useReducer(
    errorReducer,
    errorInitialState
  );

  useEffect(() => {
    losInitialState = props.rowClickData ? props.rowClickData : losInitialState;
    detailPageInitialState.applicationNum = losInitialState.applicationNum;
    if (!(location.state === null)) {
      getDisbursementData(location.state);
      losInitialState.screenModeTitle = props.screenTitle;
    } else {
      losInitialState.screenModeTitle = props.screenTitle;
      getCustomerBankDataForCreate(losInitialState.applicationNum);
    }
    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);
    // window.addEventListener('popstate', (e) => {
    //   // navigate back to same page and alert user and re-render.
    //   window.history.go(1);
    //   const url = window.location.pathname;
    //   console.log(url);
    //   navigate(url,losData);
    //   alertUser(e);
    // });
    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
      // window.removeEventListener("popstate", alertUser);
    };
  }, []);

  const handleTabClosing = async () => {
    if (props.mode !== "VIEW") {
      const api = axios.create({
        baseURL: "http://localhost:8080/disbursement/",
      });
      const response = await api.post("/editLockUpdate", {
        disbHeaderKey: detailPageInitialState.disbHeaderKey,
        screenMode: props.mode,
      });
    }
  };

  const alertUser = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  useLayoutEffect(() => {
    if (props.mode === "CREATE" && losInitialState.disbNum === 1) {
      detailPageInitialState.totalDisbAmt =
        parseInt(detailPageInitialState.disbAmt) -
        detailPageInitialState.totalDeductionAmt;
    }
  }, [deductionsState]);

  const getDeductionsGridData = async () => {
    const response = await axios.post(
      "http://localhost:8080/additionalfee/getFeeData",
      {
        applicationNum: losInitialState.applicationNum,
        type: "accrual",
      }
    );
    let paidTotal1 = 0;
    let dueTotal1 = 0;
    let deductionTotal1 = 0;
    let waivedTotal1 = 0;
    let data = { ...deductionsInitialState };
    response.data.gridData.map((rows) => {
      data = {};
      paidTotal1 = paidTotal1 + rows.received;
      dueTotal1 = dueTotal1 + rows.receiveable;
      deductionTotal1 =
        deductionTotal1 + (rows.receiveable - rows.received - rows.earlyWaiver);
      waivedTotal1 = waivedTotal1 + rows.earlyWaiver;
      data.paidTotal = paidTotal1;
      data.dueTotal = dueTotal1;
      data.deductionTotal = deductionTotal1;
      data.waivedTotal = waivedTotal1;
    });
    if (props.mode === "CREATE") {
      detailPageInitialState.totalDeductionAmt = data.deductionTotal;
    }
    data.gridRows = response.data.gridData;
    setDeductionsState(data);
  };

  const getCustomerBankDataForCreate = async (applicationNum) => {
    const response = await losCustomerApi.post("/getCustBankDetailsByAppNum", {
      applicationNum: applicationNum,
    });
    var counter = 1;
    {
      response.data.map(
        (row, index) => ((row.isChecked = false), (row.id = counter++))
      );
    }
    detailPageInitialState.disbursementFavours = response.data;
    detailPageInitialState.rateOfInterest = losInitialState.rateOfInterest;
    getDeductionsGridData();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const getDetailPageData = async (record, mode) => {
    const response = await service.getDisbursementData({
      disbHeaderKey: record.disbHeaderKey,
      screenMode: mode,
    });
    detailPageInitialState = response.data;
    const tempDisbursementFavours = detailPageInitialState.disbursementFavours;
    const api1 = axios.create({
      baseURL: "http://localhost:8080/losCustomer/",
    });
    const response1 = await losCustomerApi.post("/getCustBankDetailsByAppNum", {
      applicationNum: detailPageInitialState.applicationNum,
    });
    const tempBankRow = response1.data;
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
    detailPageInitialState.disbursementFavours = dataMap;
    const response2 = await losCustomerApi.post("/getCustomerDataByAppNum", {
      applicationNum: detailPageInitialState.applicationNum,
    });
    losInitialState = response2.data;
    losInitialState.branchNames = [];
    losInitialState.screenModeTitle = props.screenTitle;
    getDeductionsGridData();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const getDisbursementData = async (data) => {
    detailPageInitialState = getDetailPageData(data, props.mode);
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
          losStatus: "Fully Disbursed",
        };
      } else if (data.disbNum === 1) {
        updateModel = {
          applicationNum: losData.applicationNum,
          disbNum: 2,
          losStatus: "Partially Disbursed",
        };
      } else if (data.disbNum === 2) {
        updateModel = {
          applicationNum: losData.applicationNum,
          disbNum: 2,
          losStatus: "Fully Disbursed",
        };
      }
      const response1 = await losCustomerApi.post(
        "/updateCustomerData",
        updateModel
      );
      if (response1.status === 200) {
        setResponseData(response.data);
        setsnackBarMsg("Disbursement Request Created Successfully.");
        setshowSnackBar(true);
        setLoading(false);
        seturnContent(
          <Typography>
            Generated Reference Number is : {response.data.transactionKey}
          </Typography>
        );
        setopenReferenceDialog(true);
      }
    }

    const updateDisbursementDataToDB = async (data, losData) => {
      const api = axios.create({
        baseURL: "http://localhost:8080/disbursement/",
      });
      const response = await api.post("/updateDisbursement", data);
      if (response.status === 200) {
        if (data.screenMode === "CANCEL") {
          setsnackBarMsg("Disbursement Request Cancelled Successfully.");
        } else if (data.screenMode === "MODIFY") {
          setsnackBarMsg("Disbursement Request Modified Successfully.");
        } else {
          setsnackBarMsg("Disbursement Request Approved Successfully.");
        }
        setshowSnackBar(true);
        setLoading(false);
        navigate("/stlap/home/disbursementView", { state: data });
      }
    };

    const validateCreateRequestData = (data, losData) => {
      var status = true;

      //Validating Current Disbursement Amount Field
      if (data.disbAmt === 0 || data.disbAmt === null) {
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
            value: [
              true,
              "Amount to be Sent is Less than Disbursement Amount.",
            ],
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
        value: [true, "Amount to be Sent is Greater than Disbursement Amount."],
      });
      status = false;
    } else if (errorState.bankAccountError[0]) {
      errorDispatch({
        type: errorParameters.bankAccountError,
        value: [false, "Please Select Atleast one Bank Account."],
      });
    }
  };
  setLoading(status);
  return status;
};

const createRequestHandler = (data, losData) => {
  setLoading(true);
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
    data.requestStatus = "Requested";
    insertDisbursementDataToDB(data, losData);
  }
};

const updateRequestHandler = (disbursementData, losData) => {
  setLoading(true);
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
    } else if (disbursementData.screenMode === "APPROVE") {
      disbursementData.requestStatus = "Approved";
    }
  }

  const updateDisbursementDataToDB = async (data, losData) => {
    const api = axios.create({
      baseURL: "http://localhost:8080/disbursement/",
    });
    const response = await api.post("/updateDisbursement", data);
    if (response.status === 200) {
      if (data.screenMode === "CANCEL") {
        setsnackBarMsg("Disbursement Request Cancelled Successfully.");
      } else if (data.screenMode === "MODIFY") {
        setsnackBarMsg("Disbursement Request Modified Successfully.");
      } else {
        setsnackBarMsg("Disbursement Request Approved Successfully.");
      }
      setshowSnackBar(true);
      setLoading(false);
      navigate("/stlap/home/disbursementView", { state: data });
    }
  };

  const validateCreateRequestData = (data, losData) => {
    var status = true;

    //Validating Current Disbursement Amount Field
    if (data.disbAmt === 0 || data.disbAmt === null) {
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
    setLoading(status);
    return status;
  };

  const createRequestHandler = (data, losData) => {
    setLoading(true);
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
      data.requestStatus = "Requested";
      insertDisbursementDataToDB(data, losData);
    }
  };

  const updateRequestHandler = (disbursementData, losData) => {
    setLoading(true);
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
      } else if (disbursementData.screenMode === "APPROVE") {
        disbursementData.requestStatus = "Approved";
      }

      updateDisbursementDataToDB(disbursementData, losData);
    }
  };

  const handleSnackBarClose = () => {
    setshowSnackBar(false);
  };

  return (
    <>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={1000}
        message={snackBarMsg}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={handleSnackBarClose}
          >
            <Close />
          </IconButton>
        }
      />
      <Dialog
        open={openReferenceDialog}
        onClose={closeDialogHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{urnContent}</DialogTitle>

        <DialogActions>
          <Button autoFocus onClick={closeDialogHandler}>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {loading ? (
        <>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <DisbursementTabsIntegrator
            setListVisibility={props.setListVisibility}
            searchStateValues={losInitialState}
            accordianOpenState={props.accordianOpenState}
            mode={props.mode}
            detailPageInitialState={detailPageInitialState}
            createRequestClickHandler={createRequestHandler}
            updateRequestHandler={updateRequestHandler}
            cancelRequestHandler={updateRequestHandler}
            errorState={errorState}
            deductionsState={deductionsState}
            setLoading={setLoading}
          />
        </>
      ) : (
        <>
          <DisbursementTabsIntegrator
            setListVisibility={props.setListVisibility}
            searchStateValues={losInitialState}
            accordianOpenState={props.accordianOpenState}
            mode={props.mode}
            detailPageInitialState={detailPageInitialState}
            createRequestClickHandler={createRequestHandler}
            updateRequestHandler={updateRequestHandler}
            cancelRequestHandler={updateRequestHandler}
            errorState={errorState}
            deductionsState={deductionsState}
            setLoading={setLoading}
          />
        </>
      )}
    </>
  );
};

export default DisbursementDetailPage;
