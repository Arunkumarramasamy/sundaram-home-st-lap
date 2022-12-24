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

const filterValues = {
  tabIndex: "tabIndex",
  applicationNumber: "applicationNumber",
  applicantName: "applicantName",
  customerType: "customerType",
  roi: "roi",
  loanAmount: "loanAmount",
  sanctionedAmount: "sanctionedAmount",
  applicationDateFromValue: "applicationDateFromValue",
  applicationDateToValue: "applicationDateToValue",
  disbursementDateFromValue: "disbursementDateFromValue",
  disbursementDateToValue: "disbursementDateToValue",
  referenceNumber: "requestNumber",
  disbursementStatus: "disbursementStatus",
  branchName: "branchName",
};

const FilterCondition = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case filterValues.tabIndex:
        return { ...state, tabIndex: action.value };
      case filterValues.applicationNumber:
        return { ...state, applicationNumber: action.value };
      case filterValues.applicantName:
        return { ...state, applicantName: action.value };
      case filterValues.customerType:
        return { ...state, customerType: action.value };
      case filterValues.roi:
        return { ...state, roi: action.value };
      case filterValues.loanAmount:
        return { ...state, loanAmount: action.value };
      case filterValues.sanctionedAmount:
        return { ...state, sanctionedAmount: action.value };
      case filterValues.applicationDateFromValue:
        return { ...state, applicationDateFromValue: action.value };
      case filterValues.applicationDateToValue:
        return { ...state, applicationDateToValue: action.value };
      case filterValues.branchName:
        return { ...state, branchName: action.value };
      case filterValues.disbursementDateFromValue:
        return { ...state, disbursementDateFromValue: action.value };
      case filterValues.disbursementDateToValue:
        return { ...state, disbursementDateToValue: action.value };
      case filterValues.disbursementStatus:
        return { ...state, disbursementStatus: action.value };
      case filterValues.referenceNumber:
        return { ...state, referenceNumber: action.value };
      default:
        return { ...props.initialState, tabIndex: state.tabIndex };
    }
  };

  const updateFieldsData = (field, value) => {
    let dataList = value
      ? [...state.disbursementList].filter((row) => row[field] === value)
      : field === filterValues.branchName
      ? []
      : // the other case is clear of application number
        [...state.disbursementList].filter(
          (row) => row.branchName === state.branchName
        );
    if (dataList.length > 1) {
      // based on branch select dynamic load of application numbers
      if (!value && field === filterValues.applicationNumber) {
        removeSelectedData(dataList, value, field);
      } else if (!value && field === filterValues.referenceNumber) {
        removeSelectedData(dataList, value, field);
        dataList = [...dataList].filter(
          (row) => row.applicationNumber === state.applicationNumber
        );
      } else if (field === filterValues.branchName) {
        // on branch change.
        dispatch({ type: "", value: "" });
        dispatch({
          type: filterValues.branchName,
          value: !value ? null : value,
        });
      }
      const applicationNumbersData = [
        ...Array.from(
          new Set(dataList.map((row) => row.applicationNumber))
        ).map((applicationNumber) => {
          return {
            label: applicationNumber,
          };
        }),
      ];
      loadApplicationNumbers(applicationNumbersData);
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
      const referenceNumbers = [
        ...Array.from(new Set(dataList.map((row) => row.requestNumber))).map(
          (referenceNumber) => {
            return {
              label: referenceNumber,
            };
          }
        ),
      ];
      loadReferenceNumbers(referenceNumbers);
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
      loadApplicationNumbers(
        !value
          ? field === filterValues.branchName
            ? []
            : [{ label: dataList.at(0).applicationNumber }]
          : [{ label: dataList.at(0).applicationNumber }]
      );
      loadApplicantNames(
        !value
          ? field === filterValues.branchName
            ? []
            : [{ label: dataList.at(0).customerName }]
          : [{ label: dataList.at(0).customerName }]
      );
      loadReferenceNumbers(
        !value
          ? field === filterValues.branchName
            ? []
            : [{ label: dataList.at(0).requestNumber }]
          : [{ label: dataList.at(0).requestNumber }]
      );
      loadDisbursementRecordsStatus(
        !value
          ? field === filterValues.branchName
            ? []
            : [{ label: dataList.at(0).status }]
          : [{ label: dataList.at(0).status }]
      );
      setSearchDisabled(true);
    }
  };

  const removeSelectedData = (dataList, value, field) => {
    if (field !== filterValues.referenceNumber) {
      dispatch({
        type: filterValues.applicationNumber,
        value:
          !value || dataList.length === 0
            ? null
            : dataList.at(0).applicationNumber,
      });
    }
    dispatch({
      type: filterValues.applicantName,
      value:
        !value || dataList.length === 0 ? null : dataList.at(0).customerName,
    });
    dispatch({
      type: filterValues.referenceNumber,
      value:
        !value || dataList.length === 0 ? null : dataList.at(0).requestNumber,
    });
    dispatch({
      type: filterValues.disbursementStatus,
      value: !value || dataList.length === 0 ? null : dataList.at(0).status,
    });
  };

  const [state, dispatch] = useReducer(reducer, props.initialState);
  const disabledState = !(props.mode === "Search");
  const [applicationNumbers, loadApplicationNumbers] = React.useState([]);
  const [applicantNames, loadApplicantNames] = React.useState([]);
  const [referenceNumbers, loadReferenceNumbers] = React.useState([]);
  const [disbursementStatus, loadDisbursementRecordsStatus] = React.useState(
    []
  );
  const [disableSearchFields, setSearchDisabled] = React.useState(false);

  const searchButtonClickHandler = (event) => {
    event.preventDefault();
    props.onSearchButtonClick(state);
  };

  // const BasicSearchValues = (
  //   <><Box component="form"   onSubmit={searchButtonClickHandler}  >
  //     <Grid container spacing={2}>

  //     <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
  //         <CustomAutoComplete
  //           disabled={disabledState}
  //           required={true}
  //           label="Branch"
  //           id="branch"
  //           variant="standard"
  //           type="text"
  //           placeholder="Branch"
  //           autoCompleteValues={branchNames}
  //           value={state.branchName}
  //           onChange={(event,value) => {
  //             dispatch({ type: filterValues.branchName, value: value===null ? value : value.label })
  //           }}
  //         />
  //       </Grid>

  //       <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
  //       <CustomAutoComplete
  //           disabled={disabledState}
  //           required={true}
  //           label="Application Number"
  //           id="applicationNumber"
  //           variant="standard"
  //           type="text"
  //           placeholder="Select Application Number"
  //           autoCompleteValues={applicationNumbers}
  //           value={state.applicationNumber}
  //           onChange={(event,value) => {
  //             dispatch({ type: filterValues.applicationNumber, value: value===null ? value : value.label })
  //           }}
  //         />
  //       </Grid>

  //       <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
  //         <CustomTextField
  //         disabled={disabledState}
  //           required={false}
  //           label="Applicant Name"
  //           id="applicantName"
  //           variant="standard"
  //           value={state.applicantName}
  //           type="text"
  //           placeholder="Applicant Name"
  //           onChange={event => {
  //             dispatch({ type: filterValues.applicantName, value: event.target.value })
  //           }}
  //         />
  //       </Grid>

  //     </Grid>

  //     {props.mode==="Search" ? <Box
  //       sx={{
  //         marginTop: "1rem",
  //         display: "flex",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <Button variant="contained" type="submit">
  //         Search
  //       </Button>
  //       <Button
  //         sx={{ marginLeft: "1rem", color:"white",backgroundColor:"black" }}
  //         onMouseOver={({target})=>{target.style.backgroundColor="black";target.style.color="white"}}
  //         variant="contained"
  //         onClick={event => {
  //           dispatch({ type: "", value: "" });
  //           props.onClearButtonClick(state);
  //         }}
  //       >
  //         Clear
  //       </Button>
  //     </Box> : null}
  //     </Box>
  //   </>
  // );

  const AdvancedSearchValues = (
    <>
      <Box component="form" validate="true" onSubmit={searchButtonClickHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomAutoComplete
              disabled={disabledState}
              required={true}
              label="Branch"
              id="branch"
              variant="standard"
              type="text"
              placeholder="Select Branch"
              autoCompleteValues={state.branchNames}
              value={state.branchName}
              onChange={(event, value) => {
                dispatch({
                  type: filterValues.branchName,
                  value: value === null ? value : value.label,
                });
                updateFieldsData(
                  filterValues.branchName,
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
              id="applicationNumber"
              variant="standard"
              type="text"
              placeholder="Select Application Number"
              autoCompleteValues={applicationNumbers}
              value={state.applicationNumber}
              onChange={(event, value) => {
                dispatch({
                  type: filterValues.applicationNumber,
                  value: value === null ? value : value.label,
                });
                updateFieldsData(
                  filterValues.applicationNumber,
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
              id="applicantName"
              variant="standard"
              value={state.applicantName}
              type="text"
              placeholder="Enter Applicant Name"
              autoCompleteValues={applicantNames}
              onChange={(event, value) => {
                dispatch({
                  type: filterValues.applicantName,
                  value: value === null ? value : value.label,
                });
              }}
            />
          </Grid>

          {props.disDetailPage && (
            <React.Fragment>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                {props.mode === "Search" ? (
                  <CustomDateRangeField
                    disabled={disabledState}
                    required={false}
                    label="Application Date"
                    id="applicationDate"
                    variant="standard"
                    fromValue={state.applicationDateFromValue}
                    toValue={state.applicationDateToValue}
                    type="text"
                    placeholder="Enter Application Date"
                    onChange={(event) => {
                      dispatch({
                        type: filterValues.applicationDate,
                        value: event.target.value,
                      });
                    }}
                  />
                ) : (
                  <CustomDateField
                    disabled={disabledState}
                    required={false}
                    label="Application Date"
                    id="applicationDate"
                    variant="standard"
                    value={state.applicationDate}
                    type="text"
                    placeholder="Enter Application Date"
                  />
                )}
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomDropDown
                  disabled={disabledState}
                  required={false}
                  label="Customer Type"
                  id="customerType"
                  variant="standard"
                  type="text"
                  placeholder="Select Customer Type"
                  dropDownValue={[
                    { value: 0, text: "New" },
                    { value: 1, text: "Old" },
                  ]}
                  value={state.customerType}
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.customerType,
                      value: event.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomTextField
                  disabled={disabledState}
                  required={false}
                  label="Rate of Interest(%)"
                  id="roi"
                  variant="standard"
                  value={state.roi}
                  type="number"
                  placeholder="Enter Rate of Interest."
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.roi,
                      value: event.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomTextField
                  disabled={disabledState}
                  required={false}
                  label="Loan Amount"
                  id="loanAmount"
                  variant="standard"
                  value={state.loanAmount}
                  type="number"
                  placeholder="Enter Loan Amount"
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.loanAmount,
                      value: event.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomTextField
                  disabled={disabledState}
                  required={false}
                  label="Sanctioned Amount"
                  id="sanctionedAmount"
                  variant="standard"
                  value={state.sanctionedAmount}
                  type="number"
                  placeholder="Enter Sanctioned Amount"
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.sanctionedAmount,
                      value: event.target.value,
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
                  label="Reference Number"
                  id="referenceNumber"
                  variant="standard"
                  value={state.referenceNumber}
                  type="text"
                  placeholder="Enter Reference Number"
                  autoCompleteValues={referenceNumbers}
                  onChange={(event, value) => {
                    dispatch({
                      type: filterValues.referenceNumber,
                      value: value === null ? value : value.label,
                    });
                    updateFieldsData(
                      filterValues.referenceNumber,
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
                <CustomDateRangeField
                  disabled={disabledState || disableSearchFields}
                  required={false}
                  label="Disbursement Date Range"
                  id="disbursementDateRange"
                  variant="standard"
                  fromValue={state.disbursementDateFromValue}
                  toValue={state.disbursementDateToValue}
                  type="text"
                  placeholder="Enter Date Range"
                  onChange={(event) => {
                    dispatch({
                      type: filterValues.applicationDate,
                      value: event.target.value,
                    });
                    console.log(event);
                  }}
                />
              </Grid>
            </React.Fragment>
          )}
        </Grid>
        {props.mode === "Search" ? (
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" type="submit">
              <Search />
              Search
            </Button>
            <Button
              sx={{
                marginLeft: "1rem",
                color: "white",
                backgroundColor: "black",
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
              <Backspace sx={{ marginRight: "1rem" }} />
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
        initialOpen={true}
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
          {/* <TabContext value={state.tabIndex}>
          <Box
            sx={{
              borderColor: "divider",
              backgroundColor: "#eeeeee",
            }}
          >
            <TabList
               onChange={(event,value) => {
                dispatch({ type: filterValues.tabIndex, value: value })
              }}
              aria-label="lab API tabs example"
              TabIndicatorProps={{ hidden: true }}
              sx={{
                "& button.Mui-selected": {
                  backgroundColor: "#004a92",
                  color: "white",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  borderBottom: "none",
                },
                "& div.MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                },
                "& button": {
                  outline: "none",
                  marginRight: "0.2rem",
                  background: "#fafafa",
                  color: "#7f7f7f",
                  transition: "all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)",
                  borderBottom: "2px solid #AAAAAA",
                  textTransform: "none",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  backgroundColor:"#D7D7D7",
                },
              }}
            >
              <Tab label="Basic Details" value="1" />
              <Tab label="Advanced Details" value="2" />

            </TabList>
          </Box>
          <TabPanel value="1">
            {BasicSearchValues}
          </TabPanel>
          <TabPanel value="2">
            {AdvancedSearchValues}
          </TabPanel>
         
        </TabContext> */}
          {AdvancedSearchValues}
        </Box>
      </AccordianContainer>
    </>
  );
};

export default FilterCondition;
