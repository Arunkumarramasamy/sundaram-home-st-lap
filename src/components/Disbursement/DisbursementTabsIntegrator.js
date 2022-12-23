import * as React from "react";
import FilterCondition from "./FilterCondition";
import "../Demo_Disbursement/TabsIntegrator";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DisbursementDetails from "./DisbursementDetails";
import FeesOutstanding from "./FeesOutstanding";
import ConditionsAndDeviations from "./ConditionsAndDeviations";

const DisbursementTabsIntegrator = (props) => {
  const [value, setValue] = React.useState("1");
  const [accordianOpen,setAccordianOpen] = React.useState(true);



  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <>
   <FilterCondition setAccordianOpen={setAccordianOpen} mode={"Detail"} initialState={props.searchStateValues} title="Disbursement Request Create" />
   <Box sx={{ width: "100%",marginTop:"2%",  backgroundColor: "white" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              backgroundColor: "#eeeeee",
              marginLeft:"2%",
              display:"flex"
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
                  backgroundColor:"#D7D7D7",
                },
              }}
            >
              <Tab label="Disbursement Details" value="1" />
              <Tab label="Fees Outstanding & Deductions" value="2" />
              <Tab label="Conditions & Deviations" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
           <DisbursementDetails setListVisibility={props.setListVisibility}/>
          </TabPanel>
          <TabPanel value="2">
           <FeesOutstanding setListVisibility={props.setListVisibility}/>
          </TabPanel>
          <TabPanel value="3">
           <ConditionsAndDeviations setListVisibility={props.setListVisibility}/>
          </TabPanel>

        </TabContext>
    
      </Box>
    </>
  );
};
export default DisbursementTabsIntegrator;
