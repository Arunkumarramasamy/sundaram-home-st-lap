import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomerInformationNew from "./CustomerInformationNew";
import DebitDetailsNew from "./DebitDetailsNew";
import MandateInformation from "./MandateInformation";
import Success from "./Success";
const steps = ["Customer Information", "Debit Bank Details", "Mandate Details"];
const ENach = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <CustomerInformationNew next={handleNext} />;
      case 1:
        return <DebitDetailsNew next={handleNext} previous={handleBack} />;
      case 2:
        return <MandateInformation next={handleNext} previous={handleBack} />;
      default:
        return "am not";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box sx={{ maxWidth: "100%", padding: "2rem" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Success reset={handleReset} />
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}
          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <StButton
              sx={{
                color: "white",
                "& MuiButtonBase-root:hover": {
                  background: "red",
                },
              }}
              onClick={handleReset}
            >
              Back to Register
            </StButton>
          </Box> */}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {getStepContent(activeStep)}
          </Typography>
        </React.Fragment>
      )}
    </Box>
  );
};
export default ENach;
