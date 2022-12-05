import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardHeader } from "@mui/material";
import { PieChart, Pie, Sector, Cell } from "recharts";
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
  const COLORS = ["#00C49F", "#AAAAAA", "#FFBB28", "#FF8042"];

  const barchartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: -2000,
      pv: -9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Container sx={{mt:4,mb:4}}>
      <Grid container spacing={1}>
        <Grid container spacing={2} direction="column" xs={12} md={2} lg={2}>
          <Grid item>
            <Card sx={{ height: "200px" }}>
              <CardHeader
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
            <Card sx={{ height: "200px" }}>
              <CardHeader
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
        </Grid>
        <Grid
          container
          spacing={1}
          direction="column"
          xs={12}
          md={2}
          lg={2}
          sx={{ marginLeft: 1 }}
        >
          <Grid item xs={12} md={2} lg={2}>
            <Card sx={{ height: "200px" }}>
              <CardHeader
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
          <Grid item xs={12} md={2} lg={2}>
            <Card sx={{ height: "200px" }}>
              <CardHeader
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
        </Grid>

        <Grid
          container
          spacing={1}
          direction="column"
          xs={12}
          md={2}
          lg={2}
          sx={{ marginLeft: 1 }}
        >
          <Grid item xs={12} md={2} lg={2}>
            <Card sx={{ height: "200px" }}>
              <CardHeader
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
          <Grid item xs={12} md={2} lg={2}>
            <Card sx={{ height: "200px" }}>
              <CardHeader
                subheader="Quick Ratio"
                subheaderTypographyProps={{ color: "black" }}
                sx={{ textAlign: "center" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" component="h5">
                  1,02
                </Typography>
                <Typography variant="body2">1 or higher</Typography>
                <Typography variant="subtitle2">Quick Ratio Target</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="column"
          xs={12}
          md={2}
          lg={2}
          sx={{ marginLeft: 1 }}
        >
          <Grid item xs={12} md={2} lg={2}>
            <Card sx={{ height: "200px" }}>
              <CardHeader
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
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <Card sx={{ height: "200px" }}>
              <CardHeader
                subheader="Current Ratio"
                subheaderTypographyProps={{ color: "black" }}
                sx={{ textAlign: "center" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" component="h5">
                  3,02
                </Typography>
                <Typography variant="body2">3 or higher</Typography>
                <Typography variant="subtitle2">
                  Current Ratio Target
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12} md={2} lg={2}>
          <Card sx={{width:'300px'}}>
            <CardHeader
              subheader="Net Profit margin %"
              subheaderTypographyProps={{ color: "black" }}
              sx={{ textAlign: "center" }}
            />
            <CardContent sx={{ alignContent: "center" }}>
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  cx={120}
                  cy={140}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label="Net Profit margin %"
                  l
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
          </Grid>
          

      {/* Footer */}
      <Box
        component="footer"
        sx={{ py: 1, px: 1, mt: "auto", textAlign: "center" }}
      >
        <Typography sx={{ color: "black" }} align="center">
          {" "}
          Copyright © Sundaram Home Finance 2022.
        </Typography>
      </Box>
    </Container>
  );
}

export default function DashboardBoardNewContent() {
  return <DashboardContent />;
}
