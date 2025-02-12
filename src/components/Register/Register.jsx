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
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const navigate = useNavigate()
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
    
    event.preventDefault(); // Prevent default form submission
  
    // Remove confirm password field before sending
    const requestData = {
      name: formik.values.name,
      rollNumber: formik.values.rollNo,
      phoneNumber: String(formik.values.phoneNo),
      yearOfPassing: parseInt(formik.values.yearOfPassing), 
      emailId: formik.values.personalEmail,
      instituteEmailId: formik.values.instiEmail,
      dateOfBirth: formik.values.dateOfBirth,
      emergencyMobileNumber: String(formik.values.emergencyPhoneNo),
      roomNumber: formik.values.roomNo,
      password: formik.values.password,
    };
  
    console.log("Final requestData:", requestData);
  
    try {
      // Ensure backend URL is correctly set
      console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
  
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        requestData,
        { headers: { "Content-Type": "application/json" } }
      );
  
      if (response.status === 201) {
        console.log("Registration successful:", response.data);
        await toast.success("Registration Successful");
        navigate("/verify-email", { state: { email : formik.values.personalEmail  } });

      } else {
        console.error("Registration failed:", response.statusText);
        toast.error("Registration Failed!");
      }
    } catch (error) {
      console.error("Error registering:", error);
      toast.error(error.response?.data?.message || "Network Error! Try again.");
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
  const rollNoRegExp = /^(1[0-9]|2[0-9])(AE|AG|AR|BT|CE|CH|CS|CY|EE|EC|EX|GG|HS|IM|MA|ME|MI|MT|NA|PH)[0-9]{5}$/;

const roomNoRegExp = /^[A-E]-[1-4][0-9]{2}$/;
const instiEmailRegExp = /^[a-zA-Z0-9._%+-]+@kgpian\.iitkgp\.ac.in$/;

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
    rollNo: Yup.string()
      .matches(rollNoRegExp, "Invalid Roll Number! Format: 23AE30023")
      .required("Required!"),
    yearOfPassing: Yup.string().required("Required!"),
    roomNo: Yup.string()
      .matches(roomNoRegExp, "Invalid Room Number! Format: [A-E]-[100-499]")
      .required("Required!"),
    instiEmail: Yup.string()
      .matches(instiEmailRegExp, "Invalid Institute Email! Must contain '@kgpian.iitkgp.ac.in'")
      .required("Required!"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters long!")
      .required("Required!"),
    confirmPass: Yup.string()
      .min(8, "Must be at least 8 characters long")
      .oneOf([Yup.ref("password")], "Passwords do not match!")
      .required("Required!"),
  }),

  onSubmit: (values) => {
    console.log("The values are:", values);
  },
});

  function handleNext() {
    if((formik.errors.name && formik.touched || formik.errors.rollNo && formik.touched || formik.errors.phone && formik.touched || formik.errors.yearOfPass && formik.touched)&&regPageCount===1){
      // setRegPageCount(regPageCount);
      alert("Please fill out the required fields!");
    }
     else if((formik.errors.email && formik.touched || formik.errors.instiEmail && formik.touched || formik.errors.dob && formik.touched || formik.errors.depart && formik.touched)&&regPageCount===2){
      // setRegPageCount(regPageCount);
      alert("Please fill out the required fields!");
    }
     else if((formik.errors.emergencyPhone && formik.touched || formik.errors.roomNo && formik.touched || formik.errors.password && formik.touched || formik.errors.confirmPass && formik.touched)&&regPageCount===3){
      // setRegPageCount(regPageCount);
      alert("Please fill out the required fields!");
    }
    else{setRegPageCount(regPageCount + 1);}
    

  }
  const pageFields = {
    1: ['name', 'rollNo', 'phoneNo', 'yearOfPassing'],
    2: ['personalEmail', 'instiEmail', 'dateOfBirth', 'department'],
    3: ['emergencyPhoneNo', 'roomNo', 'password', 'confirmPass'],
  };
  const totalSteps = Object.keys(pageFields).length;
  const progressPercentage = (regPageCount / totalSteps) * 100;
  const progressBarStyle = {
    height: '10px',
    width: `${progressPercentage}%`,
    backgroundColor: '#ffd050',
    transition: 'width 0.3s ease-in-out',
  };

  const containerStyle = {
    width: '85%',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    overflow: 'hidden',
    margin: '20px 0',
  };
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
    <>
    
      <ToastContainer />
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
        <div style={containerStyle}>
        <div style={progressBarStyle}></div>
      </div>
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
                        error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                      />
                      

                      <TextField
                        id="rollNo"
                        value={formik.values.rollNo}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        sx={{ marginTop: "1rem", width: "28vmax" }}
                        label="Institute Roll No."
                        variant="outlined"
                        error={formik.touched.rollNo && Boolean(formik.errors.rollNo)}
                  helperText={formik.touched.rollNo && formik.errors.rollNo}
                      />
                      
                      <TextField
                        id="phoneNo"
                        value={formik.values.phoneNo}
                        onBlur={formik.handleBlur}
                        type="number"
                        onChange={formik.handleChange}
                        sx={{ marginTop: "1rem", width: "28vmax" }}
                        label="Mobile No."
                        variant="outlined"
                        error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                  helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                      />

                      
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
                        error={formik.touched.yearOfPassing && Boolean(formik.errors.yearOfPassing)}
                  helperText={formik.touched.yearOfPassing && formik.errors.yearOfPassing}
                      >
                        {years.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      </div>)}
                      
                    

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
                        error={formik.touched.personalEmail && Boolean(formik.errors.personalEmail)}
                  helperText={formik.touched.personalEmail && formik.errors.personalEmail}
                      />
                      
                      <TextField
                        id="instiEmail"
                        onBlur={formik.handleBlur}
                        type="email"
                        value={formik.values.instiEmail}
                        onChange={formik.handleChange}
                        sx={{ marginTop: "1rem", width: "28vmax" }}
                        label="Institute Email Id"
                        variant="outlined"
                        error={formik.touched.instiEmail && Boolean(formik.errors.instiEmail)}
                  helperText={formik.touched.instiEmail && formik.errors.instiEmail}
                      />
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
                        error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
                  helperText={formik.touched.dateOfBirth && formik.errors.dateOfBirth}
                      />
                      
                      <TextField
                        id="department"
                        onBlur={formik.handleBlur}
                        value={formik.values.department}
                        onChange={formik.handleChange}
                        sx={{ marginTop: "1rem", width: "28vmax" }}
                        label="Department"
                        variant="outlined"
                        error={formik.touched.department && Boolean(formik.errors.department)}
                  helperText={formik.touched.department && formik.errors.department}
                      ></TextField>
                      </div>)}
                      

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
                        error={formik.touched.emergencyPhoneNo && Boolean(formik.errors.emergencyPhoneNo)}
                  helperText={formik.touched.emergencyPhoneNo && formik.errors.emergencyPhoneNo}
                      />

                      

                      <TextField
                        id="roomNo"
                        onBlur={formik.handleBlur}
                        value={formik.values.roomNo}
                        onChange={formik.handleChange}
                        sx={{ marginTop: "1rem", width: "28vmax" }}
                        label="Room No."
                        variant="outlined"
                        error={formik.touched.roomNo && Boolean(formik.errors.roomNo)}
                  helperText={formik.touched.roomNo && formik.errors.roomNo}
                      />

                      
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
                      {formik.errors.confirmPass &&
                      formik.touched.confirmPass ? (
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
                      onClick={async ()=>{
                        const fieldsToValidate = pageFields[regPageCount];
                        await formik.validateForm(); // Validate all fields
                        const errors = formik.errors;
                        
                        // Check for errors in the current page's fields
                        const hasErrors = fieldsToValidate.some((field) => errors[field]);
                        const hasEmptyFields = fieldsToValidate.some(
                          (field) => formik.values[field] === ''
                        );

                        if (!hasErrors && !hasEmptyFields) {
                          handleNext(); // Proceed to the next page
                        } else {
                          fieldsToValidate.forEach((field) => {
                            formik.setFieldTouched(field, true, true); // Mark fields as touched to show errors
                          });
                        }
                        }}
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
                      onClick={async ()=>{
                        const fieldsToValidate = pageFields[regPageCount];
                        await formik.validateForm(); // Validate all fields
                        const errors = formik.errors;
                        
                        // Check for errors in the current page's fields
                        const hasErrors = fieldsToValidate.some((field) => errors[field]);
                        const hasEmptyFields = fieldsToValidate.some(
                          (field) => formik.values[field] === ''
                        );

                        if (!hasErrors && !hasEmptyFields) {
                          formik.handleSubmit();
                        } else {
                          fieldsToValidate.forEach((field) => {
                            formik.setFieldTouched(field, true, true); // Mark fields as touched to show errors
                          });
                        }
                        }}
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
    </>
  );
};

export default Register;
