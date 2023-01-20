import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Tooltip } from "recharts";
import { Button, Chip, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const NachVerification = () => {
  //Dialog state maintaining while submission
  const [open, setOpen] = useState(false);
  //To Display UMRN Number in Dialog
  const [UMRNNumer, setUMRNNumber] = useState("");
  //Maintaining Content to Display on the dialog
  const [dialogText, setDialogText] = useState("");

  //Dialog onOpen and onClose methods
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Grid Accept and Reject button handlers
  const ApproveButtonOnClickHandler = (value) => {
    setUMRNNumber(value.row.UMRNNumber);
    setDialogText("Accepted");
    handleClickOpen();
  };
  const CancelButtonClickHandler = (value) => {
    console.log(value);
    setUMRNNumber(value.row.UMRNNumber);
    setDialogText("Rejected");
    handleClickOpen();
  };

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
      status: "PreVerified",
    },
    {
      id: 2,
      branch: "TNagar",
      UMRNNumber: 1189933993,
      applicationNumber: 5337765544,
      customerID: 331250484,
      customerName: "Shareef",
      mandateNumber: 23872810,
      mandateBank: "ICIC Bank",
      status: "Accepted",
    },
    {
      id: 3,
      branch: "Ambattur",
      UMRNNumber: 8993993,
      applicationNumber: 7765544,
      customerID: 1250484,
      customerName: "Naveen",
      mandateNumber: 87210,
      mandateBank: "SBI Bank",
      status: "Rejected",
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
    {
      field: "approve",
      headerName: "Approve",
      headerAlign: "center",
      align: "center",
      width: 150,
      renderCell: (params) => {
        if (params.row.status === "Accepted") {
          return (
            <Chip
              label="Accepted"
              sx={{ background: "#2F7DC4", color: "white" }}
            />
          );
        } else if (params.row.status === "Rejected") {
          return (
            <Chip
              label="Rejected"
              sx={{ background: "#F6A030", color: "white" }}
            />
          );
        } else {
          return (
            <Box sx={{ display: "flex" }}>
              <IconButton onClick={() => ApproveButtonOnClickHandler(params)}>
                <CheckCircleOutlineIcon sx={{ fill: "#004A92" }} />
              </IconButton>
              <IconButton onClick={() => CancelButtonClickHandler(params)}>
                <CancelOutlinedIcon sx={{ fill: "#004A92" }} />
              </IconButton>
            </Box>
          );
        }
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Application Submitted"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`The UMRN Number ${UMRNNumer} application is ${dialogText}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ fontWeight: "bold" }}
            variant="contained"
            onClick={handleClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </AccordianContainer>
  );
};

export default NachVerification;
