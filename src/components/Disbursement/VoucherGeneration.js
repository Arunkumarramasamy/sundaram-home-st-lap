import { useState } from "react";
import CurrentDisbursementDetails from "./CurrentDisbursementDetails";
import FilterCondition from "./FilterCondition";

const VoucherGeneration = () => {

    const [showResult,setShowResult] = useState(false);

    const searchButtonClickHandler = (branch,trnNo,show) =>{
        console.log(branch);
        console.log(trnNo);
        setShowResult(show);
    }


    return (
    <><h4>Authorised Voucher Generation:</h4>
    <FilterCondition onSearchButtonClick={searchButtonClickHandler}/>
    {showResult ? <CurrentDisbursementDetails /> : null }
    </>
    );


};

export default VoucherGeneration;