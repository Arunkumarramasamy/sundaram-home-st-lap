import FilterCondition from "./FilterCondition";
import SanctionedList from "./SanctionedList";

const DisbursementCreatePortal = () =>{

    const searchButtonClickHandler = (data) => {

        console.log(data);
 
      };

    return (
    <>
    <FilterCondition title="Disbursement Request Create:" onSearchButtonClick={searchButtonClickHandler}/>
    <SanctionedList />
    </>);

};

export default DisbursementCreatePortal;