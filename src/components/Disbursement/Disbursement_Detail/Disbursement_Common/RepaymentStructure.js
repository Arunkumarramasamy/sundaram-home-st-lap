import { Box, Grid } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccordianContainer from "../../../CustomComponents/AccordianContainer";
import CustomButton from "../../../CustomComponents/CustomButton";
import CustomDataGrid from "../../../CustomComponents/CustomDataGrid";
import CustomTextField from "../../../CustomComponents/CustomTextField";

const RepaymentStructure = (props) => {
  const [accordianOpen, setAccordianOpen] = useState(true);
  const [repaymentSchedule, setrepaymentSchedule] = useState({
    amortModelList: [],
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getRepaymentSchedule();
  }, []);

  const getRepaymentSchedule = async () => {
    const api = axios.create({
      baseURL: "http://localhost:8080/repayment/",
    });
    const response = await api.post("/getEmiDataByAppNum", {
      applicationNum: location.state.applicationNum,
    });
    setrepaymentSchedule(response.data);
  };

  const BasicContent = (
    <>
      <Box component="form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Customer Name"
              id="customerName"
              variant="standard"
              value={repaymentSchedule.customerName}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Loan Type"
              id="loanType"
              variant="standard"
              value={repaymentSchedule.loanType}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Application Number"
              id="applicationNumber"
              variant="standard"
              value={repaymentSchedule.applicationNum}
              type="text"
              placeholder=""
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Sanction Amount"
              id="sanctionAmt"
              variant="standard"
              value={repaymentSchedule.sanctionAmount}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Tenure(in months)"
              id="tenure"
              variant="standard"
              value={repaymentSchedule.tenure}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Frequency"
              id="frequency"
              variant="standard"
              value={repaymentSchedule.frequency}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Total Principal Paid(A)"
              id="principal"
              variant="standard"
              value={repaymentSchedule.totalPrincipalAmount}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Total Interest Paid(B)"
              id="interest"
              variant="standard"
              value={repaymentSchedule.totalInterest}
              type="text"
              placeholder=""
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CustomTextField
              disabled={true}
              required={false}
              label="Total Amount Paid(A+B)"
              id="amount"
              variant="standard"
              value={
                repaymentSchedule.totalPrincipalAmount +
                repaymentSchedule.totalInterest
              }
              type="text"
              placeholder=""
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );

  const scheduleColumns = [
    {
      field: "monthNo",
      headerName: "Month No.",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 150,
      align: "right",
    },
    {
      field: "duedate",
      headerName: "Emi Due Date",
      headerAlign: "center",
      type: "string",
      width: 173,
      align: "right",
      editable: false,
      renderCell: (params) => {
        // return dayjs(params.value);
        return dayjs(new Date(params.value)).format("DD/MM/YYYY");
      },
    },
    {
      field: "openingAmt",
      headerName: "Opening Amount",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      editable: false,
    },
    {
      field: "monthlyAmt",
      headerName: "Monthly Emi Amount",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      editable: false,
    },
    {
      field: "principal",
      headerName: "Principal",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      editable: false,
    },
    {
      field: "interest",
      headerName: "Interest",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      editable: false,
    },
    {
      field: "closingAmt",
      headerName: "O/S Loan",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      editable: false,
    },
    {
      field: "repayAmt",
      headerName: "RepayAmount",
      headerAlign: "center",
      type: "string",
      width: 170,
      align: "right",
      editable: false,
    },
  ];
  return (
    <>
      <AccordianContainer
        title={"Repayment Schedule"}
        initialOpen={true}
        setAccordianOpen={setAccordianOpen}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            marginBottom: "-1%",
            marginTop: "-2%",
          }}
        >
          {BasicContent}
        </Box>
      </AccordianContainer>
      <Box sx={{ width: "100%", alignContent: "center" }}>
        <CustomDataGrid
          noDataMessage="No Repayment Schedule."
          noDataOnFilterMessage="No Repayment Schedule on Applied Filter."
          rows={repaymentSchedule.amortModelList}
          columns={scheduleColumns}
          pageSize={12}
          pageSizeOptions={[12, 24, 36, 48, 60]}
          gridHeight={"585px"}
          getRowId={(row) => {
            return row.monthNo;
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomButton
          sx={{ height: "2rem" }}
          variant="contained"
          onClick={() => {
            const dataValue = { ...location.state };
            if (dataValue.screenMode === "MODIFY") {
              navigate("/stlap/home/disbursementModify", {
                replace: true,
                state: dataValue,
              });
            } else if (dataValue.screenMode === "CANCEL") {
              navigate("/stlap/home/disbursementCancel", {
                replace: true,
                state: dataValue,
              });
            } else if (dataValue.screenMode === "APPROVE") {
              navigate("/stlap/home/disbursementApprove", {
                replace: true,
                state: dataValue,
              });
            } else if (dataValue.screenMode === "VIEW") {
              navigate("/stlap/home/disbursementView", {
                replace: true,
                state: dataValue,
              });
            }
          }}
        >
          Back to Detail
        </CustomButton>
      </Box>{" "}
    </>
  );
};

export default RepaymentStructure;
