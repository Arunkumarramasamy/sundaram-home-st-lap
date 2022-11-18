import PropTypes from "prop-types";
import "./Dashboard.css";
import React from 'react';
import ProfileImg from '../../images/insurance.png'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Paper } from "@mui/material";
import { GridColumnHeaderFilterIconButton } from "@mui/x-data-grid";
import { Chip } from "@material-ui/core";
import Stack from '@mui/material/Stack';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Dashboard = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  return <React.Fragment>
    <div style={{display:'flex',flexDirection:'row',
    flexWrap:'wrap',overflowY:'auto'}}>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'100%'}}>
      <CardHeader
            action={
              <Stack direction="row" spacing={0.5} sx={{marginLeft:4,marginTop:2}}>
                <Chip sx={{ marginLeft: '4px' }} label="Current Month" size="small" variant="outlined" color="primary" />
                <Chip sx={{ marginLeft: '4px' }} label="3 Months" size="small" variant="outlined" />
                <Chip sx={{ marginLeft: '4px' }} label="6 Months" size="small" variant="outlined" />
                <Chip sx={{ marginLeft: '4px' }} label="12 Months" size="small" variant="outlined" />
                <IconButton> <OpenInFullIcon /></IconButton>
                </Stack>
            }
            title="Business Overview"
      />
      <CardContent>
      </CardContent>
    </Card>
    </Paper>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'100%'}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Due Payments"
      />
      <CardContent>
      </CardContent>
    </Card>
    </Paper>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'100%'}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Loan Disbursement Status"
      />
      <CardContent>
      </CardContent>
    </Card>
    </Paper>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'100%'}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="E-Nach Mandate Status"
      />
      <CardContent>
      </CardContent>
    </Card>
    </Paper>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'100%'}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Loan Insurance Cover"
      />
      <CardContent>
      </CardContent>
    </Card>
    </Paper>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'100%'}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Company TDS View"
      />
      <CardContent>
      </CardContent>
    </Card>
    </Paper>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'100%'}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Complaints Status"
      />
      <CardContent>
      </CardContent>
    </Card>
    </Paper>
    </div>
  </React.Fragment>;
};

Dashboard.propTypes = {};