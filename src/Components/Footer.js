import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "#6B7A8F",
    boxShadow: " 0px 2px 2px 0px rgba(0, 0, 0, 0.25) inset",
    padding: "64px",
  };
  const titleStyle = {
    color: "#FFFFD7",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: { xs: "0", lg: "13.043px" },
    letterSpacing: "-0.15px",
    marginBottom: "24px",
  };
  const linkStyle = {
    color: " #FFFFD7",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    textDecoration: "none",
  };
  return (
    <Box style={footerStyle}>
      <Container  sx={{ maxWidth: "1478px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography style={titleStyle}>FormMatch Sourcing</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <Link style={linkStyle} href="#">
            Contact
          </Link>
          <Link style={linkStyle} href="#">
            Privacy
          </Link>
          <Link style={linkStyle} href="#">
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
