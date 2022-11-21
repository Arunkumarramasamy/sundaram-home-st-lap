import PropTypes from "prop-types";
import "./Dashboard.css";
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Chip } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";

const bussinessplotoptions = {
    series: [{
      name: 'Amount in Lakhs',
      type: 'line',
      data: [44, 55, 31, 47, 31, 43, 86, 41, 31, 47, 33,31, 43, 26, 41, 31, 47, 223, 12]
    }, {
      name: 'Loans Approved',
      type: 'line',
      data: [5, 20, 7, 14, 2, 8, 27, 32, 15, 6, 10,5, 20, 7, 14,27, 12, 25, 8 ]
    }],
      chart: {
      height: 250,
      width: 250,
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
    'Nov 11', 'Nov 12','Nov 13','Nov 14','Nov 15','Nov 16','Nov 17','Nov 18','Nov 19'],
    markers: {
      size: 0
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if(typeof y !== "undefined") {
            return  y.toFixed(0);
          }
          return y;
        }
      }
    }
};

var paymentplotoptions = {
  chart: {
      type: 'donut',
      width: '100%',
      height: 200,
      events: {
        click(event, chartContext, config) {
            console.log(config.config.series[config.seriesIndex])
            console.log(config.config.series[config.seriesIndex].name)
            console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
        }
    }
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '50%',
      },
      offsetY: 20,
    },
    stroke: {
      colors: undefined
    }
  },
  series: [1930, 1123, 830],
  labels: ['Paid', 'Dues', 'Upcoming'],
  legend: {
    position: 'left',
    offsetY: 80
  },
}

var complaintplotoptions = {
  chart: {
      type: 'donut',
      width: '100%',
      height: 200,
      events: {
        click(event, chartContext, config) {
            console.log(config.config.series[config.seriesIndex])
            console.log(config.config.series[config.seriesIndex].name)
            console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
        }
    }
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '50%',
      },
      offsetY: 20,
    },
    stroke: {
      colors: undefined
    }
  },
  series: [1930, 430],
  labels: ['Closed', 'Open'],
  legend: {
    position: 'left',
    offsetY: 80
  },
}

const disbursementOptions = {
  series: [240, 550, 330],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Fully-Disbursed', 'Partial-Disbursed', 'Non-Disbursed'],
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

const nachoptions = {       
  series: [76, 27, 50, 19],
  options: {
    chart: {
      height: 200,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: true,
          }
        }
      }
    },
    colors: ['#F6A030', '#2F7DC4', '#003F7C', '#FF0000'],
    labels: ['E-Nach Initiated', 'Nach Initiated', 'E-nach Registerd','Nach Registered'],
    legend: {
      show: true,
      floating: false,
      fontSize: '12px',
      position: 'left',
      labels: {
        useSeriesColors: false,
      },
      markers: {
        size: 0
      },
      formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 300,
      options: {
        legend: {
            show: false
        }
      }
    }]
  },
};

const insuranceoptions = {    
  series: [70],
  options: {
    chart: {
      height: 250,
      type: 'radialBar',
      toolbar: {
        show: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
         hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '17px'
          },
          value: {
            formatter: function(val) {
              return parseInt(val);
            },
            color: '#111',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Insured %'],
  },
};

const tdsplotoptions = {
          
  series: [{
    name: 'TDS',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3]
  }],
  options: {
    chart: {
      height: 200,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "Lakhs";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    
    xaxis: {
      categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec","Jan", "Feb", "Mar"],
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "Lakhs";
        }
      }
    
    },
    title: {
      text: 'TDS',
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#444'
      }
    }
  },
};


export const Dashboard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    
  }, []);

  
  return <React.Fragment>
    <div style={{display:'flex',flexDirection:'row',
    flexWrap:'wrap',overflowY:'auto'}}>
      <Card sx={{
        backgroundImage: 'linear-gradient(#019CAD,white,#004A92)',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
        width: '550px', height: '350px', margin: 2
      }}>
        <CardHeader
          action={
            <Stack direction="row" spacing={0.5} sx={{ marginLeft: 4, marginTop: 2 }}>
              <Chip sx={{ marginLeft: '4px' }} label="Current Month" size="small" variant="outlined" color="primary" />
              <Chip sx={{ marginLeft: '4px' }} label="3 Months" size="small" variant="outlined" />
              <Chip sx={{ marginLeft: '4px' }} label="6 Months" size="small" variant="outlined" />
              <Chip sx={{ marginLeft: '4px' }} label="12 Months" size="small" variant="outlined" />
              <IconButton onClick={handleOpen}> <OpenInFullIcon /></IconButton>
            </Stack>
          }
          title="Business Overview"
        />
        <CardContent>
          <div id="businesschart" style={{ width: '500px', height: '350px' }}>
          <ReactApexChart options={bussinessplotoptions} series={bussinessplotoptions.series} type="line" height={200} />
          </div>
        </CardContent>
      </Card>
      

      <Card sx={{
        backgroundImage: 'linear-gradient(#019CAD,white,#004A92)',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
        width: '300px', height: '350px', margin: 2
      }}>
        <CardHeader
          action={
            <IconButton>
              <OpenInFullIcon />
            </IconButton>
          }
          title="Loan EMI Payments"
        />
        <CardContent>
          <div id="paymentdonut" style={{ width: '300px' }}>
          <ReactApexChart options={paymentplotoptions} series={paymentplotoptions.series} type="donut" height={200} />
          </div>
        </CardContent>
      </Card>

      <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white,#004A92)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width: '200px', height: '330px', margin: 2}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Loan Insurance Cover"
      />
      <CardContent>
          <div>
            <ReactApexChart options={insuranceoptions.options} series={insuranceoptions.series} type="radialBar" height={200} />
          </div>
      </CardContent>
    </Card>

      <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white,#004A92)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width: '350px', height: '330px', margin: 2}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="E-Nach/Nach Mandate"
      />
      <CardContent>
        <div id="nachradial" style={{ width: '350px' }}>
        <ReactApexChart options={nachoptions.options} series={nachoptions.series} type="radialBar" height={200} />
        </div>
      </CardContent>
    </Card>

    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white,#004A92)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width: '300px', height: '330px', margin: 2}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Complaints Status"
      />
      <CardContent>
      <div id="complaintsdonut" style={{ width: '300px' }}>
      <ReactApexChart options={complaintplotoptions} series={complaintplotoptions.series} type="donut" height={250} />
      </div>
      </CardContent>
    </Card>

    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white,#004A92)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width: '400px', height: '300px', margin: 2}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Loans Disbursement"
      />
      <CardContent>
        <div id="disbursementspie" style={{ width: '400px' }}>
        <ReactApexChart options={disbursementOptions.options} series={disbursementOptions.series} type="pie" width={380} />
        </div>
      </CardContent>
    </Card>
    

    
    
    
    <Card sx={{ backgroundImage: 'linear-gradient(#019CAD,white,#004A92)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
            width: '400px', height: '300px', margin: 2}}>
      <CardHeader
        action={
          <IconButton>
            <OpenInFullIcon />
          </IconButton>
        }
        title="Company TDS View"
      />
      <CardContent>
       <div>
       <ReactApexChart options={tdsplotoptions.options} series={tdsplotoptions.series} type="bar" height={200} />
       </div>
      </CardContent>
    </Card>
    
    
    </div>
  </React.Fragment>;
};

Dashboard.propTypes = {};