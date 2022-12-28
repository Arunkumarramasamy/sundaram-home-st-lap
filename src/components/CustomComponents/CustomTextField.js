import { InputLabel, Stack, TextField } from "@mui/material";
import { useState } from "react";
import "./Custom.css";

const CustomTextField = (props) => {
  return (
    <>
    {/* <Stack direction = "row"> */}<div>
      <InputLabel required={props.required}>{props.label}</InputLabel>
      <TextField
        fullWidth
        id={props.id}
        variant={props.variant}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
        onBlur={props.onBlur}
        error={props.error}
      />
      {/* </Stack> */}
      </div>
    </>
  );
};

export default CustomTextField;
