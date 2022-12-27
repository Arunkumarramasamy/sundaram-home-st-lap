import DisbursementTabsIntegrator from "./DisbursementTabsIntegrator";

var today = new Date();
var todayDate = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

const detailPageInitialState =   {
    "applicationNumber": "",
    "billingDate": todayDate,
    "billingDay": todayDate,
    "dateOfDisb": todayDate,
    "disbAmt": 0,
    "disbNo": 0,
    "disbRequestId": 0,
    "disbursementFavours": [
      {
        id: "1",
        accountHolderName:"User1",
        bankName: "HDFC",
        bankBranch: "Kottivakkam",
        bankAccNumber: "500987421243",
        bankAccType: "Savings",
        bankIfsc: "HDFC0000500",
        amount: "",
        isChecked : false,
      },
      {
        id: "2",
        accountHolderName:"User1",
        bankName: "CANARA",
        bankBranch: "Royapettah",
        bankAccNumber: "124238685793",
        bankAccType: "Savings",
        bankIfsc: "CNRB0000938",
        amount: "",
        isChecked : false,
      },
      {
        id: "3",
        accountHolderName:"User1",
        bankName: "ICICI",
        bankBranch: "Kotturpuram",
        bankAccNumber: "424238685793",
        bankAccType: "Savings",
        bankIfsc: "ICIC0001040",
        amount: "",
        isChecked : false,
      },
      {
        id: "4",
        accountHolderName:"User1",
        bankName: "SBI",
        bankBranch: "Light House",
        bankAccNumber: "324238685793",
        bankAccType: "Savings",
        bankIfsc: "SBHY0021634",
        amount: "",
        isChecked : false,
      },
      {
        id: "5",
        accountHolderName:"User1",
        bankName: "INDUSIND",
        bankBranch: "Karapakkam",
        bankAccNumber: "624238685793",
        bankAccType: "Savings",
        bankIfsc: "INDB0001653",
        amount: "",
        isChecked : false,
      },],
    "earlierDisbAmt": 0,
    "editLock": false,
    "effectiveDate": todayDate,
    "emiCommDate": todayDate,
    "firstEmiDueDate": todayDate,
    "paymentMode": "RTGS",
    "remarks": "",
    "requestStatus": "REQUESTED",
    "shflBank": " ",
    "totalDisbAmt": 0,
    "transactionId": 0
};
const losInitialState =   {
    branchNames: [],
    branchName: "Branch Name",
    applicationNumber: "Application Number",
    applicantName: "Applicant Name",
    coApplicantName: "Co Applicant Name",
    customerId: "Customer ID",
    sanctionStatus: "Approved",
    effectiveDate:todayDate,
    applicationDateFromValue: today.getMonth() + 1 + "/" + "01" + "/" + today.getFullYear(),
    applicationDateToValue: todayDate,
    applicationDate: todayDate,
    customerType: "New",
    roi: "0",
    loanAmount: "0",
    sanctionedAmount: "0",
    screenModeTitle: "Disbursement Request Create",
    requestNumber: "",
    memoDeductions:"0"
};


const DisbursementDetailPage = (props) => {

  return (
    <>
      <DisbursementTabsIntegrator
        setListVisibility={props.setListVisibility}
        searchStateValues={losInitialState}
        accordianOpenState={props.accordianOpenState}
        mode={props.mode}
        detailPageInitialState={detailPageInitialState}
      />
    </>
  );
};

export default DisbursementDetailPage;
