import { Box, Button, Grid } from "@mui/material";
import React from "react";
import CustomTextField from "../CustomComponents/CustomTextField";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomDateField from "../CustomComponents/CustomDateField";
import CustomDateRangeField from "../CustomComponents/CustomDateRangeField";
import { useReducer } from "react";
import { useState } from "react";
import { Backspace, Search } from "@mui/icons-material";
import axios from "axios";
import dayjs from "dayjs";
import { useLayoutEffect } from "react";

const filterValues = {
  tabIndex: "tabIndex",
  branch: "branch",
  applicationNum: "applicationNum",
  customerName: "customerName",
  coApplicantName: "coApplicantName",
  customerId: "customerId",
  losStatus: "losStatus",
  effectiveDate: "effectiveDate",
  applicationDateFromValue: "applicationDateFromValue",
  applicationDateToValue: "applicationDateToValue",
  applicationDate: "applicationDate",
  customerType: "customerType",
  rateOfInterest: "rateOfInterest",
  loanAmt: "loanAmt",
  sanctionAmt: "sanctionAmt",
  disbursementDateFromValue: "disbursementDateFromValue",
  disbursementDateToValue: "disbursementDateToValue",
  requestNumber: "requestNumber",
  disbursementStatus: "disbursementStatus",
};

var today = new Date();

const FilterCondition = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case filterValues.tabIndex:
        return { ...state, tabIndex: action.value };
      case filterValues.branch:
        return { ...state, branch: action.value };
      case filterValues.applicationNum:
        return { ...state, applicationNum: action.value };
      case filterValues.customerName:
        return { ...state, customerName: action.value };
      case filterValues.coApplicantName:
        return { ...state, coApplicantName: action.value };
      case filterValues.customerId:
        return { ...state, customerId: action.value };
      case filterValues.losStatus:
        return { ...state, losStatus: action.value };
      case filterValues.effectiveDate:
        return { ...state, effectiveDate: action.value };
      case filterValues.applicationDate:
        return { ...state, applicationDate: action.value };
      case filterValues.applicationDateFromValue:
        return { ...state, applicationDateFromValue: action.value };
      case filterValues.applicationDateToValue:
        return { ...state, applicationDateToValue: action.value };
      case filterValues.customerType:
        return { ...state, customerType: action.value };
      case filterValues.rateOfInterest:
        return { ...state, rateOfInterest: action.value };
      case filterValues.loanAmt:
        return { ...state, loanAmt: action.value };
      case filterValues.sanctionAmt:
        return { ...state, sanctionAmt: action.value };
      case filterValues.disbursementDateFromValue:
        return { ...state, disbursementDateFromValue: action.value };
      case filterValues.disbursementDateToValue:
        return { ...state, disbursementDateToValue: action.value };
      case filterValues.disbursementStatus:
        return { ...state, disbursementStatus: action.value };
      case filterValues.requestNumber:
        return { ...state, requestNumber: action.value };
      default:
        return { ...props.initialState, tabIndex: state.tabIndex };
    }
  };

  useLayoutEffect(() => {
    updateFieldsData(filterValues.branch, state.branch);
  }, [props.initialState]);

  const updateAutoCompleteFields = (field, value) => {
    // on branch change need to load data from backend so dispatch event back to parent.
    if (field === filterValues.branch && value) {
      props.onBranchChange(value);
    }
  };

  const updateFieldsData = (field, value) => {
    let dataList = value
      ? [...state.disbursementList].filter((row) => row[field] === value)
      : field === filterValues.branch
      ? []
      : // the other case is clear of application number
        [...state.disbursementList].filter(
          (row) => row.branch === state.branch
        );
    if (dataList.length > 1) {
      // based on branch select dynamic load of application numbers
      if (!value && field === filterValues.applicationNumber) {
        removeSelectedData(dataList, value, field);
      } else if (!value && field === filterValues.requestNumber) {
        removeSelectedData(dataList, value, field);
        dataList = [...dataList].filter(
          (row) => row.applicationNumber === state.applicationNumber
        );
      } else if (field === filterValues.branch) {
        // on branch change.
        dispatch({ type: "", value: "" });
        dispatch({
          type: filterValues.branch,
          value: !value ? null : value,
        });
        removeSelectedData([], value, field);
      }
      const applicationNumsData = [
        ...Array.from(new Set(dataList.map((row) => row.applicationNum))).map(
          (applicationNum) => {
            return {
              label: applicationNum,
            };
          }
        ),
      ];
      loadapplicationNums(applicationNumsData);
      // dynamic load of customer names
      const applicantNames = [
        ...Array.from(new Set(dataList.map((row) => row.customerName))).map(
          (customerName) => {
            return {
              label: customerName,
            };
          }
        ),
      ];
      loadApplicantNames(applicantNames);
      // dynmaic load of reference numbers.
      const requestNumbers = [
        ...Array.from(new Set(dataList.map((row) => row.requestNumber))).map(
          (requestNumber) => {
            return {
              label: requestNumber,
            };
          }
        ),
      ];
      loadrequestNumbers(requestNumbers);
      // dynamic load of status.
      const status = [
        ...Array.from(new Set(dataList.map((row) => row.status))).map(
          (status) => {
            return {
              label: status,
            };
          }
        ),
      ];
      loadDisbursementRecordsStatus(status);
      setSearchDisabled(false);
    } else if (dataList.length === 1 || !value) {
      removeSelectedData(dataList, value, field);
      loadapplicationNums(
        !value
          ? field === filterValues.branch
            ? []
            : [{ label: dataList.at(0).applicationNum }]
          : [{ label: dataList.at(0).applicationNum }]
      );
      loadApplicantNames(
        !value
          ? field === filterValues.branch
            ? []
            : [{ label: dataList.at(0).customerName }]
          : [{ label: dataList.at(0).customerName }]
      );
      loadrequestNumbers(
        !value
          ? field === filterValues.branch
            ? []
            : [{ label: dataList.at(0).requestNumber }]
          : [{ label: dataList.at(0).requestNumber }]
      );
      loadDisbursementRecordsStatus(
        !value
          ? field === filterValues.branch
            ? []
            : [{ label: dataList.at(0).status }]
          : [{ label: dataList.at(0).status }]
      );
      setSearchDisabled(true);
    }
  };

  const removeSelectedData = (dataList, value, field) => {
    if (field !== filterValues.requestNumber) {
      dispatch({
        type: filterValues.applicationNum,
        value:
          !value || dataList.length === 0
            ? null
            : dataList.at(0).applicationNum,
      });
    }
    dispatch({
      type: filterValues.customerName,
      value:
        !value || dataList.length === 0 ? null : dataList.at(0).customerName,
    });
    dispatch({
      type: filterValues.requestNumber,
      value:
        !value || dataList.length === 0 ? null : dataList.at(0).requestNumber,
    });
    dispatch({
      type: filterValues.disbursementStatus,
      value: !value || dataList.length === 0 ? null : dataList.at(0).status,
    });
    dispatch({
      type: filterValues.disbursementDateFromValue,
      value:
        !value || dataList.length === 0
          ? dayjs(
              today.getDate() +
                "/" +
                today.getMonth() +
                1 +
                "/" +
                today.getFullYear()
            ).format("DD/MM/YYYY")
          : dayjs(dataList.at(0).disbursementDate).format("DD/MM/YYYY"),
    });

    if (props.disDetailPage) {
      dispatch({
        type: filterValues.customerType,
        value:
          !value || dataList.length === 0 ? "" : dataList.at(0).customerType,
      });
      dispatch({
        type: filterValues.loanAmt,
        value:
          !value || dataList.length === 0 ? "" : dataList.at(0).sanctionAmt,
      });
      dispatch({
        type: filterValues.sanctionAmt,
        value:
          !value || dataList.length === 0 ? "" : dataList.at(0).sanctionAmt,
      });
      dispatch({
        type: filterValues.rateOfInterest,
        value:
          !value || dataList.length === 0 ? "" : dataList.at(0).rateOfInterest,
      });
      dispatch({
        type: filterValues.applicationDate,
        value:
          !value || dataList.length === 0
            ? dayjs(
                today.getDate() +
                  "/" +
                  today.getMonth() +
                  1 +
                  "/" +
                  today.getFullYear()
              ).format("DD/MM/YYYY")
            : dataList.at(0).applicationDate,
      });
    }
  };

  const [state, dispatch] = useReducer(reducer, props.initialState);
  const disabledState = !(props.mode === "Search");
  const [applicationNums, loadapplicationNums] = React.useState([]);
  const [applicantNames, loadApplicantNames] = React.useState([]);
  const [requestNumbers, loadrequestNumbers] = React.useState([]);
  const [disbursementStatus, loadDisbursementRecordsStatus] = React.useState(
    []
  );
  const [disableSearchFields, setSearchDisabled] = React.useState(false);

  const searchButtonClickHandler = (event) => {
    event.preventDefault();
    //SendData();
    props.onSearchButtonClick(state);
  };

  const SendData = async () => {
    const api = axios.create({
      baseURL: "https://bmapp.sundaramhome.in/stlap/ostlap/",
      headers: { "Content-Type": "application/json" },
    });
    const response = await api.post("/zonebranch", {
      area_code: [7],
    });
  };

  const AdvancedSearchValues = (
    <>
      <Box component="form" validate="true" onSubmit={searchButtonClickHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomAutoComplete
              disabled={disabledState}
              required={true && !disabledState}
              label="Branch"
              id="branch"
              variant="standard"
              type="text"
              placeholder="Select Branch"
              autoCompleteValues={state.branchNames}
              value={state.branch}
              onChange={(event, value) => {
                dispatch({
                  type: filterValues.branch,
                  value: value === null ? value : value.label,
                });
                updateAutoCompleteFields(
                  filterValues.branch,
                  value === null ? value : value.label
                );
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomAutoComplete
              disabled={disabledState}
              required={false}
              label="Application Number"
              id="applicationNum"
              variant="standard"
              type="text"
              placeholder="Select Application Number"
              autoCompleteValues={applicationNums}
              value={state.applicationNum}
              onChange={(event, value) => {
                dispatch({
                  type: filterValues.applicationNum,
                  value: value === null ? value : value.label,
                });
                updateFieldsData(
                  filterValues.applicationNum,
                  value === null ? value : value.label
                );
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomAutoComplete
              disabled={disabledState || disableSearchFields}
              required={false}
              label="Applicant Name"
              id="customerName"
              variant="standard"
              value={state.customerName}
              type="text"
              placeholder="Enter Applicant Name"
              autoCompleteValues={applicantNames}
              onChange={(event, value) => {
                dispatch({
                  type: filterValues.customerName,
                  value: value === null ? value : value.label,
                });
              }}
            />
          </Grid>

          {props.disDetailPage && (
            <React.Fragment>
              {/* To Show other fields in view screen. */}
              {props.mode !== "Search" ? (
                <>
                  {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      disabled={disabledState}
                      required={false}
                      label="Co-Applicant Name"
                      id="coApplicantName"
                      variant="standard"
                      value={state.coApplicantName}
                      type="text"
                      placeholder="Enter Co-Applicant Name."
                      onChange={(event) => {
                        dispatch({
                          type: filterValues.coApplicantName,
                          value: event.target.value,
                        });
                      }}
                    />
                  </Grid> */}
                  {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      disabled={disabledState}
                      required={false}
                      label="Customer Id"
                      id="customerID"
                      variant="standard"
                      value={state.customerId}
                      type="text"
                      placeholder="Enter Customer Id."
                      onChange={(event) => {
                        dispatch({
                          type: filterValues.customerId,
                          value: event.target.value,
                        });
                      }}
                    />
                  </Grid> */}
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomTextField
                      disabled={disabledState}
                      required={false}
                      label="Sanction Status"
                      id="losStatus"
                      variant="standard"
                      value={state.losStatus}
                      type="text"
                      placeholder="Enter Sanction Status."
                      onChange={(event) => {
                        dispatch({
                          type: filterValues.losStatus,
                          value: event.target.value,
                        });
                      }}
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                    <CustomDateField
                      disabled={disabledState}
                      required={false}
                      label="Effective Date"
                      id="effectiveDate"
                      variant="standard"
                      value={state.effectiveDate}
                      type="text"
                      placeholder="Enter Effective Date"
                    />
                  </Grid> */}
                </>
              ) : null}

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomDateField
                  disabled={disabledState}
                  required={false}
                  label="Application Date"
                  id="applicationDate"
                  variant="standard"
                  value={state.applicationDate}
                  type="text"
                  placeholder="Enter Application Date"
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.applicationDate,
                      value: event,
                    });
                  }}
                />
              </Grid>

              {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomDropDown
                  disabled={disabledState || disableSearchFields}
                  required={false}
                  label="Customer Type"
                  id="customerType"
                  variant="standard"
                  type="text"
                  placeholder="Select Customer Type"
                  dropDownValue={[
                    { value: "New", text: "New" },
                    { value: "Old", text: "Old" },
                  ]}
                  value={state.customerType}
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.customerType,
                      value: event.target.value,
                    });
                  }}
                />
              </Grid> */}

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomTextField
                  disabled={disabledState || disableSearchFields}
                  required={false}
                  label="Rate of Interest(%)"
                  id="rateOfInterest"
                  variant="standard"
                  value={state.rateOfInterest}
                  type="number"
                  placeholder="Enter Rate of Interest."
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.rateOfInterest,
                      value: event.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomTextField
                  disabled={disabledState || disableSearchFields}
                  required={false}
                  label="Loan Amount"
                  id="loanAmt"
                  variant="standard"
                  value={
                    state.loanAmt === ""
                      ? 0
                      : parseInt(state.loanAmt).toLocaleString("en-IN")
                  }
                  type="text"
                  placeholder="Enter Loan Amount"
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.loanAmt,
                      value: event.target.value.replaceAll(",", ""),
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomTextField
                  disabled={disabledState || disableSearchFields}
                  required={false}
                  label="Sanctioned Amount"
                  id="sanctionAmt"
                  variant="standard"
                  value={
                    state.sanctionAmt === ""
                      ? 0
                      : parseInt(state.sanctionAmt).toLocaleString("en-IN")
                  }
                  type="text"
                  placeholder="Enter Sanctioned Amount"
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.sanctionAmt,
                      value: event.target.value.replaceAll(",", ""),
                    });
                  }}
                />
              </Grid>
            </React.Fragment>
          )}
          {/* disDetailPage page is false means it was the disbursement list screen search container */}
          {!props.disDetailPage && (
            <React.Fragment>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomAutoComplete
                  disabled={disabledState}
                  required={false}
                  label="Request Number"
                  id="requestNumber"
                  variant="standard"
                  value={state.requestNumber}
                  type="text"
                  placeholder="Enter Reference Number"
                  autoCompleteValues={requestNumbers}
                  onChange={(event, value) => {
                    dispatch({
                      type: filterValues.requestNumber,
                      value: value === null ? value : value.label,
                    });
                    updateFieldsData(
                      filterValues.requestNumber,
                      value === null ? value : value.label
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomAutoComplete
                  disabled={disabledState || disableSearchFields}
                  required={false}
                  label="Disbursement Status"
                  id="disbursementStatus"
                  variant="standard"
                  type="text"
                  placeholder="Enter Status"
                  autoCompleteValues={disbursementStatus}
                  value={state.disbursementStatus}
                  onChange={(event, value) => {
                    dispatch({
                      type: filterValues.disbursementStatus,
                      value: value === null ? value : value.label,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomDateField
                  disabled={disabledState}
                  required={false}
                  label="Disbursement Date"
                  id="disbursementDate"
                  variant="standard"
                  value={state.disbursementDateFromValue}
                  type="text"
                  placeholder="Enter Disbursement Date"
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.disbursementDateFromValue,
                      value: event,
                    });
                  }}
                />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
        {props.mode === "Search" ? (
          <Box
            sx={{
              marginTop: "8px",
              marginBottom: "8px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" type="submit" sx={{ height: "2rem" }}>
              {/* <Search /> */}
              Search
            </Button>
            <Button
              sx={{
                marginLeft: "1rem",
                color: "white",
                backgroundColor: "black",
                height: "2rem",
              }}
              onMouseOver={({ target }) => {
                target.style.backgroundColor = "black";
                target.style.color = "white";
              }}
              variant="contained"
              onClick={(event) => {
                dispatch({ type: "", value: "" });
                props.onClearButtonClick();
              }}
            >
              {/* <Backspace sx={{ marginRight: "1rem" }} /> */}
              Clear
            </Button>
          </Box>
        ) : null}
      </Box>
    </>
  );

  return (
    <>
      <AccordianContainer
        title={props.title}
        initialOpen={props.initialOpen}
        setAccordianOpen={props.setAccordianOpen}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            marginBottom: "-1%",
            marginTop: "-2%",
          }}
        >
          {AdvancedSearchValues}
        </Box>
      </AccordianContainer>
    </>
  );
};

export default FilterCondition;
