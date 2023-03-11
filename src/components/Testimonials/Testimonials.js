import React, { useState } from "react";
import { Data } from "./Data";
import "./css/style.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm, ValidationError } from "@formspree/react";
import { CardContent } from "@material-ui/core";

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxHeight: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const labelStyle = {
    padding: "6px",
    fontSize: "16px",
    marginBottom: "4px",
  };
  const inputStyle = {
    padding: "8px",
    fontSize: "14px",
    marginBottom: "2px",
    textTransform: "capitalize",
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="testimonials" id="Testimonials">
        <p className="title">Testimonials</p>
        <div className="content-box">
          <div className="leftSide">
            <h2 className="nextHead">What people say...</h2>
            <p className="text">
              RK hall of residence is home to a strong community of students and
              alumni who have achieved great success in various fields. Their
              stories and experiences serve as an inspiration to future
              generations of RKites, encouraging them to strive for excellence
              and make the most of their opportunities at IIT Kharagpur.
            </p>
            <div className="pad-btn">
              <button className="addbutton accept-btn" onClick={handleOpen}>
                Add Testimonial
              </button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <CardContent style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}>
                      <form method="POST" onSubmit={handleSubmit} style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "24px",
                        }}>
                        <label htmlFor="name"                             style={labelStyle}>Full Name</label>
                        <input id="name" type="text" name="name" required                             style={inputStyle}/>
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />

                        <label htmlFor="batch"                             style={labelStyle}>Batch</label>
                        <input                             style={inputStyle} id="batch" type="number" name="batch" required />
                        <ValidationError
                          prefix="Batch"
                          field="batch"
                          errors={state.errors}
                        />

                        <label                             style={labelStyle} htmlFor="email">Email Address</label>
                        <input                             style={inputStyle} id="email" type="email" name="email" required />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />

                        <label                             style={labelStyle} htmlFor="message">Message</label>
                        <textarea                             style={inputStyle} id="message" name="message" required></textarea>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />

                        <button
                          className="addbutton"
                          type="submit"
                          disabled={state.submitting}
                          style={{marginTop:"10px"}}
                        >
                          Submit
                        </button>
                        <ValidationError errors={state.errors} />
                      </form>
                    </CardContent>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
          <div className="border"></div>
          <div className="rightSide">
            {Data.map((slide, index) => {
              return (
                <div
                  className={index === current ? "slide active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <h4 className="heading">{slide.text}</h4>
                  )}
                </div>
              );
            })}
            <div className="rightLower">
              <div className="person">
                {Data.map((slide, index) => {
                  return (
                    <div
                      className={index === current ? "slide active" : "slide"}
                      key={index}
                    >
                      {index === current && (
                        <h4 className="name">{slide.name}</h4>
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
                        <p className="company">{slide.position}</p>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="buttons">
                <img
                  className="back"
                  src={require("./Images/Back button.png")}
                  alt="back"
                  onClick={prevData}
                />
                <img
                  className="next"
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
