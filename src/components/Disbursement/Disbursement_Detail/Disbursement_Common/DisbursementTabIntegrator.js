import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import BasicInformation from "./BasicInformation";
import ConditionsAndDeviationsTab from "./ConditionsAndDeviationsTab";
import DisbursementDetailsTab from "./DisbursementDetailsTab";
import FeeOutstandingAndDeductionsTab from "./FeeOutstandingAndDeductionsTab";

const DisbursementTabsIntegrator = (props) => {
  const [tabValue, settabValue] = useState("1");
  const [accordianOpen, setAccordianOpen] = useState(true);

  const handleTabChange = (event, newValue) => {
    settabValue(newValue);
  };

  return (
    <>
      <BasicInformation
        losData={props.losData}
        screenMode={props.screenMode}
        setAccordianOpen={setAccordianOpen}
        screenTitle={props.screenTitle}
        disbursementDetailTabValue={props.disbursementDetailTabValue}
      />
      <Box sx={{ width: "100%", marginTop: "1rem", backgroundColor: "white" }}>
        <TabContext value={tabValue}>
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
                  height: "2.3rem",
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
                  height: "2.3rem",
                },
              }}
            >
              <Tab label="Disbursement Details" value="1" />
              <Tab label="Fees Outstanding & Deductions" value="2" />
              <Tab label="Conditions & Deviations" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <DisbursementDetailsTab
              losData={props.losData}
              billDayValues={props.billDayValues}
              disbursementDetailTabValue={props.disbursementDetailTabValue}
              screenMode={props.screenMode}
              screenFields={props.screenFields}
              dispatchEvent={props.dispatchEvent}
              errorState={props.errorState}
            />
          </TabPanel>
          <TabPanel value="2">
            <FeeOutstandingAndDeductionsTab
              losData={props.losData}
              deductionTabValue={props.deductionTabValue}
            />
          </TabPanel>
          <TabPanel value="3">
            <ConditionsAndDeviationsTab losData={props.losData} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default DisbursementTabsIntegrator;
