import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const NachVerification = () => {
  const rows = [
    {
      id: 1,
      branch: "TNAGAR",
      UMRNNumber: 76889298,
      applicationNumber: 33213443,
      customerID: 9383393,
      customerName: "Tom",
      mandateNumber: 323221,
      mandateBank: "HDFC Bank",
    },
    {
      id: 2,
      branch: "TNAGAR",
      UMRNNumber: 76889298,
      applicationNumber: 33213443,
      customerID: 9383393,
      customerName: "Tom",
      mandateNumber: 323221,
      mandateBank: "HDFC Bank",
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
      renderCell: (params) => {
        return <CheckCircleIcon />;
      },
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
        gridHeight={window.innerHeight - 230}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[5, 10, 15, 20, 25]}
      />
    </AccordianContainer>
  );
};

export default NachVerification;
