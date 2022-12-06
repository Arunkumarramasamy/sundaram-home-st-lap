import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";

const AccordianContainer = (props) => {

    const[openAccordian,setOpenAccordian] = useState(props.initialOpen);
    
    
    return (<Accordion expanded={openAccordian} onChange={() => {setOpenAccordian(!openAccordian)} }>
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography><h4>{props.title}</h4></Typography>
    </AccordionSummary>
    <AccordionDetails>
        {props.children}
    </AccordionDetails>
    </Accordion>);
};

export default AccordianContainer;