import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Chip } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  mt: 8,
};

function DisbursementTrnStatus(){
var distrnstatus = {
  series: [98],
  options: {
    chart: {
      height: 300,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Success']
  },
};
 return (
 <ReactApexChart
   options={distrnstatus.options}
   series={distrnstatus.series}
   type="radialBar"
   height={300}
 />);
}

function EMICommenced() {
  var complaintplotoptions = {
    chart: {
      type: "pie",
      width: "100%",
      height: 300,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "50%",
        },
        offsetY: -20,
      },
      stroke: {
        colors: undefined,
      },
    },
    series: [1930, 430],
    labels: ["Commenced", "Not Commenced"],
    legend: {
      position: "bottom",
      offsetY: 0,
    },
  };
  return (
    <ReactApexChart
      options={complaintplotoptions}
      series={complaintplotoptions.series}
      type="pie"
      height={300}
    />);
}

function EnachMandateGraph() {
  const nachoptions = {
    series: [76, 27, 50, 19],
    options: {
      chart: {
        height: 280,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "50%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: true,
            },
          },
        },
      },
      colors: ["#F6A030", "#2F7DC4", "#003F7C", "#FF0000"],
      labels: [
        "E-Nach Initiated",
        "Nach Initiated",
        "E-nach Registerd",
        "Nach Registered",
      ],
      legend: {
        show: true,
        floating: false,
        fontSize: "12px",
        position: "bottom",
        labels: {
          useSeriesColors: false,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
    },
  };
  return (
    <ReactApexChart
      options={nachoptions.options}
      series={nachoptions.series}
      type="radialBar"
      height={280}
    />);
}

function CompanyTds() {
  const tdsplotoptions = {
    series: [
      {
        name: "TDS",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3],
      },
    ],
    options: {
      chart: {
        height: 250,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          },
        },
      },
      title: {
        text: "TDS Amount in Lakhs",
        floating: false,
        offsetY: 230,
        align: "center",
      },
    },
  };
  return (
    <ReactApexChart
      options={tdsplotoptions.options}
      series={tdsplotoptions.series}
      type="bar"
      height={250}
    />);
}

function DisbursementOverview() {
  return (
    <div>
      <Grid container>
        <Grid item sx={{margin:1}}>
          <Chip
            label="Date Range"
            size="small" color="primary" variant="outlined"
          />
          <Divider orientation="vertical" />
        </Grid>
        <Grid item sx={{margin:1}}>
          <Chip
            label="Loans"
            size="small" color="primary" variant="outlined"
          />
          <Divider orientation="vertical" />
        </Grid>
        <Grid item sx={{margin:1}}>
          <Chip
            label="Amount Disbursed"
            size="small" color="primary" variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container sx={{ marginTop: 1 }}>
        <Grid item sx={{margin:1}}>
          <Chip
            label="Nov 1 - Nov 10"
            size="small"
          />
        </Grid>
        <Grid item  sx={{ display: 'inline-flex',margin:1}}>
          <Typography variant="subtitle1" >13</Typography>
          <ArrowDropDownIcon fontSize='large' sx={{ color: 'red' }} />
          <Divider orientation="vertical" />
        </Grid>
        <Grid item  sx={{ display: 'inline-flex',margin:1}}>
          <CurrencyRupeeIcon fontSize="small" sx={{ color: 'grey' }} />
          <Typography variant="subtitle1"> 49,00,000 </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 1 }}>
        <Grid item >
          <Chip
            label="Nov 11 - Nov 20"
            size="small"
            sx={{ display: 'inline-flex',margin:1}}
          />
        </Grid>
        <Grid item  sx={{ display: 'inline-flex',margin:1}}>
          <Typography variant="subtitle1" >19</Typography>
          <ArrowDropUpIcon fontSize='large' sx={{ color: 'green' }} />
          <Divider orientation="vertical" />
        </Grid>
        <Grid item  sx={{ display: 'inline-flex',margin:1}}>
          <CurrencyRupeeIcon fontSize="small" sx={{ color: 'grey' }} />
          <Typography variant="subtitle1"> 75,00,000 </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 1 }}>
        <Grid item >
          <Chip
            label="Nov 21 - Nov 30"
            size="small"
          />
        </Grid>
        <Grid item  sx={{ display: 'inline-flex',margin:1}}>
          <Typography variant="subtitle1" >3</Typography>
          <ArrowDropDownIcon fontSize='large' sx={{ color: 'red' }} />
          <Divider orientation="vertical" />
        </Grid>
        <Grid item  sx={{ display: 'inline-flex',margin:1}}>
          <CurrencyRupeeIcon fontSize="small" sx={{ color: 'grey' }} />
          <Typography variant="subtitle1"> 10,00,000</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

function DisbursementStatus() {
  var paymentplotoptions = {
    chart: {
      type: "donut",
      width: "100%",
      height: 280,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: "50%",
        },
        offsetY: -20,
      },
      stroke: {
        colors: undefined,
      },
    },
    series: [23, 19, 83],
    labels: ["Yesterday", "Today", "Non-Disbursed"],
    legend: {
      position: "bottom",
      offsetY: 0,
    },
  };

  return (
    <ReactApexChart
      options={paymentplotoptions}
      series={paymentplotoptions.series}
      type="donut"
      height={280}
    />);

}

function VoucherAuthorised() {
  const insuranceoptions = {
    series: [89],
    options: {
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Authorised %"],
    },
  };
  return (
    <ReactApexChart
      options={insuranceoptions.options}
      series={insuranceoptions.series}
      type="radialBar"
      height={250}
    />);
}

export const Dashboard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (value) => {
    setExpandedCard(value);
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };

  const [expandedCard, setExpandedCard] = React.useState('');

  useEffect(() => { }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));  

  return (
    <Grid container spacing={{ xs: 2, sm:2, md: 4, lg:4, xl:4}} columns={{ xs: 1, sm: 4, md: 6, lg:10, xl:12 }} mt={32}>
      <Grid item>
      <Card>
        <CardHeader
          action={<IconButton onClick={() => handleOpen('disbursement-overview')}>
            {" "}
            <OpenInFullIcon />
          </IconButton>
          }
          title="Disbursement Amount Overview"
          titleTypographyProps={{ color: 'black' }}
        />
        <CardContent>
          <DisbursementOverview />
        </CardContent>
      </Card>
      </Grid>
      <Grid item>
      <Card>
        <CardHeader
          action={
            <IconButton onClick={() => handleOpen('disbursement-status')}>
              <OpenInFullIcon />
            </IconButton>
          }
          title="Disbursement Status"
          titleTypographyProps={{ color: 'black' }}
        />
        <CardContent>
          <DisbursementStatus />
        </CardContent>
      </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('voucher-authorised')}>
                <OpenInFullIcon />
              </IconButton>
            }
            title="Voucher Authorised"
            titleTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            <VoucherAuthorised />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('enach-mandate')}>
                <OpenInFullIcon />
              </IconButton>
            }
            title="E-Nach/Nach Mandate"
            titleTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            <EnachMandateGraph />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('disbursement-trnstatus')}>
                <OpenInFullIcon />
              </IconButton>
            }
            title="Disbursement Transcation Status"
            titleTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            <DisbursementTrnStatus />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('emi-commenced')}>
                <OpenInFullIcon />
              </IconButton>
            }
            title="EMI Commenced"
            titleTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            <EMICommenced />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('company-tds')}>
                <OpenInFullIcon />
              </IconButton>
            }
            title="Company TDS View"
          />
          <CardContent>
            <CompanyTds />
          </CardContent>
        </Card>
      </Grid>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {(() => {
            switch (expandedCard) {
              case 'disbursement-overview': return <DisbursementOverview />;
              case 'disbursement-status': return <DisbursementStatus />;
              case 'voucher-authorised': return <VoucherAuthorised />;
              case 'enach-mandate': return <EnachMandateGraph />;
              case 'disbursement-trnstatus': return <DisbursementTrnStatus />;
              case 'emi-commenced': return <EMICommenced />;
              case 'company-tds': return <CompanyTds />;
            }
          })()}
        </Box>
      </Modal>
      
    </Grid>
  );
};

Dashboard.propTypes = {};