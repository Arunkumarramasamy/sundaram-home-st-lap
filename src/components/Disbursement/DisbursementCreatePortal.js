import { useState } from "react";
import FilterCondition from "./FilterCondition";
import SanctionedList from "./SanctionedList";
import DisbursementDetailPage from "./DisbursementDetailPage";
import { Box } from "@mui/material";
import StlapFooter from "../CustomComponents/StlapFooter";
import * as React from "react";
import { useEffect } from "react";
import axios from "axios";

var today = new Date();

const initialState = {
  tabIndex: "2",
  disbursementList: [],
  sanctionList: [],
  branchNames: [],
  branch: "",
  applicationNumber: "",
  customerName: "",
  coApplicantName: "",
  customerId: "",
  sanctionStatus: "",
  effectiveDate:
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
  applicationDateFromValue:
    today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
  applicationDateToValue:
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
  applicationDate:
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
  customerType: "-1",
  rateOfInterest: "",
  loanAmount: "",
  sanctionedAmount: "",

  disbursementDateFromValue:
    today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
  disbursementDateToValue:
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
  disbursementStatus: "",
  referenceNumber: "",
  screenModeTitle: "",
};

const DisbursementCreatePortal = (props) => {
  const [accordianOpen, setAccordianOpen] = useState(true);
  const [listVisibility, setListVisibility] = useState(props.listVisibility);
  const [searchValues, setSearchValues] = useState(initialState);
  const [rowClickData, setRowClickData] = useState({});
  const [branchNames, setTotalBranchNames] = React.useState([]);
  const [filterConditionState, setFilterConditionState] =
    React.useState(initialState);

  const searchButtonClickHandler = (data) => {
    console.log(data);
    setSearchValues(data);
    filterData(data);
  };

  const filterData = (data) => {
    console.log(data);
    let filterrows = [];
    switch (data.tabIndex) {
      case "2":
        if (data.branch && data.branch !== "") {
          filterrows = filterConditionState.sanctionList.filter(
            (row) => row.branch === data.branch
          );
        }
        if (data.applicationNumber && data.applicationNumber !== "") {
          filterrows = filterrows.filter(
            (row) => row.applicationNumber === data.applicationNumber
          );
        }
        if (data.customerName && data.customerName !== "") {
          filterrows = filterrows.filter(
            (row) => row.customerName === data.customerName
          );
        }
        filterConditionState.sanctionList = [...filterrows];
        setFilterConditionState({ ...filterConditionState });
        break;
      default:
        break;
    }
  };

  const resetFilterData = () => {
    filterConditionState.sanctionList = [...searchValues.sanctionList];
    setFilterConditionState({ ...filterConditionState });
  };

  useEffect(() => {
   getSanctionList();
  }, []);

  const clearButtonClickHandler = (data) => {
    console.log(data);
    resetFilterData();
  };

  const rowDoubleClickHandler = (data) => {
    setListVisibility(!listVisibility);
    const dataMap = {
      ...data,
    };
    dataMap.branchNames = [dataMap.branch];
    setRowClickData(dataMap);
  };

  const getSanctionList = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/losCustomer/"
    });
    const response = await api.get("/getAllData");

    filterConditionState.sanctionList = response.data; 
    const loadBranchNames = [
      ...Array.from(
        new Set([...response.data].map((row) => row.branch))
      ).map((branch) => {
        return {
          label: branch,
        };
      }),
    ];
    setTotalBranchNames(loadBranchNames);
    filterConditionState.branchNames = loadBranchNames;
    filterConditionState.disbursementList = [
      ...filterConditionState.sanctionList,
    ];
    filterConditionState.screenModeTitle = props.screenTitle;
    setFilterConditionState({ ...filterConditionState });
  };

  return (
    <>
      {listVisibility ? (
        <>
          <FilterCondition
            setAccordianOpen={setAccordianOpen}
            disDetailPage={true}
            mode={"Search"}
            initialState={initialState}
            title="Disbursement Request Create"
            onSearchButtonClick={searchButtonClickHandler}
            onClearButtonClick={clearButtonClickHandler}
          />
          <SanctionedList
            accordianOpenState={accordianOpen}
            onRowDoubleClick={rowDoubleClickHandler}
            data={filterConditionState.sanctionList}
          />
        </>
      ) : (
        <DisbursementDetailPage
          searchStateValues={searchValues}
          setListVisibility={setListVisibility}
          accordianOpenState={accordianOpen}
          mode={"CREATE"}
          screenTitle={"Disbursement Request Create"}
          rowClickData={rowClickData}
        />
      )}
      <Box>
        <StlapFooter />
      </Box>
    </>
  );
};

export default DisbursementCreatePortal;
