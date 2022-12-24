import CustomButton from "../CustomComponents/CustomButton";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import { Box } from "@mui/material";

const FeesOutstanding = (props) => {
  const columns = [
    {
      field: "details",
      headerName: "Details",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "due",
      headerName: "Due Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "right",
      editable: false,
    },
    {
      field: "paid",
      headerName: "Paid Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "waited",
      headerName: "Waved Amount (₹)",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "deduction",
      headerName: "Deduction",
      headerAlign: "center",
      type: "string",
      width: "200",
      editable: false,
      align: "center",
    },
  ];

  const rows = [
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
  ];

  return (
    <>
      <CustomDataGrid
        noDataMessage="No Outstanding Dues."
        noDataOnFilterMessage="No Outstanding Dues on Applied Filter."
        rows={rows}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5, 10, 15, 20, 25]}
      />

      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomButton variant="contained" sx={{ marginTop: "2%" }}>
          Create Request
        </CustomButton>
        <CustomButton
          variant="contained"
          sx={{ marginTop: "2%", marginLeft: "1%" }}
          onClick={() => {
            props.setListVisibility(true);
          }}
        >
          Back to search
        </CustomButton>
      </Box>
    </>
  );
};

export default FeesOutstanding;
