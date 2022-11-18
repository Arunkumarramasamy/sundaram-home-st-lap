import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./EnachMandate.css";
import CustomerInformation from "./CustomerInformation";
import DebitDetails from "./DebitDetails";
import Button from "@mui/material/Button";
import Mandate from "./Mandate";
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
        <Button className="sub_btn" variant="contained">
          Register e-Nach
        </Button>
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
              indicatorColor="white"
              variant="scrollable"
              allowScrollButtonsMobile
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
