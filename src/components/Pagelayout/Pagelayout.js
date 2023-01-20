import {
  AccountTreeTwoTone,
  AdminPanelSettingsTwoTone,
  AppRegistrationTwoTone,
  ApprovalTwoTone,
  CurrencyRupeeTwoTone,
  DashboardTwoTone,
  DisabledByDefaultTwoTone,
  EngineeringTwoTone,
  ExpandLess,
  ExpandMore,
  LogoutTwoTone,
  PublishedWithChangesTwoTone,
} from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import AddModeratorTwoToneIcon from "@mui/icons-material/AddModeratorTwoTone";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ApprovalIcon from "@mui/icons-material/Approval";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Chip,
  Collapse,
  Divider,
  ListItemText,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";
import { default as React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SFLogoSmall from "../../images/SFLogo.png";
import Logo from "../../images/SF_Logo.png";
import AccrualWaiver from "../Accrual/AccrualWaiver";
import AdditionalAccrual from "../Accrual/AdditionalAccrual";
import GetBranchArray from "../CustomComponents/GetBranchArray";
import { Dashboard } from "../Dashboard/Dashboard";
import Process from "../Demo_Disbursement/Process";
import VoucherAuthorisation from "../Demo_Disbursement/VoucherAuthorisation";
import VoucherCancel from "../Demo_Disbursement/VoucherCancel";
import VoucherGeneration from "../Demo_Disbursement/VoucherGeneration";
import DisbursementCreate from "../Disbursement/Disbursement_Detail/Disbursement_Create/DisbursementCreate";
import DisbursementModify from "../Disbursement/Disbursement_Detail/Disbursement_Modify/DisbursementModify";
import DisbursementView from "../Disbursement/Disbursement_Detail/Disbursement_View/DisbursementView";
import DisbursementApprovalList from "../Disbursement/Disbursement_List/DisbursementApprovalList";
import DisbursementCreatePortal from "../Disbursement/Disbursement_List/DisbursementCreatePortal";
import DisbursementRequestList from "../Disbursement/Disbursement_List/DisbursementRequestList";
import NachApproval from "../Nach/NachApproval";
import NachMandate from "../Nach/NachMandate";
import EnachRegistration from "../Enach/EnachRegistration";
import Verification from "../Nach/Verification";
import ParameterMaintenance from "../ParameterMaintenance/ParameterMaintenance";
import { BranchAction } from "../Store/Branch";
import store from "../Store/index";
import "./PageLayout.css";

const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Pagelayout() {
  const [branchValues, setBranchValues] = useState("");
  const [userName, setUserName] = useState("");
  const branchDetails = useSelector((state) => state.branch.header);
  const initialLoad = useSelector((state) => state.branch.initialLoad);
  useEffect(() => {
    const users = store.getState().branch.userName;
    if (initialLoad) {
      const [branchName] = GetBranchArray();
      dispatch(BranchAction.updateInitialHeaderBranchDetails(branchName));
    }
    setUserName(users);
  }, [branchDetails, initialLoad]);
  const [expanded, setExpanded] = useState(false);
  const [openDisbursementSubMenu, setOpenDisbursementSubMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openAccrualSubMenu, setOpenAccrualSubMenu] = useState(false);
  const [openDemoSubmenu, setOpenDemoSubMenu] = useState(false);
  const [openNachSubMenu, setOpenNachSubMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const open = Boolean(anchorEl);

  const handleDrawerOpen = (event) => {
    setExpanded(true);
  };

  const handleDrawerClose = (event) => {
    setExpanded(false);
    visibleAnchorElement();
  };
  const visibleAnchorElement = () => {};
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDisbursementMenuClick = () => {
    setOpenDisbursementSubMenu(!openDisbursementSubMenu);
    setOpenAccrualSubMenu(false);
    setOpenDemoSubMenu(false);
    setOpenNachSubMenu(false);
  };

  const handleDemoMenuClick = () => {
    setOpenDisbursementSubMenu(false);
    setOpenAccrualSubMenu(false);
    setOpenDemoSubMenu(!openDemoSubmenu);
    setOpenNachSubMenu(false);
  };

  const handleAccrualSubMenu = () => {
    setOpenDisbursementSubMenu(false);
    setOpenAccrualSubMenu(!openAccrualSubMenu);
    setOpenDemoSubMenu(false);
    setOpenNachSubMenu(false);
  };
  const handlerNachSubMenu = () => {
    setOpenDisbursementSubMenu(false);
    setOpenAccrualSubMenu(false);
    setOpenDemoSubMenu(false);
    setOpenNachSubMenu(!openNachSubMenu);
  };
  const handleLogout = () => {
    // Cookies.remove("islogin");
    dispatch(BranchAction.updateLoginStatus(false));
    dispatch(BranchAction.updateBranch([]));
    dispatch(BranchAction.updateUserName(""));
    dispatch(BranchAction.resetHeaderValues());
    navigate("/stlap/login");
    Cookies.remove("Token");
  };

  const menuClickHandler = (event) => {
    setExpanded(false);
    routeBasedOnKey(event.currentTarget.id);
  };

  const routeBasedOnKey = (key) => {
    var path = "/stlap/home/dashboard";
    switch (key) {
      case "dashboard":
        path = "/stlap/home/dashboard";
        break;
      case "parameter":
        path = "/stlap/home/parameter";
        break;
      case "disbursementProcessDemo":
        path = "/stlap/home/disbursementProcessDemo";
        break;
      case "voucherGenerationDemo":
        path = "/stlap/home/voucherGenerationDemo";
        break;
      case "voucherAuthorisationDemo":
        path = "/stlap/home/voucherAuthorisationDemo";
        break;
      case "voucherCancelDemo":
        path = "/stlap/home/voucherCancelDemo";
        break;
      case "additionalAccrual":
        path = "/stlap/home/additionalAccrual";
        break;
      case "additionalWaiver":
        path = "/stlap/home/additionalWaiver";
        break;
      case "disbursementCreatePortal":
        path = "/stlap/home/disbursementCreatePortal";
        break;
      case "disbursementList":
        path = "/stlap/home/disbursementList";
        break;
      case "disbursementApprovalList":
        path = "/stlap/home/disbursementApprovalList";
        break;
      case "nachMandate":
        path = "/stlap/home/nachMandate";
        break;
      case "ENach":
        path = "/stlap/home/eNachRegisteration";
        break;
      case "verification":
        path = "/stlap/home/verification";
        break;
      case "approval":
        path = "/stlap/home/approval";
        break;
      default:
        path = "/stlap/home/dashboard";
        break;
    }
    navigate(path);
  };

  const list = (
    <Box
      sx={{
        width: 300,
        display: "block",
        height: "100%",
        backgroundColor: "#169BD5",
        color: "white",
      }}
      role="presentation"
    >
      <List
        sx={{ width: 300, backgroundColor: "#169BD5" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {/* Dashboard */}
        <ListItemButton id="dashboard" onClick={menuClickHandler}>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {disbusmentImage}/> */}
            <Tooltip title="Dashbard" disableHoverListener={!expanded}>
              <DashboardTwoTone fontSize="medium" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ display: "block" }} />
        </ListItemButton>

        {/* Parameter Maintenance */}
        <ListItemButton id="parameter" onClick={menuClickHandler}>
          <ListItemIcon>
            <Tooltip
              title="Parameter Maintenance"
              disableHoverListener={!expanded}
            >
              <EngineeringTwoTone fontSize="medium" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            primary="Parameter Maintenance"
            sx={{ display: "block" }}
          />
        </ListItemButton>

        {/* ENach Registeration */}
        <ListItemButton id="ENach" onClick={menuClickHandler}>
          <ListItemIcon>
            <Tooltip
              title="ENach Registeration"
              disableHoverListener={!expanded}
            >
              <AccountBalanceIcon fontSize="medium" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            primary="ENach Registeration"
            sx={{ display: "block" }}
          />
        </ListItemButton>

        {/* Nach */}
        <ListItemButton id="fee" onClick={handlerNachSubMenu}>
          <ListItemIcon>
            <Tooltip title="Nach" disableHoverListener={!expanded}>
              <AppRegistrationTwoTone
                fontSize="medium"
                sx={{ color: "white" }}
              />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Nach"
            sx={{ display: "block" }}
          />
          {openNachSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openNachSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              id="nachMandate"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                <Tooltip title="Nach Mandate" disableHoverListener={!expanded}>
                  <AppRegistrationIcon
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Nach Mandate"
              />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              id="verification"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                <Tooltip
                  title="Nach verification"
                  disableHoverListener={!expanded}
                >
                  <VerifiedUserIcon fontSize="medium" sx={{ color: "white" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Nach verification"
              />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              id="approval"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                <Tooltip title="Nach Approval" disableHoverListener={!expanded}>
                  <ApprovalIcon fontSize="medium" sx={{ color: "white" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Nach Approval"
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Disbursement */}
        <ListItemButton id="disbursement" onClick={handleDisbursementMenuClick}>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {disbusmentImage}/> */}
            <Tooltip title="Disbursement" disableHoverListener={!expanded}>
              <CurrencyRupeeTwoTone fontSize="medium" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Disbursement"
            sx={{ display: "block" }}
          />
          {openDisbursementSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openDisbursementSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              id="disbursementCreatePortal"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip
                  title="Disbursement Request Create"
                  disableHoverListener={!expanded}
                >
                  <CreateTwoToneIcon
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Disbursement Request Create"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="disbursementList"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                <Tooltip
                  title="Disbursement List"
                  disableHoverListener={!expanded}
                >
                  <ListAltTwoToneIcon
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Disbursement List"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="disbursementApprovalList"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                <Tooltip
                  title="Disbursement Approval List"
                  disableHoverListener={!expanded}
                >
                  <ApprovalTwoTone fontSize="medium" sx={{ color: "white" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Disbursement Approval List"
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Accrual */}
        <ListItemButton id="fee" onClick={handleAccrualSubMenu}>
          <ListItemIcon>
            <Tooltip title="Additional Fee" disableHoverListener={!expanded}>
              <CurrencyRupeeTwoTone fontSize="medium" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Additional Fee"
            sx={{ display: "block" }}
          />
          {openAccrualSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openAccrualSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              id="additionalAccrual"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip title="Accrual" disableHoverListener={!expanded}>
                  <AccountTreeTwoTone
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Accrual"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="additionalWaiver"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                <Tooltip title="Waiver" disableHoverListener={!expanded}>
                  <AddModeratorTwoToneIcon
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Waiver"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="voucherAuthorisation"
              onClick={menuClickHandler}
            ></ListItemButton>
          </List>
        </Collapse>

        {/* Demo */}
        <ListItemButton id="demo" onClick={handleDemoMenuClick}>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {disbusmentImage}/> */}
            <Tooltip title="Demo" disableHoverListener={!expanded}>
              <CurrencyRupeeTwoTone fontSize="medium" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Demo"
            sx={{ display: "block" }}
          />
          {openDemoSubmenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openDemoSubmenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              id="disbursementProcessDemo"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip title="Process Demo" disableHoverListener={!expanded}>
                  <AccountTreeTwoTone
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Process Demo"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="voucherGenerationDemo"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                <Tooltip
                  title="Authorised Voucher Generation Demo"
                  disableHoverListener={!expanded}
                >
                  <AddModeratorTwoToneIcon
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Authorised Voucher Generation Demo"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="voucherAuthorisationDemo"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip
                  title="Voucher Authorisation Demo"
                  disableHoverListener={!expanded}
                >
                  <AdminPanelSettingsTwoTone
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Voucher Authorisation Demo"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="voucherCancelDemo"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip
                  title="Voucher Cancel Demo"
                  disableHoverListener={!expanded}
                >
                  <DisabledByDefaultTwoTone
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Voucher Cancel Demo"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="newTab"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip title="newTab" disableHoverListener={!expanded}>
                  <DisabledByDefaultTwoTone
                    fontSize="medium"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="newTab"
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <div id="drawer-closer" onClick={handleDrawerClose}></div>
    </Box>
  );

  const desktopHeader = (
    <>
      <Stack direction="row" sx={{ width: "calc(100% - 600px)" }}>
        <img height="36px" src={Logo} alt="No Logo"></img>
      </Stack>

      <Stack direction="row" sx={{ width: "100%", justifyContent: "flex-end" }}>
        <Stack direction="column" sx={{ paddingRight: "8px" }}>
          <Typography sx={{ textAlign: "right" }}>{userName}</Typography>
          <Chip
            label={`Area : ${branchDetails.areaName}, Zone : ${
              branchDetails.zoneName
            }, Branch :${
              branchDetails.branchName !== ""
                ? ` ${branchDetails.branchName}`
                : ""
            }  `}
            component="div"
            sx={{ color: "white" }}
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
        {/* <IconButton color="inherit">
            <NotificationsIcon />
        </IconButton> */}
        <Stack direction="row">
          {/* <Tooltip title="Change Password">
            <IconButton>
              <PublishedWithChangesTwoTone
                sx={{ color: "white" }}
                fontSize="large"
              />
            </IconButton>
          </Tooltip> */}

          <Tooltip title="Logout">
            <IconButton onClick={handleLogout}>
              <LogoutTwoTone sx={{ color: "white" }} fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </>
  );

  const mobileHeader = (
    <>
      <Stack direction="row" sx={{ width: "calc(100% - 600px)" }}>
        <img
          id="logoimage"
          src={SFLogoSmall}
          width={50}
          height={50}
          alt="No Logo"
        ></img>
      </Stack>
      <Stack direction="row" sx={{ width: "100%", justifyContent: "flex-end" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <PersonIcon sx={{ color: "#004a92" }} />
            </Avatar>
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
              <strong>{userName}</strong>
            </Typography>
            {/* Large Devices */}
            {useMediaQuery("(min-width:750px)") && (
              <Chip
                label={`Area : ${branchDetails.areaName}, Zone : ${
                  branchDetails.zoneName
                }, Branch :${
                  branchDetails.branchName !== ""
                    ? ` ${branchDetails.branchName}`
                    : ""
                }  `}
                component="div"
                sx={{ color: "white", bgcolor: "#004a92" }}
              />
            )}
            {/* Small Devices */}
            {useMediaQuery("(max-width:750px)") && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Chip
                    label={`Area : ${branchDetails.areaName}, Zone : ${branchDetails.zoneName}`}
                    component="div"
                    sx={{ color: "white", bgcolor: "#004a92" }}
                  />
                </Box>
                <Box>
                  <Chip
                    label={`Branch :${
                      branchDetails.branchName !== ""
                        ? ` ${branchDetails.branchName}`
                        : ""
                    }  `}
                    component="div"
                    sx={{ color: "white", bgcolor: "#004a92" }}
                  />
                </Box>
              </Box>
            )}
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
          {/* <IconButton color="inherit">
              <NotificationsIcon />
          </IconButton> */}
        </MenuItem>
        <Divider />
        {/* <MenuItem>
          <ListItemButton>
            <ListItemIcon>
              <Tooltip title="Change Password" disableHoverListener={!expanded}>
                <PublishedWithChangesTwoTone
                  fontSize="large"
                  sx={{ color: "black" }}
                />
              </Tooltip>
            </ListItemIcon>
            <ListItemText id="menu-lable" primary="Change Password" />
          </ListItemButton>
        </MenuItem> */}
        <MenuItem>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <Tooltip title="Logout" disableHoverListener={!expanded}>
                <LogoutTwoTone fontSize="large" sx={{ color: "black" }} />
              </Tooltip>
            </ListItemIcon>
            <ListItemText id="menu-lable" primary="Logout" />
          </ListItemButton>
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <div
        className="anchor"
        onClick={handleDrawerOpen}
        height="100%"
        width="4px"
        backgroundColor="black"
      ></div>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#004A92",
          height: "70px",
          justifyContent: "center",
        }}
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
          {useMediaQuery("(min-width:1024px)") && desktopHeader}
          {useMediaQuery("(max-width:1023px)") && mobileHeader}
        </Toolbar>
      </AppBar>
      <div>
        <Drawer
          anchor="left"
          id="drawer-menu"
          open={expanded}
          onClose={handleDrawerClose}
        >
          {list}
        </Drawer>
      </div>

      {/* Page Body */}
      <Box
        sx={{ width: "100%", marginTop: "70px", padding: "8px 0px 0px 8px" }}
      >
        {/* <Container
          sx={{ maxWidth:'unset !important' }}
        > */}
        <Routes>
          <Route
            path={`${search}/stlap/home/dashboard`}
            element={<Dashboard />}
          />
          <Route
            path={`${search}/stlap/home/parameter`}
            element={<ParameterMaintenance />}
          />

          <Route
            path={`${search}/stlap/home/disbursementCreatePortal`}
            element={<DisbursementCreatePortal />}
          />

          <Route
            path={`${search}/stlap/home/disbursementCreate`}
            element={
              <DisbursementCreate
                screenMode="CREATE"
                screenTitle="Disbursement Request Create"
              />
            }
          />

          <Route
            path={`${search}/stlap/home/disbursementModify`}
            element={
              <DisbursementModify
                screenMode="MODIFY"
                screenTitle="Disbursement Request Modify"
              />
            }
          />

          <Route
            path={`${search}/stlap/home/disbursementCancel`}
            element={
              <DisbursementModify
                screenMode="CANCEL"
                screenTitle="Disbursement Request Cancel"
              />
            }
          />

          <Route
            path={`${search}/stlap/home/disbursementApprove`}
            element={
              <DisbursementModify
                screenMode="APPROVE"
                screenTitle="Disbursement Request Approve"
              />
            }
          />

          <Route
            path={`${search}/stlap/home/disbursementView`}
            element={
              <DisbursementView
                screenMode="VIEW"
                screenTitle="Disbursement Request View"
              />
            }
          />

          <Route
            path={`${search}/stlap/home/disbursementList`}
            element={<DisbursementRequestList mode="REQUESTLIST" />}
          />

          <Route
            path={`${search}/stlap/home/disbursementApprovalList`}
            element={<DisbursementApprovalList />}
          />

          {/* Demo */}
          <Route
            path={`${search}/stlap/home/disbursementProcessDemo`}
            element={<Process />}
          />
          <Route
            path={`${search}/stlap/home/nachMandate`}
            element={<NachMandate />}
          />

          <Route
            path={`${search}/stlap/home/verification`}
            element={<Verification />}
          />
          <Route
            path={`${search}/stlap/home/approval`}
            element={<NachApproval />}
          />
          <Route
            path={`${search}/stlap/home/voucherGenerationDemo`}
            element={<VoucherGeneration />}
          />
          <Route
            path={`${search}/stlap/home/voucherAuthorisationDemo`}
            element={<VoucherAuthorisation />}
          />
          <Route
            path={`${search}/stlap/home/voucherCancelDemo`}
            element={<VoucherCancel />}
          />
          <Route
            path={`${search}/stlap/home/additionalAccrual`}
            element={<AdditionalAccrual />}
          />
          <Route
            path={`${search}/stlap/home/additionalWaiver`}
            element={<AccrualWaiver />}
          />
          <Route
            path={`${search}/stlap/home/eNachRegisteration`}
            element={<EnachRegistration />}
          />
          {/* <Route path="*" exact={true} element={<Loginpage />} /> */}
        </Routes>
        {/* </Container> */}
      </Box>
    </Box>
  );
}
