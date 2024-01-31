import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bg from "../assets/banner-bg.png";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "195px",
    paddingBottom: "261px",
  };

  const titleStyle = {
    color: "var(--Main2, #FFFFD7)",
    textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    fontSize: {
      xs: "20px",
      md: "30px",
    },
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "12px",
  };

  const headingStyle = {
    color: " var(--Main2, #FFFFD7)",
    textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    fontSize: "60px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "70px",
    letterSpacing: "-1.2px",
    marginBottom: "28px",
  };
  const borderStyle = {
    borderBottom: "4px solid #6B7A8F",
    filter: "drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))",
    marginBottom: "33px",
  };
  const shortBorder = {
    width: "90%",
    margin: "auto",
    borderBottom: "3px solid #6B7A8F",
    filter: "drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.25))",
  };
  return (
    <Box style={bannerStyle}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "882px" }}>
          <Typography style={titleStyle}>Dropshipping?</Typography>
          <Typography style={headingStyle}>
            Get Support on your Journey with Personalized, Sourced Products
          </Typography>

          <Box style={borderStyle}></Box>
          <Box style={shortBorder}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;