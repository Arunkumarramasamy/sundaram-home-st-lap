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
  const [inputValue, setInputValue] = useState(Number(props.value.received));
  const [due, setDue] = useState(Number(props.value.due));
  const [paid, setPaid] = useState(Number(props.value.paid));
  const [outStandingAmount, setOutStandingAmount] = useState(
    props.value.due - props.value.paid - props.value.waived
  );
  const onChangeParentValue = (event) => {
    let Value = event.target.value.replace(/\D/g, "");
    if (Value === "") {
      setInputValue(Value);
    } else {
      setInputValue(Value);
    }
    setOutStandingAmount(due - paid - Value);
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
                {"Amount Receivable : " + row.due}
              </Typography>
              <Typography padding="1px">
                {"Amount Received : " + row.receiveable}
              </Typography>
              <Typography padding="1px">
                {"Early Waived : " + row.paid}
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
                  label="Additional Waived"
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
