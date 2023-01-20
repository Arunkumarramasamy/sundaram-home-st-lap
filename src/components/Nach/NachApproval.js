import {
  Button,
  Dialog,
  Grid,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomTextField from "../CustomComponents/CustomTextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import GetBranchDetails from "../CustomComponents/GetBranchDetails";
const NachApproval = () => {
  //Filter conditions State value
  const [branchArray, setBranchArray] = useState([]);
  const [branchValue, setBranchValue] = useState();
  const [applicationArray, setApplicationArray] = useState([]);
  const [applicationValue, setApplicationValue] = useState();

  /**Dialog Handlers */
  const [Dialogopen, setDialogOpen] = useState(false);

  //  Methods to update state values
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const rejectButtonHandler = () => {
    setDialogOpen(true);
  };
  useEffect(() => {
    const branchArr = GetBranchDetails();
    setBranchArray(branchArr);
  }, []);
  return (
    <Box sx={{ padding: "18px", backgroundColor: "white" }}>
      <h4>Nach Approval</h4>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            variant="standard"
            type="text"
            placeholder="Select Branch"
            label="Branch"
            autoCompleteValues={branchArray}
            value={branchValue}
            onChange={(e, value) => {
              setBranchValue(value == null ? "" : value.label);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomAutoComplete
            variant="standard"
            type="text"
            placeholder="Select Application Number"
            label="Application Number"
            autoCompleteValues={applicationArray}
            value={applicationValue}
            onChange={(value) => {
              setApplicationValue(value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="UMRN Number"
            variant="standard"
            placeholder="Enter UMRN Number"
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Customer ID"
            variant="standard"
            placeholder="Enter Customer ID"
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Customer Name"
            variant="standard"
            placeholder="Enter Customer Name"
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Mandate Number"
            variant="standard"
            placeholder="Enter Mandate Number"
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            type="text"
            label="Mandate Bank"
            variant="standard"
            placeholder="Enter Mandate Bank"
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomDropDown
            label="Status"
            variant="standard"
            dropDownValue={[
              { key: 0, value: "accept", text: "Accept" },
              { key: 1, value: "reject", text: "Reject" },
            ]}
          />
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "18px" }}
      >
        {/* <Button variant="contained" type="submit" sx={{ height: "2rem" }}>
          Accept
        </Button>
        <Button
          sx={{
            marginLeft: "1rem",
            color: "white",
            backgroundColor: "black",
            height: "2rem",
          }}
          onMouseOver={({ target }) => {
            target.style.backgroundColor = "black";
            target.style.color = "white";
          }}
          variant="contained"
          onClick={rejectButtonHandler}
        >
          Reject
        </Button> */}
        <Button variant="contained" type="submit" sx={{ height: "2rem" }}>
          Submit
        </Button>
      </Box>
      <Dialog
        open={Dialogopen}
        onClose={handleDialogClose}
        sx={{
          "& div.css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            width: "90%",
          },
        }}
      >
        <DialogTitle>
          <h4>Remarks</h4>
        </DialogTitle>
        <DialogContent>
          <InputLabel
            id="accrual-waiver-remark"
            sx={{ color: "#004A92", marginTop: "8px" }}
            required={false}
          >
            Remark
          </InputLabel>
          <TextareaAutosize
            id="accrual-textarea"
            maxRows={4}
            required={true}
            aria-label="maximum height"
            style={{
              width: "100%",
              height: "100px",
              borderRadius: "4px",
              resize: "none",
              outline: "none",
              fontFamily: "inherit",
              fontSize: "inherit",
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              marginLeft: "1rem",
              color: "white",
              backgroundColor: "black",
              fontWeight: "bold",
            }}
            onMouseOver={({ target }) => {
              target.style.backgroundColor = "black";
              target.style.color = "white";
            }}
            variant="contained"
            onClick={handleDialogClose}
          >
            Cancel
          </Button>

          <Button
            sx={{ fontWeight: "bold" }}
            variant="contained"
            onClick={handleDialogClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NachApproval;
