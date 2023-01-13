import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { React } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomTextField from "../CustomComponents/CustomTextField";

const EnachRegistration = () => {
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
        </AccordianContainer>
      </Box>
    </div>
  );
};
export default EnachRegistration;
