import { Box } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetBranchDetails from "../../CustomComponents/GetBranchDetails";
import StlapFooter from "../../CustomComponents/StlapFooter";
import FilterCondition from "./FilterCondition";
import SanctionedList from "./SanctionedList";

var today = new Date();

const initialState = {
  tabIndex: "2",
  disbursementList: [],
  sanctionList: [],
  branchNames: [],
  branch: "",
  applicationNum: "",
  customerName: "",
  coApplicantName: "",
  customerId: "",
  sanctionStatus: "",
  effectiveDate: dayjs(
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
  ).format("DD/MM/YYYY"),
  applicationDateFromValue: dayjs(
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
  ).format("DD/MM/YYYY"),
  applicationDateToValue: dayjs(
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
  ).format("DD/MM/YYYY"),
  applicationDate: null,
  customerType: "-1",
  rateOfInterest: "",
  loanAmt: "",
  sanctionAmt: "",

  disbursementDateFromValue: null,
  disbursementDateToValue: dayjs(
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear()
  ).format("DD/MM/YYYY"),
  disbursementStatus: "",
  referenceNumber: "",
  screenModeTitle: "",
};

const DisbursementCreatePortal = (props) => {
  const [accordianOpen, setAccordianOpen] = useState(true);
  const [searchValues, setSearchValues] = useState(initialState);
  const [branchNames, setTotalBranchNames] = React.useState([]);
  const [filterConditionState, setFilterConditionState] =
    React.useState(initialState);

  const navigate = useNavigate();

  const searchButtonClickHandler = (data) => {
    setSearchValues(data);
    filterData(data);
  };

  const filterData = (data) => {
    let filterrows = [];
    // reset the autofill & retain back later.
    updateFilterAutoFill(initialState);
    switch (data.tabIndex) {
      // for this filter use the disbursement list field on state since it contains all the sancation records all time.
      case "2":
        if (data.branch && data.branch !== "") {
          filterrows = filterConditionState.disbursementList.filter(
            (row) => row.branch === data.branch
          );
          filterConditionState.branch = data.branch;
        } else {
          filterConditionState.branch = "";
        }
        if (data.applicationNum && data.applicationNum !== "") {
          filterrows = filterrows.filter(
            (row) => row.applicationNum === data.applicationNum
          );
          // since this filter is for sancation list, so 1  application number has only one record.
          updateFilterAutoFill(filterrows[0]);
        } else {
          // when app no not filled, means search operated with other individual fields.
          // reset all.
          updateFilterAutoFill(initialState);
        }
        if (data.customerName && data.customerName !== "") {
          filterrows = filterrows.filter(
            (row) => row.customerName === data.customerName
          );
          filterConditionState.customerName = data.customerName;
        }
        if (
          data.rateOfInterest &&
          data.rateOfInterest !== "" &&
          Number(data.rateOfInterest) !== 0
        ) {
          filterrows = filterrows.filter(
            (row) => String(row.rateOfInterest) === String(data.rateOfInterest)
          );
          filterConditionState.rateOfInterest = data.rateOfInterest;
        }
        if (data.loanAmt && data.loanAmt !== "" && Number(data.loanAmt) !== 0) {
          filterrows = filterrows.filter(
            (row) => String(row.loanAmt) === String(data.loanAmt)
          );
          filterConditionState.loanAmt = data.loanAmt;
        }
        if (
          data.sanctionAmt &&
          data.sanctionAmt !== "" &&
          Number(data.sanctionAmt) !== 0
        ) {
          filterrows = filterrows.filter(
            (row) => String(row.sanctionAmt) === String(data.sanctionAmt)
          );
          filterConditionState.sanctionAmt = data.sanctionAmt;
        }
        const applicationDate = data.applicationDate
          ? dayjs(data.applicationDate).format("DD/MM/YYYY")
          : data.applicationDate;
        if (applicationDate && applicationDate !== "") {
          filterrows = filterrows.filter(
            (row) =>
              dayjs(row.applicationDate).format("DD/MM/YYYY") ===
              applicationDate
          );
          filterConditionState.applicationDate = data.applicationDate;
        } else {
          filterConditionState.applicationDate = null;
        }
        filterConditionState.sanctionList = [...filterrows];
        setFilterConditionState({ ...filterConditionState });
        break;
      default:
        break;
    }
  };

  const updateFilterAutoFill = (data) => {
    // this method updates or removes other fields auto fill data to retain back
    filterConditionState.applicationNum = data.applicationNum;
    filterConditionState.customerName = data.customerName;
    filterConditionState.customerType = data.customerType;
    filterConditionState.rateOfInterest = data.rateOfInterest;
    filterConditionState.loanAmt = data.loanAmt;
    filterConditionState.sanctionAmt = data.sanctionAmt;
    filterConditionState.applicationDate = dayjs(data.applicationDate).format(
      "DD/MM/YYYY"
    );
  };

  const resetFilterData = () => {
    filterConditionState.branch = "";
    updateFilterAutoFill(initialState);
    getSanctionList();
  };

  useEffect(() => {
    const loadBranchNames = GetBranchDetails();
    setTotalBranchNames(loadBranchNames);
    filterConditionState.branchNames = loadBranchNames;
    getSanctionList();
  }, []);

  const clearButtonClickHandler = (data) => {
    resetFilterData();
  };

  const rowDoubleClickHandler = (data) => {
    navigate("/stlap/home/disbursementCreate", { state: data });
  };

  const getSanctionList = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/losCustomer/",
    });
    const response = await api.get("/getAllData");
    const dataMap = [];
    response.data.map((sanctionRow) => {
      // if (!((sanctionRow.losStatus === "Fully Disbursed") ||
      //  (sanctionRow.losStatus === "Partially Requested") || (sanctionRow.losStatus === "Fully Requested"))) {
      dataMap.push(sanctionRow);
      // }
    });
    filterConditionState.sanctionList = dataMap;
    filterConditionState.disbursementList = [
      ...filterConditionState.sanctionList,
    ];
    filterConditionState.screenModeTitle = props.screenTitle;
    setFilterConditionState({ ...filterConditionState });
  };

  const loadDataonBranchChange = (branchValue) => {
    if (branchValue) {
      filterConditionState.branch = branchValue;
      const listData = [...{ ...filterConditionState }.disbursementList];
      const tempData = listData.filter((row) => row.branch === branchValue);
      filterConditionState.sanctionList = tempData;
      // for now hold all the disbursement list data all the time.
      //filterConditionState.disbursementList = [...tempData];
      setFilterConditionState({ ...filterConditionState });
    } else {
      resetFilterData();
    }
  };

  return (
    <>
      <FilterCondition
        setAccordianOpen={setAccordianOpen}
        disDetailPage={true}
        mode={"Search"}
        initialState={filterConditionState}
        title="Disbursement Request Create"
        onSearchButtonClick={searchButtonClickHandler}
        onClearButtonClick={clearButtonClickHandler}
        initialOpen={true}
        onBranchChange={loadDataonBranchChange}
      />
      <SanctionedList
        accordianOpenState={accordianOpen}
        onRowDoubleClick={rowDoubleClickHandler}
        data={filterConditionState.sanctionList}
      />

      <Box>
        <StlapFooter />
      </Box>
    </>
  );
};

export default DisbursementCreatePortal;
