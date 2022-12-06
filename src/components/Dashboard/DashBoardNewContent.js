import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardHeader, IconButton, Paper } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { PieChart, Pie, Sector, Cell, LineChart, Line, Brush } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

function DashboardContent() {
  const data = [
    { name: "Net Profit Margin %", value: 100 },
    { name: "", value: 400 },
  ];
  const Ibdata = [
    { name: "Income Budget %", value: 93 },
    { name: "", value: 7 },
  ];
  const vaData = [
    { name: "Voucher Authorised %", value: 89 },
    { name: "", value: 11 },
  ];
  const ebdata = [
    { name: "Expenses Budget %", value: 94 },
    { name: "", value: 6 },
  ];

  const dstdata = [
    { name: "upcoming", value: 12 },
    { name: "non-disbursed", value: 15 },
    { name: "partial-disbursed", value: 63 },
    { name: "fully-disbursed", value: 10 },
  ];
  const COLORS = ["#00C49F", "#AAAAAA", "#FFBB28", "#FF8042"];

  const barchartData = [
      {
        name: "Apr",
        TI: 4000,
        TE: 2400,
        NP: 2400,
      },
      {
        name: "May",
        TI: 3000,
        TE: 1398,
        NP: 2210,
      },
      {
        name: "Jun",
        TI: 2000,
        TE: 9800,
        NP: 2290,
      },
      {
        name: "Jul",
        TI: 2780,
        TE: 3908,
        NP: 2000,
      },
      {
        name: "Aug",
        TI: 1890,
        TE: 4800,
        NP: 2181,
      },
      {
        name: "Sep",
        TI: 2390,
        TE: 3800,
        NP: 2500,
      },
      {
        name: "Oct",
        TI: 3490,
        TE: 4300,
        NP: 2100,
      },
      {
        name: "Nov",
        TI: 1490,
        TE: 2300,
        NP: 1100,
      },
    ];

  const lineChartdata = [
    {
      name: "Apr",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "May",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Jun",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Jul",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Aug",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sep",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 1490,
      pv: 2300,
      amt: 1100,
    },
  ];

  return (
    <React.Fragment>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton size="small">
                <OpenInFullIcon size="small" />
              </IconButton>
            }
            subheader="Total Income"
            subheaderTypographyProps={{ color: "black" }}
            sx={{ textAlign: "center" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              4,719,00
            </Typography>
            <Typography variant="body2" sx={{ color: "blue" }}>
              16.1%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton size="small">
                <OpenInFullIcon size="small" />
              </IconButton>
            }
            subheader="Net Profit"
            subheaderTypographyProps={{ color: "black" }}
            sx={{ textAlign: "center" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              629,00
            </Typography>
            <Typography variant="body2" sx={{ color: "red" }}>
              -8.8%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton size="small">
                <OpenInFullIcon size="small" />
              </IconButton>
            }
            subheader="Total Expenses"
            subheaderTypographyProps={{ color: "black" }}
            sx={{ textAlign: "center" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              3,270,00
            </Typography>
            <Typography variant="body2" sx={{ color: "blue" }}>
              25.1%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton size="small">
                <OpenInFullIcon size="small" />
              </IconButton>
            }
            sx={{ textAlign: "center" }}
            subheader="Cash at end of month"
            subheaderTypographyProps={{ color: "black" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              7,684,00
            </Typography>
            <Typography variant="body2" sx={{ color: "blue" }}>
              4.9%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton size="small">
                <OpenInFullIcon size="small" />
              </IconButton>
            }
            subheader="Accounts Receivable"
            subheaderTypographyProps={{ color: "black" }}
            sx={{ textAlign: "center" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              609,00
            </Typography>
            <Typography variant="body2" sx={{ color: "blue" }}>
              -5.1%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton size="small">
                <OpenInFullIcon size="small" />
              </IconButton>
            }
            subheader="Quick Ratio"
            subheaderTypographyProps={{ color: "black" }}
            sx={{ textAlign: "center" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              1.02
            </Typography>
            <Typography variant="body2">1 or higher</Typography>
            <Typography variant="subtitle2">Quick Ratio Target</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton size="small">
                <OpenInFullIcon size="small" />
              </IconButton>
            }
            subheader="Current Ratio"
            subheaderTypographyProps={{ color: "black" }}
            sx={{ textAlign: "center" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              3.02
            </Typography>
            <Typography variant="body2">3 or higher</Typography>
            <Typography variant="subtitle2">Current Ratio Target</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <CardHeader
            action={
              <IconButton size="small">
                <OpenInFullIcon size="small" />
              </IconButton>
            }
            subheader="Accounts Payable"
            subheaderTypographyProps={{ color: "black" }}
            sx={{ textAlign: "center" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h5">
              538,00
            </Typography>
            <Typography variant="body2" sx={{ color: "blue" }}>
              -15.7%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography>
          </CardContent>
        </Card>
      </Grid><Grid item>
        <Paper width={200} height={200} sx={{alignContent:'center', textAlign:'center'}}>
        <Typography variant="subtitle2" sx={{pt:'8px'}}>Net Profit Margin</Typography>
        <PieChart width={200} height={140}>
          <Pie
            data={data}
            cx={110}
            cy={70}
            innerRadius={20}
            outerRadius={40}
            label='Net Profit Margin 13%'
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        </Paper>
      </Grid>
      <Grid item>
        <Paper width={200} height={200} sx={{alignContent:'center', textAlign:'center'}}>
        <Typography variant="subtitle2" sx={{pt:'8px'}}>% of Income Budget</Typography>
        <PieChart width={200} height={140}>
          <Pie
            data={Ibdata}
            cx={110}
            cy={70}
            innerRadius={20}
            outerRadius={40}
            label='Net Profit Margin 13%'
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        </Paper>
      </Grid>
      <Grid item>
        <Paper width={200} height={200} sx={{alignContent:'center', textAlign:'center'}}>
        <Typography variant="subtitle2" sx={{pt:'8px'}}>% of Expenses Budget</Typography>
        <PieChart width={200} height={140}>
          <Pie
            data={ebdata}
            cx={110}
            cy={70}
            innerRadius={20}
            outerRadius={40}
            label='Net Profit Margin 13%'
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        </Paper>
      </Grid>
      <Grid item>
        <Paper width={200} height={200} sx={{alignContent:'center', textAlign:'center'}}>
        <Typography variant="subtitle2" sx={{pt:'8px'}}>Authorised Voucher %</Typography>
        <PieChart width={200} height={140}>
          <Pie
            data={vaData}
            cx={110}
            cy={70}
            innerRadius={20}
            outerRadius={40}
            label='Net Profit Margin 13%'
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        </Paper>
      </Grid>
      <Grid item>
        <Paper width={200} height={200} sx={{alignContent:'center', textAlign:'center'}}>
        <Typography variant="subtitle2" sx={{pt:'8px'}}>Disbursement Status</Typography>
        <PieChart width={200} height={140}>
          <Pie
            data={dstdata}
            cx={110}
            cy={70}
            innerRadius={20}
            outerRadius={40}
            label='Net Profit Margin 13%'
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        </Paper>
      </Grid>
      <Grid item>
      <Paper height={200}>
        <BarChart width={250} height={170} data={barchartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TI" stackId="a" fill="#8884d8"/>
          <Bar dataKey="TE" stackId="a" fill="#82ca9d" />
          <Bar dataKey="NP" fill="#ffc658" />
        </BarChart>
        </Paper>
      </Grid>
      <Grid item>
      <Paper height={200} sx={{alignContent:'center', textAlign:'center'}}>
        <LineChart
          width={250}
          height={140}
          data={lineChartdata}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </LineChart>
        <Typography variant="subtitle2" sx={{pt:'8px', color:'#82ca9d'}}>Cash at the end of month</Typography>
        </Paper>
      </Grid>
      
    </React.Fragment>
  );
}

export default function DashboardBoardNewContent() {
  return <DashboardContent />;
}
