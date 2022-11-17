import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/AccountBalance';
import ContentCopy from '@mui/icons-material/QueryStats';
import ContentPaste from '@mui/icons-material/AppRegistration';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import GroupsIcon from '@mui/icons-material/Groups';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import disbusmentImage from '../../images/disbursment.png';
import tdsImage from '../../images/tds.png';
import AccountMaster from '../../images/accountmaster.png';
import JV from '../../images/jv.png';
import Loan from '../../images/loan.png';
import Memo from '../../images/memo.png';
import Query from '../../images/query.png';
import Receipt from '../../images/receipt.png';
import Return from '../../images/return.png';
import Insurance from '../../images/insurance.png';
import Nach from '../../images/nach.png';
import Logo from '../../images/logo.png';


import './PageLayout.css';
import { Image } from '@mui/icons-material';
import { TableFooter } from '@mui/material';
import DisbursementRequestPage from '../DisbursementRequest/DisbursementRequestPage';




function createData(name, calories, fat, carbs, protein, eleven, six, seven, eight, nine, ten) {
  return { name, calories, fat, carbs, protein, eleven, six, seven, eight, nine, ten };
}
const data = [
  {
    title: 'Google',
    value: 10,
    color:'blue'
  },
  {
    title: 'FaceBook',
    value: 15,
    color:'black'
  },
  {
    title: 'Amazon',
    value: 5,
    color:'orange'
  },
  {
    title: 'Infoview',
    value: 18,
    color:'red'
  }
];
// const [value, setValue] = useState(0);

// const handleChange = (event, newValue) => {
//   setValue(newValue);
// };
const rows = [
  createData('STLAP20220001', '02/11/2011', 'Lap Loan details', 500000, 0, 19, 10, '02/11/2021', 'Yes', 'Closed'),
  createData('STLAP20220002', ' 15/11/2016', 'Lap Loan details', 500000, 450000, 19, 10, '15/11/2026', 'No', 'Inprogress'),
  createData('STLAP20220003', '08/08/2018', 'Lap Loan details', 450000, 450000, 19, 10, '08/08/2028', 'Yes', 'Inprogress'),
  createData('STLAP20220004', '05/01/2020', 'Lap Loan details', 200000, 450000, 19, 10, '05/01/2030', 'Yes', 'Inprogress'),
  createData('STLAP20220005', '02/06/2022', 'Lap Loan details', 300000, 450000, 19, 10, '02/06/2032', 'Yes', 'New')
];
const pages = ['Loan Individual Details'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const PageLayout = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [expanded, setExpanded] = React.useState(true);
  const [expandWidth, setMenuWidth] = React.useState(300);
  const [menuLableDisplay, setmenuLableDisplay] = React.useState('block');
  

  const handleMenuExpandCollapse = () =>{
    setExpanded(!expanded);
    setMenuWidth(expanded?300:70);
    setmenuLableDisplay(expanded?'block':'none');
    }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <img  id = 'layout-menu-image' src = {Nach}/>
        </ListItemIcon>
        <ListItemText id='menu-lable' sx = {{display:menuLableDisplay}} primary="NACH" />
       
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
       <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {disbusmentImage}/>
            </ListItemIcon>
            <ListItemText primary="E-Nach/Nach Initiation Process" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {disbusmentImage}/>
            </ListItemIcon>
            <ListItemText primary="E-Nach Initiation Process" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {disbusmentImage}/>
            </ListItemIcon>
            <ListItemText primary="E-Nach Mandate Link Page" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <img  id = 'layout-menu-image' src = {disbusmentImage}/>
            </ListItemIcon>
            <ListItemText primary="Nach - Mandate Entry" />
          </ListItemButton>

          
        </List>
      </Collapse> 
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Insurance}/>
        </ListItemIcon>
        <ListItemText primary="Insurance" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
      <ListItemButton >
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {disbusmentImage}/>
        </ListItemIcon>
        <ListItemText primary="Disbursment" sx = {{display:menuLableDisplay}} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {AccountMaster}/>
        </ListItemIcon>
        <ListItemText primary="Account Master Impact" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Memo}/>
        </ListItemIcon>
        <ListItemText primary="Memo" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <img id = 'layout-menu-image' src = {tdsImage}/>
        </ListItemIcon>
        <ListItemText primary="TDS" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Receipt}/>
        </ListItemIcon>
        <ListItemText primary="Receipt Process" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Return}/>
        </ListItemIcon>
        <ListItemText primary="Return" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {JV}/>
        </ListItemIcon>
        <ListItemText primary="JV" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <img  id = 'layout-menu-image' src = {Query}/>
        </ListItemIcon>
        <ListItemText primary="Comprehensive Query" sx = {{display:menuLableDisplay}}/>
      </ListItemButton>
    </List>
            </Paper>
          </Box>
          <Box sx={{ padding: "50px 25px 10px 25px", width: '100%' }}>
            <Container>
<DisbursementRequestPage />
             
            </Container>
          </Box>
   
        </Stack>
<TableFooter style={{width:20}}></TableFooter>
      </Stack>
    </div>
  );
};
export default PageLayout;