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

const AccrualRemark = (props) => {
  const [open, setOpen] = useState(false);
  const [toasterOpen, setToasterOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [content, setContent] = useState("");
  const [remark, setRemark] = useState(props.remark);
  const handleOpen = () => setOpen(true);
  const handleHistoryDialog = () => {
    handleOpen(true);
  };
  const [reasonData, setReasonData] = useState(props.reason);
  const resonValue = [
    { value: "1", text: "Reverse Payment" },
    { value: "2", text: "intrest increases" },
    { value: "3", text: "intrest reduced" },
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
    dataMap["reason"] = reasonData;
    dataMap["remark"] = "";
    dataMap["refDate"] = props.refDate;
    dataMap["referenceNumber"] = props.refNum;
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
                value={reasonData}
                defaultValue="1"
                required={true}
                dropDownValue={resonValue}
                onChange={(event) => setReasonData(event.target.value)}
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
                aria-label="maximum height"
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
