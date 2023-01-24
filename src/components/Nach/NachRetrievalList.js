import React from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
const NachRetrievalList = () => {
  const rows = [
    {
      id: 1,
      branch: "TNAGAR",
      UMRNNumber: 76889298,
      customerName: "Tom",
      mandateNumber: 323221,
      mandateBank: "HDFC Bank",
    },
    {
      id: 2,
      branch: "TNagar",
      UMRNNumber: 1189933993,
      customerName: "Shareef",
      mandateNumber: 23872810,
      mandateBank: "ICIC Bank",
    },
    {
      id: 3,
      branch: "Ambattur",
      UMRNNumber: 8993993,
      customerName: "Naveen",
      mandateNumber: 87210,
      mandateBank: "SBI Bank",
    },
  ];
  const columns = [
    {
      field: "branch",
      headerName: "Branch",
      headerAlign: "center",
      align: "left",
      width: 140,
    },
    {
      field: "UMRNNumber",
      headerName: "UMRN Number",
      headerAlign: "center",
      align: "right",
      width: 150,
    },
    {
      field: "MandateNumber",
      headerName: "Mandate Number",
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
      renderCell: (params) => {
        return params.value.toUpperCase();
      },
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
  ];
  return (
    <AccordianContainer
      id="accord"
      title="Nach Verification"
      initialOpen={true}
      sx={{ margin: "8px !important" }}
    >
      <CustomDataGrid
        noDataMessage="No Data."
        noDataOnFilterMessage="No Data on Applied Filter."
        rows={rows}
        gridHeight={window.innerHeight - 330}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5, 10, 15, 20, 25]}
      />
    </AccordianContainer>
  );
};

export default NachRetrievalList;
