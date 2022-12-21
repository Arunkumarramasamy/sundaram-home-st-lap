import { useState } from "react";
import FilterCondition from "./FilterCondition";
import SanctionedList from "./SanctionedList";
import DisbursementDetailPage from "./DisbursementDetailPage";


var today = new Date();

const initialState = {
  tabIndex: '1',
  applicationNumber: '',
  applicantName: '',
  customerType: " ",
  roi: '',
  loanAmount: '',
  sanctionedAmount: '',
  applicationDateFromValue: ((today.getMonth() + 1) + "/" + "01" + "/" + today.getFullYear()),
  applicationDateToValue: ((today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear()),
  branchName: "",
};


const DisbursementCreatePortal = () =>{

  const[listVisibility,setListVisibility] = useState(true);
  const[isEmptyList,setIsEmptyList] = useState(false);
  const[searchValues,setSearchValues] = useState(initialState);

    const searchButtonClickHandler = (data) => {
      console.log(data);
      setIsEmptyList(true);
      setSearchValues(data);
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
    {listVisibility ? <><FilterCondition mode={"Search"} initialState={initialState} title="Disbursement Request Create" onSearchButtonClick={searchButtonClickHandler} onClearButtonClick={clearButtonClickHandler}/>
    <SanctionedList onRowDoubleClick={rowDoubleClickHandler} emptyList={isEmptyList}/></> : <DisbursementDetailPage searchStateValues={searchValues} setListVisibility={setListVisibility}/> } 

    </>);

};

export default DisbursementCreatePortal;