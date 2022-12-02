import FilterCondition from "./FilterCondition";
import BasicInformation from "./BasicInformation";
import { useState } from "react";
import TabsIntegrator from "./TabsIntegrator";
import NoDataFound from "../CustomComponents/NoDataFound";
import { Box, Button } from "@mui/material";

const Process = () => {
  const [openProcess, setOpenProcess] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const [showFilter, setShowFilter] = useState(true);

  const searchButtonClickHandler = (branch, trnNo, open) => {
    setOpenBasic(open);
    setOpenProcess(false);
  };

  const openProcessHandler = () => {
    setOpenBasic(false);
    setOpenProcess(true);
    setShowFilter(false);
  };

  const backButtonHandler = () => {
    setOpenBasic(false);
    setOpenProcess(false);
    setShowFilter(true);
  };



  return (
    <>
      
      {showFilter ? (<>
        <h4>Disbursement Basic Search:</h4>
        <FilterCondition onSearchButtonClick={searchButtonClickHandler} /></>
      ) : null}
      {openBasic ? (<>
          <h4>Basic Information:</h4>
        <BasicInformation  />
        <Box
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={openProcessHandler}>
          Process
        </Button>
      </Box></>
      ) : openProcess ? null : (
        <NoDataFound />
      )}
      {openProcess ? (
        <TabsIntegrator onBackButtonClick={backButtonHandler} />
      ) : null}
    </>
  );
};

export default Process;
