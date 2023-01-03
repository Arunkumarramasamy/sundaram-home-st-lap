import {
  Card,
  CardHeader,
  Divider,
  Grid,
  Typography,
  CardContent,
} from "@mui/material";
import { React, useState } from "react";
import CustomTextField from "../CustomComponents/CustomTextField";

const AccrualCardItems = (props) => {
  const [row, setRow] = useState(props.value);
  const [inputValue, setInputValue] = useState(
    Number(props.value.additionalWaived)
  );
  const [receiveable, setDue] = useState(Number(props.value.receiveable));
  const [received, setPaid] = useState(Number(props.value.received));
  const [outStandingAmount, setOutStandingAmount] = useState(
    props.value.receiveable -
      props.value.received -
      props.value.earlyWaiver +
      props.value.additionalAccrual
  );
  const onChangeParentValue = (event) => {
    let Value = event.target.value.replace(/\D/g, "");
    if (Value === "") {
      setInputValue(Value);
    } else {
      setInputValue(Value);
    }
    if (props.screen === "accrual") {
      setOutStandingAmount(
        receiveable - received + (isNaN(parseInt(Value)) ? 0 : parseInt(Value))
      );
    } else {
      if (
        (isNaN(parseInt(Value)) ? receiveable - received : parseInt(Value)) <
        receiveable
      ) {
        props.setGridAlert("none");
        setOutStandingAmount(
          receiveable -
            received -
            (isNaN(parseInt(Value)) ? 0 : parseInt(Value))
        );
      } else {
        props.setGridAlert("block");
        setInputValue(0);
        setOutStandingAmount(receiveable - received);
      }
    }
    props.onChange(row, Value);
  };
  return (
    <>
      <Grid container direction="column" sx={{ flex: "1 auto" }}>
        <Card>
          <CardHeader
            // action={loadActionBtn(row.status)}
            subheader={"Fee Description  : " + row.details}
            subheaderTypographyProps={{
              color: "#004A92",
              fontWeight: "700",
            }}
            sx={{
              textAlign: "left",
              padding: "16px 16px 0px 16px !important",
            }}
          />
          <CardContent>
            <Grid
              container
              item
              direction="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Typography padding="1px">
                {"Amount Receivable : " + row.receiveable}
              </Typography>
              <Typography padding="1px">
                {"Amount Received : " + row.received}
              </Typography>
              <Typography
                padding="1px"
                sx={{ display: props.screen === "accrual" ? "none" : "block" }}
              >
                {"Earlier Waived : " + row.earlyWaiver}
              </Typography>
              {/* <Typography padding="1px">
                                {"Additional Waived : " + row.received}
                              </Typography> */}
              <div
                style={{
                  display: props.screen === "waived" ? "flex" : "unset",
                  flexDirection:
                    props.screen === "waived" ? "column-reverse" : "unset",
                }}
              >
                <CustomTextField
                  disabled={outStandingAmount === 0}
                  label={
                    props.screen === "accrual"
                      ? "Additional Accrual"
                      : "Additional Waived"
                  }
                  id={"additional-waived-" + props.index}
                  type="number"
                  placeholder="Additional Waived"
                  required={false}
                  variant="standard"
                  onChange={(event) => onChangeParentValue(event)}
                  value={inputValue}
                  sx={{ fontWeight: "400 !important" }}
                ></CustomTextField>
                <Typography padding="1px">
                  {"Outstanding Amount : " + outStandingAmount}
                </Typography>
              </div>
            </Grid>
            <Grid
              container
              item
              direction="row"
              alignItems="flex-end"
              justifyContent="flex-end"
            ></Grid>
          </CardContent>
        </Card>
      </Grid>
      <Divider />
    </>
  );
};
export default AccrualCardItems;
