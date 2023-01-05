import * as React from "react";
import FilterCondition from "./FilterCondition";
import "../Demo_Disbursement/TabsIntegrator";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DisbursementDetails from "./DisbursementDetails";
import FeesOutstanding from "./FeesOutstanding";
import ConditionsAndDeviations from "./ConditionsAndDeviations";
import { useReducer } from "react";
import { useEffect } from "react";
import CustomButton from "../CustomComponents/CustomButton";
import { useNavigate } from "react-router-dom";

const DisbursementTabsIntegrator = (props) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("1");
  const [accordianOpen, setAccordianOpen] = React.useState(true);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const screenFields = {
    applicationNumber: "applicationNumber",
    billingDate: "billingDate",
    billingDay: "billingDay",
    dateOfDisb: "dateOfDisb",
    disbAmt: "disbAmt",
    disbNo: "disbNo",
    transactionKey: "transactionKey",
    disbursementFavours: "disbursementFavours",
    earlierDisbAmt: "earlierDisbAmt",
    editLock: "editLock",
    effectiveDate: "effectiveDate",
    emiCommDate: "emiCommDate",
    firstEmiDueDate: "firstEmiDueDate",
    paymentMode: "paymentMode",
    remarks: "remarks",
    requestStatus: "requestStatus",
    shflBank: "shflBank",
    totalDisbAmt: "totalDisbAmt",
    transactionId: "transactionId",
    screenMode: "screenMode",
    rateOfInterest: "rateOfInterest",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case screenFields.billingDate:
        return { ...state, billingDate: action.value };
      case screenFields.billingDay:
        return { ...state, billingDay: action.value };
      case screenFields.dateOfDisb:
        return { ...state, dateOfDisb: action.value };
      case screenFields.disbAmt:
        return { ...state, disbAmt: action.value };
      case screenFields.disbNo:
        return { ...state, disbNo: action.value };
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
      default:
        return { ...props.detailPageInitialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, props.detailPageInitialState);

  useEffect(() => {
    dispatch({
      type: screenFields.screenMode,
      value: props.mode,
    });
  }, []);

  return (
    <>
      <FilterCondition
        setAccordianOpen={setAccordianOpen}
        mode={"Detail"}
        disDetailPage={true}
        initialState={props.searchStateValues}
        title={props.searchStateValues.screenModeTitle}
        initialOpen={false}
      />
      <Box sx={{ width: "100%", marginTop: "1rem", backgroundColor: "white" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              backgroundColor: "#eeeeee",
              marginLeft: "2%",
              display: "flex",
            }}
          >
            <TabList
              onChange={handleTabChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ hidden: true }}
              sx={{
                "& button.Mui-selected": {
                  backgroundColor: "#004a92",
                  color: "white",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  borderBottom: "none",
                  minHeight: "0rem",
                  height: "2.3rem"
                },
                "& div.MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                },
                "& button": {
                  outline: "none",
                  marginRight: "0.2rem",
                  background: "#fafafa",
                  color: "#7f7f7f",
                  transition: "all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)",
                  borderBottom: "2px solid #AAAAAA",
                  textTransform: "none",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  backgroundColor: "#D7D7D7",
                  minHeight: "0rem",
                  height: "2.3rem"
                },
              }}
            >
              <Tab label="Disbursement Details" value="1" />
              <Tab label="Fees Outstanding & Deductions" value="2" />
              <Tab label="Conditions & Deviations" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <DisbursementDetails
              setListVisibility={props.setListVisibility}
              detailPageInitialState={state}
              dispatchEvent={dispatch}
              fieldList={screenFields}
              losInitialState={props.searchStateValues}
              errorState={props.errorState}
            />
          </TabPanel>
          <TabPanel value="2">
            <FeesOutstanding
              setListVisibility={props.setListVisibility}
              accordianOpenState={props.accordianOpenState}
              detailPageInitialState={state}
              dispatchEvent={dispatch}
              fieldList={screenFields}
              losInitialState={props.searchStateValues}
            />
          </TabPanel>
          <TabPanel value="3">
            <ConditionsAndDeviations
              setListVisibility={props.setListVisibility}
              accordianOpenState={props.accordianOpenState}
              detailPageInitialState={state}
              dispatchEvent={dispatch}
              fieldList={screenFields}
              losInitialState={props.searchStateValues}
            />
          </TabPanel>
        </TabContext>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.mode === "CREATE" ? (
          <CustomButton
          sx={{height: "2rem"}}
            variant="contained"
            onClick={() => {
              props.createRequestClickHandler(state, props.searchStateValues);
            }}
          >
            Create Request
          </CustomButton>
        ) : props.mode === "MODIFY" ? (
          <CustomButton
          sx={{height: "2rem"}}
            variant="contained"
            onClick={() => {
              props.updateRequestHandler(state, props.searchStateValues);
            }}
          >
            Update Request
          </CustomButton>
        ) : props.mode === "CANCEL" ? (
          <CustomButton
          sx={{height: "2rem"}}
            variant="contained"
            onClick={() => {
              props.cancelRequestHandler(state, props.searchStateValues);
            }}
          >
            Cancel Request
          </CustomButton>
        ) :  props.mode === "APPROVE" ? (
          <CustomButton
          sx={{height: "2rem"}}
            variant="contained"
            onClick={() => {
              props.updateRequestHandler(state, props.searchStateValues);
            }}
          >
            Approve Request
          </CustomButton>
        ) : null}
        <CustomButton
          variant="contained"
          sx={{ marginLeft: "1%",height: "2rem" }}
          onClick={() => {
            if (props.mode === "CREATE") {
              props.setListVisibility(true);
            } else {
              const tempState = {...props.searchStateValues};
              tempState.disbursementStatus = state.requestStatus;
              navigate("/stlap/home/disbursementList",{state:tempState});
            }
          }}
        >
          Back to search
        </CustomButton>
      </Box>
    </>
  );
};
export default DisbursementTabsIntegrator;
