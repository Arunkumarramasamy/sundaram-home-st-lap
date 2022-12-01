import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./EnachMandate.css";
import CustomerInformation from "./CustomerInformation";
import DebitDetails from "./DebitDetails";

import Mandate from "./Mandate";
import StButton from "./CustomStyles/StButton";
const EnachMandate = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <StButton
          variant="contained"
          sx={{
            marginBottom: "0.8rem",
          }}
        >
          Register
        </StButton>
      </Box>
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
                },
              }}
            >
              <Tab label="Customer Information" value="1" />
              <Tab label="Debit Account Details" value="2" />
              <Tab label="Mandate Information" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <CustomerInformation />
          </TabPanel>
          <TabPanel value="2">
            <DebitDetails />
          </TabPanel>
          <TabPanel value="3">
            <Mandate />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
export default EnachMandate;
