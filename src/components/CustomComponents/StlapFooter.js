import { Box, Typography } from "@mui/material";
import React from "react";

const  StlapFooter =() =>{
return(
    <Box
        component="footer"
        sx={{
          mt: "auto",
          textAlign: "center",
          marginTop: "8px",
          left: "0",
          bottom: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography sx={{ color: "black" }} align="center">
          {" "}
          Copyright © Sundaram Home Finance 2022.
        </Typography>
      </Box>
)
}
export default StlapFooter;