import FilterCondition from "./FilterCondition";
import BasicInformation from "./BasicInformation";

 const Process = () =>{

    const searchButtonClickHandler = (branch,trnNo) =>{
        console.log(branch);
        console.log(trnNo);
    }
    return (<>
    <FilterCondition onSearchButtonClick={searchButtonClickHandler}/>
    <BasicInformation /></>);
};

export default Process;