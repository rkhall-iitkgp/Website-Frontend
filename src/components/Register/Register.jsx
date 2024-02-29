import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import reg_img from "./register.svg";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as Yup from "yup";
// import "yup-phoneNo";

import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Typography, colors } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";

const Register = () => {
  // const [details, setDetails] = useState({
  //   email: "",
  //   password: "",
  // });
  // useEffect(() => {
  //   setDetails({ email, password });
  // }, [email, password]);

  // const submithandler = async (event) => {
  //   event.preventDefault(); // Prevent the default form submission behavior

  //   try {
  //     console.log(formik.values);
  //     // Make an HTTP POST request to the /register route
  //     const response = await axios(
  //       process.env.REACT_APP_BACKEND_URL + "/register",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json", // Specify the content type as JSON
  //         },
  //         body: JSON.stringify(formik.values), // Send the formik values as the request body
  //       }
  //     );
  //     // Check if the response is successful
  //     if (response.ok) {
  //       // If successful, you can handle the response as needed
  //       const data = await response.json();
  //       console.log("Registration successful:", data);
  //     } else {
  //       // If not successful, handle the error
  //       console.error("Registration failed:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error registering:", error);
  //   }
  // };
  const submithandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const { confirmPass, ...requestData } = formik.values;
    let d = requestData.dateOfBirth.split("-")
    requestData.dateOfBirth = `${d[2]}-${d[1]}-${d[0]}`
    console.log(requestData); 
    try {
      console.log("requstData", requestData);
      // Make an HTTP POST request to the /register route
      const response = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/register",
        requestData,
        {
          headers: {
            "Content-Type": "application/json", // Specify the content type as JSON
          },
        }
      );
      console.log("payload", response.config.data);
      // Check if the response is successful
      if (response.status === 200) {
        // If successful, you can handle the response as needed
        console.log("Registration successful:", response.data);
      } else {
        // If not successful, handle the error
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showConfPassword, setShowConfPassword] = React.useState(false);

  const handleClickShowConfPassword = () =>
    setShowConfPassword((show) => !show);

  const handleMouseDownConfPassword = (event) => {
    event.preventDefault();
  };

  const [regPageCount, setRegPageCount] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const phoneRegExp = /^[0-9]{10}$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      personalEmail: "",
      dateOfBirth: "",
      yearOfPassing: "",
      phoneNo: "",
      instiEmail: "",
      emergencyPhoneNo: "",
      rollNo: "",
      department: "",
      roomNo: "",
      password: "",
      confirmPass: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required!"),
      personalEmail: Yup.string()
        .email("Invalid email address")
        .required("Required!"),
      phoneNo: Yup.string()
        .matches(phoneRegExp, "Invalid Phone Number!")
        .required("Required!"),

      emergencyPhoneNo: Yup.string()
        .matches(phoneRegExp, "Invalid Phone Number!")
        .required("Required!"),

      dateOfBirth: Yup.string().required("Required!"),
      department: Yup.string().required("Required!"),
      rollNo: Yup.string().required("Required!"),
      yearOfPassing: Yup.string().required("Required!"),
      roomNo: Yup.string().required("Required!"),
      instiEmail: Yup.string()
        .email("Invalid email address")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Must be atleast 8 characters long!")
        .required("Required!"),
      confirmPass: Yup.string()
        .min(8, "Must be atleast 8 characters long")
        .oneOf([Yup.ref("password")], "Password does not match!")
        .required("Required!"),
    }),

    onSubmit: (values) => {
      console.log("the value is", values);
    },
  });

  function handleNext() {
    setRegPageCount(regPageCount + 1);
  }

  function handleBack() {
    setRegPageCount(regPageCount - 1);
  }

  const years = [
    {
      value: "2023",
      label: "2023",
    },
    {
      value: "2022",
      label: "2022",
    },
    {
      value: "2024",
      label: "2024",
    },
    {
      value: "2025",
      label: "2025",
    },
    {
      value: "2026",
      label: "2026",
    },
    {
      value: "2027",
      label: "2027",
    },
    {
      value: "2028",
      label: "2028",
    },
    {
      value: "2029",
      label: "2029",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 920px)");
  const divStyle = {
    // backgroundImage: "url('https://www.shutterstock.com/shutterstock/photos/2262760763/display_1500/stock-photo-three-dimensional-render-of-blue-wavy-object-2262760763.jpg')",
    backgroundImage: "url('/bg_img.png')",
    // backgroundImage: { Bg_img },
    backgroundSize: "cover",

    backgroundRepeat: "no-repeat",

    height: "100%",
  };

  return (
    <form
      className="register_form"
      action="/"
      method="post"
      onSubmit={submithandler}
    >
      <div style={divStyle}>
        <div
          id="register_main"
          style={{
            marginTop: "0rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              marginTop: "5rem",
              marginBottom: "1rem",
              width: "70vw",
              height: "90vh",
              boxShadow: "inherit",
            }}
          >
            <div className="register_main" style={{ display: "flex" }}>
              {!isMobile && (
                <div className="left">
                  <img
                    style={{ width: "35vw", height: "75vh" }}
                    className="left_image"
                    src={reg_img}
                    alt=""
                  />
                </div>
              )}

              <div
                style={
                  !isMobile
                    ? {
                        marginLeft: "2rem",
                        display: "flex",
                        flexDirection: "column",
                      }
                    : {
                        marginLeft: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }
                }
              >
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    fontFamily: "sans-serif",
                    marginTop: "1.5rem",
                  }}
                  className="right_heading"
                >
                  Register
                </h1>
                {regPageCount > 1 && (
                  <ArrowBackIosNewIcon
                    onClick={handleBack}
                    style={{ fontSize: "large", cursor: "pointer" }}
                  />
                )}

                {/* page 1 */}
                {regPageCount === 1 && (
                  <div className="regPage1">
                    <TextField
                      id="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Name"
                      variant="outlined"
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.name}
                      </p>
                    ) : null}
                    {errors.name && (
                      <div className="error">{errors.name[0]}</div>
                    )}

                    <TextField
                      id="rollNo"
                      value={formik.values.rollNo}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Institute Roll No."
                      variant="outlined"
                    />
                    {formik.errors.rollNo && formik.touched.rollNo ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.rollNo}
                      </p>
                    ) : null}
                    {errors.rollNo && (
                      <div className="error">{errors.rollNo[0]}</div>
                    )}
                    <TextField
                      id="phoneNo"
                      value={formik.values.phoneNo}
                      onBlur={formik.handleBlur}
                      type="number"
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Mobile No."
                      variant="outlined"
                    />

                    {formik.errors.phoneNo && formik.touched.phoneNo ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.phoneNo}
                      </p>
                    ) : null}
                    {errors.phoneNo && (
                      <div className="error">{errors.phoneNo[0]}</div>
                    )}
                    <TextField
                      id="yearOfPassing"
                      name="yearOfPassing"
                      select
                      onBlur={formik.handleBlur}
                      defaultValue="XXXX"
                      value={formik.values.yearOfPassing}
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Year of Passing"
                      variant="outlined"
                    >
                      {years.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    {formik.errors.yearOfPassing &&
                    formik.touched.yearOfPassing ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.yearOfPassing}
                      </p>
                    ) : null}
                    {errors.yearOfPassing && (
                      <div className="error">{errors.yearOfPassing[0]}</div>
                    )}
                  </div>
                )}

                {/* page 2 */}
                {regPageCount === 2 && (
                  <div className="regPage2">
                    {" "}
                    <TextField
                      id="personalEmail"
                      name="personalEmail"
                      type="email"
                      value={formik.values.personalEmail}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Email Id"
                      variant="outlined"
                    />
                    {formik.errors.personalEmail &&
                    formik.touched.personalEmail ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.personalEmail}
                      </p>
                    ) : null}
                    {errors.personalEmail && (
                      <div className="error">{errors.personalEmail[0]}</div>
                    )}
                    <TextField
                      id="instiEmail"
                      onBlur={formik.handleBlur}
                      type="email"
                      value={formik.values.instiEmail}
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Institute Email Id"
                      variant="outlined"
                    />
                    {formik.errors.instiEmail && formik.touched.instiEmail ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.instiEmail}
                      </p>
                    ) : null}
                    {errors.instiEmail && (
                      <div className="error">{errors.instiEmail[0]}</div>
                    )}
                    <TextField
                      id="dateOfBirth"
                      onBlur={formik.handleBlur}
                      value={formik.values.dateOfBirth}
                      defaultValue=""
                      type="date"
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Date of Birth"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        style: { color: isActive ? "black" : "#666666" },
                        onFocus: () => setIsActive(true),
                        onBlur: () => setIsActive(false),
                      }}
                    />
                    {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.dateOfBirth}
                      </p>
                    ) : null}
                    {errors.dateOfBirth && (
                      <div className="error">{errors.dateOfBirth[0]}</div>
                    )}
                    <TextField
                      id="department"
                      onBlur={formik.handleBlur}
                      value={formik.values.department}
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Department"
                      variant="outlined"
                    ></TextField>
                    {formik.errors.department && formik.touched.department ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.department}
                      </p>
                    ) : null}
                    {errors.department && (
                      <div className="error">{errors.department[0]}</div>
                    )}
                  </div>
                )}

                {/* page 3 */}
                {regPageCount === 3 && (
                  <div className="regPage3">
                    <TextField
                      id="emergencyPhoneNo"
                      type="number"
                      value={formik.values.emergencyPhoneNo}
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Emergency Mobile No."
                      variant="outlined"
                    />

                    {formik.errors.emergencyPhoneNo &&
                    formik.touched.emergencyPhoneNo ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.emergencyPhoneNo}
                      </p>
                    ) : null}
                    {errors.emergencyPhoneNo && (
                      <div className="error">{errors.emergencyPhoneNo[0]}</div>
                    )}

                    <TextField
                      id="roomNo"
                      onBlur={formik.handleBlur}
                      value={formik.values.roomNo}
                      onChange={formik.handleChange}
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      label="Room No."
                      variant="outlined"
                    />

                    {formik.errors.roomNo && formik.touched.roomNo ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.roomNo}
                      </p>
                    ) : null}
                    {errors.roomNo && (
                      <div className="error">{errors.roomNo[0]}</div>
                    )}
                    <FormControl
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        onBlur={formik.handleBlur}
                        required
                        value={formik.values.password}
                        onChange={(e) => {
                          formik.handleChange(e);
                        }}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                    {formik.errors.password && formik.touched.password ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.password}
                      </p>
                    ) : null}
                    {errors.password && (
                      <div className="error">{errors.password[0]}</div>
                    )}

                    <FormControl
                      sx={{ marginTop: "1rem", width: "28vmax" }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        required
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPass}
                        id="confirmPass"
                        onChange={(e) => {
                          formik.handleChange(e);
                        }}
                        type={showConfPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfPassword}
                              onMouseDown={handleMouseDownConfPassword}
                              edge="end"
                              size="large"
                            >
                              {showConfPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                    {formik.errors.confirmPass && formik.touched.confirmPass ? (
                      <p
                        style={{
                          color: "red",
                          fontSize: "11px",
                          textAlign: "right",
                          marginTop: "0px",
                          marginRight: "13%",
                          position: "absolute",
                          width: "28%",
                        }}
                      >
                        {formik.errors.confirmPass}
                      </p>
                    ) : null}
                    {errors.confirmPass && (
                      <div className="error">{errors.confirmPass[0]}</div>
                    )}
                  </div>
                )}

                {/* <TextField value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Email" size='small' variant="filled" /> */}
                {/* <TextField value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginTop: '1.5rem', width: '28vmax' }} label="Password" variant="filled" /> */}
                {regPageCount <= 2 && (
                  <Button
                    onClick={handleNext}
                    sx={{
                      marginTop: "1.5rem",
                      background: "black",
                      padding: "0.8rem",
                      width: "28vmax",
                      "&:hover": { background: "gray" },
                    }}
                    variant="contained"
                  >
                    Next
                  </Button>
                )}
                {regPageCount === 3 && (
                  <Button
                    type="submit"
                    sx={{
                      marginTop: "1.5rem",
                      background: "black",
                      padding: "0.8rem",
                      width: "28vmax",
                      "&:hover": { background: "gray" },
                    }}
                    variant="contained"
                  >
                    Register
                  </Button>
                )}

                {/* <FormControlLabel sx={{ marginTop: '1.5rem' }} control={<Checkbox />} label="Remember Me" /> */}

                {/* <Button type='submit' sx={{ marginTop: '1.5rem', background: 'black', width: '28vmax', '&:hover': { background: 'gray' } }} variant='contained'>Login</Button> */}

                <Typography sx={{ marginTop: "1.5rem" }}>
                  Already have an account ?
                  <a href="/login" style={{ color: "blue" }}>
                    {" "}
                    Login here
                  </a>
                </Typography>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </form>
  );
};

export default Register;
