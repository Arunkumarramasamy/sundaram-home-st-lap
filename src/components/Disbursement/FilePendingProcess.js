import React from "react";
import { Box, Dialog } from "@mui/material";
import PreviewImage from "./PreviewImage";
import ImageIcon from "@mui/icons-material/Image";
import { DataGrid } from "@mui/x-data-grid";
import DoneIcon from "@mui/icons-material/Done";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import STButton from "../CustomComponents/STButton";

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


  const handleClose = () => {
    setOpen(false);
  };
  
  const columns = [
    {
      field: "id",
      headerName: "S.No",
      headerAlign: "center",
      type: "string",
      sortable: false,
      width: 80,
      align: "right",
    },

    {
      field: "name",
      headerName: "File Name",
      headerAlign: "center",
      type: "string",
      width: 300,
      align: "center",
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

  let visibility = {
    id: false,
    status: false,
    preview: false,
  };
  if(window.innerWidth > 700){
    visibility = {};
  }

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
        rows={props.dataMap.FilePendingProcess.filesGrid}
        columns={columns}
        rowsPerPageOptions={[4, 8, 12, 16]}
        getRowClassName={(params) =>
          params.id % 2 ? `super-app-theme--even` : `super-app-theme--odd`
        }
        onCellClick={handleCellEvent}
        initialState={{
          columns: {
            columnVisibilityModel: {
             ...visibility
            },
          },
        }}
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
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <STButton variant="contained" onClick={props.back}>
          Back to search
        </STButton>
      </Box>
    </React.Fragment>
  );
};
export default FilePendingProcess;
