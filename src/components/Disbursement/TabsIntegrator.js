import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import * as React from "react";
import BasicInformation from "./BasicInformation";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import EmiCommencementDate from "./EmiCommencementDate";
import FeesOutstanding from "./FeesOutstanding";
import FilePendingProcess from "./FilePendingProcess";
import "./TabsIntegrator.css";

const TabsIntegrator = (props) => {
  const [value, setValue] = React.useState("1");

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const NavigateToNext = (tabValue) => {
    setValue(tabValue);
  };

  const backButtonClickHandler = () => {
    props.onBackButtonClick();
  };

  return (
    <>
  <BasicInformation dataMap={props.dataMap}/>

      <Box sx={{ width: "100%",marginTop:"2%",  backgroundColor: "white" }}>
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
              <Tab label="File Pending Process" value="1" />
              <Tab label="Fees Outstanding" value="2" />
              <Tab label="Emi Commencement Date" value="3" />
              <Tab label="Current Disbursement Details" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <FilePendingProcess
              nav={NavigateToNext}
              back={backButtonClickHandler}
              dataMap={props.dataMap}
            />
          </TabPanel>
          <TabPanel value="2">
            <FeesOutstanding
              nav={NavigateToNext}
              back={backButtonClickHandler}
              dataMap={props.dataMap}
            />
          </TabPanel>
          <TabPanel value="3">
            <EmiCommencementDate
              nav={NavigateToNext}
              back={backButtonClickHandler}
              dataMap={props.dataMap}
            />
          </TabPanel>
          <TabPanel value="4">
            <CurrentDisbursementDetails
              showGrid={true}
              back={backButtonClickHandler}
              dataMap={props.dataMap}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
export default TabsIntegrator;
