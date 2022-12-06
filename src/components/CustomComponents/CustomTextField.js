import { InputLabel, TextField } from "@mui/material";
import "./Custom.css";

const CustomTextField = (props) => {

    return (<>
        <InputLabel required={props.required} >{props.label}</InputLabel>
        <TextField  fullWidth  id={props.id}  variant={props.variant}  value={props.value}  type={props.type} placeholder={props.placeholder} disabled={props.disabled}/>
    </>);

};

export default CustomTextField;