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
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect } from "react";

const bussinessplotoptions = {
    series: [{
      name: 'Amount in Lakhs',
      type: 'line',
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33,31, 43, 26, 41, 31, 47, 73]
    }, {
      name: 'Loans Approved',
      type: 'line',
      data: [5, 20, 7, 14, 2, 8, 27, 12, 15, 6, 10,5, 20, 7, 14,27, 12, 65 ]
    }],
      chart: {
      height: 250,
      width:550,
      type: 'line',
    },
    stroke: {
      curve: 'smooth'
    },
    fill: {
      type:'solid',
      opacity: [0.35, 1],
    },
    labels: ['Nov 01', 'Nov 02','Nov 03','Nov 04','Nov 05','Nov 06','Nov 07','Nov 08','Nov 09 ','Nov 10',
    'Nov 11', 'Nov 12','Nov 13','Nov 14','Nov 15','Nov 16','Nov 17','Nov 18'],
    markers: {
      size: 0
    },
    yaxis: [
      {
        title: {
          text: 'Amount Disbursed in Lakhs',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Loans Approved',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if(typeof y !== "undefined") {
            return  y.toFixed(0) + " points";
          }
          return y;
        }
      }
    }
};

const paymentplotoptions = {
   series : [440, 1369, 1900],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Paid Loans', 'Due Loans', 'Upcoming Payment Loans'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          };

export const Dashboard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#businesschart"), bussinessplotoptions);
    chart.render();
  }, []);

  
  return <React.Fragment>
    <div style={{display:'flex',flexDirection:'row',
    flexWrap:'wrap',overflowY:'auto'}}>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'600px' , height:'400px'}}>
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
            <div id="businesschart" style={{width:'600px',height:'350px'}}>
            </div>
          </CardContent>
    </Card>
    </Paper>
    <Paper elevation={4} sx={{margin:4}}>
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width:'400px',height:'300px'}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Loan Payment Status"
      />
      <CardContent>
      <div id="paymentpie" style={{width:'400px',height:'300px'}}>
        <ReactApexChart options={paymentplotoptions.options} series={paymentplotoptions.series} type="pie" width={380} />
      </div>
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