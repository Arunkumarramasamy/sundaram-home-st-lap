import {
  Box,
  Button,
  Grid,
  InputLabel,
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
  const [reasonError, setReasonError] = useState(false);
  const [toasterOpen, setToasterOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [content, setContent] = useState("");
  const [reason, setReason] = useState("");
  const [remark, setRemark] = useState("");
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
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    height: "80%",
    p: 4,
  };
  //save data
  const handleClose = () => setOpen(false);
  const saveAccrualDetails = async () => {
    if (!reason) {
      setReasonError(true);
    } else {
      setReasonError(false);
      const dataMap = {};
      dataMap["gridData"] = props.gridData;
      dataMap["reason"] = reason;
      dataMap["remarks"] = remark;
      dataMap["refDate"] = props.refDate;
      dataMap["referenceNumber"] = props.refNum;
      dataMap["updatedBy"] = Cookies.get("userName");
      dataMap["applicationNum"] = props.applicationNum;
      dataMap["type"] = props.type;
      dataMap["historyData"] = props.historyData;
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
          window.location.reload();
        }
      } catch {
        setContent("Network Error");
        setSeverity("error");
        setToasterOpen(true);
        console.log("Network Error");
      }
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
        <Box
          sx={{
            width: "100%",
            marginTop: "8px",
            marginLeft: "16px",
            height: "80%",
          }}
        >
          <Grid
            container
            spacing={2}
            // columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 6 }}
          >
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <CustomDropDown
                id="1"
                label="Reason "
                value={reason}
                defaultValue="1"
                required={true}
                dropDownValue={resonValue}
                variant="standard"
                onChange={(event) => {
                  setReason(event.target.value);
                  setReasonError(false);
                }}
              />
              {reasonError && <p className="error">Please Select a Reason</p>}
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
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <InputLabel
                id="accrual-waiver-remark"
                sx={{ color: "#004A92", fontWeight: 600 ,marginTop:'8px'}}
                required={false}
              >
                Remarks
              </InputLabel>
              <TextareaAutosize
                id="accrual-textarea"
                maxRows={4}
                required={true}
                value={remark}
                aria-label="maximum height"
                onChange={(event) => setRemark(event.target.value)}
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
              disabled={props.updateDisable}
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
                    // height:"80%",
                    // overflow:'scroll'
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
                    applicationNum={props.applicationNum}
                    feeType={props.type}
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
