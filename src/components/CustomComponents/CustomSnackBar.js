import Snackbar from "@mui/material/Snackbar";
import * as React from "react";

export default function CustomSnackBar(props) {
  return (
    <div>
      <Snackbar
        open={props.showSnackbar}
        autoHideDuration={props.autoHideDuration}
        onClose={props.onClose}
        message={props.message}
        color={props.color}
      />
    </div>
  );
}
