import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Input,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import pictures from "../assets/pictures.png";
import arrow from "../assets/arrow.png";
import Image from "next/image";
import ConfirmModal from "./ConfirmModal";

const ProductForm = () => {
  const fileRef = useRef();
  const [dropdownShow, setDropdownShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("Website Source");
  const options = ["WooCommerce", "Shopify", "Other"];
  const formStyle = {
    padding: "83px 0 58px",
  };

  const titleStyle = {
    color: "#6B7A8F",
    textShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    fontSize: { xs: "30px", md: "40px", lg: "70px" },
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "70px",
    letterSpacing: "-1.4px",
    marginBottom: "13px",
  };

  return (
    <Box sx={formStyle}>
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={titleStyle}>Product Form</Typography>
          <Typography sx={{ marginBottom: "128px" }} className="form_text">
            Fill out the form below and submit. We will work on <br /> your
            request and email your results.
          </Typography>
        </Box>
        <form>
          <Grid
            sx={{ paddingBottom: "225px" }}
            container
            spacing={12}
            alignItems="center"
          >
            <Grid item md={6} sx={{ overflow: "hidden" }}>
              <Typography sx={{ marginBottom: "36px" }} className="form_text">
                Information on your order:
              </Typography>

              <TextareaAutosize
                fullWidth
                aria-label="textarea"
                placeholder="Ex .. How many products, etc."
                minRows={9}
                name="product"
                className="input"
              />
              <Input
                sx={{ marginBottom: "25px" }}
                className="input"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <Input
                sx={{ marginBottom: "25px" }}
                className="input"
                name="email"
                placeholder="Email "
              />

              {selectOption === "Other" ? (
                <Box>
                  <Input
                    sx={{ marginBottom: "18px" }}
                    className="input"
                    name="other"
                    placeholder="Other "
                  />
                  <Input
                    className="input"
                    name="otherText"
                    placeholder="Type here.. "
                  />
                </Box>
              ) : (
                <Box sx={{ position: "relative" }}>
                  <Box
                    onClick={() => setDropdownShow(!dropdownShow)}
                    className="input"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 246, 0.50)",

                        fontSize: "25px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "20px",
                      }}
                    >
                      {selectOption}
                    </Typography>
                    <Image src={arrow} alt="icon" />
                  </Box>
                  {dropdownShow && (
                    <Box
                      sx={{
                        // position: "absolute",
                        borderRadius: "8px",
                        border: "1px solid  #E5E7EB",
                        background: "#FFFFF6",
                        boxShadow:
                          "0px 4px 3px 0px rgba(0, 0, 0, 0.10), 0px 10px 8px 0px rgba(0, 0, 0, 0.04)",
                        padding: "8px",
                        width: "100%",
                        height: "100%",
                        minHeight: "100px",
                      }}
                    >
                      {options.map((data, index) => (
                        <Typography
                          onClick={() => setSelectOption(data)}
                          sx={{
                            color: "#6B7A8F",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "20px",
                            letterSpacing: "0.1px",
                            borderRadius: "6px",
                            transition: "background 0.3s ease,color 0.3s ease",
                            "&:hover": {
                              background: "rgba(247, 136, 47, 0.60)",
                              color: "rgba(255, 255, 246, 0.70)",
                            },
                            padding: "8px 12px",
                          }}
                          key={index}
                        >
                          {data}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              )}
            </Grid>
            <Grid item md={6}>
              <Typography sx={{ marginBottom: "25px" }} className="form_text">
                Upload a picture or provide a link <br /> to the product(s) you
                would like to <br /> source:
              </Typography>
              <Box sx={{ display: "none" }}>
                <input type="file" ref={fileRef} />
              </Box>
              <Box
                onClick={() => fileRef.current.click()}
                sx={{
                  maxWidth: "335px",
                  margin: "auto",
                  border: "1px dashed #E5E7EB",
                  borderRadius: "8px",
                  background: "white",
                  padding: "50px",
                  textAlign: "center",
                }}
              >
                <Image
                  sx={{ marginBottom: "20px" }}
                  src={pictures}
                  alt="icon"
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1F2937",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "24px",
                      letterSpacing: "0.08px",
                    }}
                  >
                    Drop your files here or
                  </Typography>
                  <Typography
                    sx={{
                      color: "#6B7A8F",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "24px",
                      letterSpacing: "0.08px,",
                      textDecoration: "underline",
                    }}
                  >
                    browse
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#9CA3AF",
                    fontWeight: "500",
                    lineHeight: "20px",
                    letterSpacing: "0.07px",
                  }}
                >
                  Maximum size: 50MB
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center" }}>
            <Button
              onClick={() => setModalOpen(true)}
              sx={{
                borderRadius: "6px",
                background: "#6B7A8F",
                color: "#FFFFD7",
                fontSize: "35px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "20px",
                padding: "16px",
                maxWidth: { xs: "240px", lg: "340px" },
                width: "100%",
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
      <ConfirmModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Box>
  );
};

export default ProductForm;
