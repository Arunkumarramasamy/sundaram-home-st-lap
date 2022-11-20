import React, { useState } from 'react';
import { useLocation, useMatch, useMatches, useResolvedPath } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Paper,ListItemText,TableFooter, Chip, Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import disbusmentImage from '../../images/disbursment.png';
import tdsImage from '../../images/tds.png';
import AccountMaster from '../../images/accountmaster.png';
import JV from '../../images/jv.png';
import Memo from '../../images/memo.png';
import Query from '../../images/query.png';
import Receipt from '../../images/receipt.png';
import Return from '../../images/return.png';
import Insurance from '../../images/insurance.png';
import Nach from '../../images/nach.png';
import Logo from '../../images/logo.png';
import './PageLayout.css';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import DisbursementRequestPage from '../DisbursementRequest/DisbursementRequestPage';
import { AppRegistrationTwoTone, DashboardTwoTone, Label } from '@mui/icons-material';
import { Routes, Route,Navigate } from "react-router-dom";
import Signuppage from '../Signuppage/Signuppage';
import Loginpage from '../Loginpage/Loginpage';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import EnachMandate from '../NACH/EnachMandate';
import { Dashboard } from '../Dashboard/Dashboard';



const PageLayout = () => {
  const [openNachSubMenu, setOpenNachSubMenu] = useState(false);
  const [openInsuranceSubMenu, setOpenInsuranceSubMenu] = useState(false);
  const [openMemoSubMenu, setOpenMemoSubMenu] = useState(false);
  const [openReceiptSubMenu, setopenReceiptSubMenu] = useState(false);
  const {search} = useLocation();
  const history = useNavigate();

  const [expanded, setExpanded] = React.useState(true);
  const [expandWidth, setMenuWidth] = React.useState(300);
  const [menuLableDisplay, setmenuLableDisplay] = React.useState('block');
  
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



  const handleMenuExpandCollapse = () =>{
    setExpanded(!expanded);
    setMenuWidth(expanded?300:70);
    setmenuLableDisplay(expanded?'block':'none');
    }

  return (
    <div id='maindiv'>
      <Stack sx={{  height: "calc(100% - 82px)"}}>

      <AppBar position="static" sx = {{backgroundColor: '#004A92',height:"70px"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>handleMenuExpandCollapse()}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction = 'row' sx={{width : 'calc(100% - 600px)'}}>

          {/* <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
          <img id = 'logoimage'src = {Logo} onClick={handleLogout}></img>
          <DraftsOutlinedIcon sx = {{marginTop:"15px",marginLeft:"60px"}}>
            </DraftsOutlinedIcon>
          {/* </Typography> */}
          <Typography id = 'header-email-id' align='left'>sundaram.help@sundaram.com</Typography>
          <LocalPhoneOutlinedIcon sx = {{marginTop:"15px",marginLeft:"16px"}}/>
          <Typography id = 'header-email-id' align='left'>9876543210</Typography>
          </Stack>
          <Stack direction='row' sx = {{width:"100%",justifyContent:'flex-end'}}>
            <Stack direction='column' sx = {{paddingRight:'8px'}}>

          <Typography sx = {{marginTop:"8px"}} >Kathir Venkatesan</Typography>
          <Chip label="Emp-000001" component="div"  sx={{color:'white',bgcolor:'#727dff'}}/>
            </Stack>
            <Divider sx={{borderWidth:'2px',backgroundColor:'#fff' ,height:'50px', marginTop:'5px'}} orientation="vertical" flexItem />
          <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon sx = {{padding:18}}/>
              </Badge>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
        <Stack direction="row" sx={{ height: 'calc(100% - 12px)',justifyContent:'flex-end' }}>
          <Box sx={{ minWidth :expandWidth+10, maxHeight:'calc(100% - 0px)', overflowY:'auto'}}>
            <Paper id='menu-box' sx={{ height: '100%', width: expandWidth, maxWidth: '100%', color: 'black', fontWeight: 'bold' }}>
              <List 
      sx={{  width: expandWidth, maxWidth: 360, bgcolor: '#169BD5' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >

          {/* Dashboard */}
        <ListItemButton id='dashboard' onClick={menuClickHandler}>
        <ListItemIcon>
        {/* <img  id = 'layout-menu-image' src = {disbusmentImage}/> */}
        <DashboardTwoTone fontSize='medium' sx={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" sx = {{display:menuLableDisplay}} />
      </ListItemButton>

      {/* NACH */}
      <ListItemButton onClick={handleNachMenuClick}>
        <ListItemIcon>
          {/* <img  id = 'layout-menu-image' src = {Nach}/> */}
          <AppRegistrationTwoTone fontSize='medium' sx={{color:'white'}}/>
        </ListItemIcon>
        <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH" />
       
        {openNachSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

       <Collapse in={openNachSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton  sx={{ pl: 4 }} > 
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}}   primary="E-NACH/NACH Initiation Process" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="E-NACH Initiation Process" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="E-NACH Mandate Link Page" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} id='nachMandateEntry' onClick={menuClickHandler}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH - Mandate Entry" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH - Mandate Verification and Modification" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH - Mandate Bank Submission" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH - Mandate Delete" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH - UMRN Updation/Upload" />
          </ListItemButton>

        </List>
      </Collapse>


      {/* Insurance  */}
      <ListItemButton  onClick={handleInsuranceMenuClick}>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Insurance}/>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="Insurance" sx = {{display:menuLableDisplay}}/>
        {openInsuranceSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

       <Collapse in={openInsuranceSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Insurance}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="Insurance Master" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Insurance}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="Insurance Details-Appl level details" />
          </ListItemButton>
        </List>
      </Collapse>


      {/* Disbursement */}
      <ListItemButton id='disbursement' onClick={menuClickHandler}>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {disbusmentImage}/>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="Disbursement" sx = {{display:menuLableDisplay}} />
      </ListItemButton>

      {/* AccountMaster */}
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {AccountMaster}/>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="Account Master Impact" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>

      {/* Memo */}
      <ListItemButton onClick={handleMemoSubMenuClick}>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Memo}/>
        </ListItemIcon>
        <ListItemText primary="Memo" sx = {{display:menuLableDisplay}}/>
        {openMemoSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

       <Collapse in={openMemoSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Memo}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="Memo Defn. - Incl. of GST" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Memo}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}}  primary="Memo - GL Mapping" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Memo}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}}  primary="Memo GL - GST Mapping" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* TDS */}
      <ListItemButton>
        <ListItemIcon>
          <img id = 'layout-menu-image' src = {tdsImage}/>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="TDS" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>


      {/* Receipt */}
      <ListItemButton onClick={handleReceiptSubMenuClick}>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Receipt}/>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="Receipt Process" sx = {{display:menuLableDisplay}}/>
        {openReceiptSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

       <Collapse in={openReceiptSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}}  primary="Create - Cash/Check/DD/RTGS/NEFT" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}}   primary="Create - Cash/Check/DD/RTGS/NEFT" />
           
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText primary="Query" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}}   primary="Realization Updation" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}}   primary="Create - Single" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}}   primary="Create - Bulk" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Return */}
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Return}/>
        </ListItemIcon>
        <ListItemText id='menu-lable' primary="Return" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>


      {/* JV */}
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {JV}/>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="JV" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>

      {/* Query */}
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Query}/>
        </ListItemIcon>
        <ListItemText id='menu-lable'  primary="Comprehensive Query" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
    </List>
            </Paper>
          </Box>



          {/* Page Body */}
          <Box sx={{ padding: "8px 8px 10px 8px", width: '100%' }}>
            <Container>
             <Routes>  
            <Route path={`${search}/stlap/home/dashboard`} element={ <Dashboard/> } />   
            <Route path={`${search}/stlap/home/disbursement`} element={ <DisbursementRequestPage/> } />  
            <Route path={`${search}/stlap/home/nach/mandateentry`} element={ <EnachMandate/> } />      
            <Route path="*" exact={true} element={ <Loginpage /> } />
             </Routes>
            </Container>
          </Box>
   
        </Stack>


        {/* Footer */}
        <Box type = 'footer'   sx={{width:"100%", height:'64px'}}>
          <Typography align="center"> Copyright © Sundaram Home Finance Pvt Ltd 2022.</Typography>
        </Box>
      </Stack>
    </div>
  );
};
export default PageLayout;