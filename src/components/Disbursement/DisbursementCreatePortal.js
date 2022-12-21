import { useState } from "react";
import FilterCondition from "./FilterCondition";
import SanctionedList from "./SanctionedList";

const DisbursementCreatePortal = () =>{

  const[listVisibility,setListVisibility] = useState(true);

    const searchButtonClickHandler = (data) => {
      console.log(data);
    };

    const clearButtonClickHandler = (data) => {
      console.log(data);
    };

    const rowDoubleClickHandler =(data) => {
      console.log(data);
      setListVisibility(!listVisibility);
    };  

    return (
    <>
    <FilterCondition title="Disbursement Request Create:" onSearchButtonClick={searchButtonClickHandler} onClearButtonClick={clearButtonClickHandler}/>
    {listVisibility ? <SanctionedList onRowDoubleClick={rowDoubleClickHandler}/> : null } 
    </>);

};

export default DisbursementCreatePortal;