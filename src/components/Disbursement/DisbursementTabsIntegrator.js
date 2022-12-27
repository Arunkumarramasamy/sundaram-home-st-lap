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

const DisbursementTabsIntegrator = (props) => {
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
    disbRequestId: "disbRequestId",
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
    screenMode: "screenMode"
  };
  
 

        const reducer = (state, action) => {
          switch (action.type) {
            case screenFields.billingDate:
            return { ...state, billingDate: action.value };
            case screenFields.billingDay:
            return { ...state, billingDate: action.value };
            case screenFields.dateOfDisb:
            return { ...state, dateOfDisb: action.value };
            case screenFields.disbAmt:
            return { ...state, disbAmt: action.value };
            case screenFields.disbNo:
            return { ...state, disbNo: action.value };
            case screenFields.disbRequestId:
            return { ...state, disbRequestId: action.value };
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
            default:
            return { ...props.detailPageInitialState};
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
      />
      <Box sx={{ width: "100%", marginTop: "2%", backgroundColor: "white" }}>
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
                },
              }}
            >
              <Tab label="Disbursement Details" value="1" />
              <Tab label="Fees Outstanding & Deductions" value="2" />
              <Tab label="Conditions & Deviations" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <DisbursementDetails setListVisibility={props.setListVisibility}  detailPageInitialState={state} dispatchEvent={dispatch} fieldList={screenFields} losInitialState={props.searchStateValues}/>
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
    </>
  );
};
export default DisbursementTabsIntegrator;
