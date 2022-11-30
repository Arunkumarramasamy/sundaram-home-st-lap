import { useState } from "react";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import FilterCondition from "./FilterCondition";
import NoDataFound from "./NoDataFound";

const VoucherAuthorisation = () => {

    const [showResult,setShowResult] = useState(false);

    const searchButtonClickHandler = (branch,trnNo,show) =>{
        console.log(branch);
        console.log(trnNo);
        setShowResult(show);
    }

    return (
    <>
    <h4>Voucher Authorisation:</h4>
    <FilterCondition onSearchButtonClick={searchButtonClickHandler}/>
    {showResult ? <CurrentDisbursementDetails showGrid={false}/> : <NoDataFound/> }
    </>
    );

};

export default VoucherAuthorisation;