import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Paper,ListItemText, Chip, Divider, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ListItemIcon from '@mui/material/ListItemIcon';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from '../../images/logo.png';
import './PageLayout.css';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DisbursementRequestPage from '../DisbursementRequest/DisbursementRequestPage';
import { AppRegistrationTwoTone, ArticleTwoTone, AssignmentReturnedTwoTone, AssignmentReturnTwoTone, BookOnlineTwoTone, ContactEmergencyTwoTone, ContactMailTwoTone, CurrencyRupee, CurrencyRupeeTwoTone, DashboardTwoTone, Label, LogoutTwoTone, PersonSearchTwoTone, PublishedWithChangesTwoTone, ReceiptLongTwoTone, Security, SecurityTwoTone, SupervisedUserCircleTwoTone } from '@mui/icons-material';
import { Routes, Route } from "react-router-dom";
import Loginpage from '../Loginpage/Loginpage';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import EnachMandate from '../NACH/EnachMandate';
import { Dashboard } from '../Dashboard/Dashboard';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Stack from '@mui/material/Stack';
import MediaQuery from 'react-responsive';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import SFLogoSmall from '../../images/SFLogo.png';



const PageLayout = () => {
const innerHeight =  window.innerHeight

  const [openNachSubMenu, setOpenNachSubMenu] = useState(false);
  const [openInsuranceSubMenu, setOpenInsuranceSubMenu] = useState(false);
  const [openMemoSubMenu, setOpenMemoSubMenu] = useState(false);
  const [openReceiptSubMenu, setopenReceiptSubMenu] = useState(false);
  const {search} = useLocation();
  const history = useNavigate();

  const [expanded, setExpanded] = React.useState(true);
  const [expandWidth, setMenuWidth] = React.useState(70);
  const [menuLableDisplay, setmenuLableDisplay] = React.useState('none');
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNachMenuClick = () => {
    setOpenNachSubMenu(!openNachSubMenu);
  };

  const handleInsuranceMenuClick = () => {
    setOpenInsuranceSubMenu(!openInsuranceSubMenu);
  };

  const handleMemoSubMenuClick = () => {
    setOpenMemoSubMenu(!openMemoSubMenu);
  };

  const handleReceiptSubMenuClick = () => {
    setopenReceiptSubMenu(!openReceiptSubMenu);
  };

  const handleLogout = () => {
    Cookies.remove('islogin');
    history('/stlap/login');
  };

  const menuClickHandler = (event) =>{

     routeBasedOnKey(event.currentTarget.id);
  };

  const routeBasedOnKey = (key) => {
    var path = '/stlap/home/dashboard';
    switch(key){
     case 'disbursement':
    path = '/stlap/home/disbursement';
    break;
    case 'dashboard':
      path = '/stlap/home/dashboard';
      break;
      case 'nachMandateEntry':
      path = '/stlap/home/nach/mandateentry';
      break;
    default:
      path='/stlap/home/dashboard';
      break;
  }
  console.log(path);
   history(path);
  };


  const screenWidth = window.innerWidth;
  const handleMenuExpandCollapse = () =>{
    setExpanded(!expanded);
    setMenuWidth(screenWidth < 1024 ? 70 : expanded?300:70);
    setmenuLableDisplay(screenWidth < 1024 ? 'none' : expanded?'block':'none');
    }

  return (
    <div id='maindiv'>
      <Stack sx={{  height: "calc(100% - 82px)", }}>

      <AppBar position="fixed" sx = {{backgroundColor: '#004A92',height:"70px"}}>
        <Toolbar>
          {screenWidth < 1024 ? <React.Fragment></React.Fragment> :  <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>handleMenuExpandCollapse()}
          >
            <MenuIcon />
          </IconButton>}
            <MediaQuery query="(min-device-width: 1024px)">
              <Stack direction='row' sx={{ width: 'calc(100% - 600px)' }}>

                <img id='logoimage' src={Logo} ></img>

                <DraftsOutlinedIcon sx={{ marginTop: "15px", marginLeft: "60px" }}>
                </DraftsOutlinedIcon>
                <Typography id='header-email-id' align='left'>sundaram.help@sundaram.com</Typography>
                <LocalPhoneOutlinedIcon sx={{ marginTop: "15px", marginLeft: "16px" }} />
                <Typography id='header-email-id' align='left'>9876543210</Typography>
              </Stack>
              <Stack direction='row' sx={{ width: "100%", justifyContent: 'flex-end' }}>
                <Stack direction='column' sx={{ paddingRight: '8px' }}>

                  <Typography sx={{ marginTop: "8px", textAlign: 'center' }} >Kathir Venkatesan</Typography>
                  <Chip label="Last Login:21/11/2022 05:00pm" component="div" sx={{ color: 'white', bgcolor: '#727dff' }} />
                </Stack>
                <Divider sx={{ borderWidth: '2px', backgroundColor: '#fff', height: '50px', marginTop: '5px' }} orientation="vertical" flexItem />
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon sx={{ padding: 18 }} />
                  </Badge>
                </IconButton>
              </Stack>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1023px)">
              <Stack direction='row' sx={{ width: 'calc(100% - 600px)' }}>
                <img id='logoimage' src={SFLogoSmall} width={50} height={50} ></img>
                
                </Stack>
                <Stack direction='row' sx={{ width: "100%", justifyContent: 'flex-end' }}>
                <DraftsOutlinedIcon sx={{ marginTop: "15px", marginLeft: "60px" }}>
                </DraftsOutlinedIcon>
                {/* <Typography id='header-email-id' align='left'>sundaram.help@sundaram.com</Typography> */}
                <LocalPhoneOutlinedIcon sx={{ marginTop: "15px", marginLeft: "16px" }} />
                {/* <Typography id='header-email-id' align='left'>9876543210</Typography> */}
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
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
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <Stack direction='column' sx={{ paddingRight: '8px' }}>
                    <Typography sx={{ marginTop: "8px", textAlign: 'center' }} ><strong>Kathir Venkatesan</strong></Typography>
                    <Chip label="Last Login:21/11/2022 05:00pm" component="div" sx={{ color: 'white', bgcolor: '#727dff' }} />
                  </Stack>
                  <Divider sx={{ borderWidth: '2px', backgroundColor: '#fff', height: '50px', marginTop: '5px' }} orientation="vertical" flexItem />
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon sx={{ padding: 18 }} />
                    </Badge>
                  </IconButton>
                </MenuItem>
                <Divider />
                <MenuItem>
                <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
        <Tooltip title="Logout" disableHoverListener={!expanded}>
                        <LogoutTwoTone fontSize='large' sx={{ color: 'black' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="Logout" />
      </ListItemButton>
                </MenuItem>
              </Menu>
            </MediaQuery>
          
        </Toolbar>
      </AppBar>
         
        <Stack direction="row" sx={{ height: window.innerHeight - 142, justifyContent:'flex-end',marginTop:'70px' }}>
          <Box sx={{ minWidth :expandWidth+10}}>
            <SimpleBar id = 'simple-bar' style={{ maxHeight: window.innerHeight - 142 }}>
              <Paper elevation={0.5} id='menu-box' sx={{ width: expandWidth, maxWidth: '100%',
                fontWeight: 'bold',height:window.innerHeight + 32}}>
                <List
                  sx={{ width: expandWidth, maxWidth: 360 }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >

                  {/* Dashboard */}
                  <ListItemButton id='dashboard' onClick={menuClickHandler}>
                    <ListItemIcon>
                      {/* <img  id = 'layout-menu-image' src = {disbusmentImage}/> */}
                      <Tooltip title="Dashbard" disableHoverListener={!expanded}>
                        <DashboardTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" sx={{ display: menuLableDisplay }} />
                  </ListItemButton>

      {/* NACH */}
      <ListItemButton onClick={handleNachMenuClick}>
        <ListItemIcon>
          {/* <img  id = 'layout-menu-image' src = {Nach}/> */}
          <Tooltip title="NACH" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH" />
       
        {openNachSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

                  <Collapse in={openNachSubMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} >
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Nach} /> */}
                          <Tooltip title="E-NACH/NACH Initiation Process" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="E-NACH/NACH Initiation Process" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Nach} /> */}
                          <Tooltip title="E-NACH Initiation Process" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="E-NACH Initiation Process" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Nach} /> */}
                          <Tooltip title="E-NACH Mandate Link Page" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="E-NACH Mandate Link Page" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }} id='nachMandateEntry' onClick={menuClickHandler}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Nach} /> */}
                          <Tooltip title="NACH - Mandate Entry" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="NACH - Mandate Entry" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Nach} /> */}
                          <Tooltip title="NACH - Mandate Verification and Modification" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="NACH - Mandate Verification and Modification" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Nach} /> */}
                          <Tooltip title="NACH - Mandate Bank Submission" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="NACH - Mandate Bank Submission" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Nach} /> */}
                          <Tooltip title="NACH - Mandate Delete" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="NACH - Mandate Delete" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Nach} /> */}
                          <Tooltip title="NACH - UMRN Updation/Upload" disableHoverListener={!expanded}>
                        <AppRegistrationTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="NACH - UMRN Updation/Upload" />
                      </ListItemButton>

                    </List>
                  </Collapse>


      {/* Insurance  */}
      <ListItemButton  onClick={handleInsuranceMenuClick}>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {Insurance}/> */}
        <Tooltip title="Insurance" disableHoverListener={!expanded}>
                        <SecurityTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="Insurance" sx = {{display:menuLableDisplay}}/>
        {openInsuranceSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

                  <Collapse in={openInsuranceSubMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Insurance} /> */}
                          <Tooltip title="Insurance Master" disableHoverListener={!expanded}>
                        <SecurityTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Insurance Master" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Insurance} /> */}
                          <Tooltip title="Insurance Details-Appl level details" disableHoverListener={!expanded}>
                        <SecurityTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Insurance Details-Appl level details" />
                      </ListItemButton>
                    </List>
                  </Collapse>


      {/* Disbursement */}
      <ListItemButton id='disbursement' onClick={menuClickHandler}>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {disbusmentImage}/> */}
        <Tooltip title="Disbursement" disableHoverListener={!expanded}>
                        <CurrencyRupeeTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="Disbursement" sx = {{display:menuLableDisplay}} />
      </ListItemButton>

      {/* AccountMaster */}
      <ListItemButton>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {AccountMaster}/> */}
        <Tooltip title="Account Master Impact" disableHoverListener={!expanded}>
                        <ContactEmergencyTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="Account Master Impact" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>

      {/* Memo */}
      <ListItemButton onClick={handleMemoSubMenuClick}>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {Memo}/> */}
        <Tooltip title="Memo" disableHoverListener={!expanded}>
                        <ArticleTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Memo" sx = {{display:menuLableDisplay}}/>
        {openMemoSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

                  <Collapse in={openMemoSubMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Memo} /> */}
                          <Tooltip title="Memo Defn. - Incl. of GST" disableHoverListener={!expanded}>
                        <ArticleTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Memo Defn. - Incl. of GST" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Memo} /> */}
                          <Tooltip title="Memo - GL Mapping" disableHoverListener={!expanded}>
                        <ArticleTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Memo - GL Mapping" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Memo} /> */}
                          <Tooltip title="Memo GL - GST Mapping" disableHoverListener={!expanded}>
                        <ArticleTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Memo GL - GST Mapping" />
                      </ListItemButton>
                    </List>
                  </Collapse>

      {/* TDS */}
      <ListItemButton>
        <ListItemIcon>
          {/* <img id = 'layout-menu-image' src = {tdsImage}/> */}
          
          <Tooltip title="TDS" disableHoverListener={!expanded}>
                        <AssignmentReturnedTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="TDS" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>


      {/* Receipt */}
      <ListItemButton onClick={handleReceiptSubMenuClick}>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {Receipt}/> */}
        <Tooltip title="Receipt Process" disableHoverListener={!expanded}>
                        <ReceiptLongTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="Receipt Process" sx = {{display:menuLableDisplay}}/>
        {openReceiptSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

                  <Collapse in={openReceiptSubMenu} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Receipt} /> */}
                          <Tooltip title="Create - Cash/Check/DD/RTGS/NEFT" disableHoverListener={!expanded}>
                        <ReceiptLongTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Create - Cash/Check/DD/RTGS/NEFT" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Receipt} /> */}
                          <Tooltip title="Modify" disableHoverListener={!expanded}>
                        <ReceiptLongTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Modify" />

                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Receipt} /> */}
                          <Tooltip title="Query" disableHoverListener={!expanded}>
                        <ReceiptLongTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText primary="Query" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Receipt} /> */}
                          <Tooltip title="Realization Updation" disableHoverListener={!expanded}>
                        <ReceiptLongTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Realization Updation" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Receipt} /> */}
                          <Tooltip title="Create - Single" disableHoverListener={!expanded}>
                        <ReceiptLongTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Create - Single" />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          {/* <img id='layout-menu-image' src={Receipt} /> */}
                          <Tooltip title="Create - Bulk" disableHoverListener={!expanded}>
                        <ReceiptLongTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
                        </ListItemIcon>
                        <ListItemText id='menu-lable' sx={{ display: menuLableDisplay }} primary="Create - Bulk" />
                      </ListItemButton>
                    </List>
                  </Collapse>

      {/* Return */}
      <ListItemButton>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {Return}/> */}
        <Tooltip title="Return" disableHoverListener={!expanded}>
                        <AssignmentReturnTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="Return" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>


      {/* JV */}
      <ListItemButton>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {JV}/> */}
        <Tooltip title="JV" disableHoverListener={!expanded}>
                        <BookOnlineTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="JV" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>

      {/* Query */}
      <ListItemButton>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {Query}/> */}
        <Tooltip title="Comprehensive Query" disableHoverListener={!expanded}>
                        <PersonSearchTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="Comprehensive Query" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>

      


      {/* Change Password */}
      <ListItemButton>
        <ListItemIcon>
        <Tooltip title="Change Password" disableHoverListener={!expanded}>
                        <PublishedWithChangesTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="Change Password" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>

       {/* Change Password */}
       <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
        <Tooltip title="Logout" disableHoverListener={!expanded}>
                        <LogoutTwoTone fontSize='large' sx={{ color: 'white' }}  />
                        </Tooltip>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="Logout" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>



      
    </List>
            </Paper>
            </SimpleBar>
          </Box>



          {/* Page Body */}
          <Box sx={{ padding: "8px 8px 10px 8px", width: '100%'}}>
            <SimpleBar style={{ maxHeight: window.innerHeight - 150 }}>
            <Container sx={{marginBottom:'8px'}}>
             <Routes>  
            <Route path={`${search}/stlap/home/dashboard`} element={ <Dashboard/> } />   
            <Route path={`${search}/stlap/home/disbursement`} element={ <DisbursementRequestPage/> } />  
            <Route path={`${search}/stlap/home/nach/mandateentry`} element={ <EnachMandate/> } />      
            <Route path="*" exact={true} element={ <Loginpage /> } />
             </Routes>
            </Container>
            </SimpleBar>
          </Box>
   
        </Stack>


        {/* Footer */}
        <Box component='footer' sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#004A92',
          textAlign:'center',
        }}>
            <Typography sx={{color:'white'}} align="center"> Copyright © Sundaram Home Finance Pvt Ltd 2022.</Typography>
        </Box>
      </Stack>
    </div>
  );
};
export default PageLayout;