import Tooltip from "@mui/material/Tooltip";

import { Edit, MoreVert, Preview } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const MoreAction = ({ params, viewClickHandler }) => {
  const options = ["View", "Modify"];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemHandler = (row) => {
    handleClose();
    viewClickHandler(row);
  };
  return (
    <>
      <Tooltip title="More Actions">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <MoreVert />
        </IconButton>
      </Tooltip>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "100px",
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={option} onClick={() => menuItemHandler(params)}>
            {(() => {
              switch (index) {
                case 0:
                  return (
                    <IconButton
                      size="small"
                      sx={{
                        color: "#004A92",
                        display: "flex",
                        gap: "5px",
                        padding: 0,
                      }}
                    >
                      <Preview fontSize="small" />
                      <Typography
                        variant="inherit"
                        component="div"
                        fontSize="14px"
                        fontWeight="inherit"
                        sx={{ color: "#004A92", fontWeight: "520" }}
                      >
                        {option}
                      </Typography>
                    </IconButton>
                  );
                case 1:
                  return (
                    <IconButton
                      size="small"
                      sx={{
                        color: "#004A92",
                        display: "flex",
                        gap: "5px",
                        padding: 0,
                      }}
                    >
                      <Edit fontSize="small" color="inherit" />
                      <Typography
                        variant="inherit"
                        component="div"
                        fontSize="14px"
                        fontWeight="inherit"
                        sx={{ color: "#004A92", fontWeight: "520" }}
                      >
                        {option}
                      </Typography>
                    </IconButton>
                  );
                default:
                  return;
              }
            })()}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MoreAction;
