import {
  Box,
  Button,
  Grid,
  lighten,
  Paper,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import AccordianContainer from "../CustomComponents/AccordianContainer";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import STButton from "../CustomComponents/STButton";
import InfoIcon from "@mui/icons-material/Info";
import "./Accrual.css";
import StlapFooter from "../CustomComponents/StlapFooter";

const AdditionalAccrual = () => {
  const [pageSize, setPageSize] = useState(4);
  const [girdVisible, setGridVisible] = useState("none");
  const [branchValue, setBranchValue] = useState("");
  const [referenceName,setReferenceName]= useState();
 
  const resonValue = [
    { value: "1", text: "Reverse Payment" },
    { value: "2", text: "intrest increases" },
    { value: "3", text: "intrest reduced" },
  ];
  const handleSearch = (event) => {
    event.preventDefault();
    setGridVisible("block");
  };


  const searchButtonClickHandler = (event) => {
    // event.preventDefault();
    // props.onSearchButtonClick(branch, trnNo, true);
  };
  const customerColumn = [
    
    {
      field: "customerName",
      headerName: "Customer Name",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "aadhar",
      headerName: "AADHAR Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "pan",
      headerName: "Pan Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "accountNo",
      headerName: "Account Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "mobileNo",
      headerName: "Mobile Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "branchName",
      headerName: "Branch Name",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "applicationNo",
      headerName: "Application Number",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
  ];
  const customerData = [
    {
      id: 1,
      customerId: "0001",
      accountNo: "0000898980",
      customerName: "Raagesh",
      aadhar: "4325-xxxx-8765",
      pan: "ABCD000G",
      mobileNo: "9876543210",
      alternativeNo: "9877657575",
      branchName: "karapakam",
      applicationNo: "STLAPKARA0001",
    },
    {
      id: 2,
      customerId: "0002",
      accountNo: "0000898980",
      customerName: "Sherif",
      aadhar: "4352-xxxx-6543",
      pan: "ABCD000G",
      mobileNo: "9876543210",
      alternativeNo: "9877657575",
      branchName: "karapakam",
      applicationNo: "STLAPKARA0001",
    },
  ];
  const branchValues = [
    {
      value: 1,
      text: "Royapettah",
    },
    {
      value: 2,
      text: "Mylapore",
    },
    {
      value: 3,
      text: "Light House",
    },
    {
      value: 4,
      text: "Egmore",
    },
  ];
  const rows = [
    {
      id: 7,
      details: "Mod Charges",
      receiveable: "678",
      received: "0",
      due: "450",
      paid: "450",
      waited: "80",
      deduction: "Nill",
    },
    {
      id: 8,
      details: "Legal Charges",
      receiveable: "678",
      received: "0",
      due: "3000",
      paid: "2500",
      waited: "500",
      deduction: "Nill",
    },
    {
      id: 9,
      details: "Technical Assistance Charges",
      due: "5000",
      receiveable: "678",
      paid: "5000",
      received: "0",
      waited: "0",
      deduction: "Nill",
    },
    {
      id: 10,
      details: "Documentation Charges",
      due: "80",
      receiveable: "678",
      paid: "80",
      received: "0",
      waited: "0",
      deduction: "Nill",
    },
    {
      id: 11,
      details: "File Processing Charges",
      due: "1000",
      receiveable: "678",
      paid: "1000",
      received: "0",
      waited: "0",
      deduction: "Nill",
    },
    {
      id: 1,
      details: "Application Fee",
      due: "10000",
      receiveable: "678",
      received: "0",
      paid: "7000",
      waited: "3000",
      deduction: "3000",
    },
    {
      id: 2,
      details: "Prepayment Charge",
      due: "100000",
      receiveable: "678",
      paid: "50000",
      received: "0",
      waited: "50000",
      deduction: "Nill",
    },
    {
      id: 3,
      details: "Partial prepayment charge",
      due: "30000",
      received: "0",
      receiveable: "678",
      paid: "30000",
      waited: "0",
      deduction: "Nill",
    },
    {
      id: 4,
      details: "Late Fee charge",
      due: "250",
      receiveable: "678",
      received: "0",
      paid: "0",
      waited: "250",
      deduction: "250",
    },
    {
      id: 5,
      details: "Recovery Charge",
      due: "2000",
      paid: "2000",
      receiveable: "678",
      received: "0",
      waited: "2000",
      deduction: "Nill",
    },
    {
      id: 6,
      details: "Insurance Premium Charge",
      due: "784",
      paid: "784",
      received: "0",
      receiveable: "678",
      waited: "0",
      deduction: "Nill",
    },

    {
      id: 12,
      received: "0",
      details: "Other Charges",
      due: "0",
      paid: "0",
      receiveable: "678",
      waited: "0",
      deduction: "Nill",
    },
  ];
  const columns = [
    {
      field: "details",
      headerName: "Fee Description",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "receiveable",
      headerName: "Amount Receivable",
      headerAlign: "center",
      type: "string",
      hideable: false,
      sortable: false,
      width: 250,
      align: "center",
    },
    {
      field: "received",
      headerName: "Amout Received(₹)",
      headerAlign: "center",
      type: "string",
      width: 150,
      align: "right",
      editable: false,
    },
    {
      field: "paid",
      headerName: "Early Waived (₹)",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "waited",
      headerName: "Additional Accrual(₹)",
      headerAlign: "center",
      type: "string",
      width: 190,
      align: "right",
      editable: false,
    },
    {
      field: "deduction",
      headerName: "Outstanding Amout",
      headerAlign: "center",
      type: "string",
      width: "200",
      editable: false,
      align: "center",
    },
    {
      field: "reason",
      headerName: "Reason",
      headerAlign: "center",
      type: "string",
      width: "200",
      editable: false,
      align: "center",
      renderCell: () => {
        return (
          <CustomDropDown
            id="1"
            label=""
            value="1"
            defaultValue="1"
            dropDownValue={resonValue}
            
          />
        );
      },
    },
    {
      field: "remark",
      headerName: "Remark",
      headerAlign: "center",
      type: "string",
      width: "250",
      editable: true,
      align: "left",
      renderCell: (params) =>  (
        <Tooltip placement="right-end" title={params.value} >
        <span >{params.value}</span>
        </Tooltip>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "Legal Document",
      type: "450",
      status: "450",
      preview: "",
    },
    {
      id: 2,
      name: "Aadhar",
      type: "3000",
      status: "2500",
      preview: "",
    },
    {
      id: 3,
      name: "Pan",
      type: "5000",
      status: "5000",
      preview: "",
    },
    {
      id: 4,
      name: "Bank Pass Book",
      type: "80",
      status: "80",
      preview: "",
    },
    {
      id: 5,
      name: "Patta",
      type: "1000",
      status: "1000",
      preview: "",
    },
    {
      id: 6,
      name: "Chitta",
      type: "10000",
      status: "7000",
      preview: "",
    },
    {
      id: 7,
      name: "Adangal",
      type: "100000",
      status: "50000",
      preview: "50000",
    },
    {
      id: 8,
      name: "EC document",
      type: "30000",
      status: "30000",
      preview: "0",
    },
  ];
  let visibility = {
    due: false,
    paid: false,
    waited: false,
    deduction: false,
  };
  if (window.innerWidth > 700) {
    visibility = {};
  }
  const branchList = [
    {
      label: "Karapakam",
      label: "Kottivakam",
      label: "rayapet",
      label: "chetpet",
      label: "tambaram",
    },
  ];
  const applicationNumberList = [
    {
      label: "STLAPKARA0001",
      label: "STLAPRAYA0001",
      label: "STLAPCHET0001",
      label: "STLAPTAMB0001",
    },
  ];
  return (
    <div>
      <div style={{ minHeight: "calc(100vh - 120px)" }}>
        <Grid
          container
          spacing={2}
          // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
          sx={{
            width: "calc(100% - 8px)",
            margin: "unset",
          }}
        >
          <AccordianContainer
            id="accord"
            title="Fee Accural Basic Search"
            initialOpen={true}
          >
            <Box
              id="accord-box"
              component="form"
              validate
              onSubmit={searchButtonClickHandler}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  sx={{ paddingTop: "unset !important" }}
                >
                  <CustomDropDown
                    variant="standard"
                    required={true}
                    label="Branch"
                    id="branch"
                    value={branchValue}
                    placeholder=" Branch"
                    displayEmpty={true}
                    dropDownValue={branchValues}
                    defaultValue={1}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  xl={3}
                  sx={{ paddingTop: "unset !important" }}
                >
                  <CustomTextField
                    required={true}
                    label="Application Number"
                    id="trnno"
                    variant="standard"
                    value={""}
                    type="text"
                    placeholder="Application No."
                    //  onChange={trnNoChangeHandler}
                  />
                </Grid>
                <Grid sx={{ width: "320px", paddingLeft: "18px" }}>
                  <CustomTextField
                    disabled={true}
                    label="Reference Number"
                    id="refno"
                    value="ReferenceAccrual0001"
                    type="text"
                    placeholder=""
                    required={false}
                    variant="standard"
                    // onChange={trnNoChangeHandler}
                    // onChange={(event)=>setReferenceName(event.target.value)}
                  />
                </Grid>

                <Grid sx={{ width: "320px", paddingLeft: "18px" }}>
                  <CustomTextField
                    required={false}
                    disabled={true}
                    label="Reference Date"
                    id="refdate"
                    value="16/12/2022"
                    type="text"
                    placeholder=""
                    variant="standard"
                    // type="text"
                    // onChange={()=>set}
                  />
                </Grid>
                <Tooltip title="Current Date" placement="top-end">
                  <InfoIcon />
                </Tooltip>
                {/* <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <CustomTextField
                  required={false}
                  label="Applicant Name"
                  id="applicantName"
                  variant="outlined"
                  value={""}
                  type="text"
                  placeholder="Applicant Name"
                />
              </Grid> */}
              </Grid>
              <Box
                sx={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  onClick={(event) => handleSearch(event)}
                >
                  Search
                </Button>
                <Button
                  sx={{ marginLeft: "1rem", backgroundColor: "black" }}
                  //   onClick={clearButtonClickHandler}
                  variant="contained"
                >
                  Clear
                </Button>
              </Box>
            </Box>
          </AccordianContainer>
        </Grid>
        <div
          style={{
            display: girdVisible,
            width: "calc(100% - 8px)",
            paddingTop: "8px",
          }}
        >
          <AccordianContainer
            id="accord"
            title="Customer Data (Reference Number) : STLAPCHET0001"
            initialOpen={true}
          >
            <Grid
              container
              id="footer-removefor-datagrid"
              spacing={2}
              // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
              sx={{
                width: "calc(100% - 8px)",
                margin: "unset",
                paddingBottom: "8px",
                display: girdVisible,
                backgroundColor: "#fff",
              }}
            >
              <DataGrid
                sx={{
                  boxShadow: 2,
                  border: 2,
                  height: "180px",
                  borderColor: "white",
                  "& .MuiDataGrid-row:hover": {
                    color: "#004A92",
                    backgroundColor: "#B8E4F4",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    color: "white",
                    fontFamily: "Roboto",
                    backgroundColor: "#7f7f7f",
                  },
                  "& .super-app-theme--odd": {
                    bgcolor: lighten("#D7D7D7", 0.15),
                  },
                  "& .super-app-theme--even": {
                    bgcolor: lighten("#AAAAAA", 0.15),
                  },
                }}
                rows={customerData}
                columns={customerColumn}
                pageSize={pageSize}
                hideFooterPagination
                hideFooterSelectedRowCount
                disableSelectionOnClick
                getRowClassName={(params) =>
                  params.id % 2
                    ? `super-app-theme--even`
                    : `super-app-theme--odd`
                }
                initialState={{
                  columns: {
                    columnVisibilityModel: {
                      ...visibility,
                    },
                  },
                }}
              />
            </Grid>
          </AccordianContainer>
        </div>
        <div
          style={{
            display: girdVisible,
            width: "calc(100% - 8px)",
            paddingTop: "8px",
          }}
        >
          <AccordianContainer
            id="accord"
            title="Accrual Details"
            initialOpen={true}
          >
            <Grid
              container
              spacing={2}
              // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
              sx={{
                width: "calc(100% - 8px)",
                margin: "unset",
                display: girdVisible,
                backgroundColor: "#fff",
              }}
            >
              <DataGrid
                sx={{
                  boxShadow: 2,
                  border: 2,
                  height: "400px",
                  borderColor: "white",
                  "& .MuiDataGrid-row:hover": {
                    color: "#004A92",
                    backgroundColor: "#B8E4F4",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    color: "white",
                    fontFamily: "Roboto",
                    backgroundColor: "#7f7f7f",
                  },
                  "& .super-app-theme--odd": {
                    bgcolor: lighten("#D7D7D7", 0.15),
                  },
                  "& .super-app-theme--even": {
                    bgcolor: lighten("#AAAAAA", 0.15),
                  },
                }}
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[4, 8, 12, 16]}
                disableSelectionOnClick
                getRowClassName={(params) =>
                  params.id % 2
                    ? `super-app-theme--even`
                    : `super-app-theme--odd`
                }
                initialState={{
                  columns: {
                    columnVisibilityModel: {
                      ...visibility,
                    },
                  },
                }}
              />
              <div style={{ padding: "8px", direction: "rtl" }}>
                <Button variant="contained" sx={{ fontWeight: "bold" }}>
                  Update
                </Button>
              </div>
            </Grid>
          </AccordianContainer>
        </div>
      </div>
      <StlapFooter/>
    </div>
  );
};
export default AdditionalAccrual;
