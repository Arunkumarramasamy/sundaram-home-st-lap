import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {  ListItemText, Chip, Divider, Tooltip, ListItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Logo from "../../images/SF_Logo.png";
import "./PageLayout.css";
import {
  Inbox,
  LogoutTwoTone,
  Mail,
} from "@mui/icons-material";
import Cookies from "js-cookie";

import "simplebar-react/dist/simplebar.min.css";
import Stack from "@mui/material/Stack";
import MediaQuery from "react-responsive";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import SFLogoSmall from "../../images/SFLogo.png";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Pagelayout() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const history = useNavigate();
  const handleDrawerOpen = () => {
    setExpanded(true);
  };

  const handleDrawerClose = () => {
    setExpanded(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("islogin");
    history("/stlap/login");
  };


  const list =  (
    <Box
      sx={{ width:  250 }}
      role="presentation"
      onClick={handleDrawerOpen}
      onKeyDown={handleDrawerOpen}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const desktopHeader = (<><Stack direction="row" sx={{ width: "calc(100% - 600px)" }}>
  <img id="logoimage" src={Logo} alt="No Logo"></img>    
</Stack>
<Stack
  direction="row"
  sx={{ width: "100%", justifyContent: "flex-end" }}
>
  <Stack direction="column" sx={{ paddingRight: "8px" }}>
    <Typography sx={{ marginTop: "8px", textAlign: "center" }}>
      Kathir Venkatesan
    </Typography>
    <Chip
      label="Last Login:21/11/2022 05:00pm"
      component="div"
      sx={{ color: "white", bgcolor: "#727dff" }}
    />
  </Stack>
  <Divider
    sx={{
      borderWidth: "2px",
      backgroundColor: "#fff",
      height: "50px",
      marginTop: "5px",
    }}
    orientation="vertical"
    flexItem
  />
  <IconButton color="inherit">
    <Badge badgeContent={4} color="secondary">
      <NotificationsIcon />
    </Badge>
  </IconButton>
</Stack></>);

const mobileHeader = (<><Stack direction="row" sx={{ width: "calc(100% - 600px)" }}>
<img
  id="logoimage"
  src={SFLogoSmall}
  width={50}
  height={50}
  alt="No Logo"
></img>
</Stack>
<Stack
direction="row"
sx={{ width: "100%", justifyContent: "flex-end" }}
>
<Tooltip title="Account settings">
  <IconButton
    onClick={handleClick}
    size="small"
    sx={{ ml: 2 }}
    aria-controls={open ? "account-menu" : undefined}
    aria-haspopup="true"
    aria-expanded={open ? "true" : undefined}
  >
    <Avatar sx={{ width: 32, height: 32 }}>KV</Avatar>
  </IconButton>
</Tooltip>
</Stack>

<Menu
                anchorEl={anchorEl}
id="account-menu"
open={open}
                onClose={handleClose}
                onClick={handleClose}
PaperProps={{
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}}
transformOrigin={{ horizontal: "right", vertical: "top" }}
anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
>
<MenuItem>
  <Stack direction="column" sx={{ paddingRight: "8px" }}>
    <Typography sx={{ marginTop: "8px", textAlign: "center" }}>
      <strong>Kathir Venkatesan</strong>
    </Typography>
    <Chip
      label="Last Login:21/11/2022 05:00pm"
      component="div"
      sx={{ color: "white", bgcolor: "#727dff" }}
    />
  </Stack>
  <Divider
    sx={{
      borderWidth: "2px",
      backgroundColor: "#fff",
      height: "50px",
      marginTop: "5px",
    }}
    orientation="vertical"
    flexItem
  />
  <IconButton color="inherit">
    <Badge badgeContent={4} color="secondary">
      <NotificationsIcon />
    </Badge>
  </IconButton>
</MenuItem>
<Divider />
<MenuItem>
  <ListItemButton onClick={handleLogout}>
    <ListItemIcon>
      <Tooltip title="Logout" disableHoverListener={!expanded}>
        <LogoutTwoTone
          fontSize="large"
          sx={{ color: "black" }}
        />
      </Tooltip>
    </ListItemIcon>
    <ListItemText id="menu-lable" primary="Logout" />
  </ListItemButton>
</MenuItem>
</Menu></>);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
          position="fixed"
          sx={{ backgroundColor: "#004A92", height: "70px" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>

            <MediaQuery query="(min-device-width: 1024px)">
              {desktopHeader}
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1023px)">
              
            </MediaQuery>
          </Toolbar>
        </AppBar>
      <Drawer
            anchor="left"
            open={expanded}
            onClose={handleDrawerClose}
          >
            {list}
          </Drawer>
        
      
    </Box>
  );
}