import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#169BD5',
      color: theme.palette.common.white,
      fontFamily : 'Roboto',
      fontWeight : 'Bold'
    },
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: '#D7D7D7',
      fontFamily : 'Roboto'
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


function Row(props) {
    

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

  const { row } = props;
  const [status, setStatus] = React.useState(row.status);
  return (
    <React.Fragment>
      
      <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.sno}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right"><Select
          value={status}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={'Disbursed'}>Disbursed</MenuItem>
          <MenuItem value={'Partially Disbursed'}>Partially Disbursed</MenuItem>
          <MenuItem value={'Not Disbursed'}>Not Disbursed</MenuItem>
          <MenuItem value={'Rejected'}>Rejected</MenuItem>
        </Select></StyledTableCell>
            </StyledTableRow>
            </React.Fragment>
  );
}



const rows = [
    {
        sno:'1',
        date:'17/11/2022',
        name:'Sundaram',
        amount:'25Lakhs',
        status:'Not Disbursed'
    },
    {
        sno:'2',
        date:'13/11/2022',
        name:'Sundaram',
        amount:'25Lakhs',
        status:'Not Disbursed'
    },
    {
        sno:'3',
        date:'11/11/2022',
        name:'Sundaram',
        amount:'25Lakhs',
        status:'Partially Disbursed'
    },

];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Sno</StyledTableCell>
            <StyledTableCell align="right">Sanctioned Date</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}