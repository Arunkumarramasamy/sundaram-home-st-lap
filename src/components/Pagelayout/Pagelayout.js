import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Paper,ListItemText,TableFooter } from '@mui/material';
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
import DisbursementRequestPage from '../DisbursementRequest/DisbursementRequestPage';





const PageLayout = () => {
  const [openNachSubMenu, setOpenNachSubMenu] = useState(false);
  const [openInsuranceSubMenu, setOpenInsuranceSubMenu] = useState(false);
  const [openMemoSubMenu, setOpenMemoSubMenu] = useState(false);
  const [openReceiptSubMenu, setopenReceiptSubMenu] = useState(false);
  const {pathname} = useLocation();

  
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



  const handleMenuExpandCollapse = () =>{
    setExpanded(!expanded);
    setMenuWidth(expanded?300:70);
    setmenuLableDisplay(expanded?'block':'none');
    }

  return (
    <div id='maindiv'>
      <Stack sx={{ height: '100%' }}>

      <AppBar position="static" sx = {{backgroundColor: '#004A92'}}>
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
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img id = 'logoimage'src = {Logo}></img>
          </Typography>
          <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon sx = {{padding:18}}/>
              </Badge>
            </IconButton>
          <Avatar ></Avatar>
        </Toolbar>
      </AppBar>
        <Stack direction="row" sx={{ height: '100%' }}>
          <Box sx={{ bgcolor: 'primary.main', height: '100%' }}>
            <Paper id='menu-box' sx={{ height: '100%', width: expandWidth, maxWidth: '100%', color: 'black', fontWeight: 'bold' }}>
              <List
      sx={{  width: expandWidth, maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >

      {/* NACH */}
      <ListItemButton onClick={handleNachMenuClick}>
        <ListItemIcon>
          <img  id = 'layout-menu-image' src = {Nach}/>
        </ListItemIcon>
        <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH" />
       
        {openNachSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

       <Collapse in={openNachSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText primary="E-NACH/NACH Initiation Process" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText primary="E-NACH Initiation Process" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText primary="E-NACH Mandate Link Page" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText primary="NACH - Mandate Entry" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText primary="NACH - Mandate Verification and Modification" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText primary="NACH - Mandate Bank Submission" />
          </ListItemButton>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText primary="NACH - Mandate Delete" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Nach}/>
            </ListItemIcon>
            <ListItemText primary="NACH - UMRN Updation/Upload" />
          </ListItemButton>

        </List>
      </Collapse>


      {/* Insurance  */}
      <ListItemButton  onClick={handleInsuranceMenuClick}>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Insurance}/>
        </ListItemIcon>
        <ListItemText primary="Insurance" sx = {{display:menuLableDisplay}}/>
        {openInsuranceSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

       <Collapse in={openInsuranceSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Insurance}/>
            </ListItemIcon>
            <ListItemText primary="Insurance Master" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Insurance}/>
            </ListItemIcon>
            <ListItemText primary="Insurance Details-Appl level details" />
          </ListItemButton>
        </List>
      </Collapse>


      {/* Disbursement */}
      <ListItemButton >
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {disbusmentImage}/>
        </ListItemIcon>
        <ListItemText primary="Disbursment" sx = {{display:menuLableDisplay}} />
      </ListItemButton>

      {/* AccountMaster */}
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {AccountMaster}/>
        </ListItemIcon>
        <ListItemText primary="Account Master Impact" sx = {{display:menuLableDisplay}}/>
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
            <ListItemText primary="Memo Defn. - Incl. of GST" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Memo}/>
            </ListItemIcon>
            <ListItemText primary="Memo - GL Mapping" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Memo}/>
            </ListItemIcon>
            <ListItemText primary="Memo GL - GST Mapping" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* TDS */}
      <ListItemButton>
        <ListItemIcon>
          <img id = 'layout-menu-image' src = {tdsImage}/>
        </ListItemIcon>
        <ListItemText primary="TDS" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>


      {/* Receipt */}
      <ListItemButton onClick={handleReceiptSubMenuClick}>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Receipt}/>
        </ListItemIcon>
        <ListItemText primary="Receipt Process" sx = {{display:menuLableDisplay}}/>
        {openReceiptSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

       <Collapse in={openReceiptSubMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText primary="Create - Cash/Check/DD/RTGS/NEFT" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText primary="Modify" />
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
            <ListItemText primary="Realization Updation" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText primary="Create - Single" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {Receipt}/>
            </ListItemIcon>
            <ListItemText primary="Create - Bulk" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Return */}
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Return}/>
        </ListItemIcon>
        <ListItemText primary="Return" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>


      {/* JV */}
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {JV}/>
        </ListItemIcon>
        <ListItemText primary="JV" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>

      {/* Query */}
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Query}/>
        </ListItemIcon>
        <ListItemText primary="Comprehensive Query" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
    </List>
            </Paper>
          </Box>



          {/* Page Body */}
          <Box sx={{ padding: "50px 25px 10px 25px", width: '100%' }}>
            <Container>
               <DisbursementRequestPage />
             
            </Container>
          </Box>
   
        </Stack>


        {/* Footer */}
        <TableFooter style={{width:20}}></TableFooter>
      </Stack>
    </div>
  );
};
export default PageLayout;