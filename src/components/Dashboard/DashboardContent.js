import { Box, Card, CardContent, CardHeader, Grid, IconButton, Modal, Typography,Chip } from "@mui/material";
import { React, useEffect, useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


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

function DisbursementTrnStatus() {
  var distrnstatus = {
    series: [98],
    options: {
      chart: {
        height: 150,
        type: 'radialBar',
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            value: {
              offsetY: 40,
              fontSize: '16px',
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
  return (<></>);
    // <ReactApexChart
    //   options={distrnstatus.options}
    //   series={distrnstatus.series}
    //   type="radialBar"
    //   height={150}
    // />);
}

function EMICommenced() {
  var complaintplotoptions = {
    chart: {
      type: "pie",
      width: "100%",
      height: 180,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.75,
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
  return (<></>);
    // <ReactApexChart
    //   options={complaintplotoptions}
    //   series={complaintplotoptions.series}
    //   type="pie"
    //   height={180}
    // />);
}

function EnachMandateGraph() {
  const nachoptions = {
    series: [76, 27, 50, 19],
    options: {
      chart: {
        height: 300,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "20%",
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
  return (<></>);
    // <ReactApexChart
    //   options={nachoptions.options}
    //   series={nachoptions.series}
    //   type="radialBar"
    //   height={300}
    // />);
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
        height: 120,
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
        offsetY: 100,
        align: "center",
      },
    },
  };
  return (<></>);
    // <ReactApexChart
    //   options={tdsplotoptions.options}
    //   series={tdsplotoptions.series}
    //   type="bar"
    //   height={120}
    // />);
}

function DisbursementOverview() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sx={{ marginRight: 2 }}>
          <Chip
            label="Date"
            size="small" color="primary" variant="outlined"
          />
        </Grid>
        <Grid item sx={{ marginRight: 2 }}>
          <Chip
            label="Loans"
            size="small" color="primary" variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            label="Amount"
            size="small" color="primary" variant="outlined"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 0.5 }}>
        <Grid item >
          <Chip
            label="Nov 01-10"
            size="small"
          />
        </Grid>
        <Grid item sx={{ display: 'inline-flex' }}>
          <Typography variant="subtitle1" >13</Typography>
          <ArrowDropDownIcon fontSize='medium' sx={{ color: 'red' }} />
        </Grid>
        <Grid item sx={{ display: 'inline-flex' }}>
          <CurrencyRupeeIcon fontSize="small" sx={{ color: 'grey' }} />
          <Typography variant="subtitle1"> 49 Lakhs </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0.5} sx={{ marginTop: 0.5 }}>
        <Grid item >
          <Chip
            label="Nov 11-20"
            size="small"
            sx={{ display: 'inline-flex'}}
          />
        </Grid>
        <Grid item sx={{ display: 'inline-flex', margin: 1 }}>
          <Typography variant="subtitle1" >19</Typography>
          <ArrowDropUpIcon fontSize='medium' sx={{ color: 'green' }} />
        </Grid>
        <Grid item sx={{ display: 'inline-flex', margin: 0.5 }}>
          <CurrencyRupeeIcon fontSize="small" sx={{ color: 'grey' }} />
          <Typography variant="subtitle1"> 75 Lakhs </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 1 }}>
        <Grid item >
          <Chip
            label="Nov 21-30"
            size="small"
          />
        </Grid>
        <Grid item sx={{ display: 'inline-flex', margin: 1 }}>
          <Typography variant="subtitle1" >03</Typography>
          <ArrowDropDownIcon fontSize='medium' sx={{ color: 'red' }} />
        </Grid>
        <Grid item sx={{ display: 'inline-flex', margin: 0.5 }}>
          <CurrencyRupeeIcon fontSize="small" sx={{ color: 'grey' }} />
          <Typography variant="subtitle1"> 10 Lakhs</Typography>
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
      height: 180,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        customScale: 0.7,
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

  return (<></>);
    // <ReactApexChart
    //   options={paymentplotoptions}
    //   series={paymentplotoptions.series}
    //   type="donut"
    //   height={180}
    // />);

}

function VoucherAuthorised() {
  const insuranceoptions = {
    series: [89],
    options: {
      chart: {
        height: 150,
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
  return (<></>);
    // <ReactApexChart
    //   options={insuranceoptions.options}
    //   series={insuranceoptions.series}
    //   type="radialBar"
    //   height={150}
    // />);
}

export const DashboardContent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (value) => {
    setExpandedCard(value);
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };

  const [expandedCard, setExpandedCard] = useState('');

  useEffect(() => { }, []);
  return (
    <>
      <Grid item>
        <Card sx={{ marginTop: 0.5 }}>
          <CardHeader
            action={<IconButton onClick={() => handleOpen('disbursement-overview')}>
              {" "}
              <OpenInFullIcon />
            </IconButton>
            }
            subheader="Disbursement Overview"
            subheaderTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            <DisbursementOverview />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ marginTop: 0.5 }}>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('disbursement-status')}>
                <OpenInFullIcon />
              </IconButton>
            }
            subheader="Disbursement Status"
            subheaderTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            {/* <DisbursementStatus /> */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ marginTop: 0.5 }}>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('enach-mandate')}>
                <OpenInFullIcon />
              </IconButton>
            }
            subheader="E-Nach/Nach Mandate"
            subheaderTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            {/* <EnachMandateGraph /> */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ marginTop: 0.5 }}>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('voucher-authorised')}>
                <OpenInFullIcon />
              </IconButton>
            }
            subheader="Voucher Authorised"
            subheaderTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            {/* <VoucherAuthorised /> */}
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item>
      <Card sx={{marginTop:0.5}}>
        <CardHeader
          action={
            <IconButton onClick={() => handleOpen('disbursement-trnstatus')}>
              <OpenInFullIcon />
            </IconButton>
          }
          subheader="Disbursement Transcation Status"
          subheaderTypographyProps={{ color: 'black' }}
        />
        <CardContent>
          <DisbursementTrnStatus />
        </CardContent>
      </Card>
    </Grid> */}
      <Grid item>
        <Card sx={{ marginTop: 0.5 }}>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('emi-commenced')}>
                <OpenInFullIcon />
              </IconButton>
            }
            subheader="EMI Commenced"
            subheaderTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            {/* <EMICommenced /> */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card sx={{ marginTop: 0.5 }}>
          <CardHeader
            action={
              <IconButton onClick={() => handleOpen('company-tds')}>
                <OpenInFullIcon />
              </IconButton>
            }
            subheader="Company TDS View"
            subheaderTypographyProps={{ color: 'black' }}
          />
          <CardContent>
            {/* <CompanyTds /> */}
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
              default: return <></>;
            }
          })()}
        </Box>
      </Modal>
    </>
  );
};

DashboardContent.propTypes = {};