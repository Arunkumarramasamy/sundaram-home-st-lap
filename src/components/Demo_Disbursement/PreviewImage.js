import { AppBar, Button, Dialog, IconButton, Toolbar, Typography } from "@mui/material";
import { GridCloseIcon } from "@mui/x-data-grid";
import React from "react";

const PreviewImage = ({ onClose, url, name }) => {
  return (
    <React.Fragment>
      <Dialog
        open={true}
        onClose={onClose}
      >
        <AppBar>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <GridCloseIcon />
            </IconButton>
            <Typography variant="h6">
            {name}
            </Typography>
          </Toolbar>
        </AppBar>

        {{name} && (
          <img src={url} alt={name} />
        )}
      </Dialog>
    </React.Fragment>
  );
};
export default PreviewImage;
