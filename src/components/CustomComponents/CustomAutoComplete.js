import { Autocomplete, FormControl, InputLabel, TextField } from "@mui/material";
import "./Custom.css";

const CustomAutoComplete = (props) => {
    

    return (<>
        <InputLabel required={props.required} >{props.label}</InputLabel>
        <FormControl fullWidth  ><Autocomplete  id={props.id} value={props.value}   disabled={props.disabled} onChange={props.onChange} onBlur={props.onBlur} options={props.autoCompleteValues}   renderInput={(params) => <TextField {...params} variant={props.variant} placeholder={props.placeholder}/>} /></FormControl>
    </>);

};

export default CustomAutoComplete;
 