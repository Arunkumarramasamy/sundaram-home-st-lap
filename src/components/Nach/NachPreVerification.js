import { Button, Dialog, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import CustomTextField from "../CustomComponents/CustomTextField";
import { Box } from "@mui/system";
import GetBranchDetails from "../CustomComponents/GetBranchDetails";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";

const NachPreVerification = () => {
  // Loading Branches
  const [branchArray, setBranchArray] = useState([]);
  const [branchValue, setBranchValue] = useState("");
  /**Dialog Handlers */
  const [Dialogopen, setDialogOpen] = React.useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  //Nach-PreverificationHandler
  const nachPreVerificationButtonHandler = () => {
    setDialogOpen(true);
  };
  useEffect(() => {
    const branchValues = GetBranchDetails();
    setBranchArray(branchValues);
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "6px 6px 0px 6px",
        }}
      >
        <Button
          sx={{ fontWeight: "bold" }}
          variant="contained"
          onClick={nachPreVerificationButtonHandler}
        >
          Nach Pre Verification
        </Button>
      </Box>
      <Dialog open={Dialogopen} onClose={handleDialogClose}>
        <DialogTitle>
          <h4>Nach Pre verification</h4>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomAutoComplete
                variant="standard"
                type="text"
                placeholder="Select Branch"
                label="Branch"
                autoCompleteValues={branchArray}
                value={branchValue}
                onChange={(event, newValue) => {
                  setBranchValue(newValue);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="UMRN Number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Application Number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Customer ID"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Mandate Number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Mandate Bank"
                variant="standard"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ fontWeight: "bold" }}
            variant="contained"
            onClick={handleDialogClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NachPreVerification;
