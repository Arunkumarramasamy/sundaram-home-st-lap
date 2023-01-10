import { Box, Button } from "@mui/material";
import React from "react";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import { useNavigate } from "react-router-dom";
import MoreActions from "./MoreActions";
import dayjs from "dayjs";
const NachList = () => {
  const rows = [
    {
      id: 1,
      branch: "ss",
      applicationNum: "sdd",
      applicantCustomer: "d",
      bankName: "ee",
      branchName: "q",
      micr: "ee",
      accountType: "ee",
      bankAccountNum: "ee",
      accountHolderName: "rrr",
      emiAmount: "ggg",
      nachAmount: "nn",
      mandateAmount: "tt",
      frequency: "tt",
      debitType: "tt",
      fbd: "rr",
      mandateStartDate: dayjs(),
      firstNachBillingDate: dayjs(),
      mandateValidity: "mm",
      mandateEndDate: "uuu",
      maximumAmount: "yy",
      customerMobileNumber: "rr",
      customerEmailId: "y",
      status: "r",
      mandateNumber: "kk",
    },
    {
      id: 2,
      branch: "dd",
      applicationNum: "ee",
      applicantCustomer: "f",
      bankName: "d",
      branchName: "w",
      micr: "o",
      accountType: "y",
      bankAccountNum: "t",
      accountHolderName: "q",
      emiAmount: "ff",
      nachAmount: "ff",
      mandateAmount: "tt",
      frequency: "bbb",
      debitType: "ttt",
      fbd: "ttt",
      mandateStartDate: dayjs(),
      firstNachBillingDate: dayjs(),
      mandateValidity: "jj",
      mandateEndDate: "ll",
      maximumAmount: "oo",
      customerMobileNumber: "ttt",
      customerEmailId: "hh",
      status: "ppp",
      mandateNumber: "qq",
    },
  ];
  const columns = [
    {
      field: "action",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      width: 80,
      renderCell: (params) => {
        return <MoreActions />;
      },
    },
    {
      field: "branch",
      headerName: "Branch",
      headerAlign: "center",
      align: "center",
      width: 180,
      align: "left",
    },
    {
      field: "branchName",
      headerName: "Branch Name",
      headerAlign: "center",
      align: "center",
      width: 180,
      align: "left",
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      align: "center",
      width: 180,
      align: "left",
    },
  ];
  const navigate = useNavigate();
  const addNachButtonClickHandler = () => {
    navigate("/stlap/home/nach");
  };
  return (
    <Box>
      <Box sx={{ marginBottom: "12px", direction: "rtl", padding: "8px" }}>
        <Button
          sx={{ fontWeight: "bold" }}
          variant="contained"
          onClick={addNachButtonClickHandler}
        >
          Add Nach Mandate
        </Button>
      </Box>
      <CustomDataGrid
        noDataMessage="No Data."
        noDataOnFilterMessage="No Data on Applied Filter."
        rows={rows}
        gridHeight={window.innerHeight - 230}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5, 10, 15, 20, 25]}
      />
    </Box>
  );
};

export default NachList;
