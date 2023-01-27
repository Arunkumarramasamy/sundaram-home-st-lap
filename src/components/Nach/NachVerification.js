import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDataGrid from "../CustomComponents/CustomDataGrid";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Tooltip } from "recharts";
import { Button, Chip, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VerificationModalReducerAction } from "../Store/VerificationModalReducer";
import CustomAutoComplete from "../CustomComponents/CustomAutoComplete";
import CustomTextField from "../CustomComponents/CustomTextField";

const NachVerification = () => {
  //dispatch method
  const dispatch = useDispatch();
  //useSelector
  const modalData = useSelector((state) => state.nachVerification.modalValue);
  //Dialog state maintaining while submission
  const [UMRNDialogOpen, setUMRNDialogOpen] = useState(false);
  //To Display UMRN Number in Dialog
  const [UMRNNumer, setUMRNNumber] = useState("");

  const [dummyData, setDummyData] = useState([
    {
      branch: "TNAgar",
      umrnNumber: 0,
      applicationNum: "455444",
      customerId: "Naveen2322",
      cutomerName: "Tom",
      mandateNum: 1233,
      bankName: "string",
      status: "Created",
      mandateValidity: "2023-01-25",
      maximumAmt: 0,
      micr: "string",
      nachAmt: 0,
      repay: "string",
      repayApplication: "string",
    },
  ]);
  //Rows in grid
  const [rows, setRows] = useState([]);

  //Dialog onOpen and onClose methods for UMRN
  const handleUMRNDialogClickOpen = () => {
    setUMRNDialogOpen(true);
  };

  const handleUMRNDialogClose = () => {
    setUMRNDialogOpen(false);
  };

  // record binding Modal Handler
  const [Dialogopen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const verifyButtonClickHandler = () => {
    //Need to call db
    setUMRNNumber("12345678");
    console.log("sending data");
    handleDialogClose();
    handleUMRNDialogClickOpen();
  };

  const rowDoubleClickHandler = (event) => {
    dispatch(VerificationModalReducerAction.updatemodalValues(event.row));
    console.log(event.row);
    setDialogOpen(true);
  };
  // const rows = [
  //   {
  //     id: 1,
  //     branch: "TNAGAR",
  //     UMRNNumber: 76889298,
  //     applicationNumber: 33213443,
  //     customerID: 9383393,
  //     customerName: "Tom",
  //     mandateNumber: 323221,
  //     mandateBank: "HDFC Bank",
  //     status: "Created",
  //   },
  //   {
  //     id: 2,
  //     branch: "TNagar",
  //     UMRNNumber: 1189933993,
  //     applicationNumber: 5337765544,
  //     customerID: 331250484,
  //     customerName: "Shareef",
  //     mandateNumber: 23872810,
  //     mandateBank: "ICIC Bank",
  //     status: "Accepted",
  //   },
  //   {
  //     id: 3,
  //     branch: "Ambattur",
  //     UMRNNumber: 8993993,
  //     applicationNumber: 7765544,
  //     customerID: 1250484,
  //     customerName: "Naveen",
  //     mandateNumber: 87210,
  //     mandateBank: "SBI Bank",
  //     status: "Created",
  //   },
  // ];
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
        } else if (params.row.status === "Created") {
          return (
            <Chip
              label="Created"
              sx={{ background: "#F6A030", color: "white" }}
            />
          );
        }
        // else {
        //   return (
        //     // <Box sx={{ display: "flex" }}>
        //     //   <IconButton onClick={() => ApproveButtonOnClickHandler(params)}>
        //     //     <CheckCircleOutlineIcon sx={{ fill: "#004A92" }} />
        //     //   </IconButton>
        //     //   <IconButton onClick={() => CancelButtonClickHandler(params)}>
        //     //     <CancelOutlinedIcon sx={{ fill: "#004A92" }} />
        //     //   </IconButton>
        //     // </Box>
        //     <></>
        //   );
        // }
      },
    },
  ];
  useEffect(() => {
    const data = dummyData.map((obj) => {
      return {
        id: obj.applicationNum,
        branch: obj.branch,
        UMRNNumber: obj.umrnNumber,
        applicationNumber: obj.applicationNum,
        customerID: obj.customerId,
        customerName: obj.cutomerName,
        mandateNumber: obj.mandateNum,
        mandateBank: obj.bankName,
        status: obj.status,
      };
    });
    setRows(data);
  }, []);
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
        rowDoubleClickHandler={rowDoubleClickHandler}
        pageSizeOptions={[5, 10, 15, 20, 25]}
      />
      <Dialog open={Dialogopen} onClose={handleDialogClose}>
        <DialogTitle>
          <h4>Nach Verification</h4>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Branch"
                variant="standard"
                value={modalData.branch}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="UMRN Number"
                variant="standard"
                value={modalData.UMRNNumber}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Application Number"
                variant="standard"
                value={modalData.applicationNum}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Customer ID"
                variant="standard"
                value={modalData.customerId}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Mandate Number"
                variant="standard"
                value={modalData.customerName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomTextField
                type="text"
                label="Mandate Bank"
                variant="standard"
                value={modalData.mandateNumber}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <>
            <Button
              sx={{ fontWeight: "bold" }}
              variant="contained"
              onClick={verifyButtonClickHandler}
            >
              Verify
            </Button>
            <Button
              sx={{
                marginLeft: "1rem",
                color: "white",
                backgroundColor: "black",
                fontWeight: "bold",
              }}
              onMouseOver={({ target }) => {
                target.style.backgroundColor = "black";
                target.style.color = "white";
              }}
              variant="contained"
              onClick={handleDialogClose}
            >
              Close
            </Button>
          </>
        </DialogActions>
      </Dialog>
      <Dialog
        open={UMRNDialogOpen}
        onClose={handleUMRNDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Application Submitted"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`The UMRN Number ${UMRNNumer} application is Approved`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ fontWeight: "bold" }}
            variant="contained"
            onClick={handleUMRNDialogClose}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </AccordianContainer>
  );
};

export default NachVerification;
