import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Login_image from "./Computer login-bro.svg";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Link, Typography, colors } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Divider, Box } from "@mui/material";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const PasswordLogin = ({ setPage, email, setEmail, backpage, setBackPage }) => {
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    setDetails({ email, password });
  }, [email, password]);

  const formik = useFormik({
    initialValues: {
      email: email || "",
      password: password || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleLogin = async () => {
    console.log("details", details);
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "login/password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
      const data = await response.json();
      const token = data.jwt;
      console.log("Login successful! Token:", token, typeof token);
      console.log(data);
      localStorage.setItem("Token", token);
    } catch (error) {
      toast(error);
      console.error("Login failed:", error);
    }
  };

  const isMobile = useMediaQuery("(max-width: 920px)");
  const divStyle = !isMobile
    ? {
        backgroundImage: "url('/bg_img.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }
    : {};
  return (
    <>
      <ToastContainer />
      <form className="login_form">
        <div style={divStyle}>
          <div
            id="login_main"
            style={{
              marginTop: "0rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={
                !isMobile
                  ? {
                      marginTop: "7rem",
                      width: "70vw",
                      height: "75vh",
                      boxShadow: "inherit",
                    }
                  : { marginTop: "4rem", width: "100vw", height: "100vh" }
              }
            >
              <div
                className="login_main"
                style={
                  !isMobile
                    ? { display: "flex" }
                    : { display: "flex", flexDirection: "column" }
                }
              >
                <div className="left">
                  <img
                    style={
                      !isMobile
                        ? { width: "35vw", height: "75vh" }
                        : { width: "100vw", height: "35vh" }
                    }
                    className="left_image"
                    src={Login_image}
                    alt=""
                  />
                </div>

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
                    style={
                      !isMobile
                        ? {
                            fontSize: "3rem",
                            fontWeight: "800",
                            fontFamily: "sans-serif",
                            marginTop: "2.0rem",
                          }
                        : {
                            fontSize: "2rem",
                            fontWeight: "750",
                            fontFamily: "sans-serif",
                            marginTop: "0.5rem",
                          }
                    }
                    className="right_heading"
                  >
                    Login
                  </h1>

                  {
                    <ArrowBackIosNewIcon
                      style={{ fontSize: "large", cursor: "pointer" }}
                      onClick={() => {
                        setPage(backpage);
                        setBackPage("plogin");
                      }}
                    />
                  }

                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setEmail(e.target.value); // Update the email state
                    }}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{ marginTop: "1rem", width: "28vmax" }}
                    size="small"
                    variant="filled"
                  />

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setPassword(e.target.value); // Update the email state
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    sx={{ marginTop: "1.5rem", width: "28vmax" }}
                    label="Password"
                    variant="filled"
                  />

                  {/* <Link variant="p" sx={{ marginTop: '1rem' }}>Forget Password </Link> */}
                  <Link
                    onClick={() => {
                      setPage("flogin");
                      setBackPage("plogin");
                    }}
                    sx={{
                      marginTop: "1.5rem",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    Forget Password
                  </Link>

                  <FormControlLabel
                    sx={{ marginTop: "0.5rem" }}
                    control={<Checkbox />}
                    label="Remember Me"
                  />

                  <Button
                    onClick={handleLogin}
                    sx={{
                      marginTop: "0.5rem",
                      background: "black",
                      padding: "0.8rem",
                      width: "28vmax",
                      "&:hover": { background: "gray" },
                    }}
                    variant="contained"
                  >
                    Login
                  </Button>

                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    style={{ marginTop: "0.8rem" }}
                  >
                    <Divider style={{ width: "100%" }}>
                      <Typography variant="p">or</Typography>
                    </Divider>
                  </Box>

                  <Button
                    type="submit"
                    sx={{
                      marginTop: "1rem",
                      background: "#FBF6EA",
                      color: "black",
                      width: "28vmax",
                      "&:hover": { background: "#FFD050" },
                    }}
                    onClick={() => {
                      setPage("ologin");
                      setBackPage("plogin");
                    }}
                    variant="contained"
                  >
                    Login With OTP
                  </Button>

                  <Typography sx={{ marginTop: "1.5rem" }}>
                    Don't have an account?
                    <a
                      href="/register"
                      style={{ color: "blue", marginLeft: "0.5rem" }}
                    >
                      Register here
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

export default PasswordLogin;
