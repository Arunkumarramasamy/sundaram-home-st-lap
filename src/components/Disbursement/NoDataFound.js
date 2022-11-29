import { DescriptionTwoTone, LogoutTwoTone } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import query from "../../images/query.png";

const NoDataFound = () => {

    return (<Box ><Box
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >

          <img id='layout-menu-image' src={query} />
         
      </Box>
      <Box
      sx={{
        marginTop: "1rem",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >

       
        <h3>No Data Found.</h3>

        
    </Box></Box>
      
      
      );
};

export default NoDataFound;