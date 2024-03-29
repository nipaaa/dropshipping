import {
  Box,
  Button,
  Container,
  Grid,
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
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [dropdownShow, setDropdownShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("Website Source");
  const [customType, setCustomType] = useState("");
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("Description", e.target.Description.value);
    formData.append(
      "type",
      selectOption === "Other" ? customType : selectOption
    );
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/api/email", {
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      });

      const responseData = await response.json();

      console.log("Response:", responseData);

      if (responseData?.status === 200) {
        window.location.href = "https://buy.stripe.com/cN2cQA46Cg70bOo146";
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={formStyle}>
      <Container sx={{ maxWidth: "1478px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={titleStyle}>Product Form</Typography>
          <Typography sx={{ marginBottom: "128px" }} className="form_text">
            Fill out the form below and submit. We will work on <br /> your
            request and email your results.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1} alignItems="center">
            <Grid
              item
              md={6}
              sx={{
                overflow: "hidden",
                paddingBottom: { xs: "150px", lg: "210px" },
              }}
            >
              <Typography sx={{ marginBottom: "36px" }} className="form_text">
                Information on your order:
              </Typography>

              <TextareaAutosize
                aria-label="textarea"
                placeholder="Ex .. How many products, etc."
                minRows={9}
                name="Description"
                className="input"
                required
              />
              <Input
                className="input"
                sx={{ marginBottom: "25px", padding: "17px 25px" }}
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <Input
                className="input"
                sx={{ marginBottom: "25px", padding: "17px 25px" }}
                name="email"
                placeholder="Email "
                required
              />
              <Box sx={{ position: "relative" }}>
                <Box
                  onClick={() => setDropdownShow(!dropdownShow)}
                  className="input"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "24px 0px",
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
                      position: "absolute",
                      bottom: "-140px",
                      zIndex: "9999",
                      borderRadius: "8px",
                      border: "1px solid  #E5E7EB",
                      background: "#FFFFF6",
                      boxShadow:
                        "0px 4px 3px 0px rgba(0, 0, 0, 0.10), 0px 10px 8px 0px rgba(0, 0, 0, 0.04)",
                      padding: "8px",
                      width: "95%",
                      height: "auto",
                    }}
                  >
                    {options.map((data, index) => (
                      <Typography
                        onClick={() => {
                          setSelectOption(data);
                          setDropdownShow(false);
                        }}
                        sx={{
                          color: "#6B7A8F",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: "500",
                          lineHeight: "20px",
                          letterSpacing: "0.1px",
                          borderRadius: "6px",
                          cursor: "pointer",
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
              {selectOption === "Other" && (
                <Box>
                  <Input
                    sx={{ padding: "17px 25px", marginTop: "18px" }}
                    className="input"
                    name="customType"
                    placeholder="Type here.. "
                    value={customType}
                    onChange={(e) => setCustomType(e.target.value)}
                    required
                  />
                </Box>
              )}
            </Grid>
            <Grid
              item
              md={6}
              sx={{ paddingBottom: { xs: "80px", lg: "210px" } }}
            >
              <Typography sx={{ marginBottom: "25px" }} className="form_text">
                Upload a picture or provide a link <br /> to the product(s) you
                would like to <br /> source:
              </Typography>
              <Box sx={{ display: "none" }}>
                <input
                  type="file"
                  ref={fileRef}
                  onChange={handleFileChange}
                  required
                />
              </Box>
              <Box
                onClick={() => fileRef.current.click()}
                sx={{
                  maxWidth: "335px",
                  margin: "auto",
                  border: "2px dashed #E5E7EB",
                  borderRadius: "8px",
                  background: "white",
                  padding: "50px",
                  textAlign: "center",
                }}
              >
                <Image
                  sx={{ marginBottom: "20px" }}
                  src={
                    selectedFile ? URL.createObjectURL(selectedFile) : pictures
                  }
                  width={70}
                  height={45}
                  alt="icon"
                />

                {selectedFile ? (
                  <Typography>{selectedFile.name}</Typography>
                ) : (
                  <>
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
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center" }}>
            <Button
              disabled={loading}
              // onClick={() => setModalOpen(true)}
              type="submit"
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
              {loading ? "Submiting..." : "Submit"}
            </Button>
          </Box>
        </form>
      </Container>
      <ConfirmModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Box>
  );
};

export default ProductForm;
