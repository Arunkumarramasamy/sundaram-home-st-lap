import { useState } from "react";
import FilterCondition from "./FilterCondition";
import SanctionedList from "./SanctionedList";
import DisbursementDetailPage from "./DisbursementDetailPage";

var today = new Date();

const initialState = {
  tabIndex: "1",
  disbursementList: [],
  sanctionList: [{
    id: "1",
    branchName: "Mylapore",
    customerType: "New",
    customerName: "User1",
    applicationNumber: "STLAP-20220001",
    applicationDate: "01/12/2022",
    approvedAmount: 500000,
    status: "Approved",
  },
  {
    id: "2",
    branchName: "Mylapore",
    customerType: "Old",
    customerName: "User2",
    applicationNumber: "STLAP-20220002",
    applicationDate: "02/12/2022",
    approvedAmount: 150000,
    status: "Approved",
  },
  {
    id: "3",
    branchName: "Royapuram",
    customerType: "Old",
    customerName: "User3",
    applicationNumber: "STLAP-20220003",
    applicationDate: "03/12/2022",
    approvedAmount: 1200000,
    status: "Approved",
  },
  {
    id: "4",
    branchName: "Mylapore",
    customerType: "New",
    customerName: "User4",
    applicationNumber: "STLAP-20220004",
    applicationDate: "04/12/2022",
    approvedAmount: 450000,
    status: "Approved",
  },
  {
    id: "5",
    branchName: "Thousand Lights",
    customerType: "New",
    customerName: "User5",
    applicationNumber: "STLAP-20220005",
    applicationDate: "05/12/2022",
    approvedAmount: 790000,
    status: "Approved",
  },
  {
    id: "6",
    branchName: "Thousand Lights",
    customerType: "Old",
    customerName: "User6",
    applicationNumber: "STLAP-20220006",
    applicationDate: "06/12/2022",
    approvedAmount: 680000,
    status: "Approved",
  },
  {
    id: "7",
    branchName: "Thousand Lights",
    customerType: "Old",
    customerName: "User7",
    applicationNumber: "STLAP-20220007",
    applicationDate: "07/12/2022",
    approvedAmount: 1460000,
    status: "Approved",
  },
  {
    id: "8",
    branchName: "Saidapet",
    customerType: "New",
    customerName: "User8",
    applicationNumber: "STLAP-20220008",
    applicationDate: "08/12/2022",
    approvedAmount: 980000,
    status: "Approved",
  },
  {
    id: "9",
    branchName: "Saidapet",
    customerType: "Old",
    customerName: "User9",
    applicationNumber: "STLAP-20220009",
    applicationDate: "09/12/2022",
    approvedAmount: 790000,
    status: "Approved",
  },
  {
    id: "10",
    branchName: "Madhavaram",
    customerType: "Old",
    customerName: "User10",
    applicationNumber: "STLAP-20220010",
    applicationDate: "10/12/2022",
    approvedAmount: 1300000,
    status: "Approved",
  },
  {
    id: "11",
    branchName: "Madhavaram",
    customerType: "New",
    customerName: "User11",
    applicationNumber: "STLAP-20220011",
    applicationDate: "11/12/2022",
    approvedAmount: 600000,
    status: "Approved",
  },
  {
    id: "12",
    branchName: "Madhavaram",
    customerType: "Old",
    customerName: "User12",
    applicationNumber: "STLAP-20220012",
    applicationDate: "12/12/2022",
    approvedAmount: 200000,
    status: "Approved",
  },
  {
    id: "13",
    branchName: "Minjur",
    customerType: "Old",
    customerName: "User13",
    applicationNumber: "STLAP-20220013",
    applicationDate: "13/12/2022",
    approvedAmount: 850000,
    status: "Approved",
  },],
  branchNames: [],
  branchName: "",
  applicationNumber: "",
  applicantName: "",
  coApplicantName: "",
  customerId:"",
  sanctionStatus:"",
  effectiveDate:
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
  applicationDateFromValue:
    today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
  applicationDateToValue:
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
  applicationDate:
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
  customerType: "-1",
  roi: "",
  loanAmount: "",
  sanctionedAmount: "",
 
  disbursementDateFromValue:
    today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
  disbursementDateToValue:
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear(),
  disbursementStatus: "",
  referenceNumber: "",
};

const DisbursementCreatePortal = () => {
  const [accordianOpen, setAccordianOpen] = useState(true);
  const [listVisibility, setListVisibility] = useState(true);
  const [searchValues, setSearchValues] = useState(initialState);

  const searchButtonClickHandler = (data) => {
    console.log(data);
    setSearchValues(data);
  };

  const clearButtonClickHandler = (data) => {
    console.log(data);
  };

  const rowDoubleClickHandler = (data) => {
    console.log(data);
    setListVisibility(!listVisibility);
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
            data={initialState.sanctionList}
          />
        </>
      ) : (
        <DisbursementDetailPage
          searchStateValues={searchValues}
          setListVisibility={setListVisibility}
          accordianOpenState={accordianOpen}
        />
      )}
    </>
  );
};

export default DisbursementCreatePortal;
