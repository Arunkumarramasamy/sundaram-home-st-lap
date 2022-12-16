import { InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import "./Custom.css";

const CustomTextField = (props) => {
    const [textValue,setTextValue] = useState('');
  return (
    <>
      <InputLabel required={props.required}>{props.label}</InputLabel>
      <TextField
        fullWidth
        id={props.id}
        variant={props.variant}
        onChange={(event) => setTextValue(event.target.value)}
        value={textValue}
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        // onChange={props.onChange}
      />
    </>
  );
};

export default CustomTextField;
 