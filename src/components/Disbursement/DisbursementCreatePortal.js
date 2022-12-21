import { useState } from "react";
import FilterCondition from "./FilterCondition";
import SanctionedList from "./SanctionedList";

const DisbursementCreatePortal = () =>{

  const[listVisibility,setListVisibility] = useState(true);
  const[isEmptyList,setIsEmptyList] = useState(false);

    const searchButtonClickHandler = (data) => {
      console.log(data);
      setIsEmptyList(true);
    };

    const clearButtonClickHandler = (data) => {
      console.log(data);
      setIsEmptyList(false);
    };

    const rowDoubleClickHandler =(data) => {
      console.log(data);
      setListVisibility(!listVisibility);
    };  

    return (
    <>
    {listVisibility ? <><FilterCondition title="Disbursement Request Create:" onSearchButtonClick={searchButtonClickHandler} onClearButtonClick={clearButtonClickHandler}/>
    <SanctionedList onRowDoubleClick={rowDoubleClickHandler} emptyList={isEmptyList}/></> : null } 
    </>);

};

export default DisbursementCreatePortal;