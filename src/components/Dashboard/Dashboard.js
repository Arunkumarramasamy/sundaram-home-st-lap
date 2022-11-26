import PropTypes from "prop-types";
import "./Dashboard.css";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Chip } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useEffect } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

var paymentplotoptions = {
  chart: {
    type: "donut",
    width: "100%",
    height: 350,
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
  labels: ["Yesterday","Today","Non-Disbursed"],
  legend: {
    position: "bottom",
    offsetY: 0,
  },
};

var distrnstatus = {
  series: [98],
  options: {
    chart: {
      height: 350,
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
    labels:['Success']
  },


};

var complaintplotoptions = {
  chart: {
    type: "pie",
    width: "100%",
    height: 250,
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

const nachoptions = {
  series: [76, 27, 50, 19],
  options: {
    chart: {
      height: 250,
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
      position: "left",
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
    responsive: [
      {
        breakpoint: 300,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  },
};

const insuranceoptions = {
  series: [89],
  options: {
    chart: {
      height: 250,
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

const tdsplotoptions = {
  series: [
    {
      name: "TDS",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3],
    },
  ],
  options: {
    chart: {
      height: 200,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "Lakhs";
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
        "Dec",
        "Jan",
        "Feb",
        "Mar",
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
          return val + "Lakhs";
        },
      },
    },
    title: {
      text: "TDS",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  },
};

export const Dashboard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflowY: "auto",
        }}
      >
        <Card  sx={{width: 400, height: "320px",margin: 2,borderRadius: "20px" }}
          >
            <CardHeader
              action={<IconButton onClick={handleOpen}>
              {" "}
              <OpenInFullIcon />
            </IconButton>
              }
              title="Disbursement Amount Overview"
              titleTypographyProps={{color:'black'}}
            />
            <CardContent>
              <div style={{width:400}}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" >Date Range</Typography>
                <Divider  orientation="vertical" />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2" >Loans</Typography>
                <Divider  orientation="vertical" />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">Amount Disbursed</Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{marginTop:1}}>
                <Grid item xs={4}>
                <Chip
                    label="Nov 1 - Nov 10"
                    size="small"
                    sx={{marginRight:1}}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2" >13 <sub><ArrowDropDownIcon fontSize='medium' sx={{color:'red'}}/></sub></Typography>
                <Divider  orientation="vertical" />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1"><sup>₹</sup> 49 <sub>Lakhs</sub></Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{marginTop:1}}>
                <Grid item xs={4}>
                <Chip
                    label="Nov 11 - Nov 20"
                    size="small"
                    sx={{marginRight:1}}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2" >19 <sub><ArrowDropUpIcon fontSize='medium' sx={{color:'green'}}/></sub></Typography>
                <Divider  orientation="vertical" />
                </Grid>
                <Grid item xs={4}>
                <Typography variant="subtitle1"><sup>₹</sup> 75 <sub>Lakhs</sub></Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{marginTop:1}}>
                <Grid item xs={4}>
                <Chip
                    label="Nov 21 - Nov 30"
                    size="small"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body2" >3 <sub><ArrowDropDownIcon fontSize='medium' sx={{color:'red'}}/></sub></Typography>
                <Divider  orientation="vertical" />
                </Grid>
                <Grid item xs={4}>
                <Typography variant="subtitle1"><sup>₹</sup> 10 <sub>Lakhs</sub></Typography>
                </Grid>
              </Grid>
              </div>
              
            </CardContent>
          </Card>

        <Card
          sx={{
            width: "300px",
            height: "320px",
            margin: 2,
            borderRadius: "20px",
          }}
        >
          <CardHeader
            action={
              <IconButton>
                <OpenInFullIcon />
              </IconButton>
            }
            title="Disbursement Status"
            titleTypographyProps={{color:'black'}}
          />
          <CardContent>
            <div id="paymentdonut" style={{ width: "300px" }}>
              <ReactApexChart
                options={paymentplotoptions}
                series={paymentplotoptions.series}
                type="donut"
                height={250}
              />
            </div>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: "300px",
            height: !props.menuExpanded ? "320px" : "320px",
            margin: 2,
            borderRadius: "20px",
            // overflow:window.innerWidth < 1024 ? 'auto' : 'hidden'
          }}
        >
          <CardHeader
            action={
              <IconButton>
                <OpenInFullIcon />
              </IconButton>
            }
            title="Voucher Authorised"
            titleTypographyProps={{color:'black'}}
          />
          <CardContent>
            <div>
              <ReactApexChart
                options={insuranceoptions.options}
                series={insuranceoptions.series}
                type="radialBar"
                height={200}
              />
            </div>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: "400px",
            height: "300px",
            margin: 2,
            borderRadius: "20px",
            // overflow:window.innerWidth < 1024 ? 'auto' : 'hidden'
          }}
        >
          <CardHeader
            action={
              <IconButton>
                <OpenInFullIcon />
              </IconButton>
            }
            title="E-Nach/Nach Mandate"
            titleTypographyProps={{color:'black'}}
          />
          <CardContent>
            <div id="nachradial" style={{ width: "400px" }}>
              <ReactApexChart
                options={nachoptions.options}
                series={nachoptions.series}
                type="radialBar"
                height={200}
              />
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "300px",
            height: "300px",
            margin: 2,
            borderRadius: "20px",
          }}
        >
          <CardHeader
            action={
              <IconButton>
                <OpenInFullIcon />
              </IconButton>
            }
            title="Disbursement Transcation Status"
            titleTypographyProps={{color:'black'}}
          />
          <CardContent>
            <div id="paymentdonut" style={{ width: "300px" }}>
              <ReactApexChart
                options={distrnstatus.options}
                series={distrnstatus.series}
                type="radialBar"
                height={200}
              />
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "300px",
            height: "300px",
            margin: 2,
            borderRadius: "20px",
            overflow:window.innerWidth < 1024 ? 'auto' : 'hidden'
          }}
        >
          <CardHeader
            action={
              <IconButton>
                <OpenInFullIcon />
              </IconButton>
            }
            title="EMI Commenced"
            titleTypographyProps={{color:'black'}}
          />
          <CardContent>
            <div id="complaintsdonut" style={{ width: "300px" }}>
              <ReactApexChart
                options={complaintplotoptions}
                series={complaintplotoptions.series}
                type="pie"
                height={250}
              />
            </div>
          </CardContent>
        </Card>

        <Card
          sx={{
            // width: !props.menuExpanded ? "450px" : "98%",
            width:'98%',
            height: "300px",
            margin: 2,
            borderRadius: "20px",
            overflow:window.innerWidth < 1024 ? 'auto' : 'hidden'
          }}
        >
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
              <ReactApexChart
                options={tdsplotoptions.options}
                series={tdsplotoptions.series}
                type="bar"
                height={200}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {};
