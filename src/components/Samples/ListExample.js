import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { AllInboxTwoTone,BadgeTwoTone,CurrencyRupeeTwoTone,DateRangeTwoTone,CallToActionTwoTone } from '@mui/icons-material';

export default function ListExample() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const data = [
    {
      id: 1,
      trnno: "STL20220001",
      name: "Sundaram1",
      date: "11/10/2022",
      amount: "5,00,000",
      status: "Not Disbursed",
    },
    {
      id: 2,
      trnno: "STL20220002",
      name: "Sundaram2",
      date: "11/10/2022",
      amount: "2,00,000",
      status: "Not Disbursed",
    },
    {
      id: 3,
      trnno: "STL20220003",
      name: "Sundaram3",
      date: "12/10/2022",
      amount: "12,00,000",
      status: "Not Disbursed",
    },
    {
      id: 4,
      trnno: "STL20220004",
      name: "Sundaram4",
      date: "12/10/2022",
      amount: "2,00,000",
      status: "Not Disbursed",
    },
    {
      id: 5,
      trnno: "STL20220005",
      name: "Sundaram5",
      date: "12/10/2022",
      amount: "13,00,000",
      status: "Not Disbursed",
    },
    {
      id: 6,
      trnno: "STL20220006",
      name: "Sundaram6",
      date: "13/10/2022",
      amount: "4,00,000",
      status: "Not Disbursed",
    },
    {
      id: 7,
      trnno: "STL20220007",
      name: "Sundaram7",
      date: "13/10/2022",
      amount: "6,00,000",
      status: "Not Disbursed",
    },
    {
      id: 8,
      trnno: "STL20220008",
      name: "Sundaram8",
      date: "14/10/2022",
      amount: "8,00,000",
      status: "Not Disbursed",
    },
    {
      id: 9,
      trnno: "STL20220009",
      name: "Sundaram9",
      date: "14/10/2022",
      amount: "9,00,000",
      status: "Not Disbursed",
    },
    {
      id: 10,
      trnno: "STL202200010",
      name: "Sundaram10",
      date: "15/11/2022",
      amount: "6,50,000",
      status: "Not Disbursed",
    },
    {
      id: 11,
      trnno: "STL202200011",
      name: "Sundaram11",
      date: "15/11/2022",
      amount: "5,05,000",
      status: "Not Disbursed",
    },
    {
      id: 12,
      trnno: "STL202200012",
      name: "Sundaram12",
      date: "15/11/2022",
      amount: "9,00,000",
      status: "Not Disbursed",
    },
    {
      id: 13,
      trnno: "STL202200013",
      name: "Sundaram13",
      date: "15/11/2022",
      amount: "3,00,000",
      status: "Not Disbursed",
    },
  ];

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Disbursement List
        </ListSubheader>
      }
    >
      {data.map(row => (
      <><ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AllInboxTwoTone />
        </ListItemIcon>
        <ListItemText primary={row.trnno} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><BadgeTwoTone /></ListItemIcon>
            <ListItemText primary={'Applicant Name : ' + row.name} />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><DateRangeTwoTone /></ListItemIcon>
            <ListItemText primary={'Loan Sanctioned Date : ' + row.date} />
            </ListItemButton>


            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CurrencyRupeeTwoTone /></ListItemIcon>
            <ListItemText primary={'Loan Sanctioned Amount : ' + row.amount} />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon><CallToActionTwoTone /></ListItemIcon>
            <ListItemText primary={'Disbursement Status : ' + row.status} />
            </ListItemButton>
        </List>
      </Collapse></>))}


    </List>
  );
}