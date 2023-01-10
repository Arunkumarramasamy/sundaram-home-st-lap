import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

export default function CustomConfirmationDialog(props) {
  return (
    <div>
      <Dialog
        open={props.dialogOpen}
        onClose={props.onDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.hideCancelButton ? null : (
            <Button onClick={props.onDialogClose}>
              {props.cancelButtonName}
            </Button>
          )}
          <Button onClick={props.onOkClick} autoFocus>
            {props.okButtonName}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
