import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import StButton from "../NACH/CustomStyles/StButton";
const Success = (props) => {
  const Reset = () => {
    props.reset();
  };
  return (
    <>
      <Container sx={{ marginTop: "2rem" }} maxWidth="sm">
        <Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              color: "#004a92",
            }}
          >
            E-mandate Registeration is Successful{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Application Details
          </Typography>
          <Divider
            sx={{
              marginTop: "8px",
              border: "1px solid #AAAAAA",
              width: "50%",
              textAlign: "center",
            }}
          />
          <Container maxWidth="xs">
            <Box sx={{ marginTop: "12px" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item sm={5} xs={12}>
                      <Typography>Application Number:</Typography>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                      <Typography>213531565432</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item sm={5} xs={12}>
                      <Typography>Registered Account:</Typography>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                      <Typography>xxxxx124654322</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item sm={5} xs={12}>
                      <Typography>Registered Number:</Typography>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                      <Typography>9750208902</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Grid container>
                    <Grid item sm={5} xs={12}>
                      <Typography>Registered Email-ID:</Typography>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                      <Typography>naveen@gmail.com</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
      <Box
        sx={{
          marginTop: "1.2rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <StButton variant="contained" onClick={Reset}>
          Back To Register
        </StButton>
      </Box>
    </>
  );
};
export default Success;
