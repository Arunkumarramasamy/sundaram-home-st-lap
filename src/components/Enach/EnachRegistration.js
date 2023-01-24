import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { React, useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomTextField from "../CustomComponents/CustomTextField";

const EnachRegistration = () => {
  const [paymentType, setPayMentType] = useState("netbank");

  const handleChange = (event) => {
    setPayMentType(event.target.value);
  };
  return (
    <div id="enach">
      <Box>
        <AccordianContainer
          id="accord"
          title="E-Nach Mandate"
          initialOpen={true}
          sx={{ margin: "8px !important" }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="text"
                label="Applicant Name"
                variant="standard"
                value={""}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="text"
                label="Branch"
                variant="standard"
                value={""}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="text"
                label="Mobile Number"
                variant="standard"
                value={""}
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CustomTextField
                type="text"
                label="Mail Id"
                variant="standard"
                value={""}
                disabled={true}
              />
            </Grid>
          </Grid>
          <h4 sx={{ margin: "8px" }}>Customer Bank Details</h4>
          <div style={{width:"fit-content", wordWrap:'nowrap'}}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            <Stack direction="row">
              <FormControlLabel
                sx={{ width: "100%" }}
                value="true"
                control={<Radio checked={true} />}
                label="Existing Customer"
              />
              <FormControlLabel
                sx={{ width: "100%" }}
                value="true"
                control={<Radio checked={false} />}
                label="New Customer"
              />
            </Stack>
          </RadioGroup>
          </div>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={6}
              xl={12}
              sx={{ marginTop: "8px" }}
            >
              <Paper sx={{ padding: "8px" ,background:'#e9e9e9'}}>
                <CustomTextField
                  type="text"
                  label="Bank Name"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Account Number"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Account Type"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="IFSC Code"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Branch"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={6}
              xl={12}
              sx={{ marginTop: "8px" }}
            >
              <Paper sx={{ padding: "8px" ,background:'#e9e9e9' }}>
                <CustomTextField
                  type="text"
                  label="Emi Amount"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Nach Amount"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
                <Stack direction="row" spacing={1}>
                  <CustomTextField
                    type="text"
                    label="Mandate Start Date"
                    variant="standard"
                    value={""}
                    disabled={true}
                  />
                  <CustomTextField
                    type="text"
                    label="Mandate End Date"
                    variant="standard"
                    value={""}
                    disabled={true}
                  />
                </Stack>
                <CustomTextField
                  type="text"
                  label="Frequency"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
                <CustomTextField
                  type="text"
                  label="Debit Type"
                  variant="standard"
                  value={""}
                  disabled={true}
                />
              </Paper>
            </Grid>
            <FormControl
              component="fieldset"
              sx={{ margin: "8px", marginRight: "8px" }}
            >
              <FormLabel
                sx={{ marginTop: "8px", marginRight: "8px" }}
                component="legend"
              >
                Mode of payment For Registeration
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                handleChange={(event) => handleChange(event)}
                value={paymentType}
              >
                <Stack direction="row">
                  <FormControlLabel
                    value="netbank"
                    labelPlacement="end"
                    control={<Radio />}
                    label="Net Banking"
                  />
                  <FormControlLabel
                    value="debit"
                    labelPlacement="end"
                    control={<Radio />}
                    label="Debit Card"
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
            <div
              style={{ padding: "8px", marginTop: useMediaQuery("(min-width:400px)")?"24px":"0px", marginLeft:'130px', direction: "rtl" }}
            >
              <Button variant="contained" sx={{ fontWeight: "bold" }}>
                Update
              </Button>
            </div>
          </Grid>
        </AccordianContainer>
      </Box>
    </div>
  );
};
export default EnachRegistration;
