import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import CustomTextField from "../CustomComponents/CustomTextField";
import NoDataFound from "../CustomComponents/NoDataFound";
import STButton from "../CustomComponents/STButton";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import FilterCondition from "./FilterCondition";

const VoucherAuthorisation = () => {
  const [showResult, setShowResult] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const searchButtonClickHandler = (branch, trnNo, show) => {
    console.log(branch);
    console.log(trnNo);
    setShowResult(show);
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <h4>Voucher Authorisation:</h4>
      <FilterCondition onSearchButtonClick={searchButtonClickHandler} />
      {showResult ? (
        <CurrentDisbursementDetails showGrid={false} />
      ) : (
        <NoDataFound />
      )}
      {showResult ? (
        <Box>
          <Box sx={{ marginTop: "1.4rem" }}>


          <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="Cheque Number"
            id="chequeNumber"
            variant="outlined"
            value=""
            type="text"
            placeholder="Enter Cheque Number"
          />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CustomTextField
            required={true}
            label="UTRAN Number"
            id="utranNumber"
            variant="outlined"
            value=""
            type="text"
            placeholder="Enter UTRAN Number"
          />
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
