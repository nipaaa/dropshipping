import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import success from "../assets/success.png";
import Image from "next/image";

const ConfirmModal = ({ modalOpen, setModalOpen }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "800px",
    width: "100%",
    background: "#FFFFD7",
    boxShadow: 24,
    p: 12,
    textAlign: "center",
  };
  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Image sx={{ marginBottom: "53px" }} src={success} alt="success" />
        <Typography
          sx={{
            color: "#6B7A8F",
            textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
            fontSize: { xs: "35px", lg: "85px" },
            fontStyle: "normal",
            fontWeight: "800",
            lineHeight: "70px",
            letterSpacing: "-1.7px",
            marginBottom: "28px",
          }}
        >
          Success!
        </Typography>
        <Typography
          sx={{
            color: "#6B7A8F",

            textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",

            fontSize: { xs: "27px", lg: "38px" },
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "40px",
            letterSpacing: "1px",
            marginBottom: "70px",
          }}
        >
          We will work on your request and email <br /> you once it is ready.
        </Typography>
        <Typography
          onClose={() => setModalOpen(false)}
          sx={{
            color: "#6B7A8F",

            textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
            fontSize: { xs: "20px", lg: "35px" },

            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "40px",
            letterSpacing: "1px",
            textDecoration: "underline",
          }}
        >
          Back to Landing Page
        </Typography>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
