import React from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import CustomTextField from "../CustomComponents/CustomTextField";

const NachPreVerification = () => {
  const rows = [
    {
      id: 1,
      branch: "",
      UMRNNumber: "",
      applicationNumber: "",
      customerID: "",
      customerName: "",
      mandateNumber: "",
      mandateBank: " ",
    },
  ];
  const columns = [
    {
      field: "branch",
      headerName: "Branch",
      headerAlign: "center",
      align: "left",
      width: 140,
      editable: true,
    },
    {
      field: "UMRNNumber",
      headerName: "UMRN Number",
      headerAlign: "center",
      align: "right",
      width: 150,
    },
    {
      field: "applicationNumber",
      headerName: "Application Number",
      headerAlign: "center",
      align: "right",
      width: 150,
    },
    {
      field: "customerID",
      headerName: "Customer ID",
      headerAlign: "center",
      align: "right",
      width: 150,
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      headerAlign: "center",
      align: "left",
      width: 150,
    },
    {
      field: "mandateNumber",
      headerName: "Mandate Number",
      headerAlign: "center",
      align: "right",
      width: 150,
    },

    {
      field: "mandateBank",
      headerName: "Mandate Bank",
      headerAlign: "center",
      align: "left",
      width: 150,
    },
    {
      field: "approve",
      headerName: "Approve",
      headerAlign: "center",
      align: "center",
      width: 150,
    },
  ];
  return (
    <AccordianContainer
      id="accord"
      title="Nach Pre-Verify"
      initialOpen={false}
      sx={{ margin: "8px !important" }}
    >
      <CustomDataGrid
        noDataMessage="No Data."
        noDataOnFilterMessage="No Data on Applied Filter."
        rows={rows}
        gridHeight={window.innerHeight - 400}
        columns={columns}
        pageSizeOptions={[5, 10, 15, 20, 25]}
      />
    </AccordianContainer>
  );
};

export default NachPreVerification;
