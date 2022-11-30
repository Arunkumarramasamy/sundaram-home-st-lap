import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import FeesOutstanding from "./FeesOutstanding";
import FilePendingProcess from "./FilePendingProcess";
import EmiCommencementDate from "./EmiCommencementDate";
import "./TabsIntegrator.css";
import {  IconButton } from "@mui/material";
import {  ArrowBackTwoTone } from "@mui/icons-material";

const TabsIntegrator = (props) => {

 
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const NavigateToCurrentDis = () => {
    setValue("4");
  };

  const backButtonClickHandler = () => {
    props.onBackButtonClick();
  };

  return (
    <>
 
          <IconButton sx={{ float: "right" }} onClick={backButtonClickHandler} ><ArrowBackTwoTone color="primary" fontSize="large"/></IconButton>
         
      <Box sx={{ width: "100%", backgroundColor: "white" }}>
       
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              backgroundColor: "#eeeeee",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ hidden: true }}
              variant="scrollable"
              allowScrollButtonsMobile
              sx={{
                "& button.Mui-selected": {
                  backgroundColor: "#004a92",
                  color: "white",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  borderBottom: "none",
                },

                "& button": {
                  outline: "none",
                  marginRight: "0.2rem",
                  background: "#fafafa",
                  color: "#7f7f7f",
                  transition: "all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)",
                  borderBottom: "2px solid #AAAAAA",
                  textTransform: "none",
                },
              }}
            >
              <Tab label="File Pending Process" value="1" />
              <Tab label="Fees Outstanding" value="2" />
              <Tab label="Emi Commencement Date" value="3" />
              <Tab label="Current Disbursement Details" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <FilePendingProcess />
          </TabPanel>
          <TabPanel value="2">
            <FeesOutstanding />
          </TabPanel>
          <TabPanel value="3">
            <EmiCommencementDate nav={NavigateToCurrentDis} />
          </TabPanel>
          <TabPanel value="4">
            <CurrentDisbursementDetails showGrid={true}/>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
export default TabsIntegrator;
