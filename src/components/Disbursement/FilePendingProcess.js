import React from "react";
import { Box, Dialog } from "@mui/material";
import PreviewImage from "./PreviewImage";
import ImageIcon from "@mui/icons-material/Image";
import { DataGrid } from "@mui/x-data-grid";
import DoneIcon from "@mui/icons-material/Done";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EcPatta from "../../images/ec_cert.png";
import Aadhar from "../../images/aadhar.png";
import pan from "../../images/pan.png";
import passbook from "../../images/passbook.png";
import patta from "../../images/patta.png";
import chitta from "../../images/Chitta.png";
import STButton from "../CustomComponents/STButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const FilePendingProcess = (props) => {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [name, setName] = React.useState("");
  const handleCellEvent = (event) => {
    if (event.field === "preview") {
      setUrl(event.value);
      setName(event.row.name);
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const nextClickHandler = () => {
    props.nav("2");
  };

  const handleClose = () => {
    setOpen(false);
  };
  const rows = [
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
  ];

  const columns = [
    {
      field: "id",
      headerName: "S.No",
      headerAlign: "center",
      type: "string",
      sortable: false,
      width: 80,
    },

    {
      field: "name",
      headerName: "File Name",
      headerAlign: "center",
      type: "string",
      width: 300,
      align: "left",
      sortable: false,
      editable: false,
      hideable: false,
    },

    {
      field: "status",
      headerName: "Status",
      headerAlign: "center",
      type: "string",
      width: 210,
      align: "center",
      editable: false,
      sortable: false,
      renderCell: (row) =>
        row.id % 2 === 0 ? (
          <DoneIcon sx={{ color: "green" }} />
        ) : (
          <PendingActionsIcon sx={{ color: "darkgray" }} />
        ),
    },
    {
      field: "preview",
      headerName: "Preview",
      headerAlign: "center",
      type: "string",
      width: 200,
      sortable: false,
      editable: false,
      align: "center",
      renderHeader: () => <ImageIcon />,
      renderCell: () => <ImageIcon />,
    },
  ];

  return (
    <React.Fragment sx={{ height: "100%" }}>
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          height: "400px",
          borderColor: "white",
          "& .MuiDataGrid-row:hover": {
            color: "#004A92",
            backgroundColor: "#B8E4F4",
          },
          "& .MuiDataGrid-columnHeaders": {
            color: "white",
            fontFamily: "Roboto",
            backgroundColor: "#7f7f7f",
          },
        }}
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[4, 8, 12, 16]}
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
        onCellClick={handleCellEvent}
        // columnVisibilityModel={visibility}
      />
      <Dialog onClose={handleClose} handleClose={handleClose} open={open}>
        <PreviewImage
          onClose={handleClose}
          url={url}
          name={name}
          open={open}
        ></PreviewImage>
      </Dialog>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <STButton
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={props.back}
        >
          Back to search
        </STButton>
        <STButton variant="contained" onClick={nextClickHandler}>
          Next
        </STButton>
      </Box>
    </React.Fragment>
  );
};
export default FilePendingProcess;
