import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import Link from "@mui/material/Link";
import { useDispatch } from "react-redux";
import { loginAction } from "../Store/LoginAuth";
import "./MobileLogin.css";
import OTPSection from "./OTPSection";
import NumberSection from "./NumberSection";
import { useSelector } from "react-redux/es/exports";
const MobileLogin = () => {
  const dispatch = useDispatch();
  const moveToIdLogin = () => {
    dispatch(loginAction.updateLogin(false));
    dispatch(loginAction.updateEmployeeIDScreen(true));
    dispatch(loginAction.updateMobileScreen(false));
  };
  const numberSection = useSelector((state) => state.mob.NumberSection);
  const otpSection = useSelector((state) => state.mob.OTPSection);
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem",
        boxShadow: "0 2px 5px 0 rgb(113 113 113 / 24%)",
        borderRadius: "1.4rem",
        height: "23rem",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <SendToMobileIcon sx={{ color: "#004a92" }} />
        <Typography variant="body" sx={{ color: "#004a92", fontWeight: 700 }}>
        LMS Login
        </Typography>
      </Box>
      {numberSection && <NumberSection />}
      {otpSection && <OTPSection />}

      <Box className="login-info" sx={{ marginTop: "2rem" }}>
        <Link
          underline="none"
          onClick={moveToIdLogin}
          sx={{
            fontSize: "0.9rem",
            color: "#004a92",
            paddingTop: "0.2rem",
            fontWeight: 540,
            cursor: "pointer",
          }}
        >
          Login with User ID
        </Link>
      </Box>
    </Box>
  );
};

export default MobileLogin;
