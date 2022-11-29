import FilterCondition from "./FilterCondition";
import BasicInformation from "./BasicInformation";
import { useState } from "react";
import TabsIntegrator from "./TabsIntegrator";

 const Process = () =>{

    const [openProcess,setOpenProcess] = useState(false);
    const [openBasic,setOpenBasic] = useState(false);
    const [showFilter,setShowFilter] = useState(true);

    const searchButtonClickHandler = (branch,trnNo,open) =>{
        setOpenBasic(open);
        setOpenProcess(false);
    }

    const openProcessHandler = () =>{
      setOpenBasic(false);
      setOpenProcess(true);
      setShowFilter(false);
    }

    const backButtonHandler = () => {
        setOpenBasic(false);
        setOpenProcess(false);
        setShowFilter(true);
    }


    return (<>
    { showFilter ? <FilterCondition onSearchButtonClick={searchButtonClickHandler}/> : null  }
    {openBasic ? <BasicInformation onProcessButtonClick={openProcessHandler}/> : null}
    {openProcess ? <TabsIntegrator onBackButtonClick={backButtonHandler}/> : null}
    </>);
};

export default Process;