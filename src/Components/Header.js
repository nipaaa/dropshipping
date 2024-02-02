import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const headerStyle = {
    borderBottom: "1px solid #FFFFF6",
    backgroundColor: "#FBFAFA",
    boxShadow: " 0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
    padding: "20px 40px",
  };
  const textStyle = {
    color: " #6B7A8F",
    textShadow: "0px 2px 2px rgba(255, 255, 215, 0.30)",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
    letterSpacing: "-0.84px",
  };
  return (
    <Box style={headerStyle}>
      <Typography style={textStyle}>FormMatch Sourcing</Typography>
    </Box>
  );
};

export default Header;
