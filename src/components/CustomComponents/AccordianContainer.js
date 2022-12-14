import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";

const AccordianContainer = (props) => {

    const[openAccordian,setOpenAccordian] = useState(props.initialOpen);
    
    
    return (<Accordion id = {props.id} expanded={openAccordian}  sx = {{width:"100%"}}
    onChange={() => {setOpenAccordian(!openAccordian)} }>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      sx = {{width:'100%'}}
    >
      <Typography><h4>{props.title}</h4></Typography>
    </AccordionSummary>
    <AccordionDetails  sx = {{width:'100%'}}>
        {props.children}
    </AccordionDetails>
    </Accordion>);
};

export default AccordianContainer;