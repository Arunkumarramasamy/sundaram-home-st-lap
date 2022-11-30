import { useState } from "react";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import FilterCondition from "./FilterCondition";
import NoDataFound from "./NoDataFound";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import STButton from "../CustomComponents/STButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const VoucherAuthorisation = () => {
  const [showResult, setShowResult] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const searchButtonClickHandler = (branch, trnNo, show) => {
    console.log(branch);
    console.log(trnNo);
    setShowResult(show);
  };
  const [ReadValue] = useState(false);
  const [dummyValue] = useState("");
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      {/* <h4>Voucher Authorisation:</h4> */}
      <FilterCondition onSearchButtonClick={searchButtonClickHandler} />
      {showResult ? (
        <CurrentDisbursementDetails showGrid={false} />
      ) : (
        <NoDataFound />
      )}
      {showResult ? (
        <Box>
          <Box sx={{ marginTop: "1.4rem" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={1} sx={{ alignItems: "center" }}>
                  <Grid item sm={12} lg={4} xs={12}>
                    <InputLabel required sx={{ color: "#7f7f7f" }}>
                      Cheque Number
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} lg={8} sm={12}>
                    <TextField
                      disabled={ReadValue}
                      id="outlined-basic"
                      variant="outlined"
                      placeholder="Enter Cheque Number"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={1} sx={{ alignItems: "center" }}>
                  <Grid item sm={12} lg={4} xs={12}>
                    <InputLabel required sx={{ color: "#7f7f7f" }}>
                      UTRAN Number
                    </InputLabel>
                  </Grid>
                  <Grid item xs={12} lg={8} sm={12}>
                    <TextField
                      disabled={ReadValue}
                      id="outlined-basic"
                      variant="outlined"
                      placeholder="Enter UTRAN Number"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <STButton variant="contained" onClick={handleClickOpen}>
              Approve
            </STButton>
          </Box>
        </Box>
      ) : null}
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Approval</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to Approve the Voucher ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VoucherAuthorisation;
