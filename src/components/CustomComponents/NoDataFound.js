import { Box } from "@mui/material";
import query from "../../images/query.png";

const NoDataFound = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "10%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          className="noDataImage"
          id="layout-menu-image"
          src={query}
          alt="No Data"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3>No Data Found.</h3>
      </Box>
    </Box>
  );
};

export default NoDataFound;
