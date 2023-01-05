import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { PieChart, Pie, Sector, Cell, LineChart, Line, Brush } from "recharts";
import ApprovalIcon from "@mui/icons-material/Approval";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckIcon from "@mui/icons-material/Check";
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
import axios from "axios";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/lab";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DashboardContent() {
  const [sanction, setSanction] = useState(0);
  const [request, setRequest] = useState(0);
  const [approved, setApproved] = useState(0);
  const [sanctionAmount, setSanctionAmount] = useState(0);
  const [dateRange, setDateRange] = useState([null, null]);
  const [oneMonthData, setOneMonthData] = useState([]);
  const [oneYearData, setOneYearData] = useState([]);
  useEffect(() => {
    getDashBoardData();
  }, []);
  const getDashBoardData = async () => {
    const dataMap = {};
    try {
      // const response = await axios(
      const response = await axios.post(
        "http://localhost:8080/dashboard/getDashboardData",
        dataMap
      );
      if (response.data) {
        setSanction(
          response.data.sanctioned -
            response.data.requested -
            response.data.approved
        );
        setRequest(response.data.requested);
        setApproved(response.data.approved);
        setSanctionAmount(response.data.approvedAmount);
        setOneMonthData(response.data.oneMonth);
        setOneYearData(response.data.oneYear);
      }
    } catch {
      console.log("Network Error");
    }
  };

  return (
    <React.Fragment>
      {/* <div id="daterange" style={{ display: "none" }}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Date From", end: "Date To" }}
        >
          <DateRangePicker
            value={dateRange}
            onChange={(newValue) => {
              setDateRange(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div> */}
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: "2px",
          marginLeft: "2px",
          width: "fit-content !important",
        }}
      >
        <Grid item xs={12} lg={3} sm={6} sx={{ flex: "1 auto" }}>
          <Card id="card-design">
            <CardHeader
              action={
                <IconButton size="small">
                  <OpenInFullIcon size="small" />
                </IconButton>
              }
              subheader="Sanctioned List"
              subheaderTypographyProps={{ color: "white", fontWeight: "700" }}
              sx={{ textAlign: "center" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5" component="h5">
                {sanction}
              </Typography>
              <ApprovalIcon sx={{ fontSize: 50 }} />
              {/* <Typography variant="body2" sx={{ color: "blue" }}>
              16.1%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3} sm={6} sx={{ flex: "1 auto" }}>
          <Card id="card-design">
            <CardHeader
              action={
                <IconButton size="small">
                  <OpenInFullIcon size="small" />
                </IconButton>
              }
              subheader="Requested List"
              subheaderTypographyProps={{ color: "white", fontWeight: "700" }}
              sx={{ textAlign: "center" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5" component="h5">
                {request}
              </Typography>
              <PendingActionsIcon sx={{ fontSize: 50 }} />
              {/* <Typography variant="body2" sx={{ color: "red" }}>
              -8.8%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3} sm={6} sx={{ flex: "1 auto" }}>
          <Card id="card-design">
            <CardHeader
              action={
                <IconButton size="small">
                  <OpenInFullIcon size="small" />
                </IconButton>
              }
              subheader="Approved List"
              subheaderTypographyProps={{ color: "white", fontWeight: "700" }}
              sx={{ textAlign: "center" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5" component="h5">
                {approved}
              </Typography>
              <CheckIcon sx={{ fontSize: 50 }} />
              {/* <Typography variant="body2" sx={{ color: "blue" }}>
              25.1%
            </Typography>
            <Typography variant="subtitle2">vs previous month</Typography> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3} sm={6} sx={{ flex: "1 auto" }}>
          <Card id="card-design">
            <CardHeader
              action={
                <IconButton size="small">
                  <OpenInFullIcon size="small" />
                </IconButton>
              }
              sx={{ textAlign: "center" }}
              subheader="Total Disbursed Amount (₹)"
              subheaderTypographyProps={{ color: "white", fontWeight: "700" }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h5" component="h5">
                {sanctionAmount}
              </Typography>
              <AssuredWorkloadIcon sx={{ fontSize: 50 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sx={{ flex: "1 auto" }}>
          <Paper
            id="monthwise-chart"
            height={200}
            width="fit-content"
            sx={{
              alignContent: "center",
              textAlign: "center",
              lineHeight: "1rem",
            }}
          >
            <LineChart
              width={window.innerWidth - 24}
              height={200}
              data={oneMonthData}
              marginLeft={-30}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              sx={{ background: "aliceblue" }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sanctioned"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </LineChart>
            <Typography
              variant="subtitle2"
              sx={{
                pt: "8px",
                color: "black",
                fontSize: "1.3rem !important",
                fontWeight: "500",
              }}
            >
              Sanctioned List For Current Month
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sx={{ flex: "1 auto" }}>
          <Paper
            height={200}
            width="fit-content"
            id="monthwise-chart"
            sx={{
              alignContent: "center",
              textAlign: "center",
              lineHeight: "1rem",
            }}
          >
            <LineChart
              width={window.innerWidth - 24}
              height={200}
              data={oneYearData}
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
              <Line
                type="monotone"
                dataKey="sanctioned"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </LineChart>
            <Typography
              variant="subtitle2"
              sx={{
                pt: "8px",
                color: "black",
                fontSize: "1.3rem !important",
                fontWeight: "500",
              }}
            >
              Sancantioned List for Current Year
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default function DashboardBoardNewContent() {
  return <DashboardContent />;
}
