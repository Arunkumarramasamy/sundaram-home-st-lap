import * as React from "react";
import FilterCondition from "./FilterCondition";
import "../Demo_Disbursement/TabsIntegrator";

const TabsIntegrator = (props) => {
 
  return (
    <>
   <FilterCondition mode={"Detail"} initialState={props.searchStateValues} title="Disbursement Request Create" />
    </>
  );
};
export default TabsIntegrator;
