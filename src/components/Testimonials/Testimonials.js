import React, { useState } from "react";
import { Data } from "./Data";
import styles from "./css/Testimonials.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { Box, Dialog, Fade } from "@mui/material";
import Image from "./Images/header.png";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = Data.length;
  const [open, setOpen] = useState(false);

  const prevData = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextData = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const [state, handleSubmit] = useForm("xknaolej");
  if (state.succeeded) {
    return window.location.reload();
  }

  const labelStyle = {
    padding: "2px",
    fontSize: "16px",
    marginBottom: "4px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "8px",
    fontSize: "14px",
    marginBottom: "12px",
    borderRadius: "20px",
    width: "calc(100% - 32px)",
    border: "1px solid #ccc",
  };

  const submitStyle = {
    fontFamily: 'Sen',
    fontStyle: 'normal',
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    cursor: "pointer",
    border: "none",
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id="Testimonials">
      <div className={styles.testimonials}>
        <p className={styles.title}>Testimonials</p>
        <div
          className={styles["content-box"]}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div className={styles["leftSide"]} style={{ flex: "1 1 45%" }}>
            <h2 className={styles["nextHead"]}>What people say...</h2>
            <p className={styles["text"]}>
              RK hall of residence is home to a strong community of students and
              alumni who have achieved great success in various fields. Their
              stories and experiences serve as an inspiration to future
              generations of RKites, encouraging them to strive for excellence
              and make the most of their opportunities at IIT Kharagpur.
            </p>
            <div className={styles["pad-btn"]}>
              <button
                className={`${styles["addbutton"]} ${styles["accept-btn"]}`}
                onClick={handleOpen}
              >
                Add Testimonial
              </button>
              <Dialog
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                fullWidth
                maxWidth="md"
                PaperProps={{
                  style: { height: "90vh", maxHeight: "600px" },
                }}
              >
                <Fade in={open}>
                  <Box
  sx={{
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    height: "100%",
    maxHeight: "100vh", // Ensures the modal fits within the viewport
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "white",
    "@media (max-width: 768px)": { // Adjust for smaller screens
      flexDirection: "column",
    },
  }}
>
  {/* Left side - Image */}
  <Box
    sx={{
      flex: 1,
      overflow: "hidden",
      "@media (max-width: 768px)": { // Hide image on small screens
        display: "none",
      },
    }}
  >
    <img
      src={Image}
      alt="Header"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "bottom", // Focus on the bottom of the image
      }}
    />
  </Box>

  {/* Right side - Form */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "16px", // Adjusted padding
      boxSizing: "border-box",
      height: "100%",
      overflowY: "auto", // Allow scroll if content exceeds modal height
      "@media (max-width: 768px)": { // Responsive padding
        padding: "12px",
      },
    }}
  >
    <form
      method="POST"
      onSubmit={handleSubmit}
      style={{
        fontFamily: 'Sen',
    fontStyle: 'normal',
        display: "flex",
        flexDirection: "column",
        gap: "12px", // Responsive spacing
      }}
    >
      <h2>Testimonial</h2>
      <label htmlFor="name" style={labelStyle}>
        Full Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        style={inputStyle}
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <label htmlFor="batch" style={labelStyle}>
        Batch
      </label>
      <input
        id="batch"
        type="number"
        name="batch"
        required
        style={inputStyle}
      />
      <ValidationError
        prefix="Batch"
        field="batch"
        errors={state.errors}
      />

      <label htmlFor="email" style={labelStyle}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        style={inputStyle}
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message" style={labelStyle}>
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        style={{
          ...inputStyle,
          resize: "none",
          height: "100px", // Adjusted height
        }}
      ></textarea>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button
        type="submit"
        disabled={state.submitting}
        style={submitStyle}
      >
        Submit
      </button>
    </form>
  </Box>
</Box>

                </Fade>
              </Dialog>
            </div>
          </div>
          <div
            className={styles["rightSide"]}
            style={{ flex: "1 1 45%", textAlign: "center" }}
          >
            {Data.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <h4 className={styles["heading"]}>{slide.text}</h4>
                  )}
                </div>
              );
            })}
            <div className={styles["rightLower"]}>
              <div className={styles["person"]}>
                {Data.map((slide, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}
                    >
                      {index === current && (
                        <h4 className={styles["name"]}>{slide.name}</h4>
                      )}
                    </div>
                  );
                })}
                {Data.map((slide, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}
                    >
                      {index === current && (
                        <p className={styles["company"]}>{slide.position}</p>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className={styles["buttons"]}>
                <img
                  className={styles["back"]}
                  src={require("./Images/Back button.png")}
                  alt="back"
                  onClick={prevData}
                />
                <img
                  className={styles["next"]}
                  src={require("./Images/Next Button.png")}
                  alt="next"
                  onClick={nextData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
