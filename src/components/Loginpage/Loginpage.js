import React from "react";
import Box from "@mui/material/Box";
import SfLogo from "../../images/SF_Logo.png";
import Login from "./Login";
import Idlogin from "./Idlogin";
import MobileLogin from "./MobileLogin";
import { useSelector } from "react-redux/es/exports";
import SfTeam from "../../images/sundaramteam.png";
import Pagelayout from "../Pagelayout/Pagelayout";
import "./LoginPage.css";
import Slider from "./Slider";
import Cookies from "js-cookie";
const LoginPage = () => {
  const loginPages = useSelector((state) => state.login.loginScreen);
  const EmployeeIDPage = useSelector((state) => state.login.EmployeeIDScreen);
  const MobilePage = useSelector((state) => state.login.MobileScreen);
  const isLogin = useSelector((state) => state.branch.isLogin);
  return isLogin ? (
    <Pagelayout />
  ) : (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#004A92",
          height: "3.5rem",
        }}
      >
        <Box
          sx={{
            marginLeft: "0.5rem",
            height: "3.5rem",
            backgroundImage: `url(${SfLogo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "15rem",
          }}
        ></Box>
      </Box>
      <div
        className="contain"
        // sx={{
        //   display: "grid",
        //   gridTemplateColumns: "4fr 2fr",
        //   gap: "2rem",
        //   marginTop: "2rem",
        //   border: "1px solid red",
        //   padding: "2rem",
        // }}
      >
        <Box
          className="add"
          sx={{
            borderRadius: "14px",
            // border: "1px solid black",
            // backgroundImage: `url(${SfTeam})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
          }}
        >
          <Slider />
        </Box>
        {loginPages && <Login />}
        {EmployeeIDPage && <Idlogin />}
        {MobilePage && <MobileLogin />}
      </div>
      <Box
        sx={{
          backgroundColor: "#004A92",
          width: "100%",
          color: "white",
          position: "absolute",
          bottom: 0,
          height: "2rem",
          paddingTop: "0.3rem",
          textAlign: "center",
        }}
      >
        © 2022 Sundaram Home Ltd.
      </Box>
    </>
  );
};

export default LoginPage;
