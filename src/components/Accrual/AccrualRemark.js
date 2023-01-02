import {
  Box,
  Button,
  Grid,
  Modal,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomDropDown from "../CustomComponents/CustomDropDown";
import CustomTextField from "../CustomComponents/CustomTextField";
import AdditionalHistory from "./AdditionalHistory";
import HistoryIcon from "@mui/icons-material/History";
import Cookies from "js-cookie";
import axios from "axios";
import CustomeToaster from "../CustomComponents/CustomToaster";
import { navigate, useNavigate } from "react-router-dom";

const AccrualRemark = (props) => {
  const [open, setOpen] = useState(false);
  const [toasterOpen, setToasterOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleHistoryDialog = () => {
    handleOpen(true);
  };
  const resonValue = [
    { value: "Reverse Payment", text: "Reverse Payment" },
    { value: "intrest increases", text: "intrest increases" },
    { value: "intrest reduced", text: "intrest reduced" },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  //save data
  const handleClose = () => setOpen(false);
  const saveAccrualDetails = async () => {
    const dataMap = {};
    dataMap["gridData"] = props.gridData;
    dataMap["reason"] = props.reason;
    dataMap["remarks"] = props.remark;
    dataMap["refDate"] = props.refDate;
    dataMap["referenceNumber"] = props.refNum + 1;
    dataMap["updatedBy"] = Cookies.get("userName");
    dataMap["applicationNumber"] = props.applicationNumber;
    dataMap["type"] = props.type;
    try {
      // const response = await axios(
      const response = await axios.post(
        "http://localhost:8080/additionalfee/saveFeeDetails",
        dataMap
      );
      if (response.data === "saved") {
        setContent("Saved Successfully");
        setSeverity("success");
        setToasterOpen(true);
        // if (props.type === "accrual") {
        //   navigate("/stlap/home/additionalAccrual");
        // } else {
        //   navigate("/stlap/home/additionalWaiver");
        // }
        window.location.reload();
      }
    } catch {
      setContent("Network Error");
      setSeverity("error");
      setToasterOpen(true);
      console.log("Network Error");
    }
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
        sx={{
          width: "calc(100% - 8px)",
          margin: "unset",
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ width: "100%", marginTop: "16px", marginLeft: "16px" }}>
          <Grid
            container
            spacing={2}
            // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
          >
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <CustomDropDown
                id="1"
                label="Reason "
                value={props.reason}
                defaultValue="1"
                required={true}
                dropDownValue={resonValue}
                onChange={(event) => {
                  props.setReason(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <CustomTextField
                required={false}
                disabled={true}
                label={props.name}
                id="refdate"
                value={Cookies.get("userName")}
                type="text"
                placeholder={props.name}
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
          >
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <Typography id="accrual-waiver-remark" required={true}>
                Remarks
              </Typography>
              <TextareaAutosize
                id="accrual-textarea"
                maxRows={4}
                required={true}
                value={props.remark}
                aria-label="maximum height"
                onChange={(event) => props.setRemark(event.target.value)}
                style={{
                  width: "100%",
                  height: "100px",
                  borderRadius: "4px",
                  resize: "none",
                  outline: "none",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                }}
              />
            </Grid>
          </Grid>
          <div style={{ padding: "8px", direction: "rtl" }}>
            <Button
              onClick={handleHistoryDialog}
              variant="contained"
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
                color: "white",
                backgroundColor: "black",
                fontWeight: "bold",
              }}
              onMouseOver={({ target }) => {
                target.style.backgroundColor = "black";
                target.style.color = "white";
              }}
            >
              <HistoryIcon></HistoryIcon>
            </Button>
            <Button
              variant="contained"
              onClick={saveAccrualDetails}
              sx={{ fontWeight: "bold" }}
            >
              Update
            </Button>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <Modal
                sx={{
                  "& div.css-15edzf2": {
                    width: { xs: "90%", md: "80%", lg: "60%" },
                  },
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <AdditionalHistory
                    onClose={handleClose}
                    title="Waived History"
                  />
                </Box>
              </Modal>
            </Grid>
            <CustomeToaster
              severity={severity}
              open={toasterOpen}
              content={content}
            ></CustomeToaster>
          </div>
        </Box>
      </Grid>
    </>
  );
};
export default AccrualRemark;
