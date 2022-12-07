import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  ListItemText,
  Chip,
  Divider,
  Tooltip,
  Collapse,
  Container,
  useMediaQuery,
} from "@mui/material";
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
import Cookies from "js-cookie";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import SFLogoSmall from "../../images/SFLogo.png";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  AccountTreeTwoTone,
  AdminPanelSettingsTwoTone,
  AppRegistrationTwoTone,
  ArticleTwoTone,
  AssignmentReturnedTwoTone,
  AssignmentReturnTwoTone,
  BookOnlineTwoTone,
  ContactEmergencyTwoTone,
  CurrencyRupeeTwoTone,
  DashboardTwoTone,
  DisabledByDefaultTwoTone,
  ExpandLess,
  ExpandMore,
  LogoutTwoTone,
  PersonSearchTwoTone,
  PublishedWithChangesTwoTone,
  ReceiptLongTwoTone,
  SecurityTwoTone,
} from "@mui/icons-material";
import AnalyticsTwoToneIcon from "@mui/icons-material/AnalyticsTwoTone";
import AssuredWorkloadTwoToneIcon from "@mui/icons-material/AssuredWorkloadTwoTone";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import PollTwoToneIcon from "@mui/icons-material/PollTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";
import CloudDoneTwoToneIcon from "@mui/icons-material/CloudDoneTwoTone";
import AccessibilityTwoToneIcon from "@mui/icons-material/AccessibilityTwoTone";
import AddModeratorTwoToneIcon from "@mui/icons-material/AddModeratorTwoTone";
import SpeakerNotesTwoToneIcon from "@mui/icons-material/SpeakerNotesTwoTone";
import StickyNote2TwoToneIcon from "@mui/icons-material/StickyNote2TwoTone";
import ShortTextTwoToneIcon from "@mui/icons-material/ShortTextTwoTone";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import UpdateTwoToneIcon from "@mui/icons-material/UpdateTwoTone";
import { useState } from "react";
import { Dashboard } from "../Dashboard/Dashboard";
import Process from "../Disbursement/Process";
import VoucherGeneration from "../Disbursement/VoucherGeneration";
import VoucherAuthorisation from "../Disbursement/VoucherAuthorisation";
import VoucherCancel from "../Disbursement/VoucherCancel";
import Loginpage from "../Loginpage/Loginpage";

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
  const [expanded, setExpanded] = useState(false);
  const [openNachSubMenu, setOpenNachSubMenu] = useState(false);
  const [openInsuranceSubMenu, setOpenInsuranceSubMenu] = useState(false);
  const [openMemoSubMenu, setOpenMemoSubMenu] = useState(false);
  const [openReceiptSubMenu, setopenReceiptSubMenu] = useState(false);
  const [openDisbursementSubMenu, setOpenDisbursementSubMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
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

  const handleNachMenuClick = () => {
    setOpenNachSubMenu(!openNachSubMenu);
    setOpenInsuranceSubMenu(false);
    setOpenMemoSubMenu(false);
    setopenReceiptSubMenu(false);
    setOpenDisbursementSubMenu(false);
  };

  const handleInsuranceMenuClick = () => {
    setOpenInsuranceSubMenu(!openInsuranceSubMenu);
    setOpenNachSubMenu(false);
    setOpenMemoSubMenu(false);
    setopenReceiptSubMenu(false);
    setOpenDisbursementSubMenu(false);
  };

  const handleMemoSubMenuClick = () => {
    setOpenMemoSubMenu(!openMemoSubMenu);
    setOpenNachSubMenu(false);
    setOpenInsuranceSubMenu(false);
    setopenReceiptSubMenu(false);
    setOpenDisbursementSubMenu(false);
  };

  const handleReceiptSubMenuClick = () => {
    setopenReceiptSubMenu(!openReceiptSubMenu);
    setOpenNachSubMenu(false);
    setOpenInsuranceSubMenu(false);
    setOpenMemoSubMenu(false);
    setOpenDisbursementSubMenu(false);
  };

  const handleDisbursementMenuClick = () => {
    setOpenDisbursementSubMenu(!openDisbursementSubMenu);
    setopenReceiptSubMenu(false);
    setOpenNachSubMenu(false);
    setOpenInsuranceSubMenu(false);
    setOpenMemoSubMenu(false);
  };

  const handleLogout = () => {
    Cookies.remove("islogin");
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
      case "disbursementProcess":
        path = "/stlap/home/disbursementProcess";
        break;
      case "voucherGeneration":
        path = "/stlap/home/voucherGeneration";
        break;
      case "voucherAuthorisation":
        path = "/stlap/home/voucherAuthorisation";
        break;
      case "voucherCancel":
        path = "/stlap/home/voucherCancel";
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
              <DashboardTwoTone fontSize="large" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ display: "block" }} />
        </ListItemButton>

        {/* NACH */}
        <ListItemButton onClick={handleNachMenuClick}>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {Nach}/> */}
            <Tooltip title="NACH" disableHoverListener={!expanded}>
              <AppRegistrationTwoTone
                fontSize="large"
                sx={{ color: "white" }}
              />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            sx={{ display: "block" }}
            primary="NACH"
          />

          {openNachSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openNachSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Nach} /> */}
                <Tooltip
                  title="E-NACH/NACH Initiation Process"
                  disableHoverListener={!expanded}
                >
                  <AppRegistrationTwoTone
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="E-NACH/NACH Initiation Process"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Nach} /> */}
                <Tooltip
                  title="E-NACH Initiation Process"
                  disableHoverListener={!expanded}
                >
                  <AnalyticsTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="E-NACH Initiation Process"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Nach} /> */}
                <Tooltip
                  title="E-NACH Mandate Link Page"
                  disableHoverListener={!expanded}
                >
                  <AssuredWorkloadTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="E-NACH Mandate Link Page"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="nachMandateEntry"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Nach} /> */}
                <Tooltip
                  title="NACH - Mandate Entry"
                  disableHoverListener={!expanded}
                >
                  <ModeEditOutlineTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="NACH - Mandate Entry"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Nach} /> */}
                <Tooltip
                  title="NACH - Mandate Verification and Modification"
                  disableHoverListener={!expanded}
                >
                  <PollTwoToneIcon fontSize="large" sx={{ color: "white" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="NACH - Mandate Verification and Modification"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }} id="bank" onClick={menuClickHandler}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Nach} /> */}
                <Tooltip
                  title="NACH - Mandate Bank Submission"
                  disableHoverListener={!expanded}
                >
                  <DescriptionTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="NACH - Mandate Bank Submission"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Nach} /> */}
                <Tooltip
                  title="NACH - Mandate Delete"
                  disableHoverListener={!expanded}
                >
                  <DisplaySettingsTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="NACH - Mandate Delete"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Nach} /> */}
                <Tooltip
                  title="NACH - UMRN Updation/Upload"
                  disableHoverListener={!expanded}
                >
                  <CloudDoneTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="NACH - UMRN Updation/Upload"
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Insurance  */}
        <ListItemButton onClick={handleInsuranceMenuClick}>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {Insurance}/> */}
            <Tooltip title="Insurance" disableHoverListener={!expanded}>
              <SecurityTwoTone fontSize="large" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Insurance"
            sx={{ display: "block" }}
          />
          {openInsuranceSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openInsuranceSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip
                  title="Insurance Master"
                  disableHoverListener={!expanded}
                >
                  <AccessibilityTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Insurance Master"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip
                  title="Insurance Details-Appl level details"
                  disableHoverListener={!expanded}
                >
                  <AddModeratorTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Insurance Details-Appl level details"
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Disbursement */}
        <ListItemButton id="disbursement" onClick={handleDisbursementMenuClick}>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {disbusmentImage}/> */}
            <Tooltip title="Disbursement" disableHoverListener={!expanded}>
              <CurrencyRupeeTwoTone fontSize="large" sx={{ color: "white" }} />
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
              id="disbursementProcess"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip title="Process" disableHoverListener={!expanded}>
                  <AccountTreeTwoTone
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Process"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="voucherGeneration"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip
                  title="Authorised Voucher Generation"
                  disableHoverListener={!expanded}
                >
                  <AddModeratorTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Authorised Voucher Generation"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="voucherAuthorisation"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip
                  title="Voucher Authorisation"
                  disableHoverListener={!expanded}
                >
                  <AdminPanelSettingsTwoTone
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Voucher Authorisation"
              />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              id="voucherCancel"
              onClick={menuClickHandler}
            >
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Insurance} /> */}
                <Tooltip
                  title="Voucher Cancel"
                  disableHoverListener={!expanded}
                >
                  <DisabledByDefaultTwoTone
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Voucher Cancel"
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* AccountMaster */}
        <ListItemButton>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {AccountMaster}/> */}
            <Tooltip
              title="Account Master Impact"
              disableHoverListener={!expanded}
            >
              <ContactEmergencyTwoTone
                fontSize="large"
                sx={{ color: "white" }}
              />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Account Master Impact"
            sx={{ display: "block" }}
          />
        </ListItemButton>

        {/* Memo */}
        <ListItemButton onClick={handleMemoSubMenuClick}>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {Memo}/> */}
            <Tooltip title="Memo" disableHoverListener={!expanded}>
              <ArticleTwoTone fontSize="large" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary="Memo" sx={{ display: "block" }} />
          {openMemoSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openMemoSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Memo} /> */}
                <Tooltip
                  title="Memo Defn. - Incl. of GST"
                  disableHoverListener={!expanded}
                >
                  <SpeakerNotesTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Memo Defn. - Incl. of GST"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Memo} /> */}
                <Tooltip
                  title="Memo - GL Mapping"
                  disableHoverListener={!expanded}
                >
                  <StickyNote2TwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Memo - GL Mapping"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Memo} /> */}
                <Tooltip
                  title="Memo GL - GST Mapping"
                  disableHoverListener={!expanded}
                >
                  <ShortTextTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Memo GL - GST Mapping"
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* TDS */}
        <ListItemButton id="tds" onClick={menuClickHandler}>
          <ListItemIcon>
            {/* <img id = 'layout-menu-image' src = {tdsImage}/> */}

            <Tooltip title="TDS" disableHoverListener={!expanded}>
              <AssignmentReturnedTwoTone
                fontSize="large"
                sx={{ color: "white" }}
              />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="TDS"
            sx={{ display: "block" }}
          />
        </ListItemButton>

        {/* Receipt */}
        <ListItemButton onClick={handleReceiptSubMenuClick}>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {Receipt}/> */}
            <Tooltip title="Receipt Process" disableHoverListener={!expanded}>
              <ReceiptLongTwoTone fontSize="large" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Receipt Process"
            sx={{ display: "block" }}
          />
          {openReceiptSubMenu ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openReceiptSubMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Receipt} /> */}
                <Tooltip
                  title="Create - Cash/Check/DD/RTGS/NEFT"
                  disableHoverListener={!expanded}
                >
                  <ReceiptLongTwoTone
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Create - Cash/Check/DD/RTGS/NEFT"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Receipt} /> */}
                <Tooltip title="Modify" disableHoverListener={!expanded}>
                  <ReceiptLongTwoTone
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Modify"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Receipt} /> */}
                <Tooltip title="Query" disableHoverListener={!expanded}>
                  <ListAltTwoToneIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText primary="Query" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Receipt} /> */}
                <Tooltip
                  title="Realization Updation"
                  disableHoverListener={!expanded}
                >
                  <CreateTwoToneIcon fontSize="large" sx={{ color: "white" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Realization Updation"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Receipt} /> */}
                <Tooltip
                  title="Create - Single"
                  disableHoverListener={!expanded}
                >
                  <UpdateTwoToneIcon fontSize="large" sx={{ color: "white" }} />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Create - Single"
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                {/* <img id='layout-menu-image' src={Receipt} /> */}
                <Tooltip title="Create - Bulk" disableHoverListener={!expanded}>
                  <ReceiptLongTwoTone
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                id="menu-lable"
                sx={{ display: "block" }}
                primary="Create - Bulk"
              />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Return */}
        <ListItemButton>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {Return}/> */}
            <Tooltip title="Return" disableHoverListener={!expanded}>
              <AssignmentReturnTwoTone
                fontSize="large"
                sx={{ color: "white" }}
              />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Return"
            sx={{ display: "block" }}
          />
        </ListItemButton>

        {/* JV */}
        <ListItemButton>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {JV}/> */}
            <Tooltip title="JV" disableHoverListener={!expanded}>
              <BookOnlineTwoTone fontSize="large" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="JV"
            sx={{ display: "block" }}
          />
        </ListItemButton>

        {/* Query */}
        <ListItemButton>
          <ListItemIcon>
            {/* <img  id = 'layout-menu-image' src = {Query}/> */}
            <Tooltip
              title="Comprehensive Query"
              disableHoverListener={!expanded}
            >
              <PersonSearchTwoTone fontSize="large" sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            id="menu-lable"
            primary="Comprehensive Query"
            sx={{ display: "block" }}
          />
        </ListItemButton>
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
          <Typography sx={{ textAlign: "center" }}>
            {Cookies.get("userName")}
          </Typography>
          <Chip
            label={Cookies.get("lastLogin")}
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
        <Stack direction="row">
          <Tooltip title="Change Password">
            <IconButton>
              <PublishedWithChangesTwoTone
                sx={{ color: "white" }}
                fontSize="large"
              />
            </IconButton>
          </Tooltip>

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
              <strong>{Cookies.get("userName")}</strong>
            </Typography>
            <Chip
              label={Cookies.get("lastLogin")}
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
        </MenuItem>
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
            path={`${search}/stlap/home/disbursementProcess`}
            element={<Process />}
          />
          <Route
            path={`${search}/stlap/home/voucherGeneration`}
            element={<VoucherGeneration />}
          />
          <Route
            path={`${search}/stlap/home/voucherAuthorisation`}
            element={<VoucherAuthorisation />}
          />
          <Route
            path={`${search}/stlap/home/voucherCancel`}
            element={<VoucherCancel />}
          />

          {/* <Route path="*" exact={true} element={<Loginpage />} /> */}
        </Routes>
        {/* </Container> */}
      </Box>
    </Box>
  );
}
