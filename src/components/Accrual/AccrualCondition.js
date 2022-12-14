import FilterCondition from "../Disbursement/FilterCondition";
import BasicInformation from "../Disbursement/BasicInformation";
import { useState } from "react";
import TabsIntegrator from "../Disbursement/TabsIntegrator";
import NoDataFound from "../CustomComponents/NoDataFound";
import { Box, Button } from "@mui/material";
import EcPatta from "../../images/ec_cert.png";
import Aadhar from "../../images/aadhar.png";
import pan from "../../images/pan.png";
import passbook from "../../images/passbook.png";
import patta from "../../images/patta.png";
import chitta from "../../images/Chitta.png";

const AccrualCondition = () => {
  const [openProcess, setOpenProcess] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const [showFilter, setShowFilter] = useState(true);

  const dataMap = {
    BasicInformation : {
    applicantName:"Sundaram",
    loanrequestDate:"13/11/2022",
    totalDisbursementAmount:500000,
    currentDisbursementAmount:500000,
    effectiveRate:18,
    numberofDisbursement:"2",
    proposalType:1,
    sanctionedDate:"26/11/2022",
    fileNumber:"Not Applicable",
    dateofDisbursement:"05/12/2022",
    } ,
    FilePendingProcess : {
          filesGrid:[
            {
              id: 1,
              name: "Legal Document",
              type: "450",
              status: "450",
              preview: EcPatta,
            },
            {
              id: 2,
              name: "Aadhar",
              type: "3000",
              status: "2500",
              preview: Aadhar,
            },
            {
              id: 3,
              name: "Pan",
              type: "5000",
              status: "5000",
              preview: pan,
            },
            {
              id: 4,
              name: "Bank Pass Book",
              type: "80",
              status: "80",
              preview: passbook,
            },
            {
              id: 5,
              name: "Patta",
              type: "1000",
              status: "1000",
              preview: patta,
            },
            {
              id: 6,
              name: "Chitta",
              type: "10000",
              status: "7000",
              preview: chitta,
            },
            {
              id: 7,
              name: "Adangal",
              type: "100000",
              status: "50000",
              preview: "50000",
            },
            {
              id: 8,
              name: "EC document",
              type: "30000",
              status: "30000",
              preview: "0",
            },
          ],
    },
    FeeOutstanding : {
            outstandingDues:[
              {
                id: 7,
                details: "Mod Charges",
                due: "450",
                paid: "450",
                waited: "80",
                deduction: "Nill",
              },
              {
                id: 8,
                details: "Legal Charges",
                due: "3000",
                paid: "2500",
                waited: "500",
                deduction: "Nill",
              },
              {
                id: 9,
                details: "Technical Assistance Charges",
                due: "5000",
                paid: "5000",
                waited: "0",
                deduction: "Nill",
              },
              {
                id: 10,
                details: "Documentation Charges",
                due: "80",
                paid: "80",
                waited: "0",
                deduction: "Nill",
              },
              {
                id: 11,
                details: "File Processing Charges",
                due: "1000",
                paid: "1000",
                waited: "0",
                deduction: "Nill",
              },
              {
                id: 1,
                details: "Application Fee",
                due: "10000",
                paid: "7000",
                waited: "3000",
                deduction: "3000",
              },
              {
                id: 2,
                details: "Prepayment Charge",
                due: "100000",
                paid: "50000",
                waited: "50000",
                deduction: "Nill",
              },
              {
                id: 3,
                details: "Partial prepayment charge",
                due: "30000",
                paid: "30000",
                waited: "0",
                deduction: "Nill",
              },
              {
                id: 4,
                details: "Late Fee charge",
                due: "250",
                paid: "0",
                waited: "250",
                deduction: "250",
              },
              {
                id: 5,
                details: "Recovery Charge",
                due: "2000",
                paid: "2000",
                waited: "2000",
                deduction: "Nill",
              },
              {
                id: 6,
                details: "Insurance Premium Charge",
                due: "784",
                paid: "784",
                waited: "0",
                deduction: "Nill",
              },
          
              {
                id: 12,
                details: "Other Charges",
                due: "0",
                paid: "0",
                waited: "0",
                deduction: "Nill",
              },
            ],
    },
    EmiCommencementDate : {
      moratorium:true,
      numberofMonths:2,
      emiOptions:1,
      ecd:"18/08/2022",
      fbd:"18/08/2022",
      fedd:"18/08/2022",
    },
    CurrentDisbursementDetails : {
      paymentMode:1,
      chequeMode:1,
      chequePrintAt:"Unknown",
      entityName:"Sundaram Home",
      favourName:"Sundaram Finance",
      accountNumber:"1242112176865264",
      debitAccountType:1,
      ifscCode:"HDFC000500",
      historyGrid : [
        {
          id: 1,
          amount: 10000,
          paymentMode: "Cash",
          emiType: "Fixed Amount",
          entityName: "Tom",
          accountNumber: "182728928282",
          ifscCode: "HDFC000007",
        },
        {
          id: 2,
          amount: 10000,
          paymentMode: "Cash",
          emiType: "Fixed Amount",
          entityName: "Tom",
          accountNumber: "182728928282",
          ifscCode: "HDFC000007",
        },
      ],
    },

  };

 

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
        
        <FilterCondition onSearchButtonClick={searchButtonClickHandler} title="Disbursement Basic Search:"/></>
      ) : null}
      {openBasic ? (<>
        <BasicInformation  dataMap={dataMap} initialOpen={true}/>
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
        <TabsIntegrator onBackButtonClick={backButtonHandler} dataMap={dataMap}/>
      ) : null}
    </>
  );
};

export default Process;
